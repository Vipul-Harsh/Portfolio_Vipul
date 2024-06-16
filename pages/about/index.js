import React, { useState, useEffect } from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaNodeJs, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiFramer, SiVisualstudio, SiCplusplus, SiGithub, SiMongodb } from "react-icons/si";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";
import ParticlesContainer from "../../components/ParticlesContainer";

const aboutData = [
  {
    title: "about",
    info: [
      {
        title: "Hello! I'm Vipul Harsh, currently pursuing my Bachelor's degree from JECRC Foundation. I specialize in web development using the MERN stack and have hands-on experience with technologies like React, Next.js, MongoDB, Node.js, WordPress, and more. I've completed various projects and internships in this domain, continuously upskilling myself to stay at the forefront of the field.",
        stage: "",
      }
    ],
  },
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="javascript" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
          <FaNodeJs key="nodejs" />,
          <SiMongodb key="mongodb" />,
        ],
      },
      {
        title: "Programming",
        icons: [
          <FaJava key="java" />,
          <SiCplusplus key="cplusplus" />,
          <SiVisualstudio key="visualstudio" />,
          <SiGithub key="github" />,
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "MERN Stack Development trainee",
        stage: "2023",
      },
      {
        title: "IT Hackathon Poornima",
        stage: "2023",
      },
      {
        title: "iNeuron Hackathon",
        stage: "2022",
      },
      {
        title: "Full Stack Development Course",
        stage: "2022",
      },
    ],
  },
  
  {
    title: "experience",
    info: [
      {
        title: "Frontend Developer Intern - Celebal Summer Intern",
        stage: "June 2024 - Present",
      },
      {
        title: "Frontend Developer Intern - RightLabs Company",
        stage: "Feb 2024 - May 2024",
      },
      {
        title: "Web Developer Intern - NayePankh Foundation",
        stage: "Nov 2023 - Dec 2023",
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "(B.Tech) - Jaipur Engineering College And Research Center",
        stage: "2021 - 2025 - CGPA 9.35",
      },
      {
        title: "(Senior Secondary) - MPS International School ",
        stage: "2019 - 2021 - 90.1%",
      },
      {
        title: "(Secondary) - MPS International School",
        stage: "2019 - 91.2%",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 780);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const smallScreenStyle = {
    zIndex: "999",
    fontSize: "14px",
    marginTop: "26px",
  };

  const displayedData = aboutData.filter((item) => {
    if (isSmallScreen) {
      return item.title !== "awards";
    }
    return item.title !== "about";
  });

  return (
    <div className="h-full py-20 text-center xl:text-left bg-primary/30">
      <ParticlesContainer />
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[200px]"
      >
        <Avatar />
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="container mx-auto z-10 h-full flex flex-col xl:flex-row items-center gap-x-6 px-4 sm:px-6 lg:px-8"
      >
        <div className="flex-1 hidden md:flex flex-col justify-center mb-8 xl:mb-0">
          <h2 className="text-2xl md:text-4xl md:block font-semibold mb-4">About me</h2>
          <p className="z-10">
            Hello reader! I am vipul harsh currently pursuing Bachelors degree from 
            JECRC Foundation. I have expertise in Web development with MERN.
            I have gained hands on experience with technologies like React,Next js,
            MongoDb ,Node Js ,wordpress and many more and have done various projects as well as internshipps in same domain to upskill myself.
          </p>
          <div className="flex justify-around mt-8 xl:mt-12">
            <div className="flex-1 text-center xl:text-left">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={4} duration={4} /> +
              </div>
              <div className="text-xs uppercase tracking-wide leading-snug">
                Months of Experience
              </div>
            </div>
            <div className="flex-1 text-center xl:text-left">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={5} duration={4} /> +
              </div>
              <div className="text-xs uppercase tracking-wide leading-snug">
                Projects
              </div>
            </div>
            <div className="flex-1 text-center xl:text-left">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={5} duration={4} /> +
              </div>
              <div className="text-xs uppercase tracking-wide leading-snug">
                Certificates
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px] overflow-y-auto">
          <div
            className={`flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 xl:py-12 sm:py-4 ${isSmallScreen ? '' : ''}`}
            style={isSmallScreen ? smallScreenStyle : {}}
          >
            {displayedData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`cursor-pointer capitalize relative ${index === itemIndex ? 'text-accent after:w-full after:bg-accent' : 'after:w-8'} after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-7 flex flex-col gap-y-5 xl:gap-y-4 items-center xl:items-start">
            {displayedData[index].info.map((info, idx) => (
              <div key={idx} className="text-center xl:text-left">
                <div className="font-semibold">{info.title}</div>
                {info.stage && <div className="text-sm text-gray-400">{info.stage}</div>}
                <div className="flex gap-x-4 mt-2 justify-center xl:justify-start">
                  {info.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className="text-2xl text-white">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
