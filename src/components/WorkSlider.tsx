"use client";
// icons
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Lucky Star Grocery Store",
          path: "/thumb1.png",
        },
        {
          title: "title",
          path: "/thumb2.png",
        },
        {
          title: "title",
          path: "/thumb2.png",
        },
        {
          title: "Lucky Star Grocery Store",
          path: "/thumb1.png",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[488px]">
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div key={index} className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* Image */}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#2652a3] to-[#22bdb0] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* Title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* Title Part 1 */}
                          <div className="delay-100">LIVE</div>
                          {/* Title Part 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROJECT</div>
                          {/* Icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
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
