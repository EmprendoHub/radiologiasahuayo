"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HomeDicProps } from "@/types/dictionaries";
import { CiCircleChevDown } from "react-icons/ci";

const DoubleSideToSide = ({
  homeDic,
  lang,
}: {
  homeDic: HomeDicProps;
  lang: string;
}) => {
  return (
    <div className="w-full min-h-full bg-white dark:bg-primary  pb-40">
      <div className="h-full py-8">
        {/* Top Side */}
        <div className="h-full max-w-5xl mx-auto m-8">
          <div className="flex h-full maxmd:flex-col-reverse items-center justify-center">
            {/* text and image */}
            <div className="w-6/12 maxmd:w-full  h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.7,
                  type: "tween",
                  stiffness: 260,
                  damping: 20,
                }}
                className="relative w-[20rem] h-[20rem] maxsm:w-[15rem] maxsm:h-[15rem]  rounded-full overflow-hidden ml-10"
              >
                {/* Diamond image container */}
                <div className="absolute  w-[141%] h-[141%] top-[-20.5%] left-[-20.5%] ">
                  <Image
                    className="object-cover w-full h-full"
                    src={homeDic.doublesides.boxTwo.imgUrl}
                    alt="Unidad de Diagnóstico Dr. Gerardo Amezcua"
                    width={550}
                    height={550}
                    priority
                  />
                </div>
              </motion.div>
            </div>
            {/* text */}
            <div className="relative maxmd:ml-5 w-6/12 pr-20 maxmd:w-full">
              <motion.h2
                initial={{ x: -180, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="text-5xl maxmd:text-3xl text-gray-800 dark:text-gray-300 font-primary leading-none mb-3 w-[90%] h-full"
              >
                <span>{homeDic.doublesides.boxTwo.title} </span>
              </motion.h2>
              <motion.h2
                initial={{ x: -180, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.6 }}
                className="text-5xl maxmd:text-3xl text-gray-800 dark:text-gray-300 font-primary leading-none mb-3 w-[90%] h-full"
              >
                <span className="text-primary">
                  {homeDic.doublesides.boxTwo.titleTwo}
                </span>
              </motion.h2>
              <div className="text-gray-800 dark:text-gray-300 font-secondary text-sm mb-2 maxmd:text-sm flex flex-col gap-3 min-h-full">
                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1.2,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="flex items-center gap-2"
                >
                  {homeDic.doublesides.boxTwo.text}
                </motion.p>
              </div>
              <ul className="text-xs italic text-gray-500 dark:text-gray-300 font-secondary flex flex-col gap-2">
                <motion.li
                  initial={{ opacity: 0, x: 0 }}
                  whileInView={{ opacity: 1, x: 1 }}
                  transition={{
                    duration: 1.2,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="flex items-center gap-2"
                >
                  <CiCircleChevDown className="text-black" />{" "}
                  {lang === "es"
                    ? "Manejo Fácil de Citas: Agenda de manera sencilla a través de WhatsApp o por teléfono."
                    : "Easy Appointment Handling: Schedule easily through WhatsApp or by phone."}
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1.4,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="flex items-center gap-2"
                >
                  <CiCircleChevDown className="text-black" />{" "}
                  {lang === "es"
                    ? "Resultados Rápidos y Precisos: Enfocados en cumplir con las necesidades de tiempo y calidad."
                    : "Quick and Accurate Results: Focused on meeting time and quality needs."}
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1.7,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="flex items-center gap-2"
                >
                  <CiCircleChevDown className="text-black" />{" "}
                  {lang === "es"
                    ? "Precios Accesibles: Ofrecemos paquetes y servicios competitivos sin comprometer la calidad."
                    : "Affordable Prices: We offer competitive packages and services without compromising quality."}
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Side */}
        <div className="h-full max-w-5xl mx-auto m-8 mt-20">
          <div className="flex maxmd:flex-wrap  maxmd:h-full items-center justify-center">
            {/* Text */}
            <div className="w-6/12 maxmd:w-full px-12">
              <motion.h2
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.7,
                  type: "tween",
                  stiffness: 260,
                  damping: 20,
                }}
                className="text-5xl maxmd:text-3xl text-gray-800 dark:text-gray-300 font-primary leading-none mb-3 w-[90%] h-full"
              >
                <span>{homeDic.doublesides.boxOne.title} </span>
                <span className="text-primary">
                  {homeDic.doublesides.boxOne.titleTwo}
                </span>
              </motion.h2>
              <div className="text-gray-800 dark:text-gray-300 font-secondary text-sm mb-8 maxmd:text-sm flex flex-col gap-3 min-h-full">
                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1.2,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="flex items-center gap-2"
                >
                  {homeDic.doublesides.boxOne.text}
                </motion.p>
              </div>
              <ul className="text-xs italic text-gray-500 dark:text-gray-300 font-secondary flex flex-col gap-2">
                <motion.li
                  initial={{ opacity: 0, x: 0 }}
                  whileInView={{ opacity: 1, x: 1 }}
                  transition={{
                    duration: 1.2,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="flex items-center gap-2"
                >
                  <CiCircleChevDown className="text-black" />{" "}
                  {lang === "es"
                    ? "Profesionales capacitados: Un equipo dedicado a brindarte la mejor atención."
                    : "Trained Professionals: A team dedicated to providing you with the best care."}
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1.4,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="flex items-center gap-2"
                >
                  <CiCircleChevDown className="text-black" />{" "}
                  {lang === "es"
                    ? "Procesos rápidos y eficientes: Estudios realizados con tecnología de última generación."
                    : "Fast and Efficient Processes: Studies carried out with state-of-the-art technology."}
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1.7,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="flex items-center gap-2"
                >
                  <CiCircleChevDown className="text-black" />{" "}
                  {lang === "es"
                    ? "Atención personalizada: Nos aseguramos de que cada paciente reciba un trato humano y amable."
                    : "Personalized Attention: We make sure that each patient receives a humane and friendly treatment."}
                </motion.li>
              </ul>
            </div>
            {/* Image */}
            <div className="relative w-6/12 maxmd:w-[90%]">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.7,
                  type: "tween",
                  stiffness: 260,
                  damping: 20,
                }}
                className="relative w-[20rem] h-[20rem] maxsm:w-[15rem] maxsm:h-[15rem]  rounded-full overflow-hidden ml-10"
              >
                {/* image container */}
                <div className="absolute  w-[141%] h-[141%] top-[-20.5%] left-[-20.5%]">
                  <Image
                    className="object-cover w-full h-full"
                    src={homeDic.doublesides.boxOne.imgUrl}
                    alt="Unidad de Diagnóstico Dr. Gerardo Amezcua"
                    width={550}
                    height={550}
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubleSideToSide;
