"use client";
import Image from "next/image";
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
      className="absolute z-30 flex w-full items-center px-16 xl:h-[90px] xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-y-6 py-8 lg:flex-row">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              width={220}
              height={48}
              alt=""
              priority={true}
            />
          </Link>
          <Socials />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
