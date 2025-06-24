"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

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
    try {
      if (isInView) {
        if (prefersReducedMotion) {
          // Skip animation for users who prefer reduced motion
          animate(
            "span",
            {
              display: "inline-block",
              opacity: 1,
              width: "fit-content",
            },
            {
              duration: 0,
              delay: 0,
            }
          );
        } else {
          animate(
            "span",
            {
              display: "inline-block",
              opacity: 1,
              width: "fit-content",
            },
            {
              duration: 0.3,
              delay: stagger(0.1),
              ease: "easeInOut",
            }
          );
        }
      }
    } catch (error) {
      console.error("Error in typewriter animation:", error);
      // Fallback: show text immediately without animation
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0,
          delay: 0,
        }
      );
    }
  }, [isInView, prefersReducedMotion, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(
                    `text-white opacity-0 hidden`,
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };

  // Get full text for screen readers
  const fullText = words.map(word => word.text).join(" ");

  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
      role="heading"
      aria-level={1}
      aria-live="polite"
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: prefersReducedMotion ? 0 : 1,
        }}
        transition={{
          duration: 0.8,
          repeat: prefersReducedMotion ? 0 : Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-accent",
          cursorClassName
        )}
        aria-hidden="true"
      ></motion.span>
      {/* Screen reader friendly version */}
      <span className="sr-only">{fullText}</span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

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

  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(`text-white `, word.className)}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  // Get full text for screen readers
  const fullText = words.map(word => word.text).join(" ");

  return (
    <div className={cn("flex space-x-1 my-6", className)} role="heading" aria-level={1} aria-live="polite">
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: prefersReducedMotion ? "fit-content" : "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: prefersReducedMotion ? 0 : 2,
          ease: "linear",
          delay: prefersReducedMotion ? 0 : 1,
        }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWords()}{" "}
        </div>{" "}
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: prefersReducedMotion ? 0 : 1,
        }}
        transition={{
          duration: 0.8,
          repeat: prefersReducedMotion ? 0 : Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-accent",
          cursorClassName
        )}
        aria-hidden="true"
      ></motion.span>
      {/* Screen reader friendly version */}
      <span className="sr-only">{fullText}</span>
    </div>
  );
};
