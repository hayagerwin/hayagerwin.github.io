"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import { FaAnglesRight } from "react-icons/fa6";
import { useState } from "react";
import { projectData } from "@/data/projects";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  return (
    <section
      className="z-30 flex h-full w-full flex-col-reverse items-center justify-center px-4 pt-16 sm:pt-20 lg:flex-row lg:pt-32 xl:overflow-hidden"
      aria-label="Featured projects showcase"
    >
      {/* LEFT */}
      <div className="relative bottom-0 left-0 hidden h-full w-full xl:block">
        {/* Image Group */}
        {projectData.map((project, index) => (
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            key={index}
            className={`absolute h-full w-full overflow-hidden rounded-tr-3xl`}
          >
            <motion.div
              initial={{ scale: 1, opacity: 0 }}
              animate={{
                scale: hoveredIndex === index ? 1.1 : 1,
                opacity: hoveredIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.4 }}
              className="relative h-full w-full"
            >
              <Image
                src={project.cover}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                width={1920}
                height={1080}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
      {/* RIGHT */}
      <div className="h-full w-full flex-col px-4 sm:px-6 lg:px-32">
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <div className="flex items-baseline justify-between">
            <div>
              <h2 className="h3 m-0 text-left">
                Featured Projects
              </h2>
              <p className="text-text-muted mt-1 text-sm">Showcasing my latest work</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent text-xl font-bold">{projectData.length}</span>
              <span className="text-text-muted text-xs">Projects</span>
            </div>
          </div>
          <hr className="border-accent/30 my-4" />
        </motion.div>
        <ul
          className="h-auto lg:h-full"
          role="list"
          aria-label="Project list"
        >
          {projectData.map((project, index) => (
            <motion.li
              key={index}
              variants={fadeIn("left", 0.2 + index * 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              role="listitem"
            >
              <div
                className="group flex items-center rounded-xl p-3 sm:p-4 transition-all duration-300 hover:bg-dark-secondary/30 active:bg-dark-secondary/50"
                onMouseEnter={() => setHoveredIndex(index)}
                onTouchStart={() => setHoveredIndex(index)}
                // onMouseLeave={() => setHoveredIndex(-1)}
              >
                <motion.div
                  initial={{ x: -35, opacity: 0 }}
                  animate={{
                    x: hoveredIndex === index ? 0 : -35,
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <FaAnglesRight />
                </motion.div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="w-full focus-visible rounded-lg"
                  aria-label={`View ${project.title} project details`}
                >
                  <div className="flex w-full flex-col justify-between py-3 sm:py-4 sm:flex-row sm:items-center">
                    <div className="flex-1">
                      <motion.h4
                        initial={{ x: -15 }}
                        animate={{ x: hoveredIndex === index ? 10 : -15 }}
                        transition={{ duration: 0.3 }}
                        className="text-base font-bold text-text-primary sm:text-lg lg:text-xl xl:text-2xl mb-1"
                      >
                        {project.title}
                      </motion.h4>
                      <p className="text-xs sm:text-sm text-text-muted mb-2 sm:mb-0">
                        {project.category}
                      </p>
                      <div className="flex items-center gap-2 mb-2 sm:mb-0">
                        <span className={`inline-block w-2 h-2 rounded-full ${
                          project.status === 'deployed' ? 'bg-success' :
                          project.status === 'in-development' ? 'bg-warning' :
                          'bg-accent'
                        }`}></span>
                        <span className="text-xs text-text-muted capitalize">
                          {project.status.replace('-', ' ')}
                        </span>
                        {project.liveUrl && (
                          <span className="text-xs text-success ml-2">• Live Demo</span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end">
                      <span className="text-sm text-accent font-medium">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
