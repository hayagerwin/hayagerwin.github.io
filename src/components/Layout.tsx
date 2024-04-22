"use client";
import { Poppins } from "next/font/google";
import { Header, Nav, TopLeftImg } from "@/components";

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
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
    </div>
  );
};

export default Layout;
