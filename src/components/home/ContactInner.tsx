import ContactComponent from "./ContactComponent";
import Image from "next/image";
import React from "react";
import coverImage from "../../../public/images/radiologia.jpg";
import { ContactDicProp, HomeDicProps } from "@/types/dictionaries";

const ContactInner = ({
  homeDic,
  contactDic,
}: {
  homeDic: HomeDicProps;
  contactDic: ContactDicProp;
}) => {
  return (
    <div className="relative h-full  overflow-x-hidden" id="contacto">
      <div className="w-full h-[400px] overflow-hidden top-0 relative flex justify-center items-center flex-col ">
        <div className="absolute bg-sky-800 bg-opacity-40 w-full h-full z-0" />
        <Image
          src={coverImage}
          width={1920}
          height={400}
          priority
          loading="eager"
          alt="contact cover image"
          className="object-cover h-full w-full"
        />
        <div className="absolute z-10 text-white text-5xl maxsm:text-3xl  font-primary w-[50%] maxsm:w-[80%] text-center">
          <p className="uppercase text-xs tracking-widest font-secondary">
            {contactDic.hero.pretitle}
          </p>
          <h3>{contactDic.hero.title}</h3>
        </div>
      </div>

      <ContactComponent contactDic={contactDic} homeDic={homeDic} />
    </div>
  );
};

export default ContactInner;
