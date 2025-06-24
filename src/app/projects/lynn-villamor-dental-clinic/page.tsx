"use client";
import { projectData } from "@/data/projects";
import LazyProjectDetail from "@/components/LazyProjectDetail";

const DentalClinicProjectPage = () => {
  const project = projectData.find(
    (item) => item.slug === "lynn-villamor-dental-clinic",
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

export default DentalClinicProjectPage;
