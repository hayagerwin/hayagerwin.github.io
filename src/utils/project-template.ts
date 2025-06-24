import { Project } from "@/data/projects";

/**
 * Template for creating new project entries
 * This ensures consistency across all projects and serves as a guide for future additions
 */
export const createProjectTemplate = (
  slug: string,
  title: string,
  category: string,
  year: number,
  overrides: Partial<Project> = {}
): Project => {
  const defaultProject: Project = {
    slug,
    title,
    cover: `/assets/images/${slug}/cover.png`,
    category,
    year,
    team: ["Erwin Hayag"],
    client: ["Client Name"],
    description: {
      overview: "A brief, jargon-free description of what this project does and who it serves. Focus on the user benefits and real-world impact.",
      technical: "Technical implementation details including frameworks, architecture, and key development decisions. Explain the technology choices and their benefits.",
      features: [
        "Key feature 1 - describe what it does for users",
        "Key feature 2 - explain the benefit",
        "Key feature 3 - highlight the value",
        "Add more features as needed"
      ],
      impact: "Describe the business impact, user benefits, and measurable outcomes. How does this project solve real problems?"
    },
    slides: [
      {
        page: "Home Page",
        images: [`/assets/images/${slug}/home-ss.png`],
      },
      // Add more slides as needed
    ],
    liveUrl: "", // Add live demo URL when available
    githubUrl: "", // Add GitHub URL if public
    technologies: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Express"],
      database: ["PostgreSQL"],
      tools: ["Vite", "ESLint", "Prettier"]
    },
    status: "coming-soon" as const,
    featured: true,
    metrics: {
      performance: "Optimized for performance",
      users: "Designed for target audience",
      uptime: "Reliable infrastructure"
    },
    demoCredentials: {
      note: "Demo information and access details"
    },
    ...overrides
  };

  return defaultProject;
};

/**
 * Validation function to ensure project data meets requirements
 */
export const validateProject = (project: Project): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  // Required fields validation
  if (!project.slug) errors.push("Slug is required");
  if (!project.title) errors.push("Title is required");
  if (!project.category) errors.push("Category is required");
  if (!project.year) errors.push("Year is required");

  // Description validation
  if (!project.description.overview) errors.push("Overview description is required");
  if (!project.description.technical) errors.push("Technical description is required");
  if (!project.description.features || project.description.features.length === 0) {
    errors.push("At least one feature is required");
  }
  if (!project.description.impact) errors.push("Impact description is required");

  // Technology validation
  if (!project.technologies.frontend || project.technologies.frontend.length === 0) {
    errors.push("Frontend technologies are required");
  }

  // URL validation
  if (project.liveUrl && !isValidUrl(project.liveUrl)) {
    errors.push("Live URL must be a valid URL");
  }
  if (project.githubUrl && !isValidUrl(project.githubUrl)) {
    errors.push("GitHub URL must be a valid URL");
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Helper function to validate URLs
 */
const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Generate project page template code
 */
export const generateProjectPageTemplate = (slug: string): string => {
  const componentName = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  return `"use client";
import { projectData } from "@/data/projects";
import LazyProjectDetail from "@/components/LazyProjectDetail";

const ${componentName}ProjectPage = () => {
  const project = projectData.find(
    (item) => item.slug === "${slug}",
  );

  if (!project) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-dark text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-4">Project not found</h1>
          <p className="text-text-muted">The requested project could not be found.</p>
        </div>
      </div>
    );
  }

  return <LazyProjectDetail project={project} />;
};

export default ${componentName}ProjectPage;`;
};

/**
 * Generate project layout template code
 */
export const generateProjectLayoutTemplate = (title: string, description: string): string => {
  return `import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "${title} - Project Details & Case Study",
  description: "${description}",
  openGraph: {
    title: "${title} - Erwin Hayag Web Development Portfolio",
    description: "${description}",
    type: "website",
  },
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}`;
};

/**
 * Project categories for consistency
 */
export const PROJECT_CATEGORIES = [
  "E-commerce & Retail",
  "Healthcare & Reservation",
  "Education & Learning",
  "Business & Enterprise",
  "Entertainment & Media",
  "Finance & Banking",
  "Real Estate & Property",
  "Food & Restaurant",
  "Travel & Tourism",
  "Social & Community",
  "Portfolio & Personal",
  "SaaS & Tools"
] as const;

/**
 * Project status options
 */
export const PROJECT_STATUSES = [
  "deployed",
  "in-development", 
  "coming-soon"
] as const;

/**
 * Common technology stacks for quick selection
 */
export const TECH_STACKS = {
  "React + Node.js": {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Express"],
    database: ["PostgreSQL"],
    tools: ["Vite", "ESLint", "Prettier"]
  },
  "Laravel + React": {
    frontend: ["React", "TypeScript", "Inertia.js", "Tailwind CSS"],
    backend: ["Laravel", "PHP"],
    database: ["PostgreSQL", "MySQL"],
    tools: ["Vite", "Composer", "Laravel Pint"]
  },
  "Full Stack Next.js": {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Next.js API Routes", "Prisma"],
    database: ["PostgreSQL", "Supabase"],
    tools: ["Vercel", "ESLint", "Prettier"]
  }
} as const;
