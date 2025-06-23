"use client";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { useEffect, useState } from "react";

const ProjectsBtn = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="mx-auto">
      <Link
        href={"/projects"}
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group hover:shadow-glow transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-full"
        aria-label="View my projects - Explore my portfolio of web development work"
      >
        <Image
          src={"/rounded-text.png"}
          width={141}
          height={148}
          alt=""
          className={`w-full h-full max-w-[141px] max-h-[148px] group-hover:brightness-110 transition-all duration-300 ${
            prefersReducedMotion ? '' : 'animate-spin-slow'
          }`}
          aria-hidden="true"
        />
        <HiArrowRight
          className="absolute text-4xl text-accent group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300"
          aria-hidden="true"
        />
        <span className="sr-only">View Projects</span>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
