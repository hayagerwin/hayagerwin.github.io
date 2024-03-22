"use client";
import { FrozenRoute, Transition } from "@/components";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Animate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="h-full">
        <Transition />
        <FrozenRoute>{children}</FrozenRoute>
      </motion.div>
    </AnimatePresence>
  );
}
