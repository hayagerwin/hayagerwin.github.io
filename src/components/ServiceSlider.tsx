"use client";
import { useState, useEffect } from "react";
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
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div
      className="w-full"
      role="region"
      aria-label="Services offered"
    >
      {/* Mobile: Stack vertically, Desktop: Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 h-auto">
        {serviceData.map((item, index) => {
          return (
            <div
              key={index}
              className={`card-glow group flex cursor-pointer flex-col h-full justify-between min-h-[350px] ${
                prefersReducedMotion ? '' : 'animate-fade-in-up'
              }`}
              style={{
                animationDelay: prefersReducedMotion ? '0s' : `${index * 0.1}s`
              }}
              tabIndex={0}
              role="article"
              aria-labelledby={`service-title-${index}`}
            >
              {/* Icon */}
              <div className={`mb-4 text-5xl text-accent ${
                prefersReducedMotion ? '' : 'group-hover:scale-110 transition-transform duration-300'
              }`} aria-hidden="true">
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  id={`service-title-${index}`}
                  className={`h5 mb-3 ${
                    prefersReducedMotion ? '' : 'group-hover:text-accent transition-colors duration-300'
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4" role="list" aria-label="Technologies used">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-medium"
                      role="listitem"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-end">
                <RxArrowTopRight
                  className={`text-2xl text-text-muted ${
                    prefersReducedMotion
                      ? 'group-hover:text-accent'
                      : 'group-hover:text-accent group-hover:rotate-45 group-hover:scale-125 transition-all duration-300'
                  }`}
                  aria-hidden="true"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceSlider;
