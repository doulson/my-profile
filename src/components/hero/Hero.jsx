import React from "react";
import { motion } from "framer-motion";
import { MouseParallax } from "react-just-parallax";

import "./hero.css";

const Hero = () => {
  const btnClassName =
    "p-[15px] mr-10 border-[0.1rem] rounded-lg border-white text-sm";

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
  const textVariants2 = {
    initial: {
      x: 500,
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
    <div className="hero bg-gradient-to-b bg-gray-900 to-blue-900 overflow-hidden flex flex-column relative">
      <motion.div
        className="text-[50vh] font-bold absolute top-0 whitespace-nowrap text-slate-800/50  select-none"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        "Built with love, crafted to last."
      </motion.div>
      <div className="flex justify-between items-center z-10">
        <motion.div
          className="mx-5 md:mx-32 flex h-1/2  flex-col justify-center gap-[40px]"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>
            <span className=" text-2xl text-semibold mr-3">Hi! I'm</span>
            <span className="text-3xl text-bold ">
              Doulson<span className="text-cyan-300 text-6xl ml-2">.</span>
            </span>
          </motion.h2>
          <div className="relative">
            <MouseParallax strength="0.05">
              <h1 className="text-5xl font-[900] tracking-[.3em] text-gradient">
                Software Developer.
              </h1>
            </MouseParallax>
            <motion.h1
              className="absolute top-1 text-5xl font-[900] tracking-[.3em]"
              variants={textVariants}
            >
              Software Developer<span className="text-cyan-300">.</span>
            </motion.h1>
          </div>

          <motion.h1
            className="text-lg text-bold tracking-[.1em]"
            variants={textVariants}
          >
            <span className="text-cyan-500">"</span>Built with love, crafted to
            last
            <span className="text-cyan-300">.</span>
            <span className="text-cyan-500">"</span>
          </motion.h1>
          <motion.div variants={textVariants}>
            <motion.button className={btnClassName} variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button className={btnClassName}>About Me</motion.button>
          </motion.div>
        </motion.div>
        <motion.img
          className="w-[50px] absolute left-[50%] bottom-10"
          src="/scroll.png"
          alt=""
          variants={textVariants}
          animate="scrollButton"
        />
        <motion.div
          className="absolute right-0 w-1/3 hidden sm:block"
          variants={textVariants2}
          initial="initial"
          animate="animate"
        >
          <img src="/hero.png" alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
