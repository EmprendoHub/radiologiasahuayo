import { NextRequest, NextResponse, NextFetchEvent } from "next/server";
import { JWT } from "next-auth/jwt";

export type MiddlewareFactory = (
  middleware: MiddlewareHandler
) => MiddlewareHandler;
export type MiddlewareHandler = (
  request: NextRequest,
  event: NextFetchEvent,
  response: NextResponse
) => Promise<NextResponse> | NextResponse;

export interface NextAuthData {
  token: JWT | null;
}

export interface ExtendedNextRequest extends NextRequest {
  nextauth?: NextAuthData;
}
