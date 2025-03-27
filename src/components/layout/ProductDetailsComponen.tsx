"use client";
import { motion } from "framer-motion";
import { FaCircleXmark, FaWhatsapp } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

interface ProductDetailsProps {
  data: {
    images: { _id: string; url: string }[];
    title: string;
    packing: string;
    category?: {
      name: string;
      summary: string;
      characteristics: {
        _id: string;
        test: string;
        method: string;
        typicalValue?: string;
      }[];
      benefits: string;
      precautions: string;
      images: { _id: string; url: string }[];
    };
  };
  setShowModal: (value: boolean) => void;
}

const ProductDetailsComponent: React.FC<ProductDetailsProps> = ({
  data,
  setShowModal,
}) => {
  const product = data;

  return (
    <div className="container-class pt-10 maxlg:pt-5  maxsm:pt-5">
      <main className="flex flex-col items-center justify-between w-full">
        <div className="w-[950px] maxmd:w-[90%] maxsm:w-[95%] pb-3 mx-auto wrapper-class gap-3 maxsm:gap-0 bg-slate-100 dark:bg-primary rounded-lg">
          <div className="flex flex-col items-start justify-start ">
            {/* Left Panel */}

            <div className="relative image-class w-full flex flex-col items-center justify-center p-5 maxsm:p-1">
              <div
                onClick={() => setShowModal(false)}
                className=" absolute z-[888] top-1 right-3 my-2 px-1 py-1 text-center text-white bg-red-700 border border-transparent rounded-full hover:bg-red-800 w-auto flex flex-row items-center justify-center gap-1 cursor-pointer"
              >
                <FaCircleXmark className="text-xl" />
              </div>
              {/* top section */}

              <div className="flex  items-start  gap-1 w-full relative h-auto">
                <div className="relative w-1/2  h-auto">
                  {product?.images.map((image) => (
                    <div
                      key={image._id}
                      className="ml-5 maxsm:ml-0 mt-5 maxsm:mt-2 relative h-[300px] w-[300px]  maxmd:h-[150px] maxmd:w-[150px] maxxsm:w-[100px] maxxsm:h-[100px] overflow-hidden"
                    >
                      <Image
                        src={image.url}
                        alt="producto"
                        width={350}
                        height={350}
                        data-image-id={image._id}
                        className={`w-auto h-auto`}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col pt-5 pr-3 maxmd:pr-10 w-1/2 maxmd:w-full justify-end">
                  <div className="text-2xl maxmd:text-lg font-semibold font-primary maxmd:leading-none">
                    {product?.title}
                  </div>

                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="text-sm text-lightText flex flex-col"
                  >
                    <div className="flex maxmd:flex-col items-start justify-start  gap-0 mt-1 w-full">
                      <p className=" maxmd:text-xs">
                        <span className="font-semibold">
                          {"productDic.single.packing"}:{" "}
                        </span>
                        {product?.packing}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.9 }}
                    className="text-sm text-lightText flex flex-col"
                  >
                    <div className="flex maxmd:flex-col items-start justify-start  gap-0 mt-0 w-full">
                      <p className="f maxmd:text-xs">
                        <span className="font-semibold">
                          {"productDic.single.category"}:{" "}
                        </span>
                        {product?.category?.name}
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-sm text-lightText flex flex-col maxmd:hidden"
                  >
                    <div className=" text-xs maxmd:text-[11px] maxmd:leading-[1] items-start justify-start  gap-1 mt-1 w-full">
                      {product?.category?.summary}
                    </div>
                  </motion.div>
                </div>
              </div>
              {/* bottom section */}
              <div className="flex maxmd:flex-col items-start gap-1 px-2 maxmd:px-0 w-full relative h-auto">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="text-sm text-lightText  maxmd:flex  maxmd:flex-col  hidden"
                >
                  <div className="font-normal text-xs maxmd:text-[11px] maxmd:leading-[1.2] mt-1">
                    {product?.category?.summary}
                  </div>
                </motion.div>
                <div className="relative flex flex-col w-1/2 maxmd:w-full   ">
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="text-sm  text-lightText flex flex-col"
                  ></motion.div>
                </div>
                <div className="flex flex-col pr-3 h-auto justify-end w-1/2 maxmd:w-full">
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="text-sm text-lightText flex flex-col"
                  >
                    <div className="font-normal text-xs maxmd:text-[11px] mt-1  maxmd:leading-[1.2]">
                      {product?.category?.benefits}
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="text-sm text-lightText flex flex-col"
                  >
                    <div className="font-normal text-xs maxmd:text-[11px] mt-1  maxmd:leading-[1.2]">
                      {product?.category?.precautions}
                    </div>
                  </motion.div>

                  <div className="flex items-end justify-start w-full gap-4">
                    {product?.category?.images.map((image) => (
                      <div
                        key={image._id}
                        className="ml-5 maxsm:ml-0 mt-5 maxsm:mt-2 relative h-auto overflow-hidden"
                      >
                        <Image
                          src={image.url}
                          alt="producto"
                          width={350}
                          height={350}
                          data-image-id={image._id}
                          className={`w-40 maxsm:w-24 h-auto`}
                        />
                      </div>
                    ))}
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1.2 }}
                      className="text-sm text-lightText flex items-end"
                    >
                      <p className="flex items-center text-[14px]">
                        <Link
                          href={`https://api.whatsapp.com/send/?phone=523931021001&text=Hola+%2AAceites+CNR%2A.+Me+Interesa+cotizar+y+obtener+m%C3%A1s+informaci%C3%B3n+de+${product?.title}&type=phone_number&app_absent=0`}
                          target="_blank"
                          className="bg-emerald-700 text-white rounded-full px-4 py-2 flex items-center gap-2 hover:bg-emerald-800 "
                        >
                          {"productDic.single.quote"}:<FaWhatsapp size={24} />
                        </Link>
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailsComponent;
