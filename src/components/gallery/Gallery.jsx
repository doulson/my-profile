import './Gallery.scss';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const textVariants = {
    initial: {
      x: 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 3,
        staggerChildren: 0.2,
      },
    },
    scrollButton: {
      opacity: 1,
      y: 15,
      transition: {
        duration: 3,
        delay: 1.5,
        repeat: Infinity,
      },
    },
  };

  const sliderVariants = {
    initial:{
        x:0,
    },
    animate:{
        x: "-220%",
        transition:{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        }
    }
  }
  const line = "Hi, I'm Chinying!"
  const line2 = "A Data Scientist"
  const line3 = "with 10+ projects"

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }
  const sentenceTwo = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
      },
    },
  }
  const sentenceThree = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
      },
    },
  }
  
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    }}
  
const projects = [
  {
    id: 1,
    image: 'cyclist.png',
    title: 'Secure Cyclist',
    type: 'React.js',
    language: 'Node.js',
    technology: 'Front End',
    description: 'Secure Cyclist is designed to ensure the safety and well-being of international students who commute via bicycle in the vibrant region of Victoria. ',
    link: '/#Card'
  },
  {
    id: 1,
    image: 'sc_bar.png',
    title: 'Secure Cyclist',
    type: 'Chart.js',
    language: 'SQL',
    technology: 'Azure',
    description: 'A safety-focused initiative leveraging accident data to create safer cycling routes in Victoria, enhancing the commute experience for international students.',
    link: '/#Card'
  },
  {
    id: 2,
    image: 'tw_landing.png',
    title: 'Taiwan Travel Map',
    type: 'Dashboard',
    language: 'R Shiny',
    technology: 'Interative',
    description: 'An interactive tool providing travelers with comprehensive, real-time information about Taiwan\'s attractions, aiding in efficient and enjoyable travel planning.',
    link: '/project-one'
  },
  {
    id: 3,
    image: 'stk_landing.png',
    title: 'Stack Overflow Survey Analysis',
    type: 'Data Exploration',
    language: 'R',
    technology: 'Data Vis',
    description: 'Delivers in-depth analysis of the global coding community, exploring demographics, income, and learning paths, providing a unique perspective beyond Stack Overflow\'s own analysis.',
    link: '/project-one'
  },
  {
    id: 4,
    image: 'pj_lga.png',
    title: 'PTV Analysis',
    type: 'Data Analysis',
    language: 'PostgreSQL',
    technology: 'Dbeaver',
    description: 'Utilises spatial data to evaluate public transport coverage in Melbourne, identifying underserved areas and aiding in public transport accessibility improvements.',
    link: '/project-one'
  },
  {
    id: 5,
    image: 'pj_dw.png',
    title: 'Data Warehouse',
    type: 'Data Warehouse',
    language: 'Data Engineer',
    technology: 'SQL',
    description: 'Design and implement a data warehouse practice',
    link: '/project-one'
  },
  {
    id: 6,
    image: 'pj_ml.png',
    title: 'Project One',
    type: 'ML',
    language: 'Deep Learning',
    technology: 'Python',
    description: '',
    link: '/project-one'
  },
  {
    id: 7,
    image: 'pj_lda.png',
    title: 'Project One',
    type: 'NLP',
    language: 'Topic Modeling',
    technology: 'LDA',
    description: 'A brief introduction of Project One...',
    link: '/project-one'
  },
  {
    id: 8,
    image: 'pj_flight.png',
    title: 'Data Analysis of Flight Delay',
    type: 'Data Visualization',
    language: 'R',
    technology: 'Tableau',
    description: 'A brief introduction of Project One...',
    link: '/project-one'
  },
  {
    id: 9,
    image: 'tw_filter.png',
    title: 'Project One',
    type: 'Data Visualization',
    language: 'JavaScript',
    technology: 'D3.js',
    description: 'A brief introduction of Project One...',
    link: '/project-one'
  },
  
];

