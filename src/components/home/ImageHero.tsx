"use client";
import React from "react";
// import coverImage from "../../../public/images/xray-scaled.jpg";
// import Image from "next/image";
import { GiDiscussion } from "react-icons/gi";
import { motion } from "framer-motion";
import { ButtonMotion } from "../motion/ButtonMotion";
import { FaDiagnoses } from "react-icons/fa";
import Image from "next/image";
import { CiTimer } from "react-icons/ci";
// import Image from "next/image";

type Props = {
  homeDic: {
    imageHero: {
      title: string;
      titleTwo: string;
      text: string;
      bullets: string[];
      btnText: string;
      btnTextTwo: string;
      btnUrlTwo: string;
    };
  };
  lang: string;
};

const ImageHero = ({ homeDic, lang }: Props) => {
  return (
    <div className=" relative">
      <div className="w-full bg-white h-[700px]  maxmd:h-[600px] overflow-hidden top-0 relative flex justify-start items-center">
        {/* overlay */}
        {/* <div className="absolute bg-black bg-opacity-40 maxmd:bg-opacity-60 w-full h-full z-20 " /> */}
        {/* <Image
          src={coverImage}
          width={1920}
          height={1080}
          priority
          loading="eager"
          alt="portfolio image"
          className="w-auto h-full absolute top-0 right-0 z-10"
        /> */}
        <div className="w-[60%] maxmd:w-full h-full absolute bottom-0 right-0 z-10">
          <video
            width={1080}
            height={1080}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover object-left maxmd:object-center"
          >
            <source src={"/videos/Body_cuerpo_completo.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className=" pl-40 maxlg:pl-20 maxmd:pl-5 z-20 text-7xl maxlg:text-6xl maxsm:text-4xl font-primary w-3/4 maxmd:w-[90%] ">
          <motion.h2
            initial={{ opacity: 0, scale: 1, y: -10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.9,
              type: "tween",
              stiffness: 260,
              damping: 20,
            }}
            className="leading-none mb-3"
          >
            <span className="text-accent dark:text-white font-black">
              {homeDic.imageHero.title}
            </span>
            <span className=" dark:text-accent font-black">
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
            className=" font-secondary text-lg mb-8  maxmd:text-sm flex flex-col gap-3"
          >
            <p className=" flex items-center gap-2">{homeDic.imageHero.text}</p>
            {homeDic.imageHero.bullets.map((bullet, i) => (
              <p key={i} className=" flex items-center gap-2">
                {bullet}
              </p>
            ))}
          </motion.div>
          <div className="flex maxsm:flex-col maxsm:items-start items-center justify-start gap-5">
            <ButtonMotion
              href={homeDic.imageHero.btnUrlTwo}
              aria-label="Contactar"
              textClass={"text-white"}
              textClassTwo={"text-white"}
              className="bg-accent dark:bg-secondary-gradient px-5 py-3 text-white flex items-center justify-center  text-lg tracking-widest"
            >
              {homeDic.imageHero.btnTextTwo}
            </ButtonMotion>
          </div>
          <p className="text-base mt-2 font-secondary">
            {homeDic.imageHero.btnText}
          </p>
          <p className="text-base font-bold font-accent">
            {lang === "es"
              ? "FRENTE AL HOSPITAL REGIONAL"
              : "IN FRONT OF THE REGIONAL HOSPITAL"}
          </p>
        </div>
      </div>
      {/* bottom icons */}
      <div className="absolute -bottom-40 maxxlg:-bottom-48 maxlg:-bottom-36 left-1/2 transform -translate-x-1/2 z-20 w-full px-20 maxxlg:px-5">
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
            className=" w-80 maxsm:w-auto flex flex-col items-center justify-start px-6 maxsm:px-1 py-4 border-r-2 border-primary"
          >
            <div className=" flex flex-col maxlg:items-center items-center justify-start w-full">
              <CiTimer size={60} className="text-primary mb-2" />{" "}
              <span className=" leading-none text-2xl maxlg:text-sm text-center font-semibold font-primary">
                {lang === "es"
                  ? "Puntualidad y precisión"
                  : "Punctuality and precision"}
              </span>
            </div>
            <span className="text-base  maxlg:hidden text-center">
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
            className=" w-80 maxsm:w-auto flex flex-col items-center justify-start px-6 maxsm:px-1 py-4 border-r-2 border-primary"
          >
            <div className=" flex flex-col maxlg:items-center  items-center justify-start w-full">
              <Image
                src={"/icons/i-mammography-svgrepo-com.png"}
                alt=""
                width={250}
                height={250}
                className="h-16 w-auto mb-2"
              />
              <span className="text-2xl leading-none  maxlg:text-sm text-center font-semibold font-primary">
                {lang === "es"
                  ? "Equipos de Última Generación"
                  : "State-of-the-art equipment"}
              </span>
            </div>
            <span className="text-base maxlg:hidden text-center">
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
            className=" w-80  maxsm:w-auto flex flex-col items-center px-6 maxsm:px-1 py-4 border-r-2 maxmd:border-r-0 border-primary"
          >
            <div className=" flex flex-col maxlg:items-center  items-center justify-start w-full">
              <GiDiscussion size={60} className="text-primary mb-2" />{" "}
              <span className="text-2xl leading-none  maxlg:text-sm text-center font-semibold font-primary">
                {lang === "es"
                  ? "Atención Amable y Personalizada"
                  : "Friendly and personalized attention"}
              </span>
            </div>
            <span className="text-base text-center maxlg:hidden">
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
              <FaDiagnoses size={60} className="text-primary mb-2" />{" "}
              <span className="text-2xl leading-none maxlg:text-sm text-center font-semibold font-primary">
                {lang === "es"
                  ? "Certeza de Diagnóstico"
                  : "Diagnostic certainty"}
              </span>
            </div>
            <span className="text-base text-center maxlg:hidden">
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
