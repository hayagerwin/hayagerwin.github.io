"use client";
import { Bulb, Circles, Projects, Header } from "@/components";

const Work = () => {
  return (
    <div className="relative h-full">
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
