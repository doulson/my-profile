import React from "react";
import { motion } from "framer-motion";
import "./navbar.css";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className="h-[100px]">
      <Sidebar />
      <div className="mx-32 flex items-center justify-between h-full">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Doulson Dev
        </motion.span>
        <div className="flex gap-[20px]">
          <div className="w-[18px] h-[18px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
