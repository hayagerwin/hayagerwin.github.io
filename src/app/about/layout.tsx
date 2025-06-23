import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Full Stack Web Developer with 3+ Years Experience",
  description: "Learn about Erwin Hayag, a passionate Full Stack Web Developer with over 3 years of experience in React, Next.js, and modern web technologies. Discover my journey, skills, and professional background.",
  openGraph: {
    title: "About Erwin Hayag - Full Stack Web Developer",
    description: "Learn about my journey as a Full Stack Web Developer with expertise in React, Next.js, and modern web technologies.",
    url: "https://hayagerwin.github.io/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
