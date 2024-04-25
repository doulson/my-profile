import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controller = useAnimation();
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
    hidden: { opacity: 0, y: 80 },
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
      <motion.h5 className="text-7xl text-bold" variants={childVariants}>
        Contact
        <motion.span
          className="text-cyan-300 text-9xl ml-2"
          variants={childVariants}
        >
          .
        </motion.span>
      </motion.h5>
      <motion.div className="sm:w-1/2 mt-8" variants={childVariants}>
        <motion.p
          className="text-cyan-100 text-xl text-semibold"
          variants={childVariants}
        >
          Feel free to email me if you'd like to connect! Alternatively, you can
          reach out via{" "}
          <motion.a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-500 text-cyan-300  text-2xl text-bold transition duration-250"
            variants={childVariants}
          >
            LinkedIn
          </motion.a>{" "}
          or{" "}
          <motion.span
            className="text-cyan-300 text-2xl text-bold"
            variants={childVariants}
          >
            WhatsApp
          </motion.span>{" "}
          if you prefer.
        </motion.p>
        <motion.div
          className="my-20 flex flex-col sm:flex-row gap-20"
          variants={childVariants}
        >
          <motion.div variants={childVariants}>
            <motion.h5
              className="text-cyan-300 text-3xl mb-4"
              variants={childVariants}
            >
              Email
              <span
                className="text-cyan-300  text-6xl ml-2 opacity-0"
                variants={childVariants}
              >
                @
              </span>
            </motion.h5>
            <motion.a
              href="mailto:doulsonhwang@gmail.com"
              className="text-cyan-500 hover:text-cyan-600 font-semibold"
              variants={childVariants}
            >
              doulsonhwang@gmail.com
            </motion.a>
          </motion.div>
          <motion.div variants={childVariants}>
            <motion.h5
              className="text-cyan-300  text-3xl mb-4"
              variants={childVariants}
            >
              Phone no
              <motion.span
                className="text-cyan-300 text-6xl ml-2"
                variants={childVariants}
              >
                .
              </motion.span>
            </motion.h5>
            <motion.div
              className="text-cyan-500 flex justify-between"
              variants={childVariants}
            >
              <motion.div>
                {" "}
                <motion.div>
                  <motion.a
                    href="https://wa.me/+60123480753"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={childVariants}
                  >
                    +6012 3480 753
                  </motion.a>
                </motion.div>
              </motion.div>
              <motion.div className="ml-5" variants={childVariants}>
                (MY)
              </motion.div>
            </motion.div>
            <motion.div
              className="text-cyan-600 flex justify-between"
              variants={childVariants}
            >
              <motion.div variants={childVariants}>
                <motion.a
                  href="https://wa.me/+6586199926"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +65 8619 9926
                </motion.a>
              </motion.div>
              <motion.div>(SG)</motion.div>
            </motion.div>
          </motion.div>
          <motion.div variants={childVariants}>
            <motion.a
              href={`https://drive.google.com/file/d/1j5i42eN5WgCwAlpvR1SBxbOJUkUEtMne/view?usp=sharing`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3"
              whileHover={{ scale: 1.1, x: window.innerWidth * 0.01 }}
              whileTap={{ scale: 0.95 }}
            >
              My Resume
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
          <motion.div variants={childVariants}>
            <motion.a
              href={`https://github.com/doulson`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3"
              whileHover={{ scale: 1.1, x: window.innerWidth * 0.01 }}
              whileTap={{ scale: 0.95 }}
            >
              Github
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
        </motion.div>
      </motion.div>

      <hr />
      <motion.div className="mt-10 text-cyan-900 font-semibold">
        {" "}
        © Doulson 2024
      </motion.div>
    </motion.div>
  );
};

export default Contact;
