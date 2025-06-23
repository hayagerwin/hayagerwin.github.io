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
        <div className="container mx-auto flex h-full flex-col justify-center px-4 py-8 text-center xl:pt-20 xl:text-left">
          {/* Title  */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 z-30 text-center xl:text-left"
          >
            From <span className="text-accent">Concept</span> to{" "}
            <span className="text-accent">Code</span>
            <br />
            Crafting <span className="text-highlight">Digital Excellence</span>
          </motion.h1>
          {/* Subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-large z-30 mx-auto mb-8 max-w-lg text-center xl:mx-0 xl:mb-12 xl:max-w-xl xl:text-left"
          >
            Passionate Full Stack Web Developer with{" "}
            <span className="text-accent font-semibold">3+ years</span> of experience crafting
            exceptional digital solutions. Specializing in{" "}
            <span className="text-accent font-semibold">React</span>,{" "}
            <span className="text-accent font-semibold">Next.js</span>, and modern web technologies.
            <br />
            <span className="text-text-muted text-sm">
              From e-commerce platforms to healthcare applications, I transform complex business requirements
              into intuitive, scalable, and performant web experiences.
            </span>
          </motion.p>
          {/* Button */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="relative flex justify-center"
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
