import {
  RxPencil2,
  RxDesktop,
  RxRocket,
  RxReader,
  RxCrop,
} from "react-icons/rx";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import ServiceSlider from "../../components/ServiceSlider";

export const serviceData = [
  {
    icon: <RxCrop />,
    title: "Full-Stack Development",
    description:
      "Building scalable, responsive web applications using MERN, Next.js, and Spring Boot.",
  },
  {
    icon: <RxDesktop />,
    title: "Frontend Development",
    description:
      "Crafting user-centric interfaces with ReactJS, Next.js, and Framer Motion.",
  },
  {
    icon: <RxReader />,
    title: "Backend & APIs",
    description:
      "Developing robust backend solutions with Node.js, Spring Boot, and secure APIs.",
  },
  {
    icon: <RxRocket />,
    title: "Performance Optimization",
    description:
      "Improving application performance, SEO, and load times with modern techniques.",
  },
  {
    icon: <RxPencil2 />,
    title: "UI/UX Collaboration",
    description:
      "Translating design mockups into responsive, pixel-perfect frontend experiences.",
  },
  {
    icon: <RxDesktop />,
    title: "Software Development",
    description:
      "Designing and developing reliable, scalable software solutions tailored to business needs.",
  },
];

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center relative overflow-hidden">
      <Circles />

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8 items-center">
          
          {/* Left Side Heading */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center xl:text-left xl:w-[35%] mb-10 xl:mb-0"
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
              My <span className="text-accent">Services</span>
            </h2>
            <p className="text-sm max-w-md mx-auto xl:mx-0">
              I provide end-to-end development solutions tailored to business needs, ensuring modern design, high performance, and scalability.
            </p>
          </motion.div>

          {/* Slider as it is — Original layout */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>

      <Bulb />
    </div>
  );
};

export default Services;
