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
    <div>
      <div className={`page bg-site text-white bg-cover bg-no-repeat ${poppins.variable} font-poppins relative`}>
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
