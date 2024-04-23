"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { bounceIn, fadeIn } from "@/utils/variants";
import { Project, projectData } from "@/data/projects";
import Link from "next/link";
import { FaAnglesRight } from "react-icons/fa6";

const ProjectCollection = () => {
  const [isNextProjectHovered, setIsNextProjectHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const project: Project | undefined = projectData.find(
    (item) => item.slug === "lynn-villamor-dental-clinic",
  );

  const currentIndex: number = projectData.findIndex(
    (item) => item.slug === "lynn-villamor-dental-clinic",
  );
  const nextIndex: number = (currentIndex + 1) % projectData.length;

  if (!project) {
    return (
      <div className="page flex h-full w-full items-center justify-center">
        <div className="h4 text-center">Project not found</div>
      </div>
    );
  }

  return (
    <div className="page h-full">
      <div className="relative h-auto">
        {/* Header */}
        <div className="relative mx-8 mt-24 flex flex-col md:mx-0 md:mt-0 md:h-full xl:mx-60">
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="relative h-auto w-full md:h-[75vh]"
          >
            <Image
              src={project.cover}
              alt={project.title}
              width={1920}
              height={1080}
              className="relative inset-0 bottom-0 left-0 right-0 top-0 h-[65vw] w-full rounded-3xl object-cover md:absolute md:h-full md:rounded-none md:rounded-b-3xl"
            />
          </motion.div>
        </div>
        {/* Title */}
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mx-8 mt-12 text-white lg:mx-24 xl:mx-60"
        >
          <div>
            <div className="flex items-baseline">
              <h2 className="h2 m-0 w-full text-left">{project.title}</h2>
            </div>
            <hr className="mb-0 mt-3 w-full" />
          </div>
        </motion.div>
        {/* Intro */}
        <motion.div
          variants={fadeIn("down", 0.8)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mx-8 my-6 flex flex-col justify-between md:flex-row lg:mx-24 xl:mx-60"
        >
          {/* Project Data */}
          <div className="w-full pr-0 md:w-[50%] md:pr-6">
            <table className="w-full [&>tbody>tr>td]:pb-6 [&>tbody>tr>td]:pr-6 [&>tbody>tr>td]:align-top">
              <tbody>
                <tr>
                  <td>
                    <h6 className="h6">Category</h6>
                  </td>
                  <td>
                    <ul>
                      <li>Web Development</li>
                      <li>{project.category}</li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td>
                    <h6 className="h6">Year</h6>
                  </td>
                  <td>
                    <ul>
                      <li>{project.year}</li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td>
                    <h6 className="h6">Team</h6>
                  </td>
                  <td>
                    <ul>
                      {project.team.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td>
                    <h6 className="h6">Client</h6>
                  </td>
                  <td>
                    <ul>
                      {project.client.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Project Description */}
          <div className="flex w-full flex-col items-center pl-0 md:w-[50%] md:pl-6">
            <p
              className={`mb-1 ${
                !isExpanded ? "line-clamp-3 md:line-clamp-none" : ""
              }`}
            >
              {project.description}
            </p>
            <button
              onClick={toggleExpand}
              className="rounded-3xl border-2 border-solid border-white/60 px-3 py-1 text-sm text-white/60 md:hidden"
            >
              {isExpanded ? "See Less" : "See More"}
            </button>
          </div>
        </motion.div>
        {/* Content */}
        <div className="mx-8 text-xl lg:mx-24 xl:mx-60">
          {project.slides.map((item, index) => (
            <div key={index} className="mb-12 text-center">
              <motion.h4
                variants={bounceIn("up")}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="h4"
              >
                {item.page}
              </motion.h4>
              {item.images.map((image, index) => (
                <motion.div
                  variants={bounceIn("up")}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  key={index}
                  className="mb-6 flex"
                >
                  <Image
                    src={image}
                    alt=""
                    width={1920}
                    height={1080}
                    className="w-full"
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
        {/* Project Footer */}
        <div className="mx-8 mb-16 sm:mb-0 lg:mx-24 xl:mx-60">
          <div className="w-full pb-20 pt-6 xl:pb-6">
            <hr />
            <Link href={`/projects/${projectData[nextIndex].slug}`}>
              <div
                className="text-base font-bold uppercase text-white no-underline md:text-xl"
                onMouseEnter={() => setIsNextProjectHovered(true)}
                onMouseLeave={() => setIsNextProjectHovered(false)}
              >
                <div className="flex justify-between py-6">
                  <div className="flex items-center ">
                    <motion.div
                      initial={{ x: -35, opacity: 0 }}
                      animate={{
                        x: isNextProjectHovered ? 0 : -35,
                        opacity: isNextProjectHovered ? 1 : 0,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <FaAnglesRight />
                    </motion.div>
                    <motion.div
                      initial={{ x: -15 }}
                      animate={{ x: isNextProjectHovered ? 10 : -15 }}
                      transition={{ duration: 0.4 }}
                    >
                      Next Project
                    </motion.div>
                  </div>

                  <div className="text-right">
                    <h4 className="">{projectData[nextIndex].title}</h4>
                    <p className="text-sm font-light text-white/60">
                      {projectData[nextIndex].category}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCollection;
