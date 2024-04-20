import React from "react";

const Previous = () => {
  const exps = [
    {
      year: "2021 March - 2024 April",
      position: "Full Stack Engineer",
      company: "Saratix",
      website: "https://saratix.com/",
      description:
        "As a proficient player and team member, I oversaw timelines and provided technical mentorship, fostering an environment of collaboration and helping achieve project milestones. I engaged directly with clients to understand their requirements. Through effective communication and collaboration, I consolidated client needs, clearly elucidating how our services add substantial value to their business operations.",
    },
    {
      year: "2020 June - 2020 December",
      position: "Frontend Developer Internship",
      company: "WEBSE Sdn Bhd",
      website: "https://www.webse.com.my/",
      description:
        "Assist in the development and maintenance of web applications while gaining hands-on experience in coding, debugging, and testing.",
    },
  ];
  return (
    <div>
      <h2 className="text-2xl text-bold mb-5">Work Experience</h2>
      {exps.map((x) => (
        <div key={x.company} className="flex gap-10">
          <div className="w-1/3 text-gray-400">{x.year}</div>
          <div className="w-2/3">
            <div className="flex">
              <motion.a
                href={x.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{x.position}</span>
                <span>-</span>
                {x.company}
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
            <p className="text-gray-500 my-3">{x.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Previous;
