"use client";
import Link from "next/link";
import Socials from "./Socials";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import { useContext } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

const Header = () => {
  const frozenContext = useContext(LayoutRouterContext)?.url ?? "/";
  const isProjectsRoute = frozenContext.startsWith("/projects/");
  return (
    <motion.header
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      animate={isProjectsRoute ? "hidden" : "show"}
      exit="hidden"
      className="absolute z-30 flex w-full items-center px-8 xl:h-[70px] xl:px-0"
      role="banner"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-y-4 py-6 lg:flex-row">
          <Link
            href={"/"}
            className="focus-visible rounded-lg p-2 transition-all duration-300 hover:scale-105"
            aria-label="Erwin Hayag - Home"
          >
            <h1 className="text-xl md:text-2xl font-bold tracking-tight">
              <span className="text-white">Erwin</span>{" "}
              <span className="text-accent">Hayag</span>
            </h1>
          </Link>
          <Socials />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
