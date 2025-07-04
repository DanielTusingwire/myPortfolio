"use client"

import { motion } from "framer-motion"
import { ExternalLink, ArrowRight, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    slug: "payslo-digital-wallet",
    title: "PaysLo – Seamless Digital Wallet for Everyone",
    description:
      "A modern digital wallet app built for fast, secure, and accessible money management. PaysLo allows users to send, receive, deposit, withdraw, and exchange funds through mobile money, bank, PayPal, and Stripe. Designed with simplicity and trust at its core, the app empowers users across currencies and borders.",
    image: "/images/payslo.png",
    tags: ["Product Design", "UX/UI Design", "Financial Technology"],
    color: "from-green-400 to-blue-500",
    link: "https://www.figma.com/proto/6sBHelBOWnLNrsaHLjrHrj/PaysLo--local-?page-id=0%3A1&node-id=79-618&p=f&viewport=476%2C102%2C0.04&t=rbKUsP0FD2x71Hjf-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A2",
    github: "#",
  },
  {
    id: 2,
    slug: "budytalk-social-platform",
    title: "Budytalk – Voice-First Social Platform",
    description:
      "A dynamic social platform designed for real-time connection through posts, live video, audio spaces, and professional networking. Budytalk empowers users to share, chat, and grow their digital presence—all while sounding like themselves.",
    image: "/images/budytalk.png",
    tags: ["Product Design", "UX Research", "Design Strategy"],
    color: "from-purple-400 to-pink-500",
    link: "https://www.figma.com/proto/MPfl5K0T7G8zCBSvez50ZB/Budytalk-App--local-?page-id=0%3A1&node-id=1793-4440&p=f&viewport=414%2C238%2C0.03&t=HYFWPHvVLTbM8gxi-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1793%3A4440",
    github: "#",
  },
  {
    id: 3,
    slug: "fullness-finance-habits",
    title: "Fullness – Personal Finance & Habit Builder",
    description:
      "A human-centered finance app designed to help users build better money habits through personalized daily tasks, budget tracking, account monitoring, and simplified financial planning. Fullness empowers individuals to take control of their finances—one intentional step at a time.",
    image: "/images/fullness.png",
    tags: ["Product Design", "UX Strategy", "Financial Wellness"],
    color: "from-blue-400 to-green-500",
    link: "https://www.figma.com/proto/369WPwzkPBxcZrCDtYe7xi/Fullness-Application--Copy-?page-id=0%3A1&node-id=4972-3821&p=f&viewport=426%2C190%2C0.05&t=vz1OlsKYkEwzvPEP-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A5&show-proto-sidebar=1",
    github: "#",
  },
  {
    id: 4,
    slug: "utluff-service-connector",
    title: "Utluff – Global Service Connector App",
    description:
      "A seamless mobile platform that bridges the gap between service seekers and verified professionals across the world. From booking doctors or handymen to live chat and secure wallet integration—Utluff is built for convenience, trust, and global accessibility.",
    image: "/images/utluff.png",
    tags: ["Product Design", "UX/UI Design", "Mobile Experience", "Design Systems"],
    color: "from-orange-400 to-red-500",
    link: "https://www.figma.com/proto/7lljoFdh5QNAJgsuVdvSOc/Utluff-App?page-id=0%3A1&node-id=516-3631&p=f&viewport=454%2C543%2C0.18&t=jWH2sMHQIdwqU4IV-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
    github: "#",
  },
  {
    id: 5,
    slug: "icpau-website-redesign",
    title: "ICPAU Website Redesign – Transforming the Digital Experience for Uganda's Accountants",
    description:
      "A complete redesign of the homepage and key sections for the Institute of Certified Public Accountants of Uganda (ICPAU). This project focused on enhancing user experience, content clarity, and modern interface design—tailored for students, members, and the broader financial community.",
    image: "/images/icpau.png",
    tags: ["Product Design", "UX Research", "Information Architecture", "UI Design"],
    color: "from-teal-400 to-blue-500",
    link: "https://www.figma.com/proto/kL0HdNlhQeTC0YXTXzV9FM/CPA-Website--Copy-?page-id=0%3A1&node-id=3-2&p=f&viewport=627%2C213%2C0.05&t=7xd6hezLIl739nBH-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A2",
    github: "#",
  },
  {
    id: 6,
    slug: "enterprise-solutions-website",
    title: "Enterprise Solutions – Tech Solutions for Business Growth",
    description:
      "A corporate website crafted for Enterprise Solutions Limited to showcase their digital transformation services. It features intuitive navigation, product storytelling, and client-focused design to drive engagement and conversions for ERP, Power Platform, and vertical solution offerings.",
    image: "/images/enterprise-solutions.png",
    tags: ["Web Design", "UI/UX Design", "Responsive Design", "B2B Platform"],
    color: "from-indigo-400 to-purple-500",
    link: "https://www.figma.com/proto/PuNs8xNkqTJwm7oG8S8TyB/Enterprise-Solutions-Ltd?page-id=0%3A1&node-id=2-2&starting-point-node-id=2%3A2&scaling=contain&content-scaling=responsive&t=OuhZixlNY1kT9Rqj-1",
    github: "#",
  },
  {
    id: 7,
    slug: "rentify-property-platform",
    title: "RENTIFY – Property Rental Platform",
    description:
      "A user-centric web platform designed to simplify house rentals. RENTIFY enables users to search properties by location, price, and rooms, then seamlessly book visits or contact landlords. With landlord onboarding, admin review flow, and property listing dashboard—RENTIFY balances intuitive UX with functional scalability.",
    image: "/images/rentify.png",
    tags: ["Product Design", "UX/UI Design", "Web Experience", "Interaction Design"],
    color: "from-yellow-400 to-orange-500",
    link: "https://www.figma.com/proto/Xdcll2HHPPXX9lMu6RFBhT/Rentify-Home-Renting?page-id=0%3A1&node-id=1-8&p=f&viewport=268%2C299%2C0.04&t=KALGJFTrKAM9kfgt-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A8",
    github: "#",
  },
]

