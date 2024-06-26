// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Web Designing",
    description: "I am proficient in Web development and can help the organization achieve its goal.",
  },
  {
    icon: <RxPencil2 />,
    title: "Seo Optimization",
    description: "I am Good at increasing online presence by including Seo  content in websites.",
  },
  {
    icon: <RxDesktop />,
    title: "Software engineering",
    description: "With my knack of problem solving i can help organization to make robust softwares.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 3, spaceBetween: 15 },
      }}
      freeMode={true}
      pagination={{
        clickable:true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px]  sm:h-[340px]"
    >
     {
      serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max  rounded-lg px-6 py-8 flex sm:flex-col gap-x-6  sm:gap-x-8 group cursor-pointer hover:bg[rgba(89,65,169,0.15)] transition-all duration-300">
            <div className="text-accent mb-4 text-4xl">{item.icon}</div>
            <div>
              <div>{item.title}</div>
              <p>{item.description}</p>
            </div>
            <div>
              <RxArrowTopRight/>
            </div>
          </div>
        </SwiperSlide>
            
     ))}
    </Swiper>
  );
};

export default ServiceSlider;
