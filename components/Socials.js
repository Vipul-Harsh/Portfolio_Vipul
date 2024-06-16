import Link from "next/link";
import {RiInstagramLine,RiYoutubeLine,RiFacebookLine,RiPinterestLine, RiLinkedinFill, RiMailAddFill} from "react-icons/ri"
const Socials = () => {
  return <div className="flex gap-4 text-2xl">
    <Link href={''} className="hover:text-teal-400 transition-all duration-300">
      <RiInstagramLine/>
    </Link>
    <Link href={''} className="hover:text-teal-400 transition-all duration-300">
      <RiFacebookLine/>
    </Link>
    <Link href={''} className="hover:text-teal-400 transition-all duration-300">
      <RiPinterestLine/>
    </Link>
    <Link href={''} className="hover:text-teal-400 transition-all duration-300">
      <RiLinkedinFill/>
    </Link>
    <Link href={''} className="hover:text-teal-400 transition-all duration-300">
      <RiMailAddFill/>
    </Link>
  </div>;
};

export default Socials;
