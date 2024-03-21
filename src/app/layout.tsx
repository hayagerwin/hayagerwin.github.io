import type { Metadata } from "next";
import "./globals.css";
import { Layout } from "@/components";

export const metadata: Metadata = {
  title: "Erwin Hayag - Web Portfolio",
  description:
    "Explore my web portfolio showcasing my skills and expertise as a developer. Each project reflects my passion for creating user-friendly experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
