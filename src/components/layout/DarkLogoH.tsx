import Image from "next/image";
import Link from "next/link";

const DarkLogoH = ({
  className,
  lang,
}: {
  className: string;
  lang: string;
}) => {
  return (
    <div className={`relative flex ${className}`}>
      <Link aria-label="dark-logo" href={`/${lang}/`}>
        <Image
          alt="image"
          src={"/logos/dark_logo_horizontal.webp"}
          width={180}
          height={55}
          priority
          className={`overflow-hidden transition-all ease-in-out w-36 py-2 h-auto`}
        />
      </Link>
    </div>
  );
};

export default DarkLogoH;
