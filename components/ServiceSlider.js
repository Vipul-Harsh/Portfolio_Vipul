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

const serviceData = [
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

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 3, spaceBetween: 15 },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,0.15)] h-[280px] sm:h-[340px] rounded-lg px-6 py-8 flex flex-col justify-between group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            <div className="text-accent mb-4 text-4xl">{item.icon}</div>
            <div className="flex-1">
              <div className="text-lg font-semibold mb-2">{item.title}</div>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
            <div className="text-2xl text-accent mt-4">
              <RxArrowTopRight />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
