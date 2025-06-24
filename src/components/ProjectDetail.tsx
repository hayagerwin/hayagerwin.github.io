"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import { FaExternalLinkAlt, FaCode, FaDatabase, FaTools, FaServer, FaUsers, FaChartLine, FaClock } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { Project, projectData } from "@/data/projects";
import { generateProjectStructuredData } from "@/utils/structured-data";
import Header from "./Header";

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'technical' | 'features'>('overview');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const currentIndex = projectData.findIndex(item => item.slug === project.slug);
  const nextIndex = (currentIndex + 1) % projectData.length;
  const nextProject = projectData[nextIndex];

  const structuredData = generateProjectStructuredData(project);

  const techIcons = {
    frontend: <FaCode className="text-accent" />,
    backend: <FaServer className="text-blue-400" />,
    database: <FaDatabase className="text-green-400" />,
    tools: <FaTools className="text-yellow-400" />
  };

  return (
    <div className="min-h-screen bg-dark text-white relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Header */}
      <Header />

      {/* Main Content Container */}
      <div className="flex min-h-screen w-full max-w-7xl mx-auto pt-20 lg:pt-24">
        
        {/* LEFT COLUMN - Project Showcase */}
        <div className="hidden lg:flex lg:w-1/2 items-start justify-center p-8 lg:pt-8">
          <div className="relative w-full h-[75vh] max-w-2xl">
            {/* Live Demo Integration */}
            {project.liveUrl ? (
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-accent/20">
                <iframe
                  src={project.liveUrl}
                  className="w-full h-full"
                  title={`${project.title} live demo`}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
                <div className="absolute top-4 left-4 bg-dark/80 backdrop-blur-sm rounded-lg px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-300 font-medium">Live Demo</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-accent/20 hover:bg-accent/30 backdrop-blur-sm rounded-lg px-3 py-2 text-accent text-xs font-medium transition-colors duration-200"
                    aria-label={`Open ${project.title} in new tab`}
                  >
                    <FaExternalLinkAlt />
                    Open in New Tab
                  </a>
                </div>
              </div>
            ) : (
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={project.cover}
                  alt={`${project.title} project preview`}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                  priority
                  loading="eager"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-dark/80 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-accent text-sm font-medium mb-2">Coming Soon</p>
                    <p className="text-text-secondary text-xs">
                      {project.demoCredentials?.note || "Live demo will be available soon"}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN - Project Information */}
        <div className="flex flex-col justify-start w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 lg:pl-12 lg:pt-8">
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {/* Project Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
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
                <span className="text-accent text-sm font-medium">{project.year}</span>
              </div>
              
              <h1 className="text-4xl font-bold text-text-primary mb-3">
                {project.title}
              </h1>
              
              <p className="text-lg text-text-muted mb-6">
                {project.category}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-accent text-dark px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
                  >
                    <FaExternalLinkAlt />
                    View Live Demo
                  </a>
                )}
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 border border-accent/30 text-accent px-6 py-3 rounded-lg font-medium hover:bg-accent/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
                >
                  <FaAnglesRight className="rotate-180" />
                  Back to Projects
                </Link>
              </div>
            </div>

            {/* Content Tabs */}
            <div className="mb-6">
              <div className="flex gap-1 bg-dark-secondary/30 rounded-lg p-1">
                {(['overview', 'technical', 'features'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      activeTab === tab
                        ? 'bg-accent text-dark'
                        : 'text-text-muted hover:text-text-primary'
                    }`}
                    aria-pressed={activeTab === tab}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="space-y-6 pb-8">
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                >
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {project.description.overview}
                  </p>
                  
                  {project.description.impact && (
                    <div className="bg-dark-secondary/20 rounded-lg p-4 border border-accent/10">
                      <h3 className="text-accent font-semibold mb-2 flex items-center gap-2">
                        <FaChartLine />
                        Impact & Benefits
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {project.description.impact}
                      </p>
                    </div>
                  )}

                  {/* Project Metrics */}
                  {project.metrics && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                      {project.metrics.performance && (
                        <div className="text-center p-4 bg-dark-secondary/20 rounded-lg">
                          <FaChartLine className="text-accent mx-auto mb-2" />
                          <div className="text-sm text-text-muted">Performance</div>
                          <div className="text-accent font-semibold">{project.metrics.performance}</div>
                        </div>
                      )}
                      {project.metrics.users && (
                        <div className="text-center p-4 bg-dark-secondary/20 rounded-lg">
                          <FaUsers className="text-accent mx-auto mb-2" />
                          <div className="text-sm text-text-muted">Users</div>
                          <div className="text-accent font-semibold">{project.metrics.users}</div>
                        </div>
                      )}
                      {project.metrics.uptime && (
                        <div className="text-center p-4 bg-dark-secondary/20 rounded-lg">
                          <FaClock className="text-accent mx-auto mb-2" />
                          <div className="text-sm text-text-muted">Uptime</div>
                          <div className="text-accent font-semibold">{project.metrics.uptime}</div>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === 'technical' && (
                <motion.div
                  key="technical"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                >
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {project.description.technical}
                  </p>
                  
                  {/* Technology Stack */}
                  <div className="space-y-4">
                    {Object.entries(project.technologies).map(([category, techs]) => (
                      <div key={category} className="bg-dark-secondary/20 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                          {techIcons[category as keyof typeof techIcons]}
                          <h4 className="font-semibold text-text-primary capitalize">
                            {category}
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {techs.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-dark/50 rounded-full text-xs text-text-secondary border border-dark-secondary/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'features' && (
                <motion.div
                  key="features"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                >
                  <div className="grid gap-3">
                    {project.description.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-dark-secondary/20 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Next Project Navigation */}
      {nextProject && (
        <div className="border-t border-dark-secondary/30 bg-dark-secondary/10">
          <div className="max-w-7xl mx-auto p-8">
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center justify-between p-6 rounded-2xl border border-dark-secondary/30 hover:border-accent/30 hover:bg-dark-secondary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                  className="text-accent"
                >
                  <FaAnglesRight />
                </motion.div>
                <div>
                  <p className="text-accent text-sm font-medium mb-1">Next Project</p>
                  <h3 className="text-text-primary font-semibold group-hover:text-accent transition-colors duration-300">
                    {nextProject.title}
                  </h3>
                  <p className="text-text-muted text-sm">{nextProject.category}</p>
                </div>
              </div>
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                className="text-accent"
              >
                <FaAnglesRight />
              </motion.div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
