"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      const isDarkMode = savedTheme === "dark"
      setIsDark(isDarkMode)
      document.documentElement.classList.toggle("dark", isDarkMode)
    } else {
      // Default to dark mode
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    document.documentElement.classList.toggle("dark", newIsDark)
    localStorage.setItem("theme", newIsDark ? "dark" : "light")
    
    // Announce theme change to screen readers
    const announcement = `Switched to ${newIsDark ? "dark" : "light"} mode`
    const announcer = document.createElement("div")
    announcer.setAttribute("aria-live", "polite")
    announcer.className = "sr-only"
    announcer.textContent = announcement
    document.body.appendChild(announcer)
    setTimeout(() => document.body.removeChild(announcer), 1000)
  }

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="w-14 h-7 bg-gray-200 dark:bg-gray-700 rounded-full opacity-50">
        <div className="w-6 h-6 bg-white rounded-full mt-0.5 ml-0.5 shadow-sm"></div>
      </div>
    )
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-7 bg-gray-200 dark:bg-gray-700 rounded-full p-0.5 transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      role="switch"
    >
      <motion.div
        className="w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center border border-gray-200 dark:border-gray-700"
        animate={{
          x: isDark ? 0 : 24,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <motion.div
          animate={{
            rotate: isDark ? 0 : 180,
            scale: isDark ? 1 : 0.9,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {isDark ? (
            <Moon className="w-3.5 h-3.5 text-gray-600" aria-hidden="true" />
          ) : (
            <Sun className="w-3.5 h-3.5 text-yellow-500" aria-hidden="true" />
          )}
        </motion.div>
      </motion.div>

      {/* Background icons for extra delight */}
      <div className="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none" aria-hidden="true">
        <motion.div animate={{ opacity: isDark ? 0.3 : 0 }} transition={{ duration: 0.3 }}>
          <Sun className="w-3 h-3 text-yellow-400" />
        </motion.div>
        <motion.div animate={{ opacity: isDark ? 0 : 0.3 }} transition={{ duration:
        </motion.div>
        <motion.div animate={{ opacity: isDark ? 0 : 0.3 }} transition={{ duration: 0.3 }}>
          <Moon className="w-3 h-3 text-gray-500" />
        </motion.div>
      </div>
    </motion.button>
  )
}
