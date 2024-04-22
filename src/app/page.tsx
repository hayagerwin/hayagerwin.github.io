"use client";
import { Avatar, ParticlesContainer, ProjectsBtn } from "@/components";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

const Home = () => {
  return (
    <div className="h-full">
      {/* Particles Effect */}
      <ParticlesContainer />
      <div className="h-full w-full">
        <div className="container mx-auto flex h-full flex-col justify-center text-center xl:pt-40 xl:text-left">
          {/* Title  */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h4 sm:h1 z-30"
          >
            From <span className="text-accent">Concept to Code </span> <br />{" "}
            Discover <span className="text-highlight">My Creations</span>
          </motion.h1>
          {/* Subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="z-30 mx-auto mb-10 max-w-sm text-sm sm:text-base xl:mx-0 xl:mb-16 xl:max-w-xl"
          >
            Dive into a collection of my web creations, where ideas evolve into
            digital realities. From concept to code, explore the journey behind
            each project and discover the innovation within.
          </motion.p>
          {/* Button */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="relative flex justify-center xl:hidden"
          >
            <ProjectsBtn />
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 h-full w-[1200px]">
        {/* BG Image */}
        <div className="translate-z-0 absolute h-full w-full bg-none mix-blend-color-dodge xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat"></div>
        {/* Avatar Image */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute -bottom-32 h-full max-h-[678px] w-full max-w-[737px] lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
