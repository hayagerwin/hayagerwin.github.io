"use client";
import { Bulb, Circles, ServiceSlider } from "@/components";
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="scrollbar-hidden flex h-full items-center overflow-y-scroll bg-primary/60 py-36">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-8 xl:flex-row">
          {/* Text */}
          <div className="mb-4 flex flex-col text-center lg:text-left xl:mb-0 xl:w-[30vw]">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h3 sm:h2 xl:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mx-auto mb-4 max-w-[400px] text-sm sm:text-base lg:mx-0"
            >
              Crafting tailored solutions to precisely meet your unique needs,
              ensuring seamless integration and unparalleled user satisfaction.
            </motion.p>
          </div>
          {/* Slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
