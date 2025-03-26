import Image from "next/image";

const WhiteLogoH = ({ className }: { className?: string }) => {
  return (
    <div className={`relative flex ${className}`}>
      <Image
        alt="image"
        src={"/logos/white_logo_horizontal.webp"}
        width={350}
        height={350}
        priority
        className={`overflow-hidden transition-all  ease-in-out w-[350px] py-2 h-auto`}
      />
    </div>
  );
};

export default WhiteLogoH;
