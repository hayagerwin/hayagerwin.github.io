"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface DynamicTypewriterProps {
  phrases: string[];
  baseText: string;
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  cursorClassName?: string;
}

export const DynamicTypewriter = ({
  phrases,
  baseText,
  className,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 1500,
  cursorClassName,
}: DynamicTypewriterProps) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
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

  useEffect(() => {
    if (prefersReducedMotion) {
      // Show the first phrase immediately for users who prefer reduced motion
      setCurrentText(baseText + phrases[0]);
      return;
    }

    const currentPhrase = phrases[currentPhraseIndex];
    const fullText = baseText + currentPhrase;

    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        // Delete back to base text
        if (currentText.length > baseText.length) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        // Type the current phrase
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        } else {
          setIsPaused(true);
        }
      }
    }, isPaused ? pauseDuration : isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentPhraseIndex,
    isDeleting,
    isPaused,
    phrases,
    baseText,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    prefersReducedMotion,
  ]);

  // Parse the text to apply styling
  const renderStyledText = (text: string) => {
    // Split by common words that should be accented
    const parts = text.split(/(\bConcept\b|\bCode\b|\bReality\b|\bInnovation\b|\bSolutions\b|\bExperience\b)/g);
    
    return parts.map((part, index) => {
      const isAccentWord = /^(Concept|Code|Reality|Innovation|Solutions|Experience)$/.test(part);
      return (
        <span
          key={index}
          className={isAccentWord ? "text-accent" : "text-white"}
        >
          {part}
        </span>
      );
    });
  };

  return (
    <div
      className={cn(
        "text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-center",
        className
      )}
      role="heading"
      aria-level={1}
      aria-live="polite"
    >
      <div className="flex items-center justify-center flex-wrap">
        <span>{renderStyledText(currentText)}</span>
        <span
          className={cn(
            "inline-block w-[3px] h-[0.8em] bg-accent ml-1 animate-pulse",
            prefersReducedMotion && "opacity-0",
            cursorClassName
          )}
          aria-hidden="true"
        />
      </div>
      {/* Screen reader friendly version */}
      <span className="sr-only">
        From Concept to Code - Dynamic portfolio showcase
      </span>
    </div>
  );
};
