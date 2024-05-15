import { motion } from "framer-motion";
import React, { useState } from "react";
const Projects = () => {
  const projects = [
    {
      title: "MyResume",
      sub: "Resume Builder Application",
      link: null,
      source: null,
      techs: [],
      img: null,
      status: false,
    },
    {
      title: "Issue Tracker",
      sub: "An Application for track and discuss issues and report",
      link: null,
      source: "https://github.com/doulson/issuetracker-java",
      otherSource: "https://github.com/doulson/issue-tracker-ui",
      techs: [
        "Typescript",
        "Java",
        "SpringBoot",
        "PostgreSQL",
        "Reactjs",
        "Nextjs",
        "radix-ui",
        "shadcn/ui",
      ],
      img: "/next-auth.png",
      status: false,
    },
    {
      title: "Nextjs Auth",
      sub: "An Application only for authentication including 3rd party providers, middleware, email vertification, reset password email two-factor authentication, multi role authentication and permissions",
      link: "https://nextjs-auth-doulson-psi-seven.vercel.app/",
      source: "https://github.com/doulson/nextjs-auth",
      techs: [
        "Typescript",
        "PostgreSQL",
        "Reactjs",
        "Nextjs",
        "radix-ui",
        "shadcn/ui",
      ],
      img: "/next-auth.png",
      status: true,
    },
    {
      title: "APrompt",
      sub: "Prompting tool Application",
      link: "https://ai-app-blond.vercel.app",
      source: "https://github.com/doulson/APromtp",
      techs: ["Javascipt", "NoSQL", "Reactjs", "Nextjs", "MongoDB"],
      img: "/aprompt.png",
      status: true,
    },
    {
      title: "Doulson's Resume",
      sub: "Resume application",
      link: "https://my-profile-woad-rho.vercel.app/",
      source: "https://github.com/doulson/my-profile",
      techs: ["Javascipt", "Reactjs", "Framer Motion"],
      img: "/personal_surface.png",
      status: true,
    },
    {
      title: "WeatherToday",
      sub: "Weather Application",
      link: "https://weather-app-delta-two-73.vercel.app",
      source: "https://github.com/doulson/WeatherApp",
      techs: ["Typescript", "NoSQL", "Reactjs", "Nextjs", "MongoDB"],

      img: "/weatherapp.png",
      status: true,
    },
    {
      title: "Tryiton Fitting Room",
      sub: "Fitting room app in Retail Clothing Industry",
      link: "https://www.businesstoday.com.my/2023/04/10/hm-shoppers-can-now-try-on-clothes-virtually-with-tryinons-3d-virtual-fitting-room-tech",
      source: null,
      techs: [
        "Javascipt",
        "Nodejs",
        "SQL & NoSQL",
        "Reactjs",
        "Expressjs",
        "DynamoDB",
        "AWS Cloud Services",
      ],
      img: "/tryiton-fittingroom.png",
      status: true,
    },
    {
      title: "Custlr",
      sub: "E-commerce Website",
      link: "https://custlr.com",
      source: null,
      techs: [
        "PHP",
        "Javascipt",
        "CSS",
        "HTML",
        "SQL",
        "Boostrap 5",
        "Laravel",
        "AWS Cloud Services",
      ],
      img: "/custlr.png",
      status: true,
    },
    {
      title: "Tryiton",
      sub: "Company Profile Website",
      link: "https://tryiton.co",
      source: null,
      techs: ["PHP", "CSS", "Javascipt", "Wordpress"],
      img: "/tryiton.png",
      status: true,
    },
    {
      title: "Financial Management System",
      sub: "Company project. Helps organizations manage their financial operations and processes with integrate to 3rd party API",
      link: null,
      source: null,
      techs: ["Vuejs", "CSS", "Typescript", "Springboot", "AWS Cloud Services"],
      img: null,
      status: true,
    },
    {
      title: "Document Management System",
      sub: "Company project. Generate, translate, and extract information from electronic documents and images of paper-based information captured through scanning.",
      link: null,
      source: null,
      techs: ["Vuejs", "CSS", "Typescript", "Expressjs", "AWS Cloud Services"],
      img: null,
      status: true,
    },
    {
      title: "Inventory Management System in Automation Industry",
      sub: "Company project. streamline and manage various aspects of human resource activities, reporting and analytics",
      link: null,
      source: null,
      techs: [
        "Reactjs",
        "CSS",
        "Typescript",
        "Expressjs",
        "AWS Cloud Services",
      ],
      img: null,
      status: true,
    },
    {
      title:
        "Talent Pool & Human Resource Management System in Financial Industry",
      sub: "Company project. streamline and manage various aspects of human resource activities, reporting and analytics",
      link: null,
      source: null,
      techs: [
        "Reactjs",
        "CSS",
        "Typescript",
        "Expressjs",
        "AWS Cloud Services",
      ],
      img: null,
      status: true,
    },
  ];

  return (
    <div className="flex flex-col gap-5 mb-[10rem]">
      <h5 className="text-2xl font-bold mb-5">Projects</h5>
      {projects.map((project) => (
        <div className="p-3 lg:p-7 border border-white/5 bg-white/5 rounded-lg">
          <div className="w-full mb-3 block lg:hidden">
            <h2 className="font-semibold text-2xl">{project.title}</h2>
            <small className="text-sm text-gray-400 font-normal">
              {project.sub}
            </small>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 ">
            <div className="col-span-2 pr-5">
              {project.img ? (
                <img
                  className="rounded-lg w-full lg:h-[30vh] object-fit object-cover border bg-white/5"
                  src={project.img}
                  alt=""
                />
              ) : (
                <div className="w-full lg:h-[30vh] flex justify-center items-center border overflow-hidden relative">
                  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                    <filter id="noiseFilter">
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="5"
                        numOctaves="5"
                        stitchTiles="stitch"
                      />
                    </filter>

                    <rect
                      width="100%"
                      height="100%"
                      filter="url(#noiseFilter)"
                    />
                  </svg>
                  {!project.status && (
                    <p className="font-2xl font-semibold absolute top-50 left-50">
                      Coming Soon
                    </p>
                  )}
                </div>
              )}
            </div>
            <div className="col-span-3 lg:flex flex-col gap-5">
              <div className="w-full hidden lg:block">
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-400">{project.sub}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Website URL</p>
                {project.status && project.link ? (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-3"
                    whileHover={{ scale: 1.1, x: window.innerWidth * 0.025 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-ellipsis">
                      {project.link.replace("https://", "")}
                    </span>
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
                ) : (
                  "N/A"
                )}
              </div>
              {project.source && (
                <div>
                  <p className="text-sm text-gray-400">Source</p>
                  <motion.a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-3"
                    whileHover={{ scale: 1.1, x: window.innerWidth * 0.025 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-ellipsis">
                      {project.source.replace("https://", "")}
                    </span>
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
                </div>
              )}

              {project.otherSource && (
                <div>
                  <p className="text-sm text-gray-400">Other Source</p>
                  <motion.a
                    href={project.otherSource}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-3"
                    whileHover={{ scale: 1.1, x: window.innerWidth * 0.025 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-ellipsis">
                      {project.otherSource.replace("https://", "")}
                    </span>
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
                </div>
              )}

              <div>
                <p className="text-sm text-gray-400">Technologies</p>
                <div className="select-none">
                  {project.techs.map((t) => (
                    <span
                      key={t}
                      className="border-2 rounded-full p-1 px-3 hover:bg-white hover:text-black ease-in duration-150 mx-1 text-center whitespace-nowrap align-baseline inline-block my-2"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
