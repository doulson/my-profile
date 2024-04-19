import React from "react";
import "./navbar.css";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className="h-[100px]">
      <Sidebar />
      <div className="max-w-[1366px] m-auto flex items-center justify-between h-full">
        <span className="font-bold">Doulson Dev</span>
        <div className="flex gap-[20px]">
          <div className="w-[18px] h-[18px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
