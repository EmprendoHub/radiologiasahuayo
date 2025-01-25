import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import CustomSessionProvider from "./SessionProvider";
import ThemeToggleV from "@/components/layout/ThemeToggleV";
import BackToTop from "@/components/layout/BackToTop";
import Footer from "@/components/layout/footer/Footer";

export const metadata: Metadata = {
  title: "Radiología Sahuayo",
  description: "Mejor calidad por el mejor precio",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const { lang } = params;
  return (
    <html lang={`${lang}`}>
      <body
        className={`body-class relative overflow-x-hidden h-full dark:bg-dark bg-white dark:text-dark`}
      >
        <CustomSessionProvider>
          <Header lang={lang} />

          {children}
          <Footer lang={lang} />
          <BackToTop />

          <ThemeToggleV />
        </CustomSessionProvider>
      </body>
    </html>
  );
}
