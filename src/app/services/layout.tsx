import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Professional Web Development Solutions",
  description: "Comprehensive web development services including full stack development, e-commerce solutions, healthcare applications, progressive web apps, and responsive design. Expert React, Next.js, and TypeScript development with 3+ years of experience.",
  keywords: [
    "Web Development Services",
    "Full Stack Development",
    "React Development Services",
    "Next.js Development",
    "E-commerce Development",
    "Healthcare Web Applications",
    "Progressive Web Apps",
    "Responsive Web Design",
    "TypeScript Development",
    "HIPAA Compliant Development",
    "Custom Web Solutions",
    "Professional Web Developer",
    "Freelance Web Development",
    "Remote Web Development"
  ],
  openGraph: {
    title: "Professional Web Development Services - Erwin Hayag | React & Next.js Expert",
    description: "Comprehensive web development services including full stack development, e-commerce solutions, healthcare applications, and progressive web apps. Expert React, Next.js, and TypeScript development.",
    url: "https://hayagerwin.github.io/services",
    images: [
      {
        url: "/assets/images/services-og.png",
        width: 1200,
        height: 630,
        alt: "Professional Web Development Services - Full Stack, E-commerce, Healthcare Applications",
      },
    ],
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
