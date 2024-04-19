import React from "react";

const ToggleButton = ({ setOpen }) => {
  const className = `w-[50px] h-[50px] rounded-full fixed top-[25px] left-[25px] bg-transparent border-0`;
  return (
    <button className={className} onClick={() => setOpen((prev) => !prev)}>
      ToggleButton
    </button>
  );
};

export default ToggleButton;
