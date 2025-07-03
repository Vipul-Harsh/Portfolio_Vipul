import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import Avatar from "../components/Avatar";
import ProjectsBtn from "../components/ProjectsBtn";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full relative overflow-hidden">
      {/* Background Gradient Layer */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/10 to-black/10">
        
        {/* Content Container */}
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center xl:items-start xl:text-left xl:pt-40">

          {/* Headline */}
          <motion.h1
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[22px] md:text-[44px] font-bold leading-snug"
          >
            Hi, I'm <span className="text-yellow-500">Vipul Harsh</span>
            <br />
            A Passionate <span className="text-red-500">Software Developer</span>
            <br />
            Building Innovative & Scalable Solutions.
          </motion.h1>

          {/* Subtext & CTA */}
          <motion.p
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-8 xl:mb-16"
          >
            I specialize in developing reliable software that solves real-world problems.
            Looking for collaboration or exciting opportunities? Let's connect!
          </motion.p>

          {/* Download CV Button */}
          <motion.div
            variants={fadeIn("down", 0.8)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col md:flex-row gap-4 items-center"
          >
            <a
              href="https://drive.google.com/file/d/1_FdLQ6qhWetvHxBZBfKxQZPFMuP1gQDo/view?usp=sharing" // Update with your CV path
              download
              className="bg-yellow-600 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-700 transition"
            >
              Download CV
            </a>

            {/* Projects Button (Hidden on XL, shown below Avatar for large screens) */}
            <div className="md:hidden">
              <ProjectsBtn />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side Visual Elements */}
      <div className="w-full h-full absolute right-0 bottom-0 overflow-hidden pointer-events-none">
        
        {/* Background Explosion Effect for Large Screens */}
        <div className="hidden xl:block absolute w-full h-full bg-explosion bg-cover bg-right bg-no-repeat mix-blend-color-dodge"></div>

        {/* Particle Effects */}
        <ParticlesContainer />

        {/* Avatar */}
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="absolute w-full h-full max-w-[300px] max-h-[530px] -bottom-20 lg:bottom-0 lg:right-[15%]"
        >
          <Avatar />
        </motion.div>

        {/* Projects Button for XL screens */}
       
      </div>
    </div>
  );
};

export default Home;
