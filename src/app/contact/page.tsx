"use client";
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="mb-2 mt-8 h-full xl:mb-0">
      <div className="container mx-auto flex h-full items-center justify-center px-4 py-16 sm:py-20 text-center xl:text-left">
        <div className="flex w-full max-w-[600px] flex-col">
          {/* Text */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-12 text-center"
          >
            <h2 className="h3 mb-3">
              Let&apos;s <span className="text-accent">Connect</span>
            </h2>
            <p className="text-base max-w-[500px] mx-auto mb-4">
              Ready to bring your ideas to life? I&apos;m always excited to discuss new projects
              and opportunities. Whether you need a complete web application or want to enhance
              your existing platform, let&apos;s create something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
              <div className="flex items-center gap-2 bg-dark-secondary/50 px-3 py-2 rounded-lg sm:px-4">
                <span className="w-2 h-2 bg-success rounded-full"></span>
                <span className="text-xs sm:text-sm text-text-secondary">Available for freelance</span>
              </div>
              <div className="flex items-center gap-2 bg-dark-secondary/50 px-3 py-2 rounded-lg sm:px-4">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span className="text-xs sm:text-sm text-text-secondary">Response within 24h</span>
              </div>
            </div>
          </motion.div>
          {/* Form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto flex w-full flex-1 flex-col gap-3 xl:gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="input"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Project Subject"
              className="input"
              required
            />
            <textarea
              placeholder="Tell me about your project, timeline, and budget..."
              className="textarea"
              rows={6}
              required
            ></textarea>
            <button className="btn-primary group flex max-w-[200px] items-center justify-center mx-auto">
              <span className="transition-all duration-500 group-hover:-translate-y-[120%] group-hover:opacity-0">
                Send Message
              </span>
              <BsArrowRight className="absolute -translate-y-[120%] text-[20px] opacity-0 transition-all duration-300 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
