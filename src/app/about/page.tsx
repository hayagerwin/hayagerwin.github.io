"use client";
import { Avatar, Circles } from "@/components";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiLaravel,
  SiAdobephotoshop,
  SiAdobeillustrator,
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
        title: "Frontend Development",
        iconsData: [
          {
            icon: <FaReact key="react" />,
            text: "React.js",
          },
          {
            icon: <SiNextdotjs key="nextjs" />,
            text: "Next.js",
          },
          {
            icon: <SiTypescript key="typescript" />,
            text: "TypeScript",
          },
          {
            icon: <FaJs key="js" />,
            text: "JavaScript",
          },
          {
            icon: <SiTailwindcss key="tailwind" />,
            text: "Tailwind CSS",
          },
          {
            icon: <FaHtml5 key="html5" />,
            text: "HTML5",
          },
          {
            icon: <FaCss3 key="css3" />,
            text: "CSS3",
          },
        ],
      },
      {
        title: "Backend Development",
        iconsData: [
          {
            icon: <FaNodeJs key="nodejs" />,
            text: "Node.js",
          },
          {
            icon: <FaPhp key="php" />,
            text: "PHP",
          },
          {
            icon: <SiLaravel key="laravel" />,
            text: "Laravel",
          },
          {
            icon: <SiMongodb key="mongodb" />,
            text: "MongoDB",
          },
          {
            icon: <SiPostgresql key="postgresql" />,
            text: "PostgreSQL",
          },
          {
            icon: <FaDatabase key="database" />,
            text: "Database Design",
          },
        ],
      },
      {
        title: "Tools & Technologies",
        iconsData: [
          {
            icon: <FaGitAlt key="git" />,
            text: "Git",
          },
          {
            icon: <SiAdobephotoshop key="photoshop" />,
            text: "Photoshop",
          },
          {
            icon: <SiAdobeillustrator key="illustrator" />,
            text: "Illustrator",
          },
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Freelance Full Stack Developer",
        role: "Independent Contractor",
        stage: "2020 - Present",
      },
      {
        title: "Ravprints Digital Printing Services",
        role: "Web Developer",
        stage: "2022 - 2024",
      },
      {
        title: "Mater Dei Academy Tagaytay",
        role: "Web Development Intern",
        stage: "2019",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "BS in Computer Science",
        role: "Cavite State University",
        stage: "2015 - 2020",
      },
      {
        title: "Best Website Award",
        role: "Web Development Course",
        stage: "2018",
      },
      {
        title: "C++ Programming Champion",
        role: "CvSU Programming Challenge",
        stage: "2017",
      },
    ],
  },
  {
    title: "approach",
    info: [
      {
        title: "User-Centered Design",
        role: "Prioritizing intuitive user experiences and accessibility in every project",
        stage: "Philosophy",
      },
      {
        title: "Performance First",
        role: "Optimizing for speed, SEO, and scalability from the ground up",
        stage: "Methodology",
      },
      {
        title: "Continuous Learning",
        role: "Staying current with emerging technologies and best practices",
        stage: "Growth",
      },
      {
        title: "Client Collaboration",
        role: "Transparent communication and iterative feedback throughout development",
        stage: "Process",
      },
    ],
  },
];

