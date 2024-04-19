import React from "react";
import { motion } from "framer-motion";

import "./hero.css";

const Hero = () => {
  const btnClassName =
    "p-[15px] mr-10 border-2 rounded-lg border-white text-sm";

  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  };
  return (
    <div className="hero bg-gradient-to-b bg-gray-900 to-blue-900 overflow-hidden">
      <div className="flex justify-between items-center">
        <motion.div
          className=" mx-32 flex h-1/2 w-2/3 flex-col justify-center gap-[40px] z-10"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            className="text-3xl text-bold text-cyan-300 tracking-[.3em]"
            variants={textVariants}
          >
            DOULSON HWANG
          </motion.h2>
          <motion.h1
            className="text-5xl text-bold tracking-[.1em]"
            variants={textVariants}
          >
            Full Stack Developer
          </motion.h1>
          <motion.div variants={textVariants}>
            <motion.button className={btnClassName} variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button className={btnClassName}>Contact Me</motion.button>
          </motion.div>

          <motion.img
            className="w-[50px]"
            src="/scroll.png"
            alt=""
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
        <motion.div
          className="slidingText text-[50vh] font-bold absolute b-[-120px] whitespace-nowrap text-slate-800/50 z-0 w-1/2"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Software Developement
        </motion.div>
        <div className="w-1/3 z-10">
          <img src="/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
