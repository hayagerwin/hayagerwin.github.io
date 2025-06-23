import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Web Development Portfolio & Case Studies",
  description: "Explore my web development projects including e-commerce platforms, healthcare applications, and innovative web solutions. View live demos, technical details, and case studies of my work.",
  openGraph: {
    title: "Projects - Erwin Hayag Web Development Portfolio",
    description: "Explore my web development projects including e-commerce platforms, healthcare applications, and innovative web solutions.",
    url: "https://hayagerwin.github.io/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
