import { getDictionary } from "@/lib/dictionary.mjs";
import FooterMenu from "./FooterMenu";
import FooterBar from "./FooterBar";

const Footer = async ({ lang }: { lang: string }) => {
  const { footer } = await getDictionary(lang);
  return (
    <div className="relative w-full mx-auto px-20 bg-main-gradient text-white maxmd:px-5 maxsm:px-2 pt-14 ">
      {/* Call to action */}
      <>
        <FooterMenu localeFooter={footer} lang={lang} />
      </>
      <FooterBar localeFooter={footer} lang={lang} />
    </div>
  );
};

export default Footer;
