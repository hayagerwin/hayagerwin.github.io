"use client";
import { Bulb, Circles, Projects, Header } from "@/components";

const Work = () => {
  return (
    <div className="relative h-full" role="main" aria-label="Projects Portfolio">
      {/* Skip Links for Accessibility */}
      <div className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50">
        <a
          href="#projects-content"
          className="btn-primary text-sm px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
        >
          Skip to Projects
        </a>
        <a
          href="#project-showcase"
          className="btn-secondary text-sm px-4 py-2 rounded-md ml-2 focus:outline-none focus:ring-2 focus:ring-accent/50"
        >
          Skip to Project Showcase
        </a>
      </div>

      <Header />
      <div className="flex h-full items-center">
        <Circles />
        <Projects />
        <Bulb />
      </div>
    </div>
  );
};

export default Work;
