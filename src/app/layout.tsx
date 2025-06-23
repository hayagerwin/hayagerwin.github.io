import type { Metadata } from "next";
import "./globals.css";
import { Animate, Layout } from "@/components";

export const metadata: Metadata = {
  title: {
    default: "Erwin Hayag - Full Stack Web Developer Portfolio",
    template: "%s | Erwin Hayag - Web Developer"
  },
  description:
    "Experienced Full Stack Web Developer specializing in React, Next.js, and modern web technologies. Explore my portfolio featuring e-commerce platforms, healthcare applications, and innovative web solutions. Available for freelance projects and collaborations.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "E-commerce Development",
    "Healthcare Web Applications",
    "Freelance Developer",
    "Web Portfolio",
    "Erwin Hayag"
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
    title: "Erwin Hayag - Full Stack Web Developer Portfolio",
    description:
      "Experienced Full Stack Web Developer specializing in React, Next.js, and modern web technologies. Explore my portfolio featuring innovative web solutions.",
    siteName: "Erwin Hayag Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Erwin Hayag - Full Stack Web Developer Portfolio",
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
  description: "Experienced Full Stack Web Developer specializing in React, Next.js, and modern web technologies",
  url: "https://hayagerwin.github.io",
  sameAs: [
    "https://github.com/hayagerwin",
    "https://linkedin.com/in/erwin-hayag", // Update with actual LinkedIn
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
    "Healthcare Applications"
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Full Stack Web Developer",
    occupationLocation: {
      "@type": "Place",
      name: "Philippines"
    },
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Tailwind CSS"
    ]
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
