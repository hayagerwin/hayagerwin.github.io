# Project System Documentation

This document explains how to add new projects to the portfolio and maintain consistency across all project pages.

## Overview

The portfolio uses a modern, scalable project system that:
- Eliminates screenshot galleries in favor of live demo integration
- Provides enhanced descriptions for both technical and non-technical audiences
- Maintains 100vh single-screen design philosophy
- Includes comprehensive accessibility features
- Supports performance optimizations with lazy loading

## Project Data Structure

Each project follows this enhanced data structure:

```typescript
interface Project {
  slug: string;                    // URL-friendly identifier
  title: string;                   // Project display name
  cover: string;                   // Main project image
  category: string;                // Project category
  year: number;                    // Project year
  team: string[];                  // Team members
  client: string[];                // Client information
  description: {
    overview: string;              // Jargon-free description for general audiences
    technical: string;             // Technical details for developers
    features: string[];            // Key features and capabilities
    impact: string;                // Business impact and user benefits
  };
  liveUrl?: string;               // Live demo URL
  githubUrl?: string;             // GitHub repository URL
  technologies: {
    frontend: string[];            // Frontend technologies
    backend: string[];             // Backend technologies
    database: string[];            // Database technologies
    tools: string[];               // Development tools
  };
  status: 'deployed' | 'in-development' | 'coming-soon';
  featured: boolean;              // Whether to feature on main projects page
  metrics?: {
    performance?: string;          // Performance metrics
    users?: string;               // User metrics
    uptime?: string;              // Uptime/reliability metrics
  };
  demoCredentials?: {
    username?: string;            // Demo login username
    password?: string;            // Demo login password
    note?: string;                // Demo access notes
  };
}
```

## Adding a New Project

### Step 1: Create Project Data

1. Open `src/data/projects.ts`
2. Use the project template utility:

```typescript
import { createProjectTemplate } from "@/utils/project-template";

const newProject = createProjectTemplate(
  "my-new-project",              // slug
  "My New Project",              // title
  "E-commerce & Retail",         // category
  2024,                          // year
  {
    // Override any default values
    description: {
      overview: "Your project overview...",
      technical: "Technical implementation details...",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3"
      ],
      impact: "Business impact and benefits..."
    },
    liveUrl: "https://your-project.com",
    technologies: {
      frontend: ["React", "Next.js", "TypeScript"],
      backend: ["Node.js", "Express"],
      database: ["PostgreSQL"],
      tools: ["Vite", "ESLint"]
    },
    status: "deployed"
  }
);
```

3. Add the project to the `projectData` array

### Step 2: Create Project Assets

1. Create a folder: `public/assets/images/[project-slug]/`
2. Add required images:
   - `cover.png` - Main project image (800x600px recommended)
   - Additional screenshots if needed

### Step 3: Create Project Page

1. Create directory: `src/app/projects/[project-slug]/`
2. Create `page.tsx`:

```typescript
"use client";
import { projectData } from "@/data/projects";
import LazyProjectDetail from "@/components/LazyProjectDetail";

const MyNewProjectPage = () => {
  const project = projectData.find(
    (item) => item.slug === "my-new-project",
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

export default MyNewProjectPage;
```

3. Create `layout.tsx`:

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My New Project - Project Details & Case Study",
  description: "Project description for SEO...",
  openGraph: {
    title: "My New Project - Erwin Hayag Web Development Portfolio",
    description: "Project description for social sharing...",
    type: "website",
  },
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
```

## Best Practices

### Writing Descriptions

1. **Overview**: Write for non-technical audiences
   - Focus on what the project does, not how
   - Highlight user benefits and real-world impact
   - Keep it concise but informative

2. **Technical**: Write for developers
   - Explain technology choices and their benefits
   - Include architecture decisions
   - Mention performance considerations

3. **Features**: List key capabilities
   - Focus on user-facing features
   - Explain the value each feature provides
   - Keep descriptions concise

4. **Impact**: Describe measurable outcomes
   - Business metrics and improvements
   - User satisfaction and engagement
   - Technical achievements

### Live Demo Integration

- Always prefer live demos over static screenshots
- For projects without live demos, use placeholder URLs
- Include demo credentials if login is required
- Ensure demos are mobile-responsive

### Accessibility

- Use descriptive alt text for images
- Ensure proper heading hierarchy
- Include ARIA labels where appropriate
- Test with screen readers

### Performance

- Optimize images (WebP format recommended)
- Use lazy loading for non-critical content
- Implement proper error boundaries
- Test loading states

## Project Categories

Use these standardized categories:
- E-commerce & Retail
- Healthcare & Reservation
- Education & Learning
- Business & Enterprise
- Entertainment & Media
- Finance & Banking
- Real Estate & Property
- Food & Restaurant
- Travel & Tourism
- Social & Community
- Portfolio & Personal
- SaaS & Tools

## Technology Organization

Organize technologies by type:
- **Frontend**: React, Vue, Angular, etc.
- **Backend**: Node.js, Laravel, Django, etc.
- **Database**: PostgreSQL, MongoDB, MySQL, etc.
- **Tools**: Build tools, linters, deployment, etc.

## Validation

Use the validation utility to ensure data quality:

```typescript
import { validateProject } from "@/utils/project-template";

const validation = validateProject(myProject);
if (!validation.isValid) {
  console.error("Project validation errors:", validation.errors);
}
```

## Maintenance

- Regularly update live demo URLs
- Keep project descriptions current
- Update technology versions
- Monitor performance metrics
- Test accessibility compliance

## Future Enhancements

The system is designed to be extensible. Future additions might include:
- Project filtering and search
- Technology-based project grouping
- Client testimonials integration
- Project timeline visualization
- Advanced analytics integration
