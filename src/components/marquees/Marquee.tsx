"use client";
import React from "react";
import MarqueeItem from "./MarqueeItem";
import { motion } from "framer-motion";

const Marquee = ({ lang }: { lang: string }) => {
  const upperMarquee = [
    "/logos/Bupa_logo.png",
    "/logos/interacciones.jpeg",
    "/logos/logo-GNP.jpeg",
    "/logos/logo-seguros-inbursa.jpg",
    "/logos/Mapfre_Seguros.png",
    "/logos/MetLife-Logo.png",
    "/logos/monterrey.png",
    "/logos/multiva.png",
    "/logos/rsa.png",
    "/logos/seguros_atlas.webp",
    "/logos/Seguros_Banorte.png",
  ];

  return (
    <div className="overflow-hidden mt-20 maxsm:mt-10" id="alianza">
      <motion.h2
        initial={{ x: -180, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="pt-40 pl-20 font-primary maxmd:pl-5 font-bold text-5xl maxsm:text-4xl "
      >
        <span className="text-accent">
          {lang === "es" ? "Alianzas" : "Alliances"}
        </span>
        , {lang === "es" ? "convenios y seguros" : "agreements and insurance"}
      </motion.h2>
      <motion.p
        initial={{ x: -180, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3 }}
        className="pl-20 maxmd:pl-5 pb-10 text-lg maxsm:text-base font-light text-gray-500"
      >
        {lang === "es"
          ? "Impulsando colaboraciones estratégicas y protección integral para tu tranquilidad"
          : "Promoting strategic collaborations and comprehensive protection for your peace of mind"}
      </motion.p>

      <div className="container mx-auto h-40">
        <MarqueeItem images={upperMarquee} from={"0"} to={"-100%"} />
      </div>
    </div>
  );
};

export default Marquee;
