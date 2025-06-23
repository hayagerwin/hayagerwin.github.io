"use client";
import { Avatar, Circles } from "@/components";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import {
  RiFileTextLine,
  RiAppsLine,
  RiLayoutMasonryLine,
  RiCodeSSlashLine,
  RiDatabaseLine,
  RiCloudLine,
  RiSecurePaymentLine,
  RiSpeedLine,
  RiTeamLine,
  RiCustomerServiceLine
} from "react-icons/ri";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaMobile,
  FaShoppingCart,
  FaHospital,
  FaCode,
  FaServer
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";
import CountUp from "react-countup";

//  Data
interface ServiceFeature {
  icon: JSX.Element;
  text: string;
}

interface ServiceInfo {
  title: string;
  description: string;
  features: ServiceFeature[];
  technologies: string[];
  deliverables: string[];
  timeline: string;
  pricing: string;
}

interface ServiceCategory {
  title: string;
  services: ServiceInfo[];
}

const servicesData: ServiceCategory[] = [
  {
    title: "development",
    services: [
      {
        title: "Full Stack Web Development",
        description: "End-to-end web application development using modern technologies. From concept to deployment with scalable architecture and optimal performance.",
        features: [
          { icon: <FaReact />, text: "React/Next.js Frontend" },
          { icon: <FaNodeJs />, text: "Node.js Backend" },
          { icon: <FaDatabase />, text: "Database Design" },
          { icon: <RiCloudLine />, text: "Cloud Deployment" }
        ],
        technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "PostgreSQL"],
        deliverables: ["Responsive Web Application", "Admin Dashboard", "API Documentation", "Deployment Setup"],
        timeline: "4-8 weeks",
        pricing: "Project-based"
      },
      {
        title: "Frontend Development",
        description: "Modern, responsive user interfaces built with React, Next.js, and cutting-edge CSS frameworks for optimal user experience.",
        features: [
          { icon: <FaReact />, text: "React Components" },
          { icon: <SiNextdotjs />, text: "Next.js Framework" },
          { icon: <SiTailwindcss />, text: "Tailwind CSS" },
          { icon: <FaMobile />, text: "Mobile Responsive" }
        ],
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        deliverables: ["Responsive UI Components", "Interactive Animations", "Performance Optimization", "Cross-browser Testing"],
        timeline: "2-4 weeks",
        pricing: "Hourly/Project"
      },
      {
        title: "Backend Development",
        description: "Robust server-side solutions with secure APIs, database management, and scalable architecture for your business needs.",
        features: [
          { icon: <FaServer />, text: "RESTful APIs" },
          { icon: <SiMongodb />, text: "Database Management" },
          { icon: <RiSecurePaymentLine />, text: "Security Implementation" },
          { icon: <RiSpeedLine />, text: "Performance Optimization" }
        ],
        technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "JWT", "Stripe API"],
        deliverables: ["API Development", "Database Schema", "Authentication System", "Documentation"],
        timeline: "3-6 weeks",
        pricing: "Project-based"
      }
    ]
  },

  {
    title: "solutions",
    services: [
      {
        title: "E-commerce Platforms",
        description: "Complete online store solutions with secure payment processing, inventory management, and customer analytics.",
        features: [
          { icon: <FaShoppingCart />, text: "Shopping Cart System" },
          { icon: <RiSecurePaymentLine />, text: "Payment Integration" },
          { icon: <RiDatabaseLine />, text: "Inventory Management" },
          { icon: <RiCustomerServiceLine />, text: "Customer Support" }
        ],
        technologies: ["Next.js", "Stripe", "MongoDB", "Node.js", "Tailwind CSS"],
        deliverables: ["E-commerce Website", "Admin Panel", "Payment Gateway", "Analytics Dashboard"],
        timeline: "6-10 weeks",
        pricing: "Project-based"
      },
      {
        title: "Healthcare Applications",
        description: "HIPAA-compliant healthcare platforms with patient management, appointment scheduling, and secure data handling.",
        features: [
          { icon: <FaHospital />, text: "Patient Management" },
          { icon: <RiFileTextLine />, text: "Medical Records" },
          { icon: <RiSecurePaymentLine />, text: "HIPAA Compliance" },
          { icon: <RiTeamLine />, text: "Multi-user Access" }
        ],
        technologies: ["React", "Node.js", "PostgreSQL", "JWT", "HIPAA Standards"],
        deliverables: ["Patient Portal", "Admin Dashboard", "Appointment System", "Security Audit"],
        timeline: "8-12 weeks",
        pricing: "Project-based"
      },
      {
        title: "Progressive Web Apps",
        description: "Fast, reliable web applications with offline capabilities and native app-like experiences across all devices.",
        features: [
          { icon: <RiAppsLine />, text: "App-like Experience" },
          { icon: <RiSpeedLine />, text: "Offline Functionality" },
          { icon: <FaMobile />, text: "Mobile Optimized" },
          { icon: <RiCloudLine />, text: "Cloud Sync" }
        ],
        technologies: ["PWA", "Service Workers", "IndexedDB", "Web APIs"],
        deliverables: ["PWA Application", "Offline Features", "Push Notifications", "App Store Submission"],
        timeline: "5-8 weeks",
        pricing: "Project-based"
      }
    ]
  },
  {
    title: "consulting",
    services: [
      {
        title: "Technical Consulting",
        description: "Expert guidance on technology stack selection, architecture planning, and development best practices for your project.",
        features: [
          { icon: <RiCodeSSlashLine />, text: "Code Review" },
          { icon: <RiLayoutMasonryLine />, text: "Architecture Planning" },
          { icon: <RiSpeedLine />, text: "Performance Audit" },
          { icon: <RiTeamLine />, text: "Team Training" }
        ],
        technologies: ["Various", "Best Practices", "Industry Standards"],
        deliverables: ["Technical Assessment", "Recommendations Report", "Implementation Plan", "Training Materials"],
        timeline: "1-3 weeks",
        pricing: "Hourly"
      },
      {
        title: "Code Review & Optimization",
        description: "Comprehensive code analysis, performance optimization, and security assessment to improve your existing applications.",
        features: [
          { icon: <FaCode />, text: "Code Analysis" },
          { icon: <RiSpeedLine />, text: "Performance Tuning" },
          { icon: <RiSecurePaymentLine />, text: "Security Review" },
          { icon: <RiDatabaseLine />, text: "Database Optimization" }
        ],
        technologies: ["Static Analysis", "Performance Tools", "Security Scanners"],
        deliverables: ["Code Review Report", "Optimization Recommendations", "Security Assessment", "Performance Metrics"],
        timeline: "1-2 weeks",
        pricing: "Hourly"
      },
      {
        title: "Maintenance & Support",
        description: "Ongoing maintenance, updates, and technical support to keep your web applications running smoothly and securely.",
        features: [
          { icon: <RiCustomerServiceLine />, text: "24/7 Support" },
          { icon: <RiSpeedLine />, text: "Regular Updates" },
          { icon: <RiSecurePaymentLine />, text: "Security Patches" },
          { icon: <RiDatabaseLine />, text: "Backup Management" }
        ],
        technologies: ["Monitoring Tools", "CI/CD", "Security Updates"],
        deliverables: ["Monthly Reports", "Update Deployments", "Security Patches", "Performance Monitoring"],
        timeline: "Ongoing",
        pricing: "Monthly retainer"
      }
    ]
  }
];

