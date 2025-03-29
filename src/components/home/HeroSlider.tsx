// HeroSlider.jsx
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./heroSliderPush.module.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

type Item = {
  title: string;
  titleTwo: string;
  text: string;
  btnText: string;
  btnPath: string;
  imgPath: string;
};

const HeroSlider = ({ homeDic }: { homeDic: { sliders: [] } }) => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined = undefined;
    if (!isPaused) {
      interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % homeDic.sliders.length);
      }, 5000);
    } else if (isPaused && index === 0) {
      interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % homeDic.sliders.length);
      }, 10000);
    }

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div
      className="relative min-h-[70vh] justify-center flex items-center maxmd:flex-col w-full px-40 maxxlg:px-20 maxmd:px-5 maxsm:pl-2 py-20 maxsm:pt-10 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`relative min-h-[40vh] w-full ${styles.textSlider}`}>
        {homeDic.sliders.map((item: Item, idx: number) => (
          <div
            key={item.title}
            className={`${styles.slide} ${idx === index ? styles.active : ""} ${
              styles.fromLeft
            }`}
          >
            <div className="relative w-full h-full pr-10 maxmd:pr-0 overflow-x-hidden">
              {/* Text Column */}
              <div className="w-full h-full relative flex flex-col items-start ">
                <h2 className="font-primary flex flex-col justify-start items-start text-7xl maxxlg:text-6xl maxmd:text-5xl maxsm:text-4xl gap-x-3">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="text-primary "
                  >
                    {item.title}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="text-white dark:text-primary"
                  >
                    {item.titleTwo}
                  </motion.span>
                </h2>
                <motion.p
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-base font-secondary mt-2 text-white text-wrap"
                >
                  {item.text}
                </motion.p>
                <Link
                  href={item.btnPath}
                  className="px-6 mt-5 border-white border rounded-sm"
                >
                  <motion.button
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-base font-secondary my-4 gap-x-2 flex items-center text-white text-wrap"
                  >
                    {item.btnText} <FaArrowRightLong />
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 z-0">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

        {/* Images Container */}
        <div className={`${styles.imageSlider} absolute inset-0`}>
          {homeDic.sliders.map((item: Item, idx: number) => (
            <div
              key={idx}
              className={`${styles.slide} ${
                idx === index ? styles.active : ""
              } ${styles.fromRight}`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.imgPath}
                  alt="cover imagen"
                  priority
                  loading="eager"
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        aria-label="leftArrow"
        className={`${styles.arrowLeft} text-white right-[220px] bottom-[80px] maxxlg:right-[130px]`}
        onClick={() =>
          setIndex(
            (index - 1 + homeDic.sliders.length) % homeDic.sliders.length
          )
        }
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <BsChevronLeft className="text-4xl" />
      </button>
      <button
        aria-label="rightArrow"
        className={`${styles.arrowRight} text-white right-[170px] bottom-[80px] maxxlg:right-[80px]`}
        onClick={() => setIndex((index + 1) % homeDic.sliders.length)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <BsChevronRight className="text-4xl" />
      </button>
    </div>
  );
};

export default HeroSlider;
