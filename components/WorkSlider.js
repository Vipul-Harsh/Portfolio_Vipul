// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.png",
          link: "",
        },
        {
          title: "title",
          path: "/thumb2.png",
          link: "https://github.com/Vipul-Harsh/Master-Chef",
        },
        {
          title: "title",
          path: "/thumb3.png",
          link: "https://www.swagatpalace.com/",
        },
        {
          title: "title",
          path: "/thumb4.png",
          link: "https://rasmai.in/",
        },
      ],
    },
    // {
    //   images: [

    //   ],
    // },
  ],
};
import Image from "next/image";
// icons
// import {
//   RxCrop,
//   RxPencil2,
//   RxDesktop,
//   RxReader,
//   RxRocket,
//   RxArrowTopRight,
// } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Pagination } from "swiper";

// data
// const serviceData = [
//   {
//     icon: <RxCrop />,
//     title: "Branding",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     icon: <RxPencil2 />,
//     title: "Design",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     icon: <RxDesktop />,
//     title: "Development",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     icon: <RxReader />,
//     title: "Copywriting",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     icon: <RxRocket />,
//     title: "SEO",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
// ];
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px]  sm:h-[480px]"
    >
      {workSlides.slides.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {item.images.map((image, ind) => {
                return (
                  <div
                    key={ind}
                    className="relative rounded-lg  overflow-hidden  flex items-center justify-center group"
                  >
                    <div className=" flex items-center justify-center  relative overflow-hidden">
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt=" "
                      />
                      <div className=" absolute inset-0  bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      <div className=" absolute bottom-0 translate-y-full group-hover:translate-y-0 group-hover:xl:-translate-x-20  transition-all duration-300 flex justify-center items-center gap-2">
                        <a href={image.link} target="_blank" style={{textDecoration:"none"}} className="flex justify-center items-center gap-2">
                          <div className="text-[18px]">Project</div>
                          <div className="text-[18px]">Link</div>
                          <div className="text-[18px]">
                            <BsArrowRight />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
