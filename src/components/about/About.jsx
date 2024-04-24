import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Dots from "./components/dots";
import "./about.css";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controller = useAnimation();
  const skills = [
    "JavaScript",
    "TypeScript",
    "Java",
    "Nodejs",
    "React & Nextjs",
    "Vue3",
    "Spring Boot",
    "Express",
    "Cypress",
    "MYSQL/MSSQL",
    "MongoDB",
    "Git",
    "AWS / Alibaba Cloud Services",
    "Jenkins",
  ];

  const containerVariants = {
    hidden: {
      clipPath: "circle(0% at bottom center)",
      opacity: 0,
    },
    show: {
      clipPath: "circle(2400px at top center)",
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // 0.1 second delay between each child animation
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (inView) {
      controller.start("show");
    }
  }, [inView]);
  return (
    <div ref={ref}>
      <div className="relative flex">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controller}
          className="bg-gray-800 w-full h-full p-5 sm:p-9 rounded-3xl z-10"
        >
          <motion.h2
            className="text-xl mt-5 sm:mt-0 sm:text-4xl lg:text-8xl flex flex-row sm:flex-col font-bold mb-5  duration-200"
            variants={childVariants}
          >
            <span>
              About <span className="text-normal text-md"></span>{" "}
            </span>{" "}
            <span className="ml-1 sm:ml-0">me</span>
          </motion.h2>

          <div className="flex flex-col md:flex-row overflow-hidden z-10">
            <div className="w-full lg:w-2/3">
              <motion.div variants={childVariants} className="relative">
                Results-driven
                <motion.strong className="text-xl text-cyan-300">
                  {" "}
                  Full Stack Software Engineer{" "}
                </motion.strong>
                with a proven track record in spearheading seamless integration
                of web systems with AI technologies.
              </motion.div>
              <motion.p variants={childVariants} className="mt-10">
                I'm <strong className="text-xl text-cyan-300">Open</strong> to
                job opportunities that give me chance to contribute, learn, and
                develop professionally. If you know of a suitable position that
                aligns with my skills and experience, please feel free to reach
                out to me.
              </motion.p>
              <div className="w-full sm:mt-16 md:mt-0">
                <motion.div className="my-4" variants={childVariants}>
                  {skills.map((s) => (
                    <span
                      key={s}
                      className="border-2 rounded-full p-1 px-3 hover:bg-white hover:text-black ease-in duration-150 mx-1 text-center whitespace-nowrap align-baseline inline-block my-2"
                    >
                      {s}
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>
            <div className="absolute top-16 right-36 -z-10 hidden sm:block">
              <Dots />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
