"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// icons
import { HiHome, HiUser, HiViewColumns, HiRectangleGroup } from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "projects", path: "/projects", icon: <HiViewColumns /> },
  // {
  //   name: "contact",
  //   path: "/contact",
  //   icon: <HiEnvelope />,
  // },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav
      className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-8 px-4 md:px-32 xl:px-0 h-[70px] xl:h-max py-6 bg-secondary/10 backdrop-blur-sm text-2xl xl:text-lg xl:rounded-full">
        {navData.map((link, index) => {
          const isActive = link.path === pathname;
          return (
            <Link
              className={`${isActive && "text-accent"} relative flex items-center group hover:text-accent transition-all duration-300 focus-visible rounded-lg p-2`}
              href={link.path}
              key={index}
              aria-label={`Navigate to ${link.name} page`}
              aria-current={isActive ? "page" : undefined}
            >
              {/* Tooltip */}
              <div className="absolute pr-12 right-0 hidden xl:group-hover:flex xl:group-focus:flex">
                <div className="bg-white relative flex text-primary items-center p-[5px] rounded-[3px] shadow-lg">
                  <div className="text-[11px] leading-none font-semibold capitalize">{link.name}</div>
                  <div className="border-solid border-l-white border-l-6 border-y-transparent border-y-[5px] border-r-0 absolute -right-1.5"></div>
                </div>
              </div>

              {/* Icon with screen reader text */}
              <div aria-hidden="true">{link.icon}</div>
              <span className="sr-only">{link.name}</span>

              {/* Active indicator */}
              {isActive && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full xl:hidden" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
