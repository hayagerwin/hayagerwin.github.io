"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  delay = 0,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  delay?: number;
}) => {
  const [scope, animate] = useAnimate();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  let wordsArray = words.split(" ");

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

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    try {
      if (prefersReducedMotion) {
        // Skip animation for users who prefer reduced motion
        animate(
          "span",
          {
            opacity: 1,
            filter: "none",
          },
          {
            duration: 0,
            delay: 0,
          }
        );
      } else {
        const timer = setTimeout(() => {
          animate(
            "span",
            {
              opacity: 1,
              filter: filter ? "blur(0px)" : "none",
            },
            {
              duration: duration ? duration : 1,
              delay: stagger(0.2),
            }
          );
        }, delay * 1000);

        cleanup = () => clearTimeout(timer);
      }
    } catch (error) {
      console.error("Error in text animation:", error);
      // Fallback: show text immediately without animation
      animate(
        "span",
        {
          opacity: 1,
          filter: "none",
        },
        {
          duration: 0,
          delay: 0,
        }
      );
    }

    return cleanup;
  }, [prefersReducedMotion, filter, duration, delay, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-white opacity-0"
              style={{
                filter: filter && !prefersReducedMotion ? "blur(10px)" : "none",
              }}
              aria-hidden={idx > 0} // Only first word is read by screen readers initially
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)} role="heading" aria-level={1} aria-live="polite">
      <div className="mt-4">
        <div className="text-white text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
      {/* Screen reader friendly version */}
      <span className="sr-only">{words}</span>
    </div>
  );
};
