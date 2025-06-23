"use client";
import { Bulb, Circles, ServiceSlider } from "@/components";
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="flex h-full items-center py-36">
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
              className="h3 xl:mt-6"
            >
              Professional <span className="text-accent">Services</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-base mx-auto mb-4 max-w-[450px] lg:mx-0"
            >
              Delivering comprehensive web development solutions that drive business growth.
              From concept to deployment, I provide end-to-end services tailored to your specific needs.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                Full Stack Development
              </span>
              <span className="bg-success/20 text-success px-3 py-1 rounded-full text-sm font-medium">
                E-commerce Solutions
              </span>
              <span className="bg-highlight/20 text-highlight px-3 py-1 rounded-full text-sm font-medium">
                Healthcare Applications
              </span>
            </motion.div>
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
