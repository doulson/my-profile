import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
const Previous = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controller = useAnimation();
  const exps = [
    {
      year: "2021 March - 2024 April",
      position: "Full Stack Engineer",
      company: "Saratix",
      website: "https://saratix.com/",
      description:
        "As a proficient player and team member, I oversaw timelines and provided technical mentorship, fostering an environment of collaboration and helping achieve project milestones. I engaged directly with clients to understand their requirements. Through effective communication and collaboration, I consolidated client needs, clearly elucidating how our services add substantial value to their business operations.",
    },
    {
      year: "2020 June - 2020 December",
      position: "Frontend Developer Internship",
      company: "WEBSE Sdn Bhd",
      website: "https://www.webse.com.my/",
      description:
        "Assist in the development and maintenance of web applications while gaining hands-on experience in coding, debugging, and testing.",
    },
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
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controller}
    >
      <motion.h2 className="text-2xl text-bold mb-5" variants={childVariants}>
        Work Experience
      </motion.h2>
      {exps.map((x) => (
        <motion.div
          key={x.company}
          className="flex gap-10 p-4 rounded-lg hover:bg-white/5 hover:border border-white/5"
          variants={childVariants}
        >
          <motion.div
            className="hidden sm:block sm:w-1/3 text-gray-400"
            variants={childVariants}
          >
            {x.year}
          </motion.div>
          <motion.div className="w-full sm:w-2/3" variants={childVariants}>
            <motion.div className="flex" variants={childVariants}>
              <motion.a
                href={x.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3"
                whileHover={{ scale: 1.1, fontWeight: "bold" }}
                whileTap={{ scale: 0.95 }}
                variants={childVariants}
              >
                <motion.span variants={childVariants}>{x.position}</motion.span>
                <motion.span variants={childVariants}>-</motion.span>
                {x.company}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </motion.a>
            </motion.div>
            <motion.div
              className="block sm:hidden text-gray-400"
              variants={childVariants}
            >
              {x.year}
            </motion.div>
            <p className="text-gray-500 my-3" variants={childVariants}>
              {x.description}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Previous;
