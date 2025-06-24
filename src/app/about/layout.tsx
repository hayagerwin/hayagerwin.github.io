import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Full Stack Web Developer with 3+ Years Experience",
  description: "Learn about Erwin Hayag, a passionate Full Stack Web Developer with 3+ years of experience in React, Next.js, TypeScript, and modern web technologies. Discover my journey from concept to code, technical skills, and professional background in e-commerce and healthcare development.",
  keywords: [
    "About Erwin Hayag",
    "Full Stack Developer Background",
    "React Developer Experience",
    "Next.js Developer Skills",
    "Web Developer Journey",
    "TypeScript Developer",
    "E-commerce Developer Experience",
    "Healthcare Web Developer",
    "Professional Web Developer",
    "Metro Manila Developer"
  ],
  openGraph: {
    title: "About Erwin Hayag - Full Stack Web Developer | 3+ Years Experience",
    description: "Learn about my journey as a Full Stack Web Developer with 3+ years of expertise in React, Next.js, TypeScript, and modern web technologies. Specializing in e-commerce and healthcare applications.",
    url: "https://hayagerwin.github.io/about",
    images: [
      {
        url: "/assets/images/about-og.png",
        width: 1200,
        height: 630,
        alt: "About Erwin Hayag - Full Stack Web Developer with expertise in React, Next.js, and modern web technologies",
      },
    ],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
