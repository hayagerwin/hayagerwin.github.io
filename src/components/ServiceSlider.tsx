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
    title: "Full Stack Development",
    description:
      "End-to-end web application development using React, Next.js, Node.js, and modern databases. From concept to deployment with scalable architecture.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript"],
  },
  {
    icon: <RiAppsLine />,
    title: "Progressive Web Apps",
    description: "Building fast, reliable, and engaging web applications with offline capabilities and native app-like experiences.",
    technologies: ["PWA", "Service Workers", "Web APIs"],
  },
  {
    icon: <RiShoppingCartLine />,
    title: "E-commerce Solutions",
    description: "Complete online store development with secure payment processing, inventory management, and admin dashboards.",
    technologies: ["Stripe", "PayPal", "MongoDB", "Express"],
  },
  {
    icon: <RiFileTextLine />,
    title: "Healthcare Applications",
    description: "HIPAA-compliant healthcare platforms with patient management, appointment scheduling, and secure data handling.",
    technologies: ["HIPAA", "PostgreSQL", "Security"],
  },
  {
    icon: <RiLayoutMasonryLine />,
    title: "Responsive Design",
    description:
      "Mobile-first, responsive web designs that provide optimal user experience across all devices and screen sizes.",
    technologies: ["Tailwind CSS", "Mobile-First", "UX/UI"],
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
      className="h-[400px] sm:h-[450px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="card-glow group flex cursor-pointer flex-col h-full justify-between">
              {/* Icon */}
              <div className="mb-4 text-5xl text-accent group-hover:scale-110 transition-transform duration-300">{item.icon}</div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="h5 mb-3 group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-end">
                <RxArrowTopRight className="text-2xl text-text-muted group-hover:text-accent group-hover:rotate-45 group-hover:scale-125 transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
