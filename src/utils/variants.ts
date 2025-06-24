// Check for reduced motion preference
const prefersReducedMotion = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  return false;
};

export const fadeIn = (
  direction: "up" | "down" | "left" | "right",
  delay: number,
) => {
  const reducedMotion = prefersReducedMotion();

  return {
    hidden: {
      y: reducedMotion ? 0 : (direction === "up" ? 40 : direction === "down" ? -40 : 0),
      opacity: reducedMotion ? 1 : 0,
      x: reducedMotion ? 0 : (direction === "left" ? 40 : direction === "right" ? -40 : 0),
      transition: {
        type: "tween",
        duration: reducedMotion ? 0 : 0.6,
        delay: reducedMotion ? 0 : delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: reducedMotion ? 0 : 0.6,
        delay: reducedMotion ? 0 : delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };
};

export const bounceIn = (direction: "up" | "down" | "left" | "right") => {
  const reducedMotion = prefersReducedMotion();

  return {
    hidden: {
      y: reducedMotion ? 0 : (direction === "up" ? 40 : direction === "down" ? -40 : 0),
      opacity: reducedMotion ? 1 : 0,
      x: reducedMotion ? 0 : (direction === "left" ? 40 : direction === "right" ? -40 : 0),
      transition: {
        type: reducedMotion ? "tween" : "spring",
        duration: reducedMotion ? 0 : 0.8,
        bounce: reducedMotion ? 0 : 0.3,
        delay: reducedMotion ? 0 : 0.1,
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: reducedMotion ? "tween" : "spring",
        duration: reducedMotion ? 0 : 0.8,
        bounce: reducedMotion ? 0 : 0.3,
        delay: reducedMotion ? 0 : 0.1,
      },
    },
  };
};
