"use client";
import { Avatar, Circles } from "@/components";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiLaravel,
} from "react-icons/si";
import CountUp from "react-countup";
import { FaPhp } from "react-icons/fa6";

//  Data
interface SkillInfo {
  title: string;
  icons: JSX.Element[];
}

interface AwardInfo {
  title: string;
  stage: string;
}

interface ExperienceInfo {
  title: string;
  stage: string;
}

interface CredentialInfo {
  title: string;
  stage: string;
}

type InfoType = SkillInfo | AwardInfo | ExperienceInfo | CredentialInfo;

interface AboutDataItem {
  title: string;
  info: InfoType[];
}

const aboutData: AboutDataItem[] = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaPhp key="php" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiLaravel key="laravel" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <SiAdobeillustrator key="illustrator" />,
          <SiAdobephotoshop key="photoshop" />,
        ],
      },
    ],
  },
  {
    title: "certificate",
    info: [
      {
        title: "Google I/O 2018 Extended Cavite",
        stage: "2018",
      },
      {
        title: "Google Cloud Next'18 Extended Conferance Manila",
        stage: "2018",
      },
      {
        title: "Best Website Award Under Web Development Course",
        stage: "2018",
      },
      {
        title: "Participant in Google Games Southeast Asia 2018 - Manila",
        stage: "2018",
      },
      {
        title: "Champion C++ Programming Challenge (CvSU-SC)",
        stage: "2017",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Intern - Mater Dei Academy Tagaytay",
        stage: "2019",
      },
      {
        title: "Web Developer - Freelance",
        stage: "2020 - 2022",
      },
      {
        title: "Rav Prints - Freelance",
        stage: "2022 - 2024",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Dasmariñas Elementary School",
        stage: "2005 - 2011",
      },
      {
        title: "Langkaan II National High School",
        stage: "2011 - 2015",
      },
      {
        title: "BS in Computer Science - Cavite State University",
        stage: "2015 - 2020",
      },
    ],
  },
];

const renderStageOrIcons = (item: InfoType) => {
  if ("stage" in item) {
    // If it's an AwardInfo, ExperienceInfo, or CredentialInfo
    return <div>{item.stage}</div>;
  } else {
    // If it's a SkillInfo
    return (
      <div className="flex gap-x-4">
        {item.icons?.map((icon, iconIndex) => {
          return (
            <div key={iconIndex} className="text-2xl text-white">
              {icon}
            </div>
          );
        })}
      </div>
    );
  }
};

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="absolute -left-[370px] bottom-0 hidden xl:flex"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto mb-48 flex h-full flex-col items-center xl:flex-row">
        {/* Text */}
        <div className="flex flex-1 flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h4"
          >
            Crafting <span className="text-accent">Digital Experiences</span>
            <br />
            with Purpose
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-6 max-w-[500px] px-2 text-sm sm:text-base xl:mx-0 xl:mb-12 xl:px-0"
          >
            With over 3 years of full-stack web development experience,
            I&apos;ve crafted dynamic web applications and intuitive user
            interfaces. My freelance journey has led me to diverse digital
            projects, where I&apos;ve collaborated with clients to bring their
            visions to life.
          </motion.p>
          {/* Counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-8 hidden md:flex md:max-w-xl xl:mx-0 xl:max-w-none"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* Experience */}
              <div className="relative flex-1 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-white/10">
                <div className="mb-2 text-2xl font-extrabold text-highlight xl:text-4xl">
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div className="max-w-[100px] text-xs uppercase leading-[1.4] tracking-[1px]">
                  Years of Experience
                </div>
              </div>
              {/* Clients */}
              <div className="relative flex-1 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-white/10">
                <div className="mb-2 text-2xl font-extrabold text-highlight xl:text-4xl">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="max-w-[100px] text-xs uppercase leading-[1.4] tracking-[1px]">
                  Satisfied Clients
                </div>
              </div>
              {/* Projects */}
              <div className="relative flex-1">
                <div className="mb-2 text-2xl font-extrabold text-highlight xl:text-4xl">
                  <CountUp start={0} end={20} duration={5} /> +
                </div>
                <div className="max-w-[100px] text-xs uppercase leading-[1.4] tracking-[1px]">
                  Finished Projects
                </div>
              </div>
              {/* Awards */}
              <div className="relative flex-1">
                {/* <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Winning Awards</div> */}
              </div>
            </div>
          </motion.div>
        </div>
        {/* Info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex h-[480px] w-full flex-col xl:max-w-[48%]"
        >
          <div className="mx-auto mb-4 flex gap-x-4 xl:mx-0 xl:gap-x-8">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } relative cursor-pointer capitalize after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-8 after:bg-white xl:text-lg`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col items-center gap-y-2 py-2 xl:items-start xl:gap-y-4 xl:py-6">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex max-w-max flex-1 flex-col items-center gap-x-2 text-white/60 md:flex-row"
                >
                  {/* Title */}
                  <div className="mb-2 font-light md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  {/* Stage or Icons */}
                  {renderStageOrIcons(item)}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
