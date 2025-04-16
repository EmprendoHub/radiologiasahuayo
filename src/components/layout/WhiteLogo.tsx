import Image from "next/image";

const WhiteLogoH = ({ className }: { className?: string }) => {
  return (
    <div className={`relative flex ${className}`}>
      <Image
        alt="image"
        src={"/logos/dark_logo_horizontal.webp"}
        width={550}
        height={550}
        priority
        className={`overflow-hidden transition-all  ease-in-out w-[650px] py-2 h-auto`}
      />
    </div>
  );
};

export default WhiteLogoH;
