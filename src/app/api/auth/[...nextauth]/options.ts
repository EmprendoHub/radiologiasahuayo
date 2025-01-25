import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import bcrypt from "bcrypt";
import { signJwtToken } from "@/lib/jwt";
import dbConnect from "@/lib/db";
import crypto from "crypto";
import axios from "axios";
import { IUser } from "@/types/next-auth";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter your user name",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
        recaptcha: { type: "text" },
        honeypot: { type: "text" },
        cookie: { type: "text" },
      },
      async authorize(credentials) {
        if (
          !credentials?.email ||
          !credentials?.password ||
          !credentials?.recaptcha ||
          !credentials?.cookie
        ) {
          throw new Error("Missing required credentials");
        }

        const { email, password, recaptcha, honeypot, cookie } = credentials;

        if (honeypot) {
          throw new Error("no bots thank you");
        }
        if (!cookie) {
          throw new Error("You are not authorized no no no");
        }

        const secretKey = process.env.RECAPTCHA_SECRET_KEY;
        const formData = `secret=${secretKey}&response=${recaptcha}`;

        try {
          const response = await axios.post<{
            success: boolean;
            score: number;
          }>("https://www.google.com/recaptcha/api/siteverify", formData, {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          });

          if (response.data?.success && response.data?.score > 0.5) {
            await dbConnect();
            const user = await User.findOne({ email }).select("+password");

            if (!user) {
              console.log("no user error");
              throw new Error("hubo un error al iniciar session");
            }

            const comparePass = await bcrypt.compare(password, user.password);

            if (!comparePass) {
              user.loginAttempts += 1;
              await user.save();

              if (user.loginAttempts >= 3) {
                throw new Error("excediste el limite de intentos");
              }
              throw new Error("hubo un error al iniciar session");
            }

            if (user.active === false) {
              throw new Error("verify your email");
            }

            user.loginAttempts = 0;
            await user.save();

            const { password: _, ...currentUser } = user._doc;
            _.accessToken = "";
            const accessToken = signJwtToken(currentUser, { expiresIn: "6d" });

            return {
              ...currentUser,
              accessToken,
            };
          }

          return null;
        } catch (error) {
          console.log("recaptcha error:", error);
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "credentials") {
        return true;
      }

      if (account?.provider === "google") {
        await dbConnect();
        try {
          const existingUser = await User.findOne({
            email: user.email,
          }).select("+password");

          if (!existingUser) {
            const verificationToken = crypto.randomBytes(64).toString("hex");
            const newUser = new User({
              email: user.email,
              name: user.name,
              verificationToken,
              active: true,
              loginAttempts: 0,
              role: "user",
            });

            await newUser.save();
          }
          return true;
        } catch (error) {
          console.log("error saving google user", error);
          return false;
        }
      }
      return false;
    },
    async jwt({ token, user, account }) {
      if (account?.provider === "google" && user) {
        const existingUser = await User.findOne({
          email: user.email,
        }).select("+password");

        if (!existingUser) {
          throw new Error("User not found");
        }

        const currentUser: IUser = {
          avatar: { url: user.image ?? "" },
          _id: existingUser._id,
          name: user.name ?? "",
          email: user.email ?? "",
          phone: user.phone,
          role: existingUser.role,
          createdAt: existingUser.createdAt,
          updatedAt: existingUser.updatedAt,
          active: existingUser.active,
          loginAttempts: existingUser.loginAttempts,
          stripe_id: existingUser.stripe_id,
          accessToken: account.access_token,
        };

        token.accessToken = account.access_token ?? "";
        token._id = currentUser._id;
        token.user = currentUser;
      } else if (user) {
        token.accessToken = user.accessToken ?? "";
        token._id = user._id;
        const updatedUser = await User.findById(token._id).select("+password");
        if (updatedUser) {
          token.user = updatedUser;
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user._id = token._id;
        session.user.accessToken = token.accessToken;
        session.user.createdAt = token.user.createdAt;
        session.user.role = token.user.role;
        session.user.phone = token.user.phone;
        session.user.stripe_id = token.user.stripe_id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/iniciar",
    error: "/error",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
