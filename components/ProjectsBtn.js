import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiArrowRightCircle } from "react-icons/hi2";

const ProjectsBtn = () => {
  return <div className="mx-auto xl:mx-0" style={{position:"relative" ,zIndex:"1"}}>
  <Link href="https://drive.google.com/file/d/1q71OvRjxP3d4FfOQmY9ixOyjAwU5YzfH/view?usp=sharing"  download="VipulHarsh_Resume.pdf" target="_blank"
  className="relative w-[125px] h-[125px]  flex justify-center items-center bg-circleStar 
  bg-cover bg-center bg-no-repeat group">
    <Image
    src={'/rounded-text.png'}
    width={50}
    height={58}
    alt=""
    className="animate-spin-slow w-full h-full max-w-[101px] max-h-[108px]"
    />
  <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300"/>
   
  </Link>
  </div>;
};

export default ProjectsBtn;
