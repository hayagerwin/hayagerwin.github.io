"use client";
import { ProjectsBtn, ErrorBoundary, LoadingSpinner } from "@/components";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { DynamicTypewriter } from "@/components/ui/dynamic-typewriter";
import { Suspense, useState, useEffect } from "react";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError] = useState(false);

  // Enhanced dynamic typewriter data with more engaging phrases
  const typewriterPhrases = [
    "Code",
    "Reality",
    "Innovation",
    "Solutions",
    "Experience",
    "Success",
    "Excellence",
    "Impact"
  ];
  const baseText = "From Concept to ";

  const subtitleText = "Transforming Ideas into Powerful Digital Experiences with Modern Web Technologies";

  useEffect(() => {
    // Simulate loading time for animations to initialize
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (hasError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-white">Something went wrong</h1>
          <p className="text-text-muted">Please refresh the page to try again.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-accent text-dark rounded-md hover:bg-accent/90 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div
        className="min-h-screen h-screen flex items-center justify-center relative overflow-hidden"
        role="main"
        aria-label="Welcome page - Erwin Hayag Portfolio"
      >
        {/* Skip Links for Accessibility */}
        <div className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50">
          <a
            href="#main-content"
            className="btn-primary text-sm px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
          >
            Skip to Main Content
          </a>
          <a
            href="#portfolio-navigation"
            className="btn-secondary text-sm px-4 py-2 rounded-md ml-2 focus:outline-none focus:ring-2 focus:ring-accent/50"
          >
            Skip to Portfolio Navigation
          </a>
        </div>
        {isLoading ? (
          <div className="flex items-center justify-center">
            <LoadingSpinner
              size="lg"
              text="Loading portfolio..."
              className="text-white"
            />
          </div>
        ) : (
          <>
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark via-primary to-dark-secondary opacity-90" aria-hidden="true" />

            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
              <div className="absolute inset-0 bg-grid-pattern bg-repeat opacity-20" />
            </div>

            {/* Main Content Container */}
            <div
              id="main-content"
              className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
              tabIndex={-1}
            >
              <div className="text-center space-y-6 sm:space-y-8 md:space-y-10">
                {/* Main Title with Dynamic Typewriter Effect */}
                <div className="space-y-4 sm:space-y-6">
                  <Suspense fallback={
                    <div className="h-20 flex items-center justify-center">
                      <LoadingSpinner size="md" text="" />
                    </div>
                  }>
                    <DynamicTypewriter
                      phrases={typewriterPhrases}
                      baseText={baseText}
                      className="text-center"
                      typingSpeed={80}
                      deletingSpeed={50}
                      pauseDuration={1500}
                    />
                  </Suspense>

                  {/* Subtitle with Text Generate Effect */}
                  <Suspense fallback={
                    <div className="h-12 flex items-center justify-center">
                      <LoadingSpinner size="sm" text="" />
                    </div>
                  }>
                    <TextGenerateEffect
                      words={subtitleText}
                      className="text-center text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-text-secondary max-w-4xl mx-auto px-2"
                      duration={0.8}
                      delay={3}
                    />
                  </Suspense>
                </div>

                {/* Description */}
                <motion.div
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="max-w-3xl mx-auto space-y-3 sm:space-y-4 px-2"
                  role="region"
                  aria-label="About Erwin Hayag"
                >
                  <p className="text-sm xs:text-base sm:text-lg md:text-xl text-text-muted leading-relaxed">
                    Passionate Full Stack Web Developer with{" "}
                    <span className="text-accent font-semibold" aria-label="3 plus years">3+ years</span> of experience
                    transforming complex business requirements into{" "}
                    <span className="text-highlight font-semibold">intuitive</span>,{" "}
                    <span className="text-highlight font-semibold">scalable</span>, and{" "}
                    <span className="text-highlight font-semibold">performant</span> web experiences.
                  </p>

                  <p className="text-xs xs:text-sm sm:text-base text-text-muted/80">
                    Specializing in <span className="text-accent">React</span>,{" "}
                    <span className="text-accent">Next.js</span>,{" "}
                    <span className="text-accent">TypeScript</span>, and modern web technologies.
                  </p>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                  variants={fadeIn("up", 0.8)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  id="portfolio-navigation"
                  className="pt-6 sm:pt-8 flex justify-center"
                  role="region"
                  aria-label="Portfolio navigation"
                  tabIndex={-1}
                >
                  <Suspense fallback={
                    <div className="h-48 flex items-center justify-center">
                      <LoadingSpinner size="md" text="Loading navigation..." />
                    </div>
                  }>
                    <ProjectsBtn />
                  </Suspense>
                </motion.div>

                {/* Welcome Message */}
                <motion.div
                  variants={fadeIn("up", 1.0)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="pt-6 sm:pt-8 px-4 text-center"
                >
                  <p className="text-xs xs:text-sm text-text-muted/60 max-w-md mx-auto">
                    Welcome to my portfolio • Explore my projects to see what I can create for you
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div
              className="absolute top-4 sm:top-10 left-4 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 bg-accent/10 rounded-full blur-xl animate-pulse-slow"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-4 sm:bottom-10 right-4 sm:right-10 w-24 sm:w-32 h-24 sm:h-32 bg-highlight/10 rounded-full blur-xl animate-pulse-slow"
              style={{ animationDelay: '1s' }}
              aria-hidden="true"
            />
            <div
              className="absolute top-1/2 left-2 sm:left-4 w-12 sm:w-16 h-12 sm:h-16 bg-secondary/10 rounded-full blur-lg animate-pulse-slow"
              style={{ animationDelay: '0.5s' }}
              aria-hidden="true"
            />
          </>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default Home;
