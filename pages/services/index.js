import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from "react-icons/rx";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import ServiceSlider from "../../components/ServiceSlider";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
export const serviceData = [
  {
    icon: <RxCrop />,
    title: "Web Designing",
    description: "I am proficient in Web development and can help the organization achieve its goal.",
  },
  {
    icon: <RxPencil2 />,
    title: "Seo Optimization",
    description: "Boost your online presence with targeted SEO strategies that drive traffic and improve search engine rankings.",
  },
  {
    icon: <RxDesktop />,
    title: "Software engineering",
    description: " Develop robust and scalable software solutions tailored to meet your business needs and enhance operational efficiency",
  },
  // {
  //   icon: <RxReader />,
  //   title: "Copywriting",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // },
  // {
  //   icon: <RxRocket />,
  //   title: "SEO",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // },
];
const Services = () => {
  return (
    <div className=" h-full  bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className=" flex flex-col xl:flex-row gap-x-8">
          <div className="text-center  flex xl:w-[30vm] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My Services<span className="text-accent">.</span>
            </motion.h2>
          </div>
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" w-full xl:max-w-[65%]"
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
