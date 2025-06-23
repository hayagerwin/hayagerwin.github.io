import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lucky Star Grocery Store - E-commerce Platform Case Study",
  description: "Comprehensive e-commerce platform built with React, Next.js, and modern web technologies. Features inventory management, secure payments, and same-day delivery. View live demo and technical details.",
  openGraph: {
    title: "Lucky Star Grocery Store - E-commerce Platform by Erwin Hayag",
    description: "Comprehensive e-commerce platform with inventory management, secure payments, and same-day delivery capabilities.",
    url: "https://hayagerwin.github.io/projects/lucky-star-grocery-store",
    images: [
      {
        url: "/assets/images/lucky-star/cover.png",
        width: 1200,
        height: 630,
        alt: "Lucky Star Grocery Store E-commerce Platform",
      },
    ],
  },
};

export default function LuckyStarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
