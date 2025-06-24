import { Project } from '@/data/projects';

export function generateProjectStructuredData(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `https://hayagerwin.github.io/projects/${project.slug}`,
    image: `https://hayagerwin.github.io${project.cover}`,
    author: {
      "@type": "Person",
      name: "Erwin Hayag",
      jobTitle: "Full Stack Web Developer",
      url: "https://hayagerwin.github.io"
    },
    dateCreated: project.year.toString(),
    genre: project.category,
    keywords: [
      ...project.technologies.frontend,
      ...project.technologies.backend,
      ...project.technologies.database,
      ...project.technologies.tools
    ].join(", "),
    ...(project.liveUrl && {
      sameAs: [project.liveUrl]
    }),
    about: {
      "@type": "SoftwareApplication",
      name: project.title,
      applicationCategory: "WebApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      }
    }
  };
}

export function generatePortfolioStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Portfolio",
    name: "Erwin Hayag Web Development Portfolio",
    description: "Professional portfolio showcasing full stack web development projects and expertise",
    url: "https://hayagerwin.github.io",
    author: {
      "@type": "Person",
      name: "Erwin Hayag",
      jobTitle: "Full Stack Web Developer",
      description: "Experienced Full Stack Web Developer specializing in React, Next.js, and modern web technologies",
      url: "https://hayagerwin.github.io",
      knowsAbout: [
        "Web Development",
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "E-commerce Development"
      ]
    }
  };
}