const renderStageOrIcons = (item: InfoType) => {
  if ("stage" in item) {
    // If it's an AwardInfo, ExperienceInfo, or CredentialInfo
    return (
      <div className="text-right">
        <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">
          {item.stage}
        </span>
      </div>
    );
  } else {
    // If it's a SkillInfo
    return (
      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-end max-w-xs">
        {item.iconsData?.map((iconObj, iconIndex) => {
          return (
            <div key={iconIndex} className="group relative">
              <div
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-dark-secondary rounded-lg text-accent text-base sm:text-xl hover:bg-accent hover:text-dark transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/50"
                role="button"
                tabIndex={0}
                aria-label={iconObj.text}
              >
                {iconObj.icon}
              </div>
              <span
                className="invisible absolute bottom-full left-1/2 z-50 -translate-x-1/2 transform rounded-md bg-dark px-2 py-1 text-center text-xs text-text-primary opacity-0 transition duration-200 ease-in-out group-hover:visible group-hover:opacity-100 whitespace-nowrap pointer-events-none"
                role="tooltip"
              >
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
  const tabsRef = useRef<HTMLDivElement>(null);

  // Handle keyboard navigation for tabs
  const handleKeyDown = (event: React.KeyboardEvent, itemIndex: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIndex(itemIndex);
      // Announce the tab change to screen readers
      const tabContent = aboutData[itemIndex]?.title;
      if (tabContent) {
        // Create a temporary announcement for screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = `${tabContent} tab selected`;
        document.body.appendChild(announcement);
        setTimeout(() => document.body.removeChild(announcement), 1000);
      }
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      const newIndex = event.key === 'ArrowLeft'
        ? (itemIndex - 1 + aboutData.length) % aboutData.length
        : (itemIndex + 1) % aboutData.length;
      setIndex(newIndex);

      // Focus the new tab
      const tabButtons = tabsRef.current?.querySelectorAll('button');
      if (tabButtons && tabButtons[newIndex]) {
        (tabButtons[newIndex] as HTMLElement).focus();
      }
    } else if (event.key === 'Home') {
      event.preventDefault();
      setIndex(0);
      const tabButtons = tabsRef.current?.querySelectorAll('button');
      if (tabButtons && tabButtons[0]) {
        (tabButtons[0] as HTMLElement).focus();
      }
    } else if (event.key === 'End') {
      event.preventDefault();
      const lastIndex = aboutData.length - 1;
      setIndex(lastIndex);
      const tabButtons = tabsRef.current?.querySelectorAll('button');
      if (tabButtons && tabButtons[lastIndex]) {
        (tabButtons[lastIndex] as HTMLElement).focus();
      }
    }
  };

  // Announce tab changes to screen readers
  useEffect(() => {
    const currentTab = aboutData[index]?.title;
    if (currentTab) {
      document.title = `About - ${currentTab.charAt(0).toUpperCase() + currentTab.slice(1)} | Erwin Hayag`;
    }
  }, [index]);

  return (
    <div
      className="min-h-screen h-screen flex items-center justify-center relative overflow-hidden"
      role="main"
      aria-label="About Erwin Hayag - Full Stack Web Developer"
    >
      {/* Skip Links for Accessibility */}
      <div className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50">
        <a
          href="#about-content"
          className="btn-primary text-sm px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
        >
          Skip to About Content
        </a>
        <a
          href="#about-tabs"
          className="btn-secondary text-sm px-4 py-2 rounded-md ml-2 focus:outline-none focus:ring-2 focus:ring-accent/50"
        >
          Skip to Tabs
        </a>
      </div>

      <Circles />

      {/* Background decorative avatar - positioned to not interfere with layout */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="absolute -left-[300px] bottom-10 hidden xl:flex opacity-30 animate-pulse-slow"
        aria-hidden="true"
      >
        <Avatar />
      </motion.div>

      {/* Subtle background decorative elements */}
      <div
        className="absolute top-10 right-10 w-20 h-20 bg-accent/5 rounded-full blur-xl animate-pulse-slow hidden lg:block"
        style={{ animationDelay: '2s' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-20 w-16 h-16 bg-highlight/5 rounded-full blur-lg animate-pulse-slow hidden lg:block"
        style={{ animationDelay: '4s' }}
        aria-hidden="true"
      />

      {/* Main two-column container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 h-full lg:h-auto lg:max-h-[85vh] py-8 lg:py-0">
          {/* Left Column - Title and Description (Vertically Centered) */}
          <div
            id="about-content"
            className="flex flex-col justify-center text-center lg:text-left space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1"
            role="region"
            aria-labelledby="about-heading"
          >
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="space-y-4 lg:space-y-6"
            >
              <h1 id="about-heading" className="h2">
                Transforming Ideas into{" "}
                <span className="text-accent">Digital Reality</span>
              </h1>

              <div className="max-w-2xl mx-auto lg:mx-0 space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base lg:text-lg text-text-secondary leading-relaxed">
                  Passionate Full Stack Web Developer with{" "}
                  <span className="text-accent font-semibold">4+ years</span> of experience
                  crafting innovative web solutions that drive business growth and enhance user experiences.
                </p>

                <p className="text-xs sm:text-sm lg:text-base text-text-muted leading-relaxed">
                  From concept to deployment, I specialize in building{" "}
                  <span className="text-highlight font-medium">scalable</span>,{" "}
                  <span className="text-highlight font-medium">performant</span>, and{" "}
                  <span className="text-highlight font-medium">user-centric</span> applications
                  using modern technologies like <span className="text-accent">React</span>,{" "}
                  <span className="text-accent">Next.js</span>, and{" "}
                  <span className="text-accent">TypeScript</span>.
                </p>

                <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-1 sm:pt-2">
                  <span className="inline-block bg-accent/20 text-accent px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                    Available for Projects
                  </span>
                  <span className="inline-block bg-success/20 text-success px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                    Remote Friendly
                  </span>
                </div>
              </div>
            </motion.div>
            {/* Professional Stats */}
            <motion.div
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto lg:mx-0"
            >
              {/* Experience */}
              <div className="card text-center py-2 sm:py-3 lg:py-4">
                <div className="text-accent mb-1 text-base font-bold sm:text-lg lg:text-xl xl:text-2xl">
                  <CountUp start={0} end={4} duration={3} />+
                </div>
                <div className="text-xs font-medium text-text-secondary uppercase tracking-wider">
                  Years Experience
                </div>
              </div>

              {/* Projects */}
              <div className="card text-center py-2 sm:py-3 lg:py-4">
                <div className="text-highlight mb-1 text-base font-bold sm:text-lg lg:text-xl xl:text-2xl">
                  <CountUp start={0} end={25} duration={3} />+
                </div>
                <div className="text-xs font-medium text-text-secondary uppercase tracking-wider">
                  Projects Delivered
                </div>
              </div>

              {/* Technologies */}
              <div className="card text-center py-2 sm:py-3 lg:py-4 col-span-2 lg:col-span-1">
                <div className="text-success mb-1 text-base font-bold sm:text-lg lg:text-xl xl:text-2xl">
                  <CountUp start={0} end={15} duration={3} />+
                </div>
                <div className="text-xs font-medium text-text-secondary uppercase tracking-wider">
                  Technologies
                </div>
              </div>
            </motion.div>
          </div>
          {/* Right Column - Tabs Component (Top-aligned) */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col h-full lg:h-auto lg:max-h-[80vh] order-1 lg:order-2"
            role="region"
            aria-labelledby="tabs-heading"
          >
            <h2 id="tabs-heading" className="sr-only">Professional Information</h2>

            {/* Tab Navigation */}
            <div
              id="about-tabs"
              ref={tabsRef}
              className="flex flex-wrap justify-center lg:justify-start gap-1 sm:gap-2 mb-4 sm:mb-6 lg:mb-8"
              role="tablist"
              aria-label="About information categories"
            >
              {aboutData.map((item, itemIndex) => {
                return (
                  <button
                    key={itemIndex}
                    role="tab"
                    aria-selected={index === itemIndex}
                    aria-controls={`tabpanel-${itemIndex}`}
                    id={`tab-${itemIndex}`}
                    tabIndex={index === itemIndex ? 0 : -1}
                    className={`${
                      index === itemIndex
                        ? "bg-accent text-dark shadow-glow"
                        : "bg-dark-secondary/50 text-text-secondary hover:bg-dark-secondary hover:text-text-primary focus:bg-dark-secondary focus:text-text-primary"
                    } px-3 py-2 rounded-lg text-xs font-medium capitalize transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-dark sm:px-4 sm:text-sm lg:px-5 lg:py-3 lg:text-base`}
                    onClick={() => setIndex(itemIndex)}
                    onKeyDown={(e) => handleKeyDown(e, itemIndex)}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>
            {/* Tab Content */}
            <div
              className="flex-1 overflow-y-auto scrollbar-hidden"
              role="tabpanel"
              id={`tabpanel-${index}`}
              aria-labelledby={`tab-${index}`}
            >
              <div className="space-y-3 sm:space-y-4 lg:space-y-6 pb-4 sm:pb-6 lg:pb-8">
                {aboutData[index]?.info.map((item, itemIndex) => {
                  return (
                    <div
                      key={itemIndex}
                      className="card w-full hover:border-accent/50 transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="h6 mb-2 break-words">{item.title}</h3>
                          {(aboutData[index]?.title === "experience" ||
                            aboutData[index]?.title === "education" ||
                            aboutData[index]?.title === "approach") && "role" in item && (
                            <p className="text-sm text-text-muted leading-relaxed break-words">
                              {item.role}
                            </p>
                          )}
                        </div>

                        {/* Stage or Icons */}
                        <div className="flex-shrink-0 sm:ml-4">
                          {renderStageOrIcons(item)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
