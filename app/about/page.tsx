"use client"
import { Coffee, Music, Camera, Gamepad2 } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { AboutSection } from "@/components/sections/about-section"

const timeline = [
  {
    year: "2024",
    title: "Senior Product Designer",
    company: "TechFlow Inc.",
    description: "Leading design for AI-powered productivity tools, focusing on user experience and accessibility.",
  },
  {
    year: "2022",
    title: "Product Designer",
    company: "StartupXYZ",
    description: "Designed mobile-first experiences for fintech platform, increasing user engagement by 40%.",
  },
  {
    year: "2020",
    title: "UX Designer",
    company: "Creative Agency",
    description: "Crafted digital experiences for Fortune 500 clients, specializing in e-commerce and SaaS.",
  },
  {
    year: "2018",
    title: "Design Graduate",
    company: "Design University",
    description: "Bachelor's in Interaction Design with focus on human-computer interaction.",
  },
]

const interests = [
  { icon: Coffee, label: "Coffee Brewing", color: "text-amber-400" },
  { icon: Music, label: "Music Production", color: "text-purple-400" },
  { icon: Camera, label: "Photography", color: "text-blue-400" },
  { icon: Gamepad2, label: "Gaming", color: "text-green-400" },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <div className="pt-16 sm:pt-20">
        <AboutSection />
      </div>
    </>
  )
}
