"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import LocaleToggle from "../LocaleToggle";
import WhiteLogoH from "../WhiteLogo";

const FooterMenu = ({
  localeFooter,
  lang,
}: {
  localeFooter: {
    addressTwo: {
      ubicacion: string;
      addressOne: string;
      city: string;
      hood: string;
      state: string;
      zip: string;
      phone: string;
    };
    widgettwo: { title: string; links: { title: string; url: string }[] };
    widgetthree: { title: string; links: { title: string; url: string }[] };
    widgetfour: { title: string; links: { title: string; url: string }[] };
  };
  lang: string;
}) => {
  return (
    <div
      className={`relative overflow-x-hidden w-full flex flex-col items-center justify-start `}
    >
      <div className="flex maxsm:flex-col items-start justify-between gap-4 w-full px-3">
        <div className="font-secondary text-xs">
          <WhiteLogoH />
          <p className=" mt-2">{localeFooter.addressTwo.ubicacion}</p>
          <p className="">
            {localeFooter.addressTwo.city} {localeFooter.addressTwo.hood}
          </p>
          <p className=" mb-1">
            {localeFooter.addressTwo.state} {localeFooter.addressTwo.zip}
          </p>
          <p className=" mb-3">{localeFooter.addressTwo.phone}</p>
        </div>
        <div>
          <p className="text-lg font-primary">{localeFooter.widgettwo.title}</p>
          <ul className="text-xs font-secondary  mt-2 flex flex-col gap-y-2">
            {localeFooter.widgettwo.links.map((link) => (
              <motion.li
                key={link.title}
                whileHover={{ y: -4 }}
                whileTap={{ y: 1 }}
                transition={{ duration: 0.15 }}
                className="hover:text-secondary  cursor-pointer duration-200 "
              >
                <Link href={`/${lang}${link.url}`}>{link.title}</Link>
              </motion.li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-lg font-primary">
            {localeFooter.widgetthree.title}
          </p>
          <ul className="font-secondary text-xs mt-2 flex flex-col gap-y-2">
            {localeFooter.widgetthree.links.map((link) => (
              <motion.li
                key={link.title}
                whileHover={{ y: -4 }}
                whileTap={{ y: 1 }}
                transition={{ duration: 0.15 }}
                className="hover:text-secondary  cursor-pointer duration-200 "
              >
                <Link href={`/${lang}${link.url}`}>{link.title}</Link>
              </motion.li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-lg  font-primary mb-2">
            {" "}
            {localeFooter.widgetfour.title}
          </p>
          <ul className="font-secondary text-xs mt-2 flex flex-col gap-y-2">
            {localeFooter.widgetfour.links.map((link) => (
              <motion.li
                key={link.title}
                whileHover={{ y: -4 }}
                whileTap={{ y: 1 }}
                transition={{ duration: 0.15 }}
                className="hover:text-secondary  cursor-pointer duration-200"
              >
                <Link href={`/${lang}${link.url}`}>{link.title}</Link>
              </motion.li>
            ))}
          </ul>
          <LocaleToggle />
        </div>
      </div>
      <div className="w-full ">
        <div className="w-full footer-class grid maxsm:grid-cols-1 grid-cols-3 gap-10 pb-10"></div>
      </div>
    </div>
  );
};

export default FooterMenu;
