"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  text?: string;
}

const LoadingSpinner = ({
  size = "md",
  className = "",
  text = "Loading..."
}: LoadingSpinnerProps) => {
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

  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {prefersReducedMotion ? (
        // Static loading indicator for reduced motion users
        <div
          className={`border-2 border-accent/30 border-t-accent rounded-full ${sizeClasses[size]}`}
          aria-hidden="true"
        />
      ) : (
        // Animated loading spinner for users who allow motion
        <motion.div
          className={`border-2 border-accent/30 border-t-accent rounded-full ${sizeClasses[size]}`}
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
          aria-hidden="true"
        />
      )}
      {text && (
        <p className="mt-3 text-sm text-text-muted" aria-live="polite">
          {text}
        </p>
      )}
      <span className="sr-only">Loading content, please wait</span>
    </div>
  );
};

export default LoadingSpinner;
