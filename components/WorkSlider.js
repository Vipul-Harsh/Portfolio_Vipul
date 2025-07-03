import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const workSlides = {
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
      path: "/thimbb4.jpeg",
      link: "https://github.com/Vipul-Harsh/EmailWriter",
    },
    {
      title: "title",
      path: "/thumbb5.jpeg",
      link: "https://github.com/Vipul-Harsh/JAVA_PROJECT",
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
};

const WorkSlider = () => {
  // Group images into chunks of 4
  const chunkSize = 4;
  const chunkedImages = [];
  for (let i = 0; i < workSlides.images.length; i += chunkSize) {
    chunkedImages.push(workSlides.images.slice(i, i + chunkSize));
  }

  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {chunkedImages.map((group, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {group.map((image, ind) => (
              <div
                key={ind}
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
              >
                <div className="flex items-center justify-center relative overflow-hidden">
                  <Image src={image.path} width={500} height={300} alt=" " />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                  <div className="absolute bottom-0 translate-y-full group-hover:translate-y-0 group-hover:xl:-translate-x-20 transition-all duration-300 flex justify-center items-center gap-2">
                    <a
                      href={image.link}
                      target="_blank"
                      style={{ textDecoration: "none" }}
                      className="flex justify-center items-center gap-2"
                    >
                      <div className="text-[18px]">Project</div>
                      <div className="text-[18px]">Link</div>
                      <div className="text-[18px]">
                        <BsArrowRight />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
