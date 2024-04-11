"use client";
import { Bulb, Circles, Projects } from "@/components";

const Work = () => {
  return (
    <div className="flex h-full items-center bg-primary/60 py-36">
      <Circles />
      <Projects />
      <Bulb />
    </div>
  );
};

export default Work;
