import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lynn Villamor Dental Clinic - Healthcare Platform Case Study",
  description: "Comprehensive healthcare platform for dental clinic management. Features patient reservation system, administrative dashboard, and HIPAA-compliant data handling. Built with React and Next.js.",
  openGraph: {
    title: "Lynn Villamor Dental Clinic - Healthcare Platform by Erwin Hayag",
    description: "Comprehensive healthcare platform with patient reservation system and administrative dashboard.",
    url: "https://hayagerwin.github.io/projects/lynn-villamor-dental-clinic",
    images: [
      {
        url: "/assets/images/lynn-villamor-dental-clinic/cover.png",
        width: 1200,
        height: 630,
        alt: "Lynn Villamor Dental Clinic Healthcare Platform",
      },
    ],
  },
};

export default function DentalClinicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
