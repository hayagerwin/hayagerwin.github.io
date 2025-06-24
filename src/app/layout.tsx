import type { Metadata } from "next";
import "./globals.css";
import { Animate, Layout } from "@/components";

export const metadata: Metadata = {
  title: {
    default: "Erwin Hayag - Full Stack Web Developer Portfolio",
    template: "%s | Erwin Hayag - Web Developer"
  },
  description:
    "Experienced Full Stack Web Developer with 3+ years of expertise in React, Next.js, TypeScript, and modern web technologies. Specializing in e-commerce platforms, healthcare applications, and scalable web solutions. Available for remote work, freelance projects, and full-time opportunities in Metro Manila.",
  keywords: [
    "Full Stack Developer Philippines",
    "React Developer Metro Manila",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "E-commerce Development",
    "Healthcare Web Applications",
    "Progressive Web Apps",
    "Responsive Web Design",
    "HIPAA Compliant Development",
    "Freelance Web Developer",
    "Remote Web Developer",
    "Web Portfolio",
    "Erwin Hayag",
    "Node.js Developer",
    "MongoDB Developer",
    "PostgreSQL Developer",
    "Tailwind CSS Developer",
    "Web Performance Optimization",
    "SEO Optimization",
    "Accessibility WCAG 2.1"
  ],
  authors: [{ name: "Erwin Hayag", url: "https://hayagerwin.github.io" }],
  creator: "Erwin Hayag",
  publisher: "Erwin Hayag",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hayagerwin.github.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hayagerwin.github.io",
    title: "Erwin Hayag - Full Stack Web Developer Portfolio | React & Next.js Expert",
    description:
      "Experienced Full Stack Web Developer with 3+ years of expertise in React, Next.js, TypeScript. Specializing in e-commerce platforms, healthcare applications, and scalable web solutions. Available for remote work and freelance projects.",
    siteName: "Erwin Hayag Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Erwin Hayag - Full Stack Web Developer Portfolio showcasing React, Next.js, and modern web development projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Erwin Hayag - Full Stack Web Developer Portfolio",
    description:
      "Experienced Full Stack Web Developer specializing in React, Next.js, and modern web technologies.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Erwin Hayag",
  jobTitle: "Full Stack Web Developer",
  description: "Experienced Full Stack Web Developer with 3+ years of expertise in React, Next.js, TypeScript, and modern web technologies. Specializing in e-commerce platforms, healthcare applications, and scalable web solutions.",
  url: "https://hayagerwin.github.io",
  email: "hayagerwin85@gmail.com",
  telephone: "+639765382859",
  address: {
    "@type": "PostalAddress",
    addressCountry: "Philippines",
    addressRegion: "Metro Manila"
  },
  sameAs: [
    "https://github.com/hayagerwin",
    "https://linkedin.com/in/erwin-hayag",
    "https://wa.me/639765382859"
  ],
  knowsAbout: [
    "Web Development",
    "Full Stack Development",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "E-commerce Development",
    "Healthcare Applications",
    "Progressive Web Apps",
    "Responsive Web Design",
    "HIPAA Compliance",
    "Web Performance Optimization",
    "SEO Optimization",
    "Accessibility WCAG 2.1"
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Full Stack Web Developer",
    occupationLocation: {
      "@type": "Place",
      name: "Philippines",
      address: {
        "@type": "PostalAddress",
        addressCountry: "Philippines",
        addressRegion: "Metro Manila"
      }
    },
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Git",
      "Docker",
      "AWS",
      "Vercel",
      "Stripe Integration",
      "PayPal Integration"
    ],
    experienceRequirements: "3+ years of professional web development experience"
  },
  offers: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Web Development Services",
      description: "Full stack web development services including e-commerce platforms, healthcare applications, and custom web solutions"
    },
    availability: "Available for remote work, freelance projects, and full-time positions in Metro Manila area"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Animate>
          <Layout>{children}</Layout>
        </Animate>
      </body>
    </html>
  );
}
