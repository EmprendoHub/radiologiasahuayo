import { PayloadAction } from "@reduxjs/toolkit";
import jwt from "jsonwebtoken";
import { decode } from "next-auth/jwt";

// signing jwt
export function signJwtToken(payload: PayloadAction, options = {}) {
  const secret = process.env.NEXTAUTH_SECRET!;
  const token = jwt.sign(payload, secret, options);
  return token;
}

// verifying jwt
export async function verifyJwtToken(sessionToken: string) {
  try {
    const decoded = await decode({
      token: sessionToken,
      secret: process.env.NEXTAUTH_SECRET!,
    });

    return decoded;
  } catch (error) {
    console.error(error);
    return null;
  }
}
