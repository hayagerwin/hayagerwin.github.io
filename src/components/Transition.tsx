"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Transition = () => {
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

  const transitionVariants = {
    initial: {
      x: prefersReducedMotion ? "0%" : "100%",
      width: prefersReducedMotion ? "0%" : "100%",
    },
    animate: {
      x: "0%",
      width: "0%",
    },
    exit: {
      x: prefersReducedMotion ? "0%" : ["0%", "100%"],
      width: prefersReducedMotion ? "0%" : ["0%", "100%"],
    },
  };

  const getTransitionProps = (delay: number) => ({
    delay: prefersReducedMotion ? 0 : delay,
    duration: prefersReducedMotion ? 0 : 0.6,
    ease: "easeInOut"
  });

  if (prefersReducedMotion) {
    return null; // Skip transition entirely for reduced motion users
  }

  return (
    <>
      <motion.div
        className="bg-slider1 fixed bottom-0 right-full top-0 z-30 h-screen w-screen"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={getTransitionProps(0.2)}
        aria-hidden="true"
      />
      <motion.div
        className="bg-slider2 fixed bottom-0 right-full top-0 z-20 h-screen w-screen"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={getTransitionProps(0.4)}
        aria-hidden="true"
      />
      <motion.div
        className="bg-slider3 fixed bottom-0 right-full top-0 z-10 h-screen w-screen"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={getTransitionProps(0.6)}
        aria-hidden="true"
      />
    </>
  );
};

export default Transition;
