"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Home, User, Briefcase, Zap, Mail } from 'lucide-react'

const sections = [
  { id: "home", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "projects", icon: Briefcase, label: "Projects" },
  { id: "skills", icon: Zap, label: "Skills" },
  { id: "contact", icon: Mail, label: "Contact" },
]

export function ScrollSpyNavigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [isVisible, setIsVisible] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      setIsVisible(window.scrollY > 200)

      // Find the current section
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isVisible || !navRef.current?.contains(document.activeElement)) return

      const currentIndex = sections.findIndex((section) => section.id === activeSection)
      let nextIndex = currentIndex

      switch (e.key) {
        case "ArrowUp":
          e.preventDefault()
          nextIndex = currentIndex > 0 ? currentIndex - 1 : sections.length - 1
          break
        case "ArrowDown":
          e.preventDefault()
          nextIndex = currentIndex < sections.length - 1 ? currentIndex + 1 : 0
          break
        case "Home":
          e.preventDefault()
          nextIndex = 0
          break
        case "End":
          e.preventDefault()
          nextIndex = sections.length - 1
          break
        default:
          return
      }

      const nextSection = sections[nextIndex]
      scrollToSection(nextSection.id)
      
      // Focus the button for the new section
      const button = navRef.current?.querySelector(`[data-section="${nextSection.id}"]`) as HTMLButtonElement
      button?.focus()
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [activeSection, isVisible])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      // Announce the navigation to screen readers
      const announcement = `Navigated to ${sections.find(s => s.id === sectionId)?.label} section`
      const announcer = document.createElement("div")
      announcer.setAttribute("aria-live", "polite")
      announcer.setAttribute("aria-atomic", "true")
      announcer.className = "sr-only"
      announcer.textContent = announcement
      document.body.appendChild(announcer)
      setTimeout(() => document.body.removeChild(announcer), 1000)
    }
  }

  if (!isVisible) return null

  return (
    <motion.div
      ref={navRef}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed right-4 sm:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 z-40 hidden md:block"
      role="navigation"
      aria-label="Page sections navigation"
    >
      <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-full p-2 sm:p-3 border border-gray-200/20 dark:border-gray-700/50">
        <div className="space-y-2 sm:space-y-3" role="group" aria-label="Section navigation buttons">
          {sections.map((section, index) => {
            const Icon = section.icon
            const isActive = activeSection === section.id
            return (
              <motion.button
                key={section.id}
                data-section={section.id}
                onClick={() => scrollToSection(section.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    scrollToSection(section.id)
                  }
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`relative p-2 sm:p-3 rounded-full transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-900 ${
                  isActive
                    ? "bg-accent text-accent-contrast"
                    : "text-gray-600 dark:text-gray-400 hover:text-accent hover:bg-accent/10"
                }`}
                aria-label={`Navigate to ${section.label} section`}
                aria-current={isActive ? "true" : "false"}
                tabIndex={0}
              >
                <Icon size={16} className="sm:w-5 sm:h-5" aria-hidden="true" />

                {/* Tooltip */}
                <div 
                  className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200 pointer-events-none"
                  role="tooltip"
                  aria-hidden="true"
                >
                  <div className="bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {section.label}
                  </div>
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
