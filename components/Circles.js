import Image from "next/image";

const Circles = () => {
  return <div className="absolute w-[200px] xl:w-[300px] mix-blend-color-dodge -right-16 bottom-0 ">
    <Image src={'/circles.png'} width={'200'} height={'200'} className="w-full h-full  "/>
  </div>;
};

export default Circles;
