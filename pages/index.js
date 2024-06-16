import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import Avatar from "../components/Avatar";
import ProjectsBtn from "../components/ProjectsBtn";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full  bg-gradient-to-r from-primary/10 via-black/10  to-black/10 ">
        <div
          className="text-center flex flex-col justify-center xl:pt-40 xl:text-left
 container  mx-auto h-full"
        >
          <motion.h1
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[20px] md:text-[40px]" // Tailwind responsive utility classes
          >
            Hi There!
            <br />I am <span className="text-yellow-500">Vipul Harsh,</span>
            <br />I am A{" "}
            <span className="text-red-500">Software Developer</span>
            <br />
          </motion.h1>

          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 z-100"
          >
            If you want to work with me or have some ideas for projects, Let's Connect!
            
           
          </motion.p>
          <a href="https://drive.google.com/file/d/1Qk8C-cWmty_j2-zbNBmPdRuNm2N6ShmU/view?usp=sharing" style={{position:"relative",zIndex:"1"}} className=" m-0" download="VipulHarsh_resume.pdf" target="_blank">
            <button className=" bg-slate-600 p-3.5 rounded-full flex flex-col justify-center hover:cursor-pointer hover:bg-accent hidden md:inline-block">
              Download CV
            </button>
            </a>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex justify-center xl:hidden relative"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0 ">
        <div
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right
      xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
        ></div>
        <ParticlesContainer />
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full h-full max-w-[300px] max-h-[530px] absolute -bottom-30 lg:bottom-1 lg:right-[15%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
