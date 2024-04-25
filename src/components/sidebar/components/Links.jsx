import React from "react";
import { motion } from "framer-motion";

const Links = ({ setOpen }) => {
  const className = `absolute w-full h-full flex flex-col items-center justify-center gap-[20px]`;
  const aClassName = `text-xl`;
  const links = ["Home", "About", "Experiences", "Projects", "Contact"];
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const linkVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };
  return (
    <motion.div className={className} variants={variants}>
      {links.map((link) => (
        <motion.a
          className={aClassName}
          href={`#${link}`}
          key={link}
          variants={linkVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen((prev) => !prev)}
        >
          {link}
        </motion.a>
      ))}
      <motion.a
        className={aClassName}
        target="_blank"
        rel="noopener noreferrer"
        href={`https://drive.google.com/file/d/1j5i42eN5WgCwAlpvR1SBxbOJUkUEtMne/view?usp=sharing`}
        variants={linkVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((prev) => !prev)}
      >
        Resume
      </motion.a>
      <motion.a
        className={aClassName}
        target="_blank"
        rel="noopener noreferrer"
        href={`https://github.com/doulson`}
        variants={linkVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((prev) => !prev)}
      >
        Github
      </motion.a>
    </motion.div>
  );
};

export default Links;
