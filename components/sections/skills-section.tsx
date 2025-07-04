"use client"

import { motion } from "framer-motion"
import { Palette, Code, Users, Lightbulb, Target, Zap } from "lucide-react"

const skillCategories = [
  {
    title: "Design Tools",
    icon: Palette,
    color: "text-pink-400",
    skills: [
      { name: "Figma", level: 95 },
      { name: "Adobe XD", level: 90 },
      { name: "Adobe Creative Suite", level: 85 },
      { name: "Sketch", level: 75 },
      { name: "InVision", level: 70 },
    ],
  },
  {
    title: "Technical Skills",
    icon: Code,
    color: "text-blue-400",
    skills: [
      { name: "HTML/CSS", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "Git/GitHub", level: 80 },
      { name: "Design Systems", level: 90 },
      { name: "Responsive Design", level: 95 },
    ],
  },
  {
    title: "UX Research",
    icon: Target,
    color: "text-green-400",
    skills: [
      { name: "User Interviews", level: 90 },
      { name: "Usability Testing", level: 95 },
      { name: "A/B Testing", level: 80 },
      { name: "User Journey Mapping", level: 85 },
      { name: "Information Architecture", level: 90 },
    ],
  },
  {
    title: "Collaboration",
    icon: Users,
    color: "text-purple-400",
    skills: [
      { name: "Agile Workflows", level: 95 },
      { name: "Cross-functional Teams", level: 90 },
      { name: "Stakeholder Management", level: 85 },
      { name: "Design Handoffs", level: 90 },
      { name: "Team Leadership", level: 80 },
    ],
  },
]

const softSkills = [
  { name: "Creative Problem Solving", icon: Lightbulb },
  { name: "Empathy & User Advocacy", icon: Users },
  { name: "Strategic Thinking", icon: Target },
  { name: "Rapid Prototyping", icon: Zap },
]

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
            My <span className="text-accent">Skills</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            A unique blend of design expertise and technical knowledge, refined through hands-on experience in
            agricultural tech, education, and enterprise solutions.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-accent/50 transition-all duration-300 shadow-lg dark:shadow-none"
              >
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${category.color}`} />
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                        <span className="font-medium text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                          {skill.name}
                        </span>
                        <span className="text-accent text-xs sm:text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                            duration: 1,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-accent to-accent/70 h-1.5 sm:h-2 rounded-full relative"
                        >
                          <div className="absolute right-0 top-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full animate-pulse"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-gray-900 dark:text-white">
            Core <span className="text-accent">Strengths</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-accent/50 transition-all duration-300 group shadow-lg dark:shadow-none"
                >
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300 leading-tight">
                    {skill.name}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Interactive Skill Bubbles */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-gray-900 dark:text-white">
            Design <span className="text-accent">Philosophy</span>
          </h3>

          <div className="relative max-w-4xl mx-auto h-64 sm:h-80 md:h-96 overflow-hidden rounded-2xl bg-gray-100/80 dark:bg-gray-800/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-none">
            {/* Floating Philosophy Bubbles */}
            {[
              { text: "User-Centered", x: "20%", y: "30%", delay: 0 },
              { text: "Accessible", x: "70%", y: "20%", delay: 0.2 },
              { text: "Iterative", x: "15%", y: "70%", delay: 0.4 },
              { text: "Data-Driven", x: "60%", y: "65%", delay: 0.6 },
              { text: "Collaborative", x: "45%", y: "45%", delay: 0.8 },
            ].map((bubble, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: bubble.delay, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 3, -3, 0],
                }}
                transition={{
                  y: { duration: 3 + index, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  rotate: { duration: 4 + index, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
                className="absolute px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full text-accent font-medium cursor-pointer hover:bg-accent/30 transition-colors text-xs sm:text-sm"
                style={{ left: bubble.x, top: bubble.y }}
              >
                {bubble.text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
