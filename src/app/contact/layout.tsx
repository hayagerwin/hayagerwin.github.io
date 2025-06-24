import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Actively Seeking Full-Time Employment Opportunities",
  description: "Contact Erwin Hayag directly via WhatsApp (+639765382859) or email (hayagerwin85@gmail.com). Actively seeking full-time employment opportunities - remote work globally or on-site positions in Metro Manila. Also available for freelance projects and consulting.",
  openGraph: {
    title: "Contact Erwin Hayag - Seeking Full-Time Web Development Positions",
    description: "Get in touch directly for full-time employment opportunities. Actively seeking permanent positions - remote work globally or on-site in Metro Manila area. Also available for freelance and consulting work.",
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
