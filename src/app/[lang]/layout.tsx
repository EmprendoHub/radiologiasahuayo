import type { Metadata } from "next";
import "./globals.css";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import Header from "@/components/layout/Header";
import CustomSessionProvider from "./SessionProvider";
// import ThemeToggleV from "@/components/layout/ThemeToggleV";
// import ThemeToggleH from "@/components/layout/ThemeToggleH";
import WhatsAppBtn from "@/components/layout/WhatsAppBtn";
import BackToTop from "@/components/layout/BackToTop";
import Footer from "@/components/layout/footer/Footer";
import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "../../fonts/Swis721_BT_Bold.ttf",
  display: "swap",
  variable: "--font-square-bold",
});

console.log("myFont", myFont);

export const metadata: Metadata = {
  title: "Radiología Sahuayo",
  description: "Mejor calidad por el mejor precio",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const session = await getServerSession(options);
  const isLoggedIn = Boolean(session?.user);
  const lang = (await params).lang;
  return (
    <html lang={`${lang}`}>
      <body
        className={`body-class relative overflow-x-hidden h-full dark:bg-dark bg-white dark:text-dark ${myFont.variable}`}
      >
        <CustomSessionProvider>
          <Header lang={lang} />

          {children}
          <Footer lang={lang} />
          <BackToTop />
          {!isLoggedIn && <WhatsAppBtn lang={lang} />}
          {/* {isLoggedIn && session?.user.role === "manager" && (
            <div className="fixed z-50 right-0 top-1/2">
              <ThemeToggleH />
            </div>
          )} */}
          {/* <ThemeToggleV /> */}
        </CustomSessionProvider>
      </body>
    </html>
  );
}
