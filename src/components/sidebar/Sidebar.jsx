import React, { useState } from "react";
import { motion } from "framer-motion";
import Links from "./components/Links";
import ToggleButton from "./components/ToggleButton";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div
      className="flex flex-col items-center justify-center  text-black z-50"
      animate={open ? "open" : "closed"}
    >
      <motion.div
        className="fixed top-0 left-0 bottom-0 w-full sm:w-[400px] bg-white"
        variants={variants}
      >
        <Links setOpen={setOpen} />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
