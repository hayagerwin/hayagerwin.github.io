import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Let's Work Together on Your Next Project",
  description: "Get in touch with Erwin Hayag for your web development needs. Available for freelance projects, consultations, and collaborations. Fast response time and professional service guaranteed.",
  openGraph: {
    title: "Contact Erwin Hayag - Web Development Services",
    description: "Ready to start your next web project? Contact me for professional web development services and consultations.",
    url: "https://hayagerwin.github.io/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