export function ProjectsSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      // Announce navigation to screen readers
      const announcement = `Navigated to Contact section`
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
      id="projects"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-white dark:bg-gray-900 transition-colors duration-300"
      aria-label="Projects showcase"
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
            My <span className="text-accent">Projects</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            A collection of digital solutions I've crafted to solve real-world problems, from agricultural marketplaces
            to educational platforms, always with a focus on user needs and technical feasibility.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" role="list" aria-label="Portfolio projects">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-accent/50 transition-all duration-500 overflow-hidden light-card-shadow-lg dark:shadow-none light-hover-lift focus-within:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white dark:focus-within:ring-offset-gray-900"
              role="listitem"
              aria-labelledby={`project-title-${project.id}`}
              aria-describedby={`project-description-${project.id}`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`Screenshot of ${project.title} project interface`}
                  width={600}
                  height={400}
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                  aria-hidden="true"
                ></div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gray-900/80 flex items-center justify-center gap-3 sm:gap-4"
                  aria-hidden="true"
                >
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 sm:p-3 bg-accent text-accent-contrast rounded-full hover:bg-accent/90 transition-colors light-card-shadow focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accent"
                    aria-label={`View live demo of ${project.title}`}
                    tabIndex={-1}
                  >
                    <ExternalLink size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
                  </motion.a>
                  <motion.a
                    href={`mailto:dtusingwiree@gmail.com?subject=Interested in ${project.title}&body=Hi Daniel, I'd like to discuss your ${project.title} project.`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 sm:p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                    aria-label={`Email about ${project.title}`}
                    tabIndex={-1}
                  >
                    <Mail size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
                  </motion.a>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <h3
                  id={`project-title-${project.id}`}
                  className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-accent transition-colors text-gray-900 dark:text-white"
                >
                  {project.title}
                </h3>
                <p
                  id={`project-description-${project.id}`}
                  className="text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 text-sm leading-relaxed"
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div
                  className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4"
                  role="list"
                  aria-label={`Technologies used in ${project.title}`}
                >
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 sm:px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20 font-medium"
                      role="listitem"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium light-link-underline text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 rounded-sm"
                  aria-label={`View detailed case study for ${project.title}`}
                >
                  <motion.span whileHover={{ x: 5 }} className="flex items-center gap-2">
                    View Case Study
                    <ArrowRight size={14} className="sm:w-4 sm:h-4" aria-hidden="true" />
                  </motion.span>
                </Link>
              </div>

              {/* Decorative Elements */}
              <div
                className="absolute top-3 sm:top-4 right-3 sm:right-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              ></div>
              <div
                className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-1 h-1 bg-accent/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                aria-hidden="true"
              ></div>
            </motion.article>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
            Like what you see?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-2">
            I'm always excited to work on new projects and collaborate with amazing teams. Let's create something
            incredible together!
          </p>
          <motion.button
            onClick={() => scrollToSection("contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-accent text-accent-contrast rounded-full font-semibold text-base sm:text-lg hover:bg-accent/90 transition-all duration-300 glow-accent hover:glow-accent-strong light-card-shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
            aria-label="Contact me to work together - Navigate to contact section"
          >
            Let's Work Together
            <ArrowRight size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
