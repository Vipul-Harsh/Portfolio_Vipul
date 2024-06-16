import Link from "next/link";
import Social from "../components/Socials";
const Header = () => {
  return (
    <header className="absolute z-30 w-full flex flex-col items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto ">
        <div className="flex flex-col justify-between items-center lg:flex-row gap-y-3">
          <h1>
            <span className="text-4xl font-bold text-cyan-400">Vipul</span>
            <span className="text-1xl gap-1 ">Harsh</span>
          </h1>
          <Social/>
        </div>
      </div>
    </header>
  );
};

export default Header;
