"use client";
import { lazy, Suspense } from "react";
import { Project } from "@/data/projects";
import ProjectDetailSkeleton from "./ProjectDetailSkeleton";
import ErrorBoundary from "./ErrorBoundary";

// Lazy load the ProjectDetail component
const ProjectDetail = lazy(() => import("./ProjectDetail"));

interface LazyProjectDetailProps {
  project: Project;
}

const LazyProjectDetail = ({ project }: LazyProjectDetailProps) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<ProjectDetailSkeleton />}>
        <ProjectDetail project={project} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default LazyProjectDetail;
