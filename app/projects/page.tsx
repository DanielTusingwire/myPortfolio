"use client"
import { Navigation } from "@/components/navigation"
import { ProjectsSection } from "@/components/sections/projects-section"

const projects = [
  {
    id: 1,
    title: "EcoTrack Mobile App",
    description:
      "A sustainability tracking app that gamifies eco-friendly habits with beautiful data visualization and social features.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Mobile Design", "UX Research", "Prototyping"],
    color: "from-green-400 to-blue-500",
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "FinanceFlow Dashboard",
    description:
      "Enterprise financial dashboard redesign focusing on data clarity and workflow optimization for financial analysts.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Dashboard Design", "Data Viz", "Enterprise UX"],
    color: "from-purple-400 to-pink-500",
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "MindfulSpace Meditation",
    description: "Calming meditation app with personalized sessions, progress tracking, and ambient soundscapes.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Mobile App", "Wellness", "UI Design"],
    color: "from-blue-400 to-purple-500",
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "CreativeHub Platform",
    description:
      "Collaborative platform for creative teams with real-time feedback, version control, and project management.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Web Platform", "Collaboration", "Design Systems"],
    color: "from-orange-400 to-red-500",
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "SmartHome Control",
    description: "Intuitive IoT home automation interface with voice control integration and energy monitoring.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["IoT Design", "Voice UI", "Smart Home"],
    color: "from-teal-400 to-green-500",
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "LearnLab Education",
    description: "Interactive learning platform with adaptive content, progress analytics, and gamified achievements.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["EdTech", "Gamification", "Accessibility"],
    color: "from-indigo-400 to-purple-500",
    link: "#",
    github: "#",
  },
]

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <div className="pt-16 sm:pt-20">
        <ProjectsSection projects={projects} />
      </div>
    </>
  )
}
