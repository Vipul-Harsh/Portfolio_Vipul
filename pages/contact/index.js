import Circles from "../../components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32  text-center  xl:text-left  flex items-center justify-center h-full">
        <div className="flex flex-col">
          <h2 className=" h2 text-center mb-12  max-w-[700px]">
            Let&apos;s <span className=" text-accent">Connect</span>.
          </h2>
          <form
            action="https://formspree.io/f/xpzvvkne"
            method="POST"
            className=" flex-1 flex  flex-col gap-4 w-full mx-auto -mt-6 "
          >
            <div className="flex gap-x-6 w-full gap-4">
              <input className="input" type="text" placeholder="Name" name="name" />
              <input className="input" type="email" placeholder="Email"  name="email"/>
            </div>
            <input className="input" type="text" placeholder="Subject"  name="subject"/>
            <textarea
              className="input"
              cols="30"
              rows="30"
              placeholder="Message"
              name="message"
            ></textarea>
            <button
              className="btn rounded-full border border-white/50 max-w-[170px]  px-8 transition-all 
            duration-300  flex items-center justify-center overflow-hidden hover:border-accent group"
            type="submit"
            >
              <span>Let&apos;s Talk</span>
              <BsArrowRight />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
