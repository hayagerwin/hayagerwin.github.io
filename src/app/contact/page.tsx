"use client";
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="mb-2 mt-8 h-full xl:mb-0">
      <div className="container mx-auto flex h-full items-center justify-center py-32 text-center xl:text-left">
        <div className="flex w-full max-w-[700px] flex-col">
          {/* Text */}
          <motion.h3
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3 mb-12 text-center"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h3>
          {/* Form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto flex w-full flex-1 flex-col gap-3 xl:gap-6"
          >
            <div className="flex w-full gap-x-6">
              <input type="text" placeholder="name" className="input" />
              <input type="text" placeholder="email" className="input" />
            </div>
            <input type="text" placeholder="subject" className="input" />
            <textarea placeholder="message" className="textarea"></textarea>
            <button className="btn group flex max-w-[170px] items-center justify-center rounded-full border border-white/50 px-8 transition-all duration-300 hover:border-accent">
              <span className="transition-all duration-500 group-hover:-translate-y-[120%] group-hover:opacity-0">
                Lets talk
              </span>
              <BsArrowRight className="absolute -translate-y-[120%] text-[22px] opacity-0 transition-all duration-300 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
