"use client";
import { Poppins } from "next/font/google";
import { Header, Nav } from "@/components";
import ErrorBoundary from "./ErrorBoundary";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div
      className={`page bg-site bg-cover bg-no-repeat text-white ${poppins.variable} relative bg-fixed font-poppins`}
    >
      {/* Navigation */}
      <Nav />

      {/* Header */}
      <Header />

      {/* Main content */}
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </main>
    </div>
  );
};

export default Layout;