const cardHeight = 200; 
const gapHeight = 20; 
const totalHeight = (cardHeight + gapHeight) * projects.length /2;

const scrollVariants = {
    animateUp: {
      y: [-totalHeight, 0],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5 * projects.length /2,
          ease: "linear"
        }
      }
    },
    animateDown: {
      y: [0, -totalHeight],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5 * projects.length /2,
          ease: "linear"
        }
      }
    }
  };

const Gallery = () => {
  const [hovered, setHovered] = React.useState(null);

  const handleMouseEnter = (id) => {
    setHovered(id);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };
  const [animationStage, setAnimationStage] = useState(0);
  useEffect(() => {
    if (animationStage === 1) {
      setTimeout(() => setAnimationStage(2), 1200); // Delay for second sentence
    } else if (animationStage === 2) {
      setTimeout(() => setAnimationStage(3), 1500); // Delay for third sentence
    } else if (animationStage === 3) {
      setTimeout(() => setAnimationStage(4), 1500); // Delay for third sentence
    }
  }, [animationStage]);

  return (
    <div className="gallery">
            <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">

                    <motion.h2 variants={sentence}
                                initial="hidden"
                                animate={animationStage >= 1 ? "visible" : "hidden"}
                                onAnimationComplete={() => setAnimationStage(1)}
                                >
                    {line.split("").map((char, index) => {
                        return (
                        <motion.span key={char + "-" + index} variants={letter}>
                            {char}
                        </motion.span>
                        );

                    })}
                    </motion.h2>
                    <motion.h1 variants={sentenceTwo}
                                initial="hidden"
                                animate={animationStage >= 2 ? "visible" : "hidden"}
                                >
                    {line2.split("").map((char, index) => {
                        return (
                        <motion.span key={char + "-" + index} variants={letter}>
                            {char}
                        </motion.span>
                        );

                    })}
                    </motion.h1>
                    <motion.h3 variants={sentenceThree}
                                initial="hidden"
                                animate={animationStage >= 3 ? "visible" : "hidden"}>
                    {line3.split("").map((char, index) => {
                        return (
                        <motion.span key={char + "-" + index} variants={letter}>
                            {char}
                        </motion.span>
                        );

                    })}
                    </motion.h3>

                    {/* <motion.h1 variants={textVariants}>A Data Scientist</motion.h1>
                    <motion.h3 variants={textVariants}>with 10+ projects </motion.h3> */}
                    <motion.div variants={textVariants} animate={animationStage >= 4 ? "animate" : "initial"} className="buttons">
                      <a href="#Experience"><motion.button  variants={textVariants} >About me</motion.button></a>
                      {/* <a href="#Experience"><motion.button  variants={textVariants} >View my projects</motion.button></a> */}
                        {/* <motion.button  variants={textVariants} >Portfolio</motion.button> */}
                    </motion.div>
                    <motion.img variants={textVariants} animate={animationStage >= 4 ? "scrollButton" : "initial"} src="/scroll.png" alt="" />
                </motion.div>
                <motion.div className="slidingtextContainer"
                    variants={sliderVariants}
                    initial="initial"
                    animate="animate">
                    hello hello hello hello
                </motion.div>
                {/* <div className="imageContainer">
                <img src="/71.png" alt="" />
                </div> */}


            </div>

      <motion.div
        className="column"
        variants={scrollVariants}
        animate="animateDown"
        initial={{ y: -100 * projects.length }}
      >
        {projects.concat(projects).map((project, index) => (
        <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
    return (
      <div className="project-card">
        <img src={project.image} alt={project.title} />
        <div className="info-tags">
          <div className="tag">{project.type}</div>
          <div className="tag">{project.language}</div>
          <div className="tag">{project.technology}</div>
        </div>
        <div className="overlay">
          <div className="title">{project.title}</div>
          <div className="description">{project.description}</div>
          {/* <button className="project-link" onClick={() => window.location.href = project.link}>Go to project</button> */}
        </div>
      </div>
    );
  };

export default Gallery;