const renderServiceFeatures = (service: ServiceInfo) => {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start max-w-xs">
      {service.features.map((feature, featureIndex) => {
        return (
          <div key={featureIndex} className="group relative">
            <div
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-dark-secondary rounded-lg text-accent text-base sm:text-xl hover:bg-accent hover:text-dark transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/50"
              role="button"
              tabIndex={0}
              aria-label={feature.text}
            >
              {feature.icon}
            </div>
            <span
              className="invisible absolute bottom-full left-1/2 z-50 -translate-x-1/2 transform rounded-md bg-dark px-2 py-1 text-center text-xs text-text-primary opacity-0 transition duration-200 ease-in-out group-hover:visible group-hover:opacity-100 whitespace-nowrap pointer-events-none"
              role="tooltip"
            >
              {feature.text}
            </span>
          </div>
        );
      })}
    </div>
  );
};

const Services = () => {
  const [index, setIndex] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);

  // Handle keyboard navigation for tabs
  const handleKeyDown = (event: React.KeyboardEvent, itemIndex: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIndex(itemIndex);
      // Announce the tab change to screen readers
      const tabContent = servicesData[itemIndex]?.title;
      if (tabContent) {
        // Create a temporary announcement for screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = `${tabContent} services selected`;
        document.body.appendChild(announcement);
        setTimeout(() => document.body.removeChild(announcement), 1000);
      }
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      const newIndex = event.key === 'ArrowLeft'
        ? (itemIndex - 1 + servicesData.length) % servicesData.length
        : (itemIndex + 1) % servicesData.length;
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
      const lastIndex = servicesData.length - 1;
      setIndex(lastIndex);
      const tabButtons = tabsRef.current?.querySelectorAll('button');
      if (tabButtons && tabButtons[lastIndex]) {
        (tabButtons[lastIndex] as HTMLElement).focus();
      }
    }
  };

  // Announce tab changes to screen readers
  useEffect(() => {
    const currentTab = servicesData[index]?.title;
    if (currentTab) {
      document.title = `Services - ${currentTab.charAt(0).toUpperCase() + currentTab.slice(1)} | Erwin Hayag`;
    }
  }, [index]);

  return (
    <div
      className="min-h-screen h-screen flex items-center justify-center relative overflow-hidden"
      role="main"
      aria-label="Services - Professional Web Development Solutions"
    >
      {/* Skip Links for Accessibility */}
      <div className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50">
        <a
          href="#services-content"
          className="btn-primary text-sm px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
        >
          Skip to Services Content
        </a>
        <a
          href="#services-tabs"
          className="btn-secondary text-sm px-4 py-2 rounded-md ml-2 focus:outline-none focus:ring-2 focus:ring-accent/50"
        >
          Skip to Service Categories
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
            id="services-content"
            className="flex flex-col justify-center text-center lg:text-left space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1"
            role="region"
            aria-labelledby="services-heading"
          >
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="space-y-4 lg:space-y-6"
            >
              <h1 id="services-heading" className="h2">
                Professional Web Development{" "}
                <span className="text-accent">Services</span>
              </h1>

              <div className="max-w-2xl mx-auto lg:mx-0 space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base lg:text-lg text-text-secondary leading-relaxed">
                  Delivering comprehensive web development solutions that drive business growth and enhance user experiences.
                  With <span className="text-accent font-semibold">4+ years</span> of expertise, I provide end-to-end services
                  tailored to your specific needs.
                </p>

                <p className="text-xs sm:text-sm lg:text-base text-text-muted leading-relaxed">
                  From <span className="text-highlight font-medium">concept to deployment</span>, I specialize in creating
                  scalable, performant, and user-centric applications using cutting-edge technologies and industry best practices.
                </p>

                <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-1 sm:pt-2">
                  <span className="inline-block bg-accent/20 text-accent px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                    Full Stack Solutions
                  </span>
                  <span className="inline-block bg-success/20 text-success px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                    E-commerce Platforms
                  </span>
                  <span className="inline-block bg-highlight/20 text-highlight px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                    Healthcare Apps
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Service Stats */}
            <motion.div
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto lg:mx-0"
            >
              {/* Services Offered */}
              <div className="card text-center py-2 sm:py-3 lg:py-4">
                <div className="text-accent mb-1 text-base font-bold sm:text-lg lg:text-xl xl:text-2xl">
                  <CountUp start={0} end={9} duration={3} />+
                </div>
                <div className="text-xs font-medium text-text-secondary uppercase tracking-wider">
                  Services Offered
                </div>
              </div>

              {/* Happy Clients */}
              <div className="card text-center py-2 sm:py-3 lg:py-4">
                <div className="text-success mb-1 text-base font-bold sm:text-lg lg:text-xl xl:text-2xl">
                  <CountUp start={0} end={15} duration={3} />+
                </div>
                <div className="text-xs font-medium text-text-secondary uppercase tracking-wider">
                  Happy Clients
                </div>
              </div>

              {/* Project Success */}
              <div className="card text-center py-2 sm:py-3 lg:py-4 col-span-2 lg:col-span-1">
                <div className="text-highlight mb-1 text-base font-bold sm:text-lg lg:text-xl xl:text-2xl">
                  <CountUp start={0} end={98} duration={3} />%
                </div>
                <div className="text-xs font-medium text-text-secondary uppercase tracking-wider">
                  Success Rate
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Services Showcase (Top-aligned) */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col h-full lg:h-auto lg:max-h-[80vh] order-1 lg:order-2"
            role="region"
            aria-labelledby="services-categories-heading"
          >
            <h2 id="services-categories-heading" className="sr-only">Service Categories</h2>

            {/* Service Category Navigation */}
            <div
              id="services-tabs"
              ref={tabsRef}
              className="flex flex-wrap justify-center lg:justify-start gap-1 sm:gap-2 mb-4 sm:mb-6 lg:mb-8"
              role="tablist"
              aria-label="Service categories"
            >
              {servicesData.map((category, categoryIndex) => {
                return (
                  <button
                    key={categoryIndex}
                    role="tab"
                    aria-selected={index === categoryIndex}
                    aria-controls={`servicepanel-${categoryIndex}`}
                    id={`servicetab-${categoryIndex}`}
                    tabIndex={index === categoryIndex ? 0 : -1}
                    className={`${
                      index === categoryIndex
                        ? "bg-accent text-dark shadow-glow"
                        : "bg-dark-secondary/50 text-text-secondary hover:bg-dark-secondary hover:text-text-primary focus:bg-dark-secondary focus:text-text-primary"
                    } px-3 py-2 rounded-lg text-xs font-medium capitalize transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-dark sm:px-4 sm:text-sm lg:px-5 lg:py-3 lg:text-base`}
                    onClick={() => setIndex(categoryIndex)}
                    onKeyDown={(e) => handleKeyDown(e, categoryIndex)}
                  >
                    {category.title}
                  </button>
                );
              })}
            </div>

            {/* Service Content */}
            <div
              className="flex-1 overflow-y-auto scrollbar-hidden"
              role="tabpanel"
              id={`servicepanel-${index}`}
              aria-labelledby={`servicetab-${index}`}
            >
              <div className="space-y-3 sm:space-y-4 lg:space-y-6 pb-4 sm:pb-6 lg:pb-8">
                {servicesData[index]?.services.map((service, serviceIndex) => {
                  return (
                    <div
                      key={serviceIndex}
                      className="card w-full hover:border-accent/50 transition-all duration-300"
                    >
                      <div className="space-y-4">
                        {/* Service Header */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <h3 className="h6 mb-2 break-words">{service.title}</h3>
                            <p className="text-sm text-text-muted leading-relaxed break-words">
                              {service.description}
                            </p>
                          </div>

                          {/* Service Features Icons */}
                          <div className="flex-shrink-0 sm:ml-4">
                            {renderServiceFeatures(service)}
                          </div>
                        </div>

                        {/* Service Details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                          {/* Technologies */}
                          <div>
                            <h4 className="text-accent font-medium mb-2">Technologies</h4>
                            <div className="flex flex-wrap gap-1">
                              {service.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Project Info */}
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-text-muted">Timeline:</span>
                              <span className="text-highlight font-medium">{service.timeline}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-text-muted">Pricing:</span>
                              <span className="text-success font-medium">{service.pricing}</span>
                            </div>
                          </div>
                        </div>

                        {/* Deliverables */}
                        <div>
                          <h4 className="text-accent font-medium mb-2 text-sm">Key Deliverables</h4>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            {service.deliverables.map((deliverable, deliverableIndex) => (
                              <div key={deliverableIndex} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                                <span className="text-text-secondary">{deliverable}</span>
                              </div>
                            ))}
                          </div>
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

export default Services;
