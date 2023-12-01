"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Testimoni } from "@/constant";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Testimoni.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + Testimoni.length) % Testimoni.length
    );
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  return (
    <section className="max-container padding-container my-10">
      <div className="flexCenter flex-col items-center my-10">
        <p className="uppercase font-semibold text-rose-500">testimonials</p>
        <h3 className="font-bold text-3xl text-center ">
          what people say about me?
        </h3>
      </div>
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flexCenter flex-col items-center min-h-[300px]"
        >
          <p className="font-bold text-2xl text-slate-900">
            {Testimoni[currentIndex].name}
          </p>
          <p className="text-sm text-blue-500">
            {Testimoni[currentIndex].title}
          </p>
          <p className="text-justify md:text-center md:w-8/12 my-5">
            "{Testimoni[currentIndex].quote}"
          </p>
          <Image
            key={currentIndex}
            src={`/user${currentIndex + 1}.png`}
            width={70}
            height={70}
            alt={`testimonials${currentIndex + 1}`}
          />
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center items-center gap-5 mt-4">
        <motion.button
          onClick={prevTestimonial}
          className="text-white bg-slate-900 shadow-lg rounded-full py-2 w-28 px-5"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Previous
        </motion.button>
        <motion.button
          onClick={nextTestimonial}
          className="text-white bg-slate-900 w-28 shadow-lg rounded-full py-2 px-5"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Next
        </motion.button>
      </div>
    </section>
  );
};

export default Testimonials;