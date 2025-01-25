import React from "react";
import MotionHeader from "./MotionHeader";
import { getDictionary } from "@/lib/dictionary.mjs";

const Header = async ({ lang }: { lang: string }) => {
  const { header } = await getDictionary(lang);

  return <MotionHeader localeHeader={header} lang={lang} />;
};

export default Header;
