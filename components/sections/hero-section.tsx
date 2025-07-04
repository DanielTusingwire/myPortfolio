"use client"

import { motion } from "framer-motion"
import { ArrowDown, Sparkles, Rocket, Heart } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      // Announce navigation to screen readers
      const sectionName = sectionId.charAt(0).toUpperCase() + sectionId.slice(1)
      const announcement = `Navigated to ${sectionName} section`
      const announcer = document.createElement("div")
      announcer.setAttribute("aria-live", "polite")
      announcer.className = "sr-only"
      announcer.textContent = announcement
      document.body.appendChild(announcer)
      setTimeout(() => document.body.removeChild(announcer), 1000)
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
      aria-label="Hero section - Introduction"
    >
      {/* Background Elements - Decorative only */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-16 sm:top-20 left-6 sm:left-10 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full animate-pulse"></div>
        <div className="absolute top-32 sm:top-40 right-12 sm:right-20 w-1 h-1 bg-accent/60 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 sm:bottom-40 left-12 sm:left-20 w-2 h-2 sm:w-3 sm:h-3 bg-accent/40 rounded-full float-animation"></div>
        <div className="absolute bottom-16 sm:bottom-20 right-6 sm:right-10 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent/80 rounded-full animate-pulse-slow"></div>
      </div>

      {/* Light mode background pattern - Decorative only */}
      <div className="absolute inset-0 light-pattern dark:hidden" aria-hidden="true"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-4 sm:mb-6"
            aria-hidden="true"
          >
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-accent mx-auto mb-3 sm:mb-4 drop-shadow-sm" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white leading-tight"
          >
            Hi, I'm <span className="text-gradient drop-shadow-sm">Daniel Tusingwire</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2"
          >
            A Product Design Engineer who bridges creativity and technology, crafting user-centered solutions that solve
            real-world problems{" "}
            <Heart
              className="inline w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-accent drop-shadow-sm"
              aria-label="heart"
            />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
            role="group"
            aria-label="Main action buttons"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-accent text-accent-contrast rounded-full font-semibold text-base sm:text-lg hover:scale-105 transition-all duration-300 glow-accent hover:glow-accent-strong light-card-shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900"
              aria-label="View my work - Navigate to projects section"
            >
              <span className="flex items-center justify-center gap-2">
                View My Work
                <Rocket
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </span>
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-accent text-accent rounded-full font-semibold text-base sm:text-lg hover:bg-accent hover:text-accent-contrast transition-all duration-300 hover:scale-105 light-card-shadow dark:shadow-none bg-white/50 dark:bg-transparent backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900"
              aria-label="Learn about me - Navigate to about section"
            >
              About Me
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection("about")}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="flex flex-col items-center text-accent hover:text-accent/80 transition-colors light-link-underline focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 rounded-sm p-2"
          aria-label="Scroll down to explore more content"
        >
          <span className="text-xs sm:text-sm mb-1 sm:mb-2 font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-sm" aria-hidden="true" />
        </motion.button>
      </motion.div>
    </section>
  )
}
