"use client";

import SectionTitle from "./SectionTitle";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import "./categories.css";

type CategoryProps = {
  categoryDic: {
    title: string;
    titleTwo: string;
    text: string;
    categories: { title: string; catPath: string; imgPath: string }[];
  };
};

const CategoriesComp = ({ categoryDic }: CategoryProps) => {
  return (
    <div className="pt-20 pb-40 px-40 maxxlg:px-20 maxlg:px-10 maxmd:px-5 maxmd:pt-10 bg-gray-200">
      <div className="mx-auto">
        <SectionTitle
          className="text-5xl maxmd:text-4xl text-gray-800 dark:text-gray-300 font-primary leading-none mb-3 w-full text-center h-full px-20 maxsm:px-5"
          title={categoryDic.title}
          titleTwo={categoryDic.titleTwo}
          subtitle={categoryDic.text}
        />
      </div>
      <div className="relative flex flex-wrap maxsm:flex-col items-center justify-center gap-5 w-full ">
        {categoryDic.categories.map((category, index) => (
          <Link
            key={category.title}
            href={`${category.catPath}`}
            className="w-auto cursor-pointer hover:scale-[105%] duration-300 ease-in-out"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2, // Sequential delay
                type: "tween",
                stiffness: 260,
                damping: 20,
              }}
              className="octagon-container relative mx-auto items-center justify-center flex text-center h-[300px] w-[300px] maxxlg:h-[250px] maxxlg:w-[250px] maxlg:h-[250px] maxlg:w-[250px] maxmd:h-[250px] maxmd:w-[250px]"
            >
              <div className="octagon relative overflow-hidden w-full h-[500px] maxxlg:h-[350px]">
                <Image
                  src={category.imgPath}
                  width={600}
                  height={600}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute z-50 text-white py-2 px-8 text-2xl top-[40%] font-primary tracking-wide">
                {category.title}
              </span>
              {/* Octagonal overlay */}
              <div className="octagon-overlay absolute z-[2] top-0 left-0 w-full h-full" />
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesComp;
