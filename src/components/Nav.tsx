"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "projects", path: "/projects", icon: <HiViewColumns /> },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 top-0 z-50 mt-auto flex h-max w-full flex-col items-center gap-y-4 xl:right-[2%] xl:h-screen xl:w-16 xl:max-w-md xl:justify-center"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex h-[70px] w-full items-center justify-between gap-y-8 bg-secondary/10 px-4 py-6 text-2xl backdrop-blur-sm md:px-32 xl:h-max xl:flex-col xl:justify-center xl:rounded-full xl:px-0 xl:text-lg">
        {navData.map((link, index) => {
          const isActive = link.path === pathname;
          return (
            <Link
              className={`${isActive && "text-accent"} focus-visible group relative flex items-center rounded-lg p-2 transition-all duration-300 hover:text-accent`}
              href={link.path}
              key={index}
              aria-label={`Navigate to ${link.name} page`}
              aria-current={isActive ? "page" : undefined}
            >
              {/* Tooltip */}
              <div className="absolute right-0 hidden pr-12 xl:group-hover:flex xl:group-focus:flex">
                <div className="relative flex items-center rounded-[3px] bg-white p-[5px] text-primary shadow-lg">
                  <div className="text-[11px] font-semibold capitalize leading-none">
                    {link.name}
                  </div>
                  <div className="border-l-6 absolute -right-1.5 border-y-[5px] border-r-0 border-solid border-y-transparent border-l-white"></div>
                </div>
              </div>

              {/* Icon with screen reader text */}
              <div aria-hidden="true">{link.icon}</div>
              <span className="sr-only">{link.name}</span>

              {/* Active indicator */}
              {isActive && (
                <div className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 transform rounded-full bg-accent xl:hidden" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
