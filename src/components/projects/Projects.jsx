import { motion } from "framer-motion";
import React, { useState } from "react";
const Projects = () => {
  const [activeTab, setActiveTab] = useState(-1);

  const questions = [
    {
      title: "Custlr",
      link: "https://custlr.com/",
      content:
        "Declare a new Alpine component and its data for a block of HTML.",
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

  return <div></div>;
};

export default Projects;
