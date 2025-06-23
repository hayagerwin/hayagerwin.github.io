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
interface IconsData {
  icon: JSX.Element[] | any;
  text: string;
}

interface SkillInfo {
  title: string;
  iconsData: IconsData[];
}

interface AwardInfo {
  title: string;
  stage: string;
}

interface ExperienceInfo {
  title: string;
  role: string;
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
        iconsData: [
          {
            icon: <FaHtml5 key="html5" />,
            text: "HTML5",
          },
          {
            icon: <FaCss3 key="css3" />,
            text: "CSS3",
          },
          {
            icon: <FaJs key="js" />,
            text: "Javascript",
          },
          {
            icon: <FaPhp key="php" />,
            text: "PHP",
          },
          {
            icon: <FaReact key="react" />,
            text: "React.js",
          },
          {
            icon: <SiNextdotjs key="nextjs" />,
            text: "Next.js",
          },
          {
            icon: <SiLaravel key="laravel" />,
            text: "Laravel",
          },
        ],
      },
      {
        title: "UI/UX Design",
        iconsData: [
          {
            icon: <SiAdobeillustrator key="illustrator" />,
            text: "Adobe Illustrator",
          },
          {
            icon: <SiAdobephotoshop key="photoshop" />,
            text: "Adobe Photoshop",
          },
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
        title: "Mater Dei Academy Tagaytay",
        role: "Internship",
        stage: "2019",
      },
      {
        title: "Freelance",
        role: "Full Stack Web Developer",
        stage: "2020 - 2022",
      },
      {
        title: "Ravprints Digital Printing Services",
        role: "Freelance Web Developer",
        stage: "2022 - 2024",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "BS in Computer Science - Cavite State University",
        stage: "2015 - 2020",
      },
      {
        title: "Langkaan II National High School",
        stage: "2011 - 2015",
      },
      {
        title: "Dasmariñas Elementary School",
        stage: "2005 - 2011",
      },
    ],
  },
];

const renderStageOrIcons = (item: InfoType) => {
  if ("stage" in item) {
    // If it's an AwardInfo, ExperienceInfo, or CredentialInfo
    return (
      <div className="text-right">
        <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
          {item.stage}
        </span>
      </div>
    );
  } else {
    // If it's a SkillInfo
    return (
      <div className="flex flex-wrap gap-3 justify-center md:justify-end">
        {item.iconsData?.map((iconObj, iconIndex) => {
          return (
            <div key={iconIndex} className="group relative">
              <div className="flex items-center justify-center w-10 h-10 bg-dark-secondary rounded-lg text-accent text-xl hover:bg-accent hover:text-dark transition-all duration-300 cursor-pointer">
                {iconObj.icon}
              </div>
              <span className="invisible absolute bottom-full left-1/2 z-50 -translate-x-1/2 transform rounded-md bg-dark px-2 py-1 text-center text-xs text-text-primary opacity-0 transition duration-200 ease-in-out group-hover:visible group-hover:opacity-100 whitespace-nowrap">
                {iconObj.text}
              </span>
            </div>
          );
        })}
      </div>
    );
  }
};

const About = () => {
  const [index, setIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="h-full py-16 px-4 sm:py-20 text-center xl:text-left">
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
            className="h3 text-center xl:text-left"
          >
            Crafting{" "}
            <span className="text-accent">Digital Experiences</span>
            <br />
            with <span className="text-highlight">Purpose</span>
          </motion.h2>
          <div className="mx-auto mb-4 max-w-[500px] px-2 xl:mx-0 xl:mb-8 xl:px-0">
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className={`text-base text-center xl:text-left mb-3 ${
                !isExpanded ? "line-clamp-3 xl:line-clamp-none" : ""
              }`}
            >
              With over <span className="text-accent font-semibold">3 years</span> of full-stack web development experience,
              I specialize in creating <span className="text-highlight">exceptional digital experiences</span> that combine
              cutting-edge technology with user-centered design. My expertise spans modern frameworks like{" "}
              <span className="text-accent">React</span>, <span className="text-accent">Next.js</span>, and{" "}
              <span className="text-accent">Node.js</span>, enabling me to deliver comprehensive solutions
              from concept to deployment.
            </motion.p>
            <button
              onClick={toggleExpand}
              className="btn-secondary text-sm xl:hidden"
            >
              {isExpanded ? "See Less" : "See More"}
            </button>
          </div>
          {/* Counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-8 hidden md:flex md:max-w-xl xl:mx-0 xl:max-w-none"
          >
            <div className="grid grid-cols-1 gap-3 xs:grid-cols-2 sm:gap-4 xl:grid-cols-3 xl:gap-6">
              {/* Experience */}
              <div className="card text-center py-4">
                <div className="text-accent mb-1 text-xl font-bold sm:text-2xl xl:text-3xl">
                  <CountUp start={0} end={3} duration={3} />+
                </div>
                <div className="text-xs font-medium text-text-secondary uppercase tracking-wider">
                  Years Experience
                </div>
              </div>
              {/* Clients */}
              <div className="card text-center py-4">
                <div className="text-success mb-1 text-xl font-bold sm:text-2xl xl:text-3xl">
                  <CountUp start={0} end={10} duration={3} />+
                </div>
                <div className="text-xs font-medium text-text-secondary uppercase tracking-wider">
                  Happy Clients
                </div>
              </div>
              {/* Projects */}
              <div className="card text-center py-4 xs:col-span-2 xl:col-span-1">
                <div className="text-highlight mb-1 text-xl font-bold sm:text-2xl xl:text-3xl">
                  <CountUp start={0} end={20} duration={3} />+
                </div>
                <div className="text-xs font-medium text-text-secondary uppercase tracking-wider">
                  Projects Completed
                </div>
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
          className="flex h-full w-full flex-col xl:max-w-[48%]"
        >
          <div className="mx-auto mb-6 flex flex-wrap justify-center gap-2 xl:mx-0 xl:gap-x-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <button
                  key={itemIndex}
                  className={`${
                    index === itemIndex
                      ? "bg-accent text-dark"
                      : "bg-dark-secondary/50 text-text-secondary hover:bg-dark-secondary hover:text-text-primary active:bg-dark-secondary"
                  } px-3 py-2 rounded-lg text-xs font-medium capitalize transition-all duration-300 xs:px-4 xs:text-sm sm:text-base xl:text-lg xl:px-6 xl:py-3`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
          <div className="scrollbar-hidden mb-24 flex flex-col items-center gap-y-3 overflow-y-auto py-4 xl:mb-0 xl:items-start xl:gap-y-6 xl:py-6">
            {aboutData[index]?.info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="card w-full"
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      {/* Title */}
                      <div className="mb-3 md:mb-0">
                        <h6 className="h6 mb-1">{item.title}</h6>
                        {aboutData[index]?.title === "experience" && "role" in item && (
                          <p className="text-sm text-text-muted">{item.role}</p>
                        )}
                      </div>
                      {/* Stage or Icons */}
                      <div className="flex-shrink-0">
                        {renderStageOrIcons(item)}
                      </div>
                    </div>
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
