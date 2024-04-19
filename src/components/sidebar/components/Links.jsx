import React from "react";

const Links = () => {
  const className = `absolute w-full h-full flex flex-col items-center justify-center gap-[20px]`;
  const aClassName = `text-xl`;
  const links = ["Home", "Services", "Portfolio", "Contact", "About"];
  return (
    <div className={className}>
      {links.map((link) => (
        <a className={aClassName} href={`#${link}`} key={link}>
          {link}
        </a>
      ))}
    </div>
  );
};

export default Links;
