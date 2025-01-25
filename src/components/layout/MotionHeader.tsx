"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import MobileMenu from "./MobileMenu";
import { useSession } from "next-auth/react";
import Link from "next/link";
// import styles from "./_navbar.module.css";
import WhiteLogoH from "./WhiteLogo";
// import TopBar from "./TopBar";

const MotionHeader = ({
  localeHeader,
  lang,
}: {
  localeHeader: { menu: { title: string; url: string }[] };
  lang: string;
}) => {
  const [hidden, setHidden] = useState(true);
  const [transparency, setTransparency] = useState(false);
  const { scrollY } = useScroll();
  const { data: session } = useSession();
  //   const user = session?.user;
  const isLoggedIn = Boolean(session?.user);

  const containerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 150) {
      setHidden(false);
    } else {
      setHidden(true);
    }
    if (latest < 150) {
      setTransparency(false);
    } else {
      setTransparency(true);
    }
  });

  return (
    <>
      {!isLoggedIn ? (
        <motion.nav
          variants={{ hidden: { y: 0 }, visible: { y: "-110%" } }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className={`print:hidden flex flex-row items-center justify-between  header-class text-white  text-xl fixed top-0 z-[9999]  w-full mx-auto py-3 pl-4 h-[80px] ${
            !transparency ? "" : "bg-black bg-opacity-50"
          }`}
        >
          <Link aria-label="light-logo" href={`/${lang}/`}>
            <WhiteLogoH />
          </Link>
          <div className="relative flex items-center justify-end w-full pr-5">
            <motion.div
              variants={containerVariants}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-row items-end justify-between font-lato tracking-widest gap-x-3  maxlg:hidden "
            >
              {localeHeader?.menu.map((link, index) => {
                return (
                  <div key={index} className="overflow-hidden ">
                    <MobileNavLink
                      title={link.title}
                      href={link.url}
                      lang={lang}
                    />
                  </div>
                );
              })}
            </motion.div>
            <MobileMenu
              className={"hidden maxlg:block"}
              lang={lang}
              localeHeader={localeHeader}
            />
          </div>
        </motion.nav>
      ) : (
        // <TopBar user={user} lang={lang} />
        ""
      )}
    </>
  );
};

export default MotionHeader;

const mobileNavLinksVariants = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.35, 0.45, 1],
    },
  },
};

const MobileNavLink = ({
  title,
  href,
  lang,
}: {
  title: string;
  href: string;
  lang: string;
}) => {
  return (
    <motion.div
      variants={mobileNavLinksVariants}
      className="tracking-wide text-xs "
    >
      <Link
        href={`/${lang}${href}`}
        className={`relative group flex items-center font-primary p-3`}
      >
        <span className={` hidden group-hover:block `} />
        <span>{title}</span>
      </Link>
    </motion.div>
  );
};
