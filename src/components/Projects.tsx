"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { projectData } from "@/data/projects";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <section
      className="z-30 flex h-screen w-full items-center justify-center"
      aria-label="Featured projects showcase"
    >
      {/* Two-column layout container */}
      <div className="flex h-full w-full max-w-7xl mx-auto">

        {/* LEFT COLUMN - Project Showcase Image */}
        <div className="relative hidden lg:flex lg:w-1/2 items-center justify-center p-8">
          <div className="relative w-full h-3/4 max-w-lg overflow-hidden rounded-2xl shadow-2xl">
            {projectData.map((project, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  scale: hoveredIndex === index ? 1 : 0.95,
                }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.5,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src={project.cover}
                  alt={`${project.title} project preview`}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                  priority={index === 0}
                />
                {/* Overlay with project status */}
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                    project.status === 'deployed' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                    project.status === 'in-development' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                    'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${
                      project.status === 'deployed' ? 'bg-green-400' :
                      project.status === 'in-development' ? 'bg-yellow-400' :
                      'bg-blue-400'
                    }`}></span>
                    {project.status.replace('-', ' ')}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* RIGHT COLUMN - Project List */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 p-8 lg:pl-12">
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-8"
          >
            <div className="flex items-baseline justify-between mb-2">
              <div>
                <h2 className="h2 m-0 text-left text-text-primary">
                  Featured Projects
                </h2>
                <p className="text-text-muted mt-2 text-base">Showcasing innovative web solutions</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent text-2xl font-bold">{projectData.length}</span>
                <span className="text-text-muted text-sm">Projects</span>
              </div>
            </div>
            <div className="w-16 h-1 bg-accent rounded-full mt-4"></div>
          </motion.div>
          <div className="space-y-6">
            {projectData.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn("left", 0.2 + index * 0.1)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="group"
                onMouseEnter={() => setHoveredIndex(index)}
                onTouchStart={() => setHoveredIndex(index)}
                onFocus={() => setHoveredIndex(index)}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="block p-6 rounded-2xl border border-dark-secondary/30 bg-dark-secondary/10 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-dark-secondary/20 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
                  aria-label={`View ${project.title} project details`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <motion.div
                          initial={{ x: -10, opacity: 0 }}
                          animate={{
                            x: hoveredIndex === index ? 0 : -10,
                            opacity: hoveredIndex === index ? 1 : 0,
                          }}
                          transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                          className="text-accent"
                        >
                          <FaAnglesRight />
                        </motion.div>
                        <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-sm text-text-muted mb-3">
                        {project.category}
                      </p>
                      <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">
                        {project.description.overview}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2 ml-4">
                      <span className="text-sm text-accent font-medium">
                        {project.year}
                      </span>
                      <span className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'deployed' ? 'bg-green-500/20 text-green-300' :
                        project.status === 'in-development' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-blue-500/20 text-blue-300'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          project.status === 'deployed' ? 'bg-green-400' :
                          project.status === 'in-development' ? 'bg-yellow-400' :
                          'bg-blue-400'
                        }`}></span>
                        {project.status.replace('-', ' ')}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <FaCode className="text-accent text-sm" />
                        <span className="text-xs text-text-muted">
                          {project.technologies.frontend.slice(0, 2).join(', ')}
                          {project.technologies.frontend.length > 2 && ` +${project.technologies.frontend.length - 2}`}
                        </span>
                      </div>
                      {project.liveUrl && (
                        <div className="flex items-center gap-2">
                          <FaExternalLinkAlt className="text-success text-sm" />
                          <span className="text-xs text-success">Live Demo</span>
                        </div>
                      )}
                    </div>
                    <motion.div
                      initial={{ x: 0 }}
                      animate={{ x: hoveredIndex === index ? 5 : 0 }}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                      className="text-accent"
                    >
                      <FaAnglesRight />
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
