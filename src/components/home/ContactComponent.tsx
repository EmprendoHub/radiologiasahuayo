import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";
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
                    "https://www.facebook.com/profile.php?id=61553059803842"
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
                  <FaFacebookF className="absolute text-xs group-hover:text-secondary ease-in-out duration-700 z-0" />
                </Link>
                {/* Instagram */}
                <Link
                  aria-label="Instagram"
                  target="_blank"
                  href={"https://www.instagram.com/radiologiasahuayo/"}
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
                  <FaInstagram className="absolute text-xs group-hover:text-secondary ease-in-out duration-700 z-0" />
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
                  <FaWhatsapp className="absolute text-xs group-hover:text-dark ease-in-out duration-700 z-0" />
                </Link>
              </div>
            </div>
            <div className="w-full ">
              <p className="text-[12px] text-center uppercase font-secondary text-gray-500">
                {contactDic.contactInfo.questions}
              </p>
              <Link href={"mailto:radiologiasahuayo@gmail.com"}>
                <p className="text-center text-3xl text-primary hover:text-secondary ease-in-out duration-700">
                  radiologiasahuayo@gmail.com
                </p>
              </Link>
            </div>
          </div>
          {/* Email */}
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
