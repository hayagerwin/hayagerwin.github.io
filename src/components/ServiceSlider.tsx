"use client";
// icons
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {
  RiAppsLine,
  RiComputerLine,
  RiFileTextLine,
  RiLayoutMasonryLine,
  RiShoppingCartLine,
} from "react-icons/ri";
import { RxArrowTopRight } from "react-icons/rx";

const serviceData = [
  {
    icon: <RiComputerLine />,
    title: "Website Development",
    description:
      "Crafting websites with HTML, CSS, JavaScript, and other technologies.",
  },
  {
    icon: <RiAppsLine />,
    title: "Web App Development",
    description: "Building web apps with intuitive UI and functionalities.",
  },
  {
    icon: <RiShoppingCartLine />,
    title: "E-commerce Solutions",
    description: "Developing online stores with secure payment gateways.",
  },
  {
    icon: <RiFileTextLine />,
    title: "Content Management Systems (CMS)",
    description: "Customizing CMS for content updates.",
  },
  {
    icon: <RiLayoutMasonryLine />,
    title: "Responsive Web Design",
    description:
      "Crafting websites that dynamically adapt to different devices.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="group flex cursor-pointer gap-x-6 rounded-lg bg-secondary/30 bg-opacity-15 px-6 py-8 transition-all duration-300 hover:bg-secondary/60 hover:bg-opacity-15 sm:flex-col sm:gap-x-0 md:max-h-[85%]">
              {/* Icon */}
              <div className="mb-4 text-4xl text-accent">{item.icon}</div>
              {/* Title */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal ">
                  {item.description}
                </p>
              </div>
              {/* Arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="transition-all duration-300 group-hover:rotate-45 group-hover:text-accent" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
