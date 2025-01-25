// types/next-auth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

interface IUser {
  _id: string;
  email: string;
  name: string;
  phone?: string;
  role:
    | "user"
    | "admin"
    | "manager"
    | "afiliado"
    | "cliente"
    | "instagram"
    | "sucursal";
  createdAt: Date;
  updatedAt: Date;
  active: boolean;
  loginAttempts: number;
  password?: string;
  stripe_id?: string;
  verificationToken?: string;
  avatar?: {
    url: string;
  };
  accessToken?: string;
}

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      _id: string;
      accessToken: string;
      createdAt: Date;
      role: IUser["role"];
      phone?: string;
      stripe_id?: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser, Omit<IUser, "email" | "name"> {}
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    _id: string;
    accessToken: string;
    user: IUser;
  }
}
