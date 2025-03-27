"use client";
import React from "react";
import MarqueeItem from "./MarqueeItem";
import { motion } from "framer-motion";

const Marquee = () => {
  const upperMarquee = [
    "/logos/Bupa_logo.png",
    "/logos/interacciones.jpeg",
    "/logos/logo-GNP.jpeg",
    "/logos/logo-seguros-inbursa.jpg",
    "/logos/mapfre.png",
    "/logos/MetLife-Logo.png",
    "/logos/monterrey.png",
    "/logos/multiva.png",
    "/logos/rsa.png",
    "/logos/seguros_atlas.webp",
    "/logos/seguros_banorte.png",
  ];

  return (
    <div className="overflow-hidden mt-20">
      <motion.h2
        initial={{ x: -180, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="pt-40 pl-20 maxmd:pl-5 font-bold text-5xl maxsm:text-4xl "
      >
        Alianzas, convenios y seguros
      </motion.h2>
      <motion.p
        initial={{ x: -180, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3 }}
        className="pl-20 maxmd:pl-5 pb-10 text-xs "
      >
        Orgullosos que pudimos ayudar a cada uno de nuestros clientes.
      </motion.p>

      <div className="container mx-auto h-60">
        <MarqueeItem images={upperMarquee} from={"0"} to={"-100%"} />
      </div>
    </div>
  );
};

export default Marquee;
