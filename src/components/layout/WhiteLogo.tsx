import Image from "next/image";
import Link from "next/link";

const WhiteLogoH = ({
  className,
  lang,
}: {
  className?: string;
  lang?: string;
}) => {
  return (
    <div className={`relative flex ${className}`}>
      <Link aria-label="light-logo" href={`/${lang}/`}>
        <Image
          alt="image"
          src={"/logos/white_logo_horizontal.webp"}
          width={350}
          height={350}
          priority
          className={`overflow-hidden transition-all ease-in-out w-48 py-2 h-auto`}
        />
      </Link>
    </div>
  );
};

export default WhiteLogoH;
