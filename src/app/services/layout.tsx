import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Professional Web Development Solutions",
  description: "Comprehensive web development services including full stack development, e-commerce solutions, healthcare applications, and responsive design. Expert React and Next.js development.",
  openGraph: {
    title: "Web Development Services - Erwin Hayag",
    description: "Professional web development services including full stack development, e-commerce solutions, and healthcare applications.",
    url: "https://hayagerwin.github.io/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
