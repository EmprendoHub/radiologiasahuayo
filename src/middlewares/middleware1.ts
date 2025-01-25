import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { MiddlewareFactory, ExtendedNextRequest } from "../types/middleware";

const protectedPaths = ["/carrito/envio"] as const;

export const withAuthMiddleware: MiddlewareFactory = (middleware) => {
  return async (request, event, response) => {
    const extendedRequest = request as ExtendedNextRequest;
    const token = await getToken({ req: request });

    try {
      extendedRequest.nextauth = {
        token: token,
      };

      const pathname = request.nextUrl.pathname;
      let signInUrl: URL;

      if (protectedPaths.some((path) => pathname.includes(path))) {
        if (!token) {
          signInUrl = new URL("/api/auth/signin", request.url);
          signInUrl.searchParams.set("callbackUrl", pathname);
          return NextResponse.redirect(signInUrl);
        }
      }

      type UserRole =
        | "manager"
        | "afiliado"
        | "cliente"
        | "instagram"
        | "sucursal";

      if (pathname.includes("admin")) {
        if (!token) {
          signInUrl = new URL("/api/auth/signin", request.url);
          signInUrl.searchParams.set("callbackUrl", pathname);
          return NextResponse.redirect(signInUrl);
        }

        if ((token.user as { role: UserRole })?.role !== "manager") {
          signInUrl = new URL("/no-autorizado", request.url);
          return NextResponse.redirect(signInUrl);
        }
      }

      if (pathname.includes("perfil")) {
        if (!token) {
          signInUrl = new URL("/api/auth/signin", request.url);
          signInUrl.searchParams.set("callbackUrl", pathname);
          return NextResponse.redirect(signInUrl);
        }

        if ((token.user as { role: UserRole })?.role !== "cliente") {
          signInUrl = new URL("/no-autorizado", request.url);
          return NextResponse.redirect(signInUrl);
        }
      }

      if (token?.user) {
        const userRole = (token.user as { role: UserRole }).role;

        if (userRole === "manager" && !pathname.includes("admin")) {
          signInUrl = new URL("/admin", request.url);
          return NextResponse.redirect(signInUrl);
        }
      }
    } catch (error) {
      console.error("Middleware error:", error);
    }

    return middleware(extendedRequest, event, response);
  };
};
