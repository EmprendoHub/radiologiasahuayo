"use client";
import React from "react";
// import coverImage from "../../../public/videos/xray_video.mp4";
// import Image from "next/image";
import { GiDiscussion } from "react-icons/gi";
import { motion } from "framer-motion";
import { ButtonMotion } from "../motion/ButtonMotion";
import { FaDiagnoses, FaXRay } from "react-icons/fa";
import { MdOutlineBiotech } from "react-icons/md";

type Props = {
  homeDic: {
    imageHero: {
      title: string;
      titleTwo: string;
      text: string;
      btnText: string;
      btnTextTwo: string;
    };
  };
  lang: string;
};

const ImageHero = ({ homeDic, lang }: Props) => {
  return (
    <div className=" relative">
      <div className=" w-full bg-light-gradient h-[700px] maxmd:h-[1000px] overflow-hidden top-0 relative flex justify-center items-center flex-col ">
        {/* overlay */}
        {/* <div className="absolute bg-black bg-opacity-40 w-full h-full z-0" /> */}
        {/* <Image
          src={coverImage}
          width={1920}
          height={1080}
          priority
          loading="eager"
          alt="portfolio image"
          className="w-[60%] h-auto absolute bottom-0 right-0 z-10"
        /> */}
        <div className="absolute z-10 bottom-10 right-60 maxlg:right-0 maxsm:right-10 w-[500px] maxsm:w-[400px]">
          <video width={1080} height={1080} autoPlay loop muted>
            <source src={"/videos/xray_video_2.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="absolute top-40 maxlg:top-20 maxmd:top-28 left-20 maxlg:left-5 z-10 text-white text-5xl maxlg:text-4xl maxsm:text-4xl font-primary w-[60%] maxmd:w-[90%] ">
          <motion.h2
            initial={{ opacity: 0, scale: 1, y: -10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.9,
              type: "tween",
              stiffness: 260,
              damping: 20,
            }}
            className="font-primary leading-none mb-3"
          >
            <span className="text-accent dark:text-white font-black">
              {homeDic.imageHero.title}
            </span>
            <span className="text-white dark:text-accent font-black">
              {homeDic.imageHero.titleTwo}
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 1, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              type: "tween",
              stiffness: 260,
              damping: 20,
            }}
            className="text-gray-300 font-secondary text-sm mb-8  maxmd:text-sm flex flex-col gap-3"
          >
            <p className=" flex items-center gap-2">{homeDic.imageHero.text}</p>
          </motion.div>
          <div className="flex maxsm:flex-col maxsm:items-start items-center justify-start gap-5">
            <ButtonMotion
              href=""
              aria-label="Contactar"
              textClass={"text-white"}
              textClassTwo={"text-white"}
              className="bg-secondary-gradient dark:bg-dark-gradient px-5 py-3 text-white flex items-center justify-center  text-xs tracking-widest"
            >
              {homeDic.imageHero.btnText}
            </ButtonMotion>
            <ButtonMotion
              href=""
              aria-label="Contactar"
              textClass={"text-white"}
              textClassTwo={"text-white"}
              className="bg-accent dark:bg-secondary-gradient px-5 py-3 text-white flex items-center justify-center  text-xs tracking-widest"
            >
              {homeDic.imageHero.btnTextTwo}
            </ButtonMotion>
          </div>
        </div>
      </div>
      {/* bottom icons */}
      <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 z-20 w-full px-20 maxxlg:px-5">
        <div className="flex items-center justify-center gap-5 maxsm:gap-1 w-full bg-white py-4 shadow-sm shadow-slate-400">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              type: "tween",
              stiffness: 260,
              damping: 20,
            }}
            className=" w-80 maxsm:w-28 flex flex-col items-center justify-start px-6 maxsm:px-1 py-4 border-r-2 border-primary"
          >
            <div className=" flex flex-col maxlg:items-center items-center justify-start w-full">
              <FaXRay size={50} className="text-primary" />{" "}
              <span className=" leading-none text-lg maxlg:text-sm text-center font-semibold">
                {lang === "es"
                  ? "Puntualidad y precisión"
                  : "Punctuality and precision"}
              </span>
            </div>
            <span className="text-xs  maxlg:hidden text-center">
              {lang === "es"
                ? "Garantizamos la entrega oportuna de tus resultados con máxima calidad."
                : "We guarantee the timely delivery of your results with maximum quality."}
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              type: "tween",
              stiffness: 260,
              damping: 20,
            }}
            className=" w-80 maxsm:w-28 flex flex-col items-center justify-start px-6 maxsm:px-1 py-4 border-r-2 border-primary"
          >
            <div className=" flex flex-col maxlg:items-center  items-center justify-start w-full">
              <MdOutlineBiotech size={50} className="text-primary" />{" "}
              <span className="text-lg leading-none  maxlg:text-sm text-center font-semibold">
                {lang === "es"
                  ? "Equipos de Última Generación"
                  : "State-of-the-art equipment"}
              </span>
            </div>
            <span className="text-xs maxlg:hidden text-center">
              {lang === "es"
                ? "Contamos con tecnología avanzada que asegura diagnósticos confiables."
                : "We have advanced technology that ensures reliable diagnoses."}
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              type: "tween",
              stiffness: 260,
              damping: 20,
            }}
            className=" w-80  maxsm:w-28 flex flex-col items-center px-6 maxsm:px-1 py-4 border-r-2 maxmd:border-r-0 border-primary"
          >
            <div className=" flex flex-col maxlg:items-center  items-center justify-start w-full">
              <GiDiscussion size={50} className="text-primary" />{" "}
              <span className="text-lg leading-none  maxlg:text-sm text-center font-semibold">
                {lang === "es"
                  ? "Atención Amable y Personalizada"
                  : "Friendly and personalized attention"}
              </span>
            </div>
            <span className="text-xs text-center maxlg:hidden">
              {lang === "es"
                ? "Nuestro equipo está aquí para brindarte la mejor experiencia, desde el primer contacto."
                : "Our team is here to provide you with the best experience, from the first contact."}
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              type: "tween",
              stiffness: 260,
              damping: 20,
            }}
            className=" flex  w-80  maxsm:w-28 maxmd:hidden flex-col items-center justify-start px-6 maxsm:px-1 py-4 "
          >
            <div className=" flex flex-col maxlg:items-center items-center justify-start w-full">
              <FaDiagnoses size={50} className="text-primary" />{" "}
              <span className="text-lg leading-none maxlg:text-sm text-center font-semibold">
                {lang === "es"
                  ? "Certeza de Diagnóstico"
                  : "Diagnostic certainty"}
              </span>
            </div>
            <span className="text-xs text-center maxlg:hidden">
              {lang === "es"
                ? "Trabajamos para ofrecer a médicos y pacientes la tranquilidad de resultados precisos."
                : "We work to provide physicians and patients with the peace of mind of accurate results."}
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ImageHero;
