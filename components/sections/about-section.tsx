"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Coffee, Music, Camera, Gamepad2 } from "lucide-react"

const timeline = [
  {
    year: "2023",
    title: "Product Design Engineer",
    company: "Farmsell",
    description:
      "Leading full design lifecycle for e-commerce platforms connecting smallholder farmers with buyers, reducing post-harvest losses.",
  },
  {
    year: "2022",
    title: "UI/UX Designer",
    company: "Tallen LTD",
    description:
      "Led UI/UX efforts for client projects including education portals, dashboards, and eCommerce platforms.",
  },
  {
    year: "2020",
    title: "UI/UX Design Intern",
    company: "Tallen LTD",
    description: "Contributed to digital products for NGOs, schools, and SMEs while learning agile workflows.",
  },
  {
    year: "2021",
    title: "Software Engineering Student",
    company: "Cavendish University Uganda",
    description: "Bachelor's in Software Engineering with focus on scalable product design and development lifecycle.",
  },
]

const interests = [
  { icon: Coffee, label: "Coffee Brewing", color: "text-amber-500" },
  { icon: Music, label: "Music Production", color: "text-purple-500" },
  { icon: Camera, label: "Photography", color: "text-blue-500" },
  { icon: Gamepad2, label: "Gaming", color: "text-green-500" },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            I'm a passionate Product Design Engineer with 3+ years of experience creating digital solutions that bridge
            user needs and business goals, with a strong technical foundation in software engineering.
          </p>
        </motion.div>

        {/* Personal Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 light-card-shadow-lg dark:shadow-none light-hover-lift"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-accent">Quick Facts</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-800 dark:text-gray-300">Based in Nansana, Uganda</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-800 dark:text-gray-300">
                  3+ years in Product Design
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Coffee className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-800 dark:text-gray-300">
                  Fueled by specialty coffee
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 light-card-shadow-lg dark:shadow-none light-hover-lift"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-accent">My Approach</h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              I believe great design happens when empathy meets engineering. With a strong foundation in software
              development, I create solutions that are not only beautiful but technically feasible and scalable.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-900 dark:text-white">
            My <span className="text-accent">Journey</span>
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 transform md:-translate-x-0.5"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-8 sm:mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-accent rounded-full transform -translate-x-1.5 sm:-translate-x-2 md:-translate-x-2 z-10 pulse-glow border-2 border-white dark:border-gray-900"></div>

                {/* Content */}
                <div
                  className={`ml-10 sm:ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8 lg:pr-12" : "md:pl-8 lg:pl-12"}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-accent/50 transition-all duration-300 light-card-shadow-lg dark:shadow-none light-hover-lift"
                  >
                    <div className="text-accent font-bold text-base sm:text-lg mb-1 sm:mb-2">{item.year}</div>
                    <h4 className="text-lg sm:text-xl font-bold mb-1 text-gray-900 dark:text-white">{item.title}</h4>
                    <div className="text-accent/80 mb-2 sm:mb-3 font-medium text-sm sm:text-base">{item.company}</div>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-gray-900 dark:text-white">
            When I'm Not <span className="text-accent">Designing</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {interests.map((interest, index) => {
              const Icon = interest.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-accent/50 transition-all duration-300 light-card-shadow-lg dark:shadow-none light-hover-lift"
                >
                  <Icon className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 ${interest.color} drop-shadow-sm`} />
                  <p className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-300">{interest.label}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
