"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MarqueeItem = ({
  images,
  from,
  to,
}: {
  images: string[];
  from: string;
  to: string;
}) => {
  return (
    <div className="flex overflow-hidden w-full">
      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-10 min-w-[200%]" // Ensures seamless wrapping
      >
        {[...images, ...images].map(
          (
            image,
            index // Duplicate array for looping effect
          ) => (
            <Image
              alt=""
              width={150} // Adjust width for better fit
              height={75} // Adjust height for consistency
              className="h-16 w-auto object-contain"
              src={image}
              key={index}
            />
          )
        )}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
