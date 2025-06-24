"use client";
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import { HiEnvelope, HiClipboardDocument, HiCheck, HiSparkles } from "react-icons/hi2";
import { RiWhatsappFill } from "react-icons/ri";
import { BsArrowUpRight, BsGlobe, BsBuilding, BsBriefcase, BsLightbulb, BsCode, BsBook, BsShield, BsAward } from "react-icons/bs";
import { useState } from "react";

const Contact = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(type);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedItem(type);
      setTimeout(() => setCopiedItem(null), 2000);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-primary/80 to-dark-secondary opacity-95" aria-hidden="true" />

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute inset-0 bg-grid-pattern bg-repeat opacity-30" />
      </div>

      {/* Floating Decorative Elements - Enhanced */}
      <div
        className="absolute top-4 sm:top-10 left-4 sm:left-10 w-12 sm:w-20 h-12 sm:h-20 bg-accent/10 rounded-full blur-xl animate-pulse-slow"
        style={{ animationDelay: '0s' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 sm:bottom-20 right-8 sm:right-16 w-16 sm:w-32 h-16 sm:h-32 bg-highlight/10 rounded-full blur-xl animate-pulse-slow"
        style={{ animationDelay: '2s' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 sm:top-1/3 right-4 sm:right-8 w-8 sm:w-16 h-8 sm:h-16 bg-secondary/10 rounded-full blur-lg animate-pulse-slow"
        style={{ animationDelay: '1s' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/4 w-6 sm:w-12 h-6 sm:h-12 bg-success/10 rounded-full blur-lg animate-pulse-slow"
        style={{ animationDelay: '3s' }}
        aria-hidden="true"
      />

      {/* Copy Success Notification */}
      {copiedItem && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-4 right-4 z-50 bg-success/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg border border-success/30"
        >
          <div className="flex items-center gap-2">
            <HiCheck className="w-4 h-4" />
            <span className="text-sm font-medium">
              {copiedItem === 'phone' ? 'Phone number copied!' : 'Email address copied!'}
            </span>
          </div>
        </motion.div>
      )}

      {/* Desktop/Tablet: Scrollable layout with top alignment */}
      <div className="hidden md:block relative z-10">
        <div className="w-full max-w-6xl mx-auto px-6 lg:px-8 py-16">
          <div className="text-center space-y-8 lg:space-y-10">
            {/* Desktop/Tablet Header Section - Enhanced */}
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-center"
              id="contact-header"
            >
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 animate-pulse-slow">
                <HiSparkles className="text-accent text-sm" aria-hidden="true" />
                <span className="text-accent text-sm font-medium">Full Stack Web Developer</span>
                <HiSparkles className="text-accent text-sm" aria-hidden="true" />
              </div>

              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">
                Let&apos;s Build Something <span className="text-accent">Amazing</span>
                <br />
                <span className="text-highlight">Together</span>
              </h1>

              <p className="text-base lg:text-lg text-text-secondary mb-6 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your ideas into powerful digital solutions? I&apos;m passionate about creating
                exceptional user experiences and robust applications. Let&apos;s collaborate to bring your vision to life.
              </p>

              {/* Availability Status - Full-time Priority */}
              <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-6 py-3 rounded-full border border-accent/30 animate-pulse-slow mb-6">
                <div className="relative">
                  <span className="w-2 h-2 bg-accent rounded-full block" aria-hidden="true"></span>
                  <span className="absolute inset-0 w-2 h-2 bg-accent rounded-full animate-ping opacity-75" aria-hidden="true"></span>
                </div>
                <span className="text-accent font-bold text-sm">Actively Seeking Full-Time Employment</span>
              </div>
            </motion.div>

            {/* Enhanced Contact Methods */}
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-center mb-8"
              id="contact-methods"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 max-w-5xl mx-auto">
                {/* WhatsApp - Enhanced */}
                <div className="group relative overflow-hidden bg-gradient-to-br from-dark-secondary/80 to-dark-secondary/40 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#25D366]/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#25D366]/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/0 via-[#25D366]/5 to-[#25D366]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-[#25D366]/20 rounded-xl text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all duration-500 group-hover:scale-110">
                        <RiWhatsappFill className="text-xl" aria-hidden="true" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-lg font-bold text-text-primary group-hover:text-[#25D366] transition-colors duration-300 mb-1">
                          WhatsApp
                        </h3>
                        <p className="text-text-secondary text-sm mb-2">Quick chat and immediate responses</p>
                        <div className="flex items-center gap-2">
                          <span className="text-text-primary font-mono text-sm">+63 976 538 2859</span>
                          <button
                            onClick={() => copyToClipboard('+639765382859', 'phone')}
                            className="p-1 rounded-md hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50"
                            aria-label="Copy phone number to clipboard"
                          >
                            {copiedItem === 'phone' ? (
                              <HiCheck className="w-4 h-4 text-[#25D366]" />
                            ) : (
                              <HiClipboardDocument className="w-4 h-4 text-text-muted hover:text-[#25D366] transition-colors duration-200" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href="https://wa.me/639765382859"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#25D366] hover:bg-[#25D366]/90 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 flex items-center justify-center gap-2"
                      >
                        <span>Start Chat</span>
                        <BsArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email - Enhanced */}
                <div className="group relative overflow-hidden bg-gradient-to-br from-dark-secondary/80 to-dark-secondary/40 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-accent/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-accent/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-xl text-accent group-hover:bg-accent group-hover:text-dark transition-all duration-500 group-hover:scale-110">
                        <HiEnvelope className="text-xl" aria-hidden="true" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors duration-300 mb-1">
                          Email
                        </h3>
                        <p className="text-text-secondary text-sm mb-2">Detailed proposals and scheduled meetings</p>
                        <div className="flex items-center gap-2">
                          <span className="text-text-primary font-mono text-sm">hayagerwin85@gmail.com</span>
                          <button
                            onClick={() => copyToClipboard('hayagerwin85@gmail.com', 'email')}
                            className="p-1 rounded-md hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50"
                            aria-label="Copy email address to clipboard"
                          >
                            {copiedItem === 'email' ? (
                              <HiCheck className="w-4 h-4 text-accent" />
                            ) : (
                              <HiClipboardDocument className="w-4 h-4 text-text-muted hover:text-accent transition-colors duration-200" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href="mailto:hayagerwin85@gmail.com"
                        className="flex-1 bg-accent hover:bg-accent/90 text-dark px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent/50 flex items-center justify-center gap-2"
                      >
                        <span>Send Email</span>
                        <BsArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Work Availability Categories - Prioritizing Full-time Employment */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-text-primary mb-4 text-center">Career Opportunities I&apos;m Seeking</h3>
                <p className="text-text-secondary text-center mb-6 max-w-3xl mx-auto">
                  I&apos;m actively pursuing full-time employment opportunities while remaining open to other professional engagements.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 max-w-5xl mx-auto">
                {/* Full-time Positions - Primary Focus */}
                <motion.div
                  className="group bg-gradient-to-br from-accent/30 to-accent/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-accent/50 hover:border-accent/70 transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 animate-fade-in-up relative overflow-hidden"
                  style={{ animationDelay: '0.1s' }}
                >
                  <div className="absolute top-3 right-3 bg-accent/20 backdrop-blur-sm px-3 py-1 rounded-full z-10">
                    <span className="text-accent text-xs font-bold">PRIMARY FOCUS</span>
                  </div>
                  <div className="flex items-center gap-4 mb-4 pr-24">
                    <div className="flex items-center justify-center w-14 h-14 bg-accent/30 rounded-2xl text-accent group-hover:bg-accent group-hover:text-dark transition-all duration-500 group-hover:scale-110">
                      <BsBuilding className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-text-primary font-bold text-lg mb-1 group-hover:text-accent transition-colors duration-300">Full-time Employment</h3>
                      <p className="text-text-secondary text-sm">Remote or Metro Manila on-site positions</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-text-secondary">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      <span>Seeking permanent career growth opportunities</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      <span>Open to remote work globally</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      <span>Available for on-site roles in Metro Manila</span>
                    </div>
                  </div>
                </motion.div>

                {/* Remote Work Opportunities */}
                <motion.div
                  className="group bg-gradient-to-br from-success/20 to-success/5 backdrop-blur-sm p-6 rounded-2xl border border-success/30 hover:border-success/50 transition-all duration-300 hover:shadow-lg hover:shadow-success/20 animate-fade-in-up"
                  style={{ animationDelay: '0.2s' }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-success/20 rounded-xl text-success group-hover:bg-success group-hover:text-white transition-all duration-500 group-hover:scale-110">
                      <BsGlobe className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-text-primary font-bold mb-1">Remote Collaboration</h3>
                      <p className="text-text-secondary text-sm">Global opportunities with flexible schedules</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-text-secondary">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-success rounded-full"></span>
                      <span>Full-time remote positions preferred</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-success rounded-full"></span>
                      <span>Contract work also considered</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Secondary Opportunities */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8 max-w-4xl mx-auto">
                <motion.div
                  className="group bg-gradient-to-br from-highlight/20 to-highlight/5 backdrop-blur-sm p-4 rounded-xl border border-highlight/30 hover:border-highlight/50 transition-all duration-300 hover:shadow-lg hover:shadow-highlight/20 animate-fade-in-up"
                  style={{ animationDelay: '0.3s' }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <BsBriefcase className="w-5 h-5 text-highlight group-hover:scale-110 transition-transform duration-300" />
                    <span className="w-2 h-2 bg-highlight rounded-full group-hover:scale-125 transition-transform duration-300" aria-hidden="true"></span>
                  </div>
                  <h3 className="text-text-primary font-bold mb-2">Freelance Projects</h3>
                  <p className="text-text-secondary text-sm">Short-term development work</p>
                </motion.div>

                <motion.div
                  className="group bg-gradient-to-br from-secondary/20 to-secondary/5 backdrop-blur-sm p-4 rounded-xl border border-secondary/30 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 animate-fade-in-up"
                  style={{ animationDelay: '0.4s' }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <BsLightbulb className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform duration-300" />
                    <span className="w-2 h-2 bg-secondary rounded-full group-hover:scale-125 transition-transform duration-300" aria-hidden="true"></span>
                  </div>
                  <h3 className="text-text-primary font-bold mb-2">Consulting Services</h3>
                  <p className="text-text-secondary text-sm">Technical guidance & partnerships</p>
                </motion.div>
              </div>

              {/* Additional Professional Services */}
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-6"
              >
                <h3 className="text-xl font-bold text-text-primary mb-4">Additional Services I Offer</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
                  <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10 hover:border-accent/30 transition-all duration-300">
                    <BsCode className="w-4 h-4 text-accent" />
                    <span className="text-sm text-text-secondary">Code Reviews</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10 hover:border-accent/30 transition-all duration-300">
                    <BsShield className="w-4 h-4 text-accent" />
                    <span className="text-sm text-text-secondary">Technical Audits</span>
                  </div>

                  <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10 hover:border-accent/30 transition-all duration-300">
                    <BsAward className="w-4 h-4 text-accent" />
                    <span className="text-sm text-text-secondary">Performance Optimization</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10 hover:border-accent/30 transition-all duration-300">
                    <BsLightbulb className="w-4 h-4 text-accent" />
                    <span className="text-sm text-text-secondary">Architecture Design</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile: Scrollable layout with adaptive centering */}
      <div className="md:hidden relative z-10">
        <div className="min-h-screen flex flex-col">
          {/* Mobile content container with smart centering */}
          <div className="flex-1 flex flex-col justify-center px-4 py-8">
            <div className="w-full max-w-lg mx-auto space-y-8">

              {/* Mobile Header Section - Enhanced */}
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="text-center"
                id="contact-header-mobile"
              >
                <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 animate-pulse-slow">
                  <HiSparkles className="text-accent text-lg" aria-hidden="true" />
                  <span className="text-accent text-sm font-medium">Full Stack Web Developer</span>
                  <HiSparkles className="text-accent text-lg" aria-hidden="true" />
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                  Let&apos;s Build Something <span className="text-accent">Amazing</span>
                  <br />
                  <span className="text-highlight">Together</span>
                </h1>

                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                  Ready to transform your ideas into powerful digital solutions? I&apos;m passionate about creating
                  exceptional user experiences and robust applications. Let&apos;s collaborate to bring your vision to life.
                </p>

                {/* Mobile Availability Status - Full-time Priority */}
                <div className="inline-flex items-center gap-3 bg-accent/20 backdrop-blur-sm px-4 py-3 rounded-full border border-accent/30 shadow-lg mb-8 animate-pulse-slow">
                  <div className="relative">
                    <span className="w-3 h-3 bg-accent rounded-full block" aria-hidden="true"></span>
                    <span className="absolute inset-0 w-3 h-3 bg-accent rounded-full animate-ping opacity-75" aria-hidden="true"></span>
                  </div>
                  <span className="text-accent font-semibold text-sm">Actively Seeking Full-Time Employment</span>
                </div>
              </motion.div>

              {/* Mobile Contact Methods - Enhanced */}
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="text-center"
                id="contact-methods-mobile"
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-text-primary">
                    Choose Your <span className="text-accent">Preferred</span> Contact Method
                  </h2>
                  <p className="text-text-secondary">
                    I&apos;m available through multiple channels to make it easy for you to reach out.
                  </p>
                </div>

                {/* Mobile Contact Methods Grid - Enhanced */}
                <div className="space-y-6 mb-8">
                  {/* WhatsApp - Enhanced */}
                  <div className="group relative overflow-hidden bg-gradient-to-br from-dark-secondary/80 to-dark-secondary/40 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#25D366]/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#25D366]/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center justify-center w-16 h-16 bg-[#25D366]/20 rounded-2xl text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all duration-500 group-hover:scale-110">
                          <RiWhatsappFill className="text-2xl" aria-hidden="true" />
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className="text-xl font-bold text-text-primary mb-1 group-hover:text-[#25D366] transition-colors duration-300">
                            WhatsApp
                          </h3>
                          <p className="text-text-secondary text-sm">Quick chat and immediate responses</p>
                        </div>
                      </div>

                      <div className="text-left mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-text-primary font-mono text-sm">+63 976 538 2859</span>
                          <button
                            onClick={() => copyToClipboard('+639765382859', 'phone')}
                            className="p-1 rounded-md hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50"
                            aria-label="Copy phone number to clipboard"
                          >
                            {copiedItem === 'phone' ? (
                              <HiCheck className="w-4 h-4 text-[#25D366]" />
                            ) : (
                              <HiClipboardDocument className="w-4 h-4 text-text-muted hover:text-[#25D366] transition-colors duration-200" />
                            )}
                          </button>
                        </div>
                        <p className="text-text-secondary text-sm">
                          Quick responses • File sharing • Voice messages
                        </p>
                      </div>

                      <a
                        href="https://wa.me/639765382859"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 flex items-center justify-center gap-2"
                      >
                        <span>Start Chat</span>
                        <BsArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Email - Enhanced */}
                  <div className="group relative overflow-hidden bg-gradient-to-br from-dark-secondary/80 to-dark-secondary/40 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-accent/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-accent/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center justify-center w-16 h-16 bg-accent/20 rounded-2xl text-accent group-hover:bg-accent group-hover:text-dark transition-all duration-500 group-hover:scale-110">
                          <HiEnvelope className="text-2xl" aria-hidden="true" />
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className="text-xl font-bold text-text-primary mb-1 group-hover:text-accent transition-colors duration-300">
                            Email
                          </h3>
                          <p className="text-text-secondary text-sm">Detailed proposals and scheduled meetings</p>
                        </div>
                      </div>

                      <div className="text-left mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-text-primary font-mono text-sm">hayagerwin85@gmail.com</span>
                          <button
                            onClick={() => copyToClipboard('hayagerwin85@gmail.com', 'email')}
                            className="p-1 rounded-md hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50"
                            aria-label="Copy email address to clipboard"
                          >
                            {copiedItem === 'email' ? (
                              <HiCheck className="w-4 h-4 text-accent" />
                            ) : (
                              <HiClipboardDocument className="w-4 h-4 text-text-muted hover:text-accent transition-colors duration-200" />
                            )}
                          </button>
                        </div>
                        <p className="text-text-secondary text-sm">
                          Detailed discussions • Project proposals • Formal inquiries
                        </p>
                      </div>

                      <a
                        href="mailto:hayagerwin85@gmail.com"
                        className="w-full bg-accent hover:bg-accent/90 text-dark px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent/50 flex items-center justify-center gap-2"
                      >
                        <span>Send Email</span>
                        <BsArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mobile Work Opportunities - Enhanced */}
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="text-center"
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-4 text-text-primary">
                    Career <span className="text-accent">Opportunities</span>
                  </h2>
                  <p className="text-text-secondary">
                    I&apos;m actively pursuing full-time employment opportunities while remaining open to other professional engagements.
                  </p>
                </div>

                {/* Mobile Primary Focus - Full-time Employment */}
                <div className="mb-6">
                  <div className="group bg-gradient-to-br from-accent/30 to-accent/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-accent/50 hover:border-accent/70 transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 relative overflow-hidden">
                    <div className="absolute top-3 right-3 bg-accent/20 backdrop-blur-sm px-2 py-1 rounded-full z-10">
                      <span className="text-accent text-xs font-bold">PRIMARY FOCUS</span>
                    </div>
                    <div className="flex items-center gap-4 mb-4 pr-20">
                      <div className="flex items-center justify-center w-12 h-12 bg-accent/30 rounded-xl text-accent group-hover:bg-accent group-hover:text-dark transition-all duration-500 group-hover:scale-110">
                        <BsBuilding className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-text-primary font-bold text-lg mb-1 group-hover:text-accent transition-colors duration-300">Full-time Employment</h3>
                        <p className="text-text-secondary text-sm">Remote or Metro Manila on-site positions</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-text-secondary">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        <span>Seeking permanent career growth opportunities</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        <span>Open to remote work globally</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        <span>Available for on-site roles in Metro Manila</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Secondary Opportunities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="group bg-gradient-to-br from-success/20 to-success/5 backdrop-blur-sm p-6 rounded-xl border border-success/30 hover:border-success/50 transition-all duration-300 hover:shadow-lg hover:shadow-success/20">
                    <div className="flex items-center gap-3 mb-3">
                      <BsGlobe className="w-5 h-5 text-success group-hover:scale-110 transition-transform duration-300" />
                      <span className="w-3 h-3 bg-success rounded-full group-hover:scale-125 transition-transform duration-300" aria-hidden="true"></span>
                    </div>
                    <h3 className="text-text-primary font-bold mb-2">Remote Collaboration</h3>
                    <p className="text-text-secondary text-sm">Full-time remote positions preferred</p>
                  </div>

                  <div className="group bg-gradient-to-br from-highlight/20 to-highlight/5 backdrop-blur-sm p-6 rounded-xl border border-highlight/30 hover:border-highlight/50 transition-all duration-300 hover:shadow-lg hover:shadow-highlight/20">
                    <div className="flex items-center gap-3 mb-3">
                      <BsBriefcase className="w-5 h-5 text-highlight group-hover:scale-110 transition-transform duration-300" />
                      <span className="w-3 h-3 bg-highlight rounded-full group-hover:scale-125 transition-transform duration-300" aria-hidden="true"></span>
                    </div>
                    <h3 className="text-text-primary font-bold mb-2">Freelance Projects</h3>
                    <p className="text-text-secondary text-sm">Short-term development work</p>
                  </div>

                  <div className="group bg-gradient-to-br from-secondary/20 to-secondary/5 backdrop-blur-sm p-6 rounded-xl border border-secondary/30 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 sm:col-span-2">
                    <div className="flex items-center gap-3 mb-3">
                      <BsLightbulb className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform duration-300" />
                      <span className="w-3 h-3 bg-secondary rounded-full group-hover:scale-125 transition-transform duration-300" aria-hidden="true"></span>
                    </div>
                    <h3 className="text-text-primary font-bold mb-2">Consulting Services</h3>
                    <p className="text-text-secondary text-sm">Technical guidance & partnerships</p>
                  </div>
                </div>

                {/* Additional Services for Mobile */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-text-primary mb-4">Additional Services</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm p-2 rounded-lg border border-white/10">
                      <BsCode className="w-3 h-3 text-accent" />
                      <span className="text-xs text-text-secondary">Code Reviews</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm p-2 rounded-lg border border-white/10">
                      <BsShield className="w-3 h-3 text-accent" />
                      <span className="text-xs text-text-secondary">Technical Audits</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm p-2 rounded-lg border border-white/10">
                      <BsAward className="w-3 h-3 text-accent" />
                      <span className="text-xs text-text-secondary">Performance Optimization</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm p-2 rounded-lg border border-white/10">
                      <BsBook className="w-3 h-3 text-accent" />
                      <span className="text-xs text-text-secondary">Technical Writing</span>
                    </div>
                  </div>
                </div>

                {/* Mobile CTA - Enhanced */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    Ready to Start Your Project?
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Let&apos;s discuss your ideas and turn them into reality.
                  </p>
                  <div className="flex flex-col gap-4">
                    <a
                      href="https://wa.me/639765382859"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent/50"
                    >
                      <RiWhatsappFill className="text-lg" />
                      Quick Chat on WhatsApp
                      <BsArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </a>
                    <a
                      href="mailto:hayagerwin85@gmail.com"
                      className="btn-secondary group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent/50"
                    >
                      <HiEnvelope className="text-lg" />
                      Send Detailed Email
                      <BsArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
