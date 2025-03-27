"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProductDetailsComponent from "./ProductDetailsComponen";

const backdropVariants = {
  animate: { opacity: 1, scale: 1 },
  initial: { opacity: 0, scale: 0.5 },
  duration: { duration: 1.5 },
};
interface ModalProductProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  data: {
    id: string;
    name: string;
    description: string;
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
}

const ModalProduct: React.FC<ModalProductProps> = ({
  showModal,
  setShowModal,
  data,
}) => {
  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <div className="backdrop fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-[99999]">
          <motion.div
            variants={backdropVariants}
            initial="initial"
            animate="animate"
          >
            <ProductDetailsComponent setShowModal={setShowModal} data={data} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ModalProduct;
