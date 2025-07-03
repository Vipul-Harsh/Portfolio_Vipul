import React, { useState, useEffect } from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaNodeJs, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiFramer, SiVisualstudio, SiCplusplus, SiGithub, SiMongodb, SiMysql, SiSpringboot } from "react-icons/si";
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
        title:
          "Hi there! I&apos;m Vipul Harsh, a passionate Software Developer currently pursuing my Bachelor&apos;s degree from JECRC Foundation. I specialize in building scalable, reliable software using technologies like MERN Stack, Next.js, Spring Boot, and more. I&apos;ve completed multiple projects and internships to enhance my technical skills and contribute to real-world solutions.",
        stage: "",
      },
    ],
  },
  {
    title: "skills",
    info: [
      {
        title: "Programming Languages",
        icons: [
          { icon: <FaJava />, name: "Java" },
          { icon: <SiCplusplus />, name: "C++" },
          { icon: <FaJs />, name: "JavaScript" },
          { icon: <SiGithub />, name: "Git/GitHub" },
        ],
      },
      {
        title: "Web Development",
        icons: [
          { icon: <FaHtml5 />, name: "HTML5" },
          { icon: <FaCss3 />, name: "CSS3" },
          { icon: <FaReact />, name: "ReactJS" },
          { icon: <SiNextdotjs />, name: "Next.js" },
          { icon: <FaNodeJs />, name: "Node.js" },
          { icon: <FaWordpress />, name: "WordPress" },
          { icon: <SiFramer />, name: "Framer Motion" },
        ],
      },
      {
        title: "Backend & Database",
        icons: [
          { icon: <SiSpringboot />, name: "Spring Boot" },
          { icon: <SiMongodb />, name: "MongoDB" },
          { icon: <SiMysql />, name: "MySQL" },
        ],
      },
      {
        title: "Tools & IDEs",
        icons: [
          { icon: <SiVisualstudio />, name: "VS Code" },
          { icon: <FaWordpress />, name: "WordPress" },
          { icon: <SiGithub />, name: "GitHub" },
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      { title: "MERN Stack Development Trainee - SmartKnower", stage: "2023" },
      { title: "Semi-Finalist - Smart City Hackathon 2023", stage: "2023" },
      { title: "Social Winter of Code - Open Source Contributor", stage: "2023" },
      { title: "IT Branch Topper - JECRC", stage: "2023" },
      { title: "iNeuron Hackathon Participant", stage: "2022" },
    ],
  },
  {
    title: "experience",
    info: [
      { title: "Packaged App Development Intern - Accenture", stage: "Feb 2025 - Jun 2025" },
      { title: "Frontend Developer Intern - RightLabs", stage: "June 2023 - March 2024" },
      { title: "Web Developer Intern - NayePankh Foundation", stage: "Nov 2023 - Dec 2023" },
    ],
  },
  {
    title: "education",
    info: [
      { title: "B.Tech - JECRC Foundation, Jaipur", stage: "2021 - 2025 | CGPA: 9.35" },
      { title: "Senior Secondary - MPS International School", stage: "2019 - 2021 | 90.4%" },
      { title: "Secondary - MPS International School", stage: "2019 | 91.5%" },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 780);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedData = aboutData.filter((item) =>
    isSmallScreen ? item.title !== "awards" : item.title !== "about"
  );

  return (
    <div className="h-full py-20 text-center xl:text-left bg-primary/30 relative overflow-hidden">
      <ParticlesContainer />
      <Circles />

      {/* Avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[200px] z-10"
      >
        <Avatar />
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="container mx-auto z-20 h-full flex flex-col xl:flex-row items-center gap-x-6 px-4 sm:px-6 lg:px-8 relative"
      >
        
        {/* About Left */}
        <div className="flex-1 hidden md:flex flex-col justify-center mb-8 xl:mb-0">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">About Me</h2>
          <p>
            Hi there! I&apos;m <span className="text-accent font-semibold">Vipul Harsh</span>, a passionate Software Developer currently pursuing my Bachelor&apos;s degree from JECRC Foundation. I specialize in building scalable, reliable software using technologies like MERN Stack, Next.js, Spring Boot, and more. I&apos;ve completed multiple projects and internships to enhance my technical skills and contribute to real-world solutions.
          </p>

          {/* Stats */}
          <div className="flex justify-around mt-8 xl:mt-12">
            <div className="flex-1 text-center xl:text-left">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={6} duration={4} /> +
              </div>
              <div className="text-xs uppercase tracking-wide leading-snug">
                Months of Industry Experience
              </div>
            </div>
            <div className="flex-1 text-center xl:text-left">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={7} duration={4} /> +
              </div>
              <div className="text-xs uppercase tracking-wide leading-snug">
                Completed Projects
              </div>
            </div>
            <div className="flex-1 text-center xl:text-left">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={6} duration={4} /> +
              </div>
              <div className="text-xs uppercase tracking-wide leading-snug">
                Certifications & Achievements
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Right Section */}
        <div className="flex flex-col w-full xl:max-w-[48%] max-h-[480px] overflow-y-auto z-20 relative">
          
          {/* Tabs */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 xl:py-12 sm:py-4">
            {displayedData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`cursor-pointer capitalize relative transition ${
                  index === itemIndex ? "text-accent after:w-full after:bg-accent" : "after:w-8"
                } after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* Tab Content */}
          <div className="py-2 xl:py-5 flex flex-col gap-y-5 xl:gap-y-4 items-center xl:items-start">
            {displayedData[index].info.map((info, idx) => (
              <div key={idx} className="text-center xl:text-left w-full">
                <div className="font-semibold text-lg mb-1">{info.title}</div>
                {info.stage && (
                  <div className="text-sm text-gray-400 mb-2">{info.stage}</div>
                )}
                
                {/* Icons with Names */}
                <div className="flex gap-6 mt-4 justify-center xl:justify-start flex-wrap">
                  {info.icons?.map((item, iconIndex) => (
                    <div key={iconIndex} className="flex flex-col items-center text-white text-sm w-[70px]">
                      <div className="text-2xl mb-1">{item.icon}</div>
                      <span className="text-center">{item.name}</span>
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
