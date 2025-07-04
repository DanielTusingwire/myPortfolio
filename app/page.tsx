"use client"

import { Navigation } from "@/components/navigation"
import { ScrollSpyNavigation } from "@/components/scroll-spy-navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ContactSection } from "@/components/sections/contact-section"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <>
      <Navigation />
      <ScrollSpyNavigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Quick Preview Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Bridging <span className="text-accent">Design & Engineering</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I combine design thinking with technical expertise to create solutions that are both beautiful and
              feasible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "User-Centered Engineering",
                description: "Every solution starts with understanding user needs and technical constraints.",
                icon: "🎯",
              },
              {
                title: "Scalable Design Systems",
                description: "Building consistent, maintainable design systems that grow with your product.",
                icon: "⚡",
              },
              {
                title: "Real-World Impact",
                description: "Creating digital solutions that solve actual problems for real people and businesses.",
                icon: "🌍",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-accent/50 transition-all duration-300 light-card-shadow-lg dark:shadow-none light-hover-lift"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-accent">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Major Sections */}
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  )
}
