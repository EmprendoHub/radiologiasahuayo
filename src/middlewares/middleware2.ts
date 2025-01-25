import { NextResponse } from "next/server";
import { i18n } from "@/i18n.config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { MiddlewareFactory } from "../types/middleware";

interface I18nConfig {
  defaultLocale: string;
  locales: readonly string[];
}

function getLocale(request: Request): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales = (i18n as I18nConfig).locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  return matchLocale(languages, Array.from(locales), i18n.defaultLocale);
}

export const withI18nMiddleware: MiddlewareFactory = (middleware) => {
  return async (request, event, response) => {
    const pathname = request.nextUrl.pathname;
    const searchParams = request.nextUrl.search;

    const pathnameIsMissingLocale = (i18n as I18nConfig).locales.every(
      (locale) =>
        !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
      const locale = getLocale(request);
      return NextResponse.redirect(
        new URL(
          `/${locale}${
            pathname.startsWith("/") ? "" : "/"
          }${pathname}${searchParams}`,
          request.url
        )
      );
    }

    return middleware(request, event, response);
  };
};
