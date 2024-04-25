import { motion } from "framer-motion";
import React, { useState } from "react";
const Projects = () => {
  const [activeTab, setActiveTab] = useState(-1);

  const projects = [
    {
      title: "Custlr",
      link: "https://custlr.com/",
      content: "E=",
      techs: [],
      img: "",
    },
    {
      title: "Tryiton",
      link: "https://tryiton.co/",
      content:
        "Declare a new Alpine component and its data for a block of HTML.",
      techs: [],
      img: "",
    },
    {
      title: "What is $store?",
      content: "Access a global store registered using Alpine.store(...).",
    },
    {
      title: "What is x-on?",
      content: "Listen for browser events on an element.",
    },
  ];
  const handleClick = (index) => {
    setActiveTab(activeTab === index ? -1 : index);
  };

  return (
    <div className="grid grid-col-1 sm:grid-cols-4 gap-4">
      <div className="">
        <a
          href="https://custlr.com/"
          target="_blank
        "
        >
          <img src="/Screenshot 2024-04-25 150631.png" alt="" />
        </a>
      </div>
      <div>
        <h2>Custlr</h2>
        <small>E-commerce Website</small>
      </div>
    </div>
  );
};

export default Projects;
