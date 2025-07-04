"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { ArrowLeft, Mail, Figma, Calendar, Users, Wrench, Target, Clock, Sparkles } from "lucide-react";

export default function ProjectMotionContent({ project }: { project: any }) {
  return (
    <>
      <Navigation />
      <div className="pt-16 sm:pt-20 min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-20 px-4 sm:px-6 overflow-hidden min-h-[90vh] flex flex-col">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5`} aria-hidden="true"></div>

          <div className="max-w-6xl mx-auto relative z-10 flex-1 flex flex-col justify-center">
            {/* Back Button */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 rounded-sm p-1"
                aria-label="Back to projects"
              >
                <ArrowLeft size={20} aria-hidden="true" />
                Back to Projects
              </Link>
            </motion.div>

            {/* Centered Content */}
            <div className="flex-1 flex flex-col justify-center text-center">
              {/* Project Title and Info */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white max-w-4xl mx-auto leading-tight">
                  {project.title}
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-accent font-semibold mb-6 max-w-3xl mx-auto">
                  {project.subtitle}
                </p>
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 justify-center mb-16">
                  {project.figmaUrl && (
                    <motion.a
                      href={project.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-accent text-accent-contrast rounded-full font-semibold text-base sm:text-lg hover:bg-accent/90 transition-all duration-300 glow-accent hover:glow-accent-strong focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
                      aria-label={`Play ${project.title} prototype`}
                    >
                      <Figma size={18} aria-hidden="true" />
                      Play Prototype
                    </motion.a>
                  )}
                  <motion.a
                    href={project.emailUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-accent text-accent rounded-full font-semibold text-base sm:text-lg hover:bg-accent hover:text-accent-contrast transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
                    aria-label={`Email about ${project.title}`}
                  >
                    <Mail size={18} aria-hidden="true" />
                    Email Me
                  </motion.a>
                </div>
              </motion.div>

              {/* Hero Image Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative mb-8"
              >
                <div
                  className={`relative bg-gradient-to-br ${project.color} rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10" aria-hidden="true">
                    <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full"></div>
                    <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
                    {/* Project Image */}
                    <div className="relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={`${project.title} interface mockup`}
                        width={600}
                        height={800}
                        className="w-full h-auto rounded-2xl shadow-2xl"
                        priority
                      />
                    </div>

                    {/* Project Name and Year */}
                    <div className="text-center lg:text-left">
                      <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight">
                        {project.title.split(" – ")[0] || project.title.split(" ")[0]}
                      </h2>
                      <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white/80">2024</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project Details Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
              >
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Calendar className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wider">
                      Duration
                    </div>
                  </div>
                  <div className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg">
                    {project.duration}
                  </div>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wider">
                      Team
                    </div>
                  </div>
                  <div className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg">{project.team}</div>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wider">
                      Role
                    </div>
                  </div>
                  <div className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg">{project.role}</div>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Wrench className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wider">
                      Tools
                    </div>
                  </div>
                  <div className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg">
                    {project.tools.join(", ")}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              {/* Coming Soon Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mb-6"
              >
                <div className="relative mx-auto w-24 h-24 sm:w-32 sm:h-32">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="absolute inset-0 rounded-full border-4 border-accent/20"
                  ></motion.div>
                  <motion.div
                    animate={{
                      rotate: [360, 0],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="absolute inset-2 rounded-full border-4 border-accent/40"
                  ></motion.div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-accent" aria-hidden="true" />
                  </div>
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
              >
                Case Study <span className="text-accent">Coming Soon</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto"
              >
                I'm currently working on a detailed case study for this project. In the meantime, you can explore the
                interactive prototype to see the design in action!
              </motion.p>

              {/* Prototype Button */}
              {project.figmaUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="mb-8"
                >
                  <motion.a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-contrast rounded-full font-semibold text-lg hover:bg-accent/90 transition-all duration-300 glow-accent hover:glow-accent-strong focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-800 light-card-shadow-lg"
                    aria-label={`Play ${project.title} interactive prototype`}
                  >
                    <Figma size={20} aria-hidden="true" />
                    Play Prototype
                  </motion.a>
                </motion.div>
              )}

              {/* Features Preview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 light-card-shadow-lg dark:shadow-none"
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-accent" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">What to Expect</h3>
                </div>
                <div className="grid sm:grid-cols-3 gap-4 text-sm text-gray-700 dark:text-gray-300">
                  <div className="text-center">
                    <div className="font-semibold mb-1">Design Process</div>
                    <div>Research, ideation, and iteration</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold mb-1">User Journey</div>
                    <div>Personas, flows, and insights</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold mb-1">Impact & Results</div>
                    <div>Metrics and user feedback</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Interested in working together?
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                I'm always excited to take on new challenges and create meaningful digital experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-contrast rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 glow-accent hover:glow-accent-strong focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
                >
                  Contact Me
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
} 