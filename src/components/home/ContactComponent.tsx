import Link from "next/link";
import React from "react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import styles from "./layout.module.css";
import { ContactDicProp, HomeDicProps } from "@/types/dictionaries";

const ContactComponent = ({
  contactDic,
  homeDic,
}: {
  contactDic: ContactDicProp;
  homeDic: HomeDicProps;
}) => {
  return (
    <div className="bg-white dark:bg-primary py-12 px-40 maxxlg:px-20 maxlg:px-5 h-full overflow-x-hidden ">
      {/* Title */}
      <div className="w-full flex flex-col h-full gap-x-5 maxmd:flex-col justify-center items-center mb-2">
        <div className="w-1/2 maxmd:w-full  maxmd:px-1 maxmd:mt-10  ">
          <p className="uppercase font-secondary tracking-widest text-sm text-gray-500 text-center">
            {contactDic.contactInfo.pretitle}
          </p>
          <h2 className="text-3xl text-gray-800 dark:text-gray-300 font-primary leading-none mb-3 text-center">
            <span>{homeDic.sideText.title} </span>
            <span className="text-primary">{homeDic.sideText.titleTwo}</span>
          </h2>
          <p className="text-center text-xl maxsm:text-3xl font-primary mb-1">
            <span>{contactDic.contactInfo.title} </span>
            <span className="text-dark">{contactDic.contactInfo.titleTwo}</span>
          </p>
          <p className="text-center font-secondary italic maxlg:text-sm">
            {contactDic.contactInfo.subtitle}
          </p>
          <p className="text-center text-4xl mt-4 text-primary font-primary">
            <Link href={"tel:+523535317465"}>
              {contactDic.contactInfo.phone}
            </Link>
          </p>
        </div>

        {/* Info */}
        <div className="w-1/2 maxsm:mt-10 maxmd:w-full h-full text-base  ">
          {/* contact links */}
          <div className=" flex items-center justify-end flex-col mt-5 gap-3">
            {/* Social media */}
            <div className="w-1/2">
              <p className="text-[12px] text-center uppercase font-secondary text-gray-500">
                {contactDic.contactInfo.social}
              </p>
              <div className="relative flex items-center justify-center w-full">
                {/* Facebook */}
                <Link
                  aria-label="Facebook"
                  target="_blank"
                  href={
                    "https://www.facebook.com/p/Unidad-de-Diagnostico-Dr-Gerardo-Amezcua-61553059803842/"
                  }
                  className="relative flex items-center justify-center group"
                >
                  <svg className={`${styles.circle}`}>
                    <g>
                      <ellipse
                        className={`${styles.background}`}
                        ry="20"
                        rx="20"
                        cy="30"
                        cx="30"
                        strokeWidth="2"
                      />
                      <ellipse
                        className={`${styles.foreground}`}
                        ry="20"
                        rx="20"
                        cy="30"
                        cx="30"
                        strokeWidth="2"
                      />
                    </g>
                  </svg>
                  <FaFacebookF className="absolute text-base group-hover:text-secondary ease-in-out duration-700 z-0" />
                </Link>

                {/* WhatsApp */}
                <Link
                  aria-label="WhatsApp"
                  target="_blank"
                  href={"https://wa.me/523535317465"}
                  className="relative flex items-center justify-center group"
                >
                  <svg className={`${styles.circle}`}>
                    <g>
                      <ellipse
                        className={`${styles.background}`}
                        ry="20"
                        rx="20"
                        cy="30"
                        cx="30"
                        strokeWidth="2"
                      />
                      <ellipse
                        className={`${styles.foreground}`}
                        ry="20"
                        rx="20"
                        cy="30"
                        cx="30"
                        strokeWidth="2"
                      />
                    </g>
                  </svg>
                  <FaWhatsapp className="absolute text-base group-hover:text-dark ease-in-out duration-700 z-0" />
                </Link>
              </div>
            </div>
            {/* Email */}

            <div className="w-full ">
              <p className="text-[12px] text-center uppercase font-secondary text-gray-500">
                {contactDic.contactInfo.questions}
              </p>
              <Link href={"mailto:radiologiasahuayo@gmail.com"}>
                <p className="text-center text-3xl text-primary hover:text-secondary ease-in-out duration-700">
                  contacto@radiologiasahuayo.com
                </p>
              </Link>
            </div>
          </div>
        </div>
        {/* Map */}

        <div className="w-full pb-10 pl-5 maxmd:pl-1  flex flex-col justify-start items-start">
          <div className="w-[100%] px-3map-class pt-5">
            <iframe
              className="border-none  "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.2421428204434!2d-102.72074828889843!3d20.040297881295448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842efd2cfec53ae7%3A0x70be1209747948fe!2sUnidad%20de%20Diagnostico%20Radiologico!5e0!3m2!1ses-419!2smx!4v1743078140461!5m2!1ses-419!2smx"
              width="100%"
              height="450"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
