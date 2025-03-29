import Link from "next/link";

const FooterBar = ({
  localeFooter,
}: {
  lang: string;
  localeFooter: {
    footerBar: {
      copyright: {
        pretitle: string;
        subtitle: string;
        disclosure: string;
        preOwner: string;
        owner: string;
        subOwner: string;
        city: string;
        state: string;
        zip: string;
        country: string;
      };
      company: string;
      addressOne: string;
      state: string;
      city: string;
      zip: string;
      country: string;
      path: string;
      developBy: string;
    };
  };
}) => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center pb-4 px-20 maxmd:px-5 maxsm:px-1 text-sm maxsm:text-[10px] text-center">
      {/* <DarkLightLogo lang={lang} /> */}
      <p className="mt-3">
        {localeFooter.footerBar.copyright.pretitle} &copy;{" "}
        {localeFooter.footerBar.company} {new Date().getFullYear()}{" "}
        {localeFooter.footerBar.copyright.subtitle}
      </p>
      <p>{localeFooter.footerBar.copyright.disclosure}</p>
      <p>
        {localeFooter.footerBar.copyright.preOwner}{" "}
        {localeFooter.footerBar.copyright.owner},{" "}
        {localeFooter.footerBar.copyright.subOwner}{" "}
        {localeFooter.footerBar.addressOne} - {localeFooter.footerBar.city}{" "}
        {localeFooter.footerBar.state} {localeFooter.footerBar.zip},{" "}
        {localeFooter.footerBar.country}.
      </p>

      <Link
        aria-label="emprendomex"
        target="_blank"
        href={localeFooter.footerBar.path}
        className="text-popPrimary hover:text-popSecondary hover:scale-105 ease-in-out duration-300"
      >
        {localeFooter.footerBar.developBy}
      </Link>
    </div>
  );
};

export default FooterBar;
