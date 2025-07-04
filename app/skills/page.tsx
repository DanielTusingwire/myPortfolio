"use client"
import { Palette, Code, Users, Lightbulb, Target, Zap } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { SkillsSection } from "@/components/sections/skills-section"

const skillCategories = [
  {
    title: "Design Tools",
    icon: Palette,
    color: "text-pink-400",
    skills: [
      { name: "Figma", level: 95 },
      { name: "Adobe Creative Suite", level: 90 },
      { name: "Sketch", level: 85 },
      { name: "Principle", level: 80 },
      { name: "Framer", level: 75 },
    ],
  },
  {
    title: "Technical Skills",
    icon: Code,
    color: "text-blue-400",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 75 },
      { name: "React", level: 70 },
      { name: "Design Systems", level: 95 },
      { name: "Responsive Design", level: 90 },
    ],
  },
  {
    title: "UX Research",
    icon: Target,
    color: "text-green-400",
    skills: [
      { name: "User Interviews", level: 90 },
      { name: "Usability Testing", level: 85 },
      { name: "A/B Testing", level: 80 },
      { name: "Analytics", level: 75 },
      { name: "Personas & Journey Maps", level: 95 },
    ],
  },
  {
    title: "Collaboration",
    icon: Users,
    color: "text-purple-400",
    skills: [
      { name: "Cross-functional Teams", level: 95 },
      { name: "Design Workshops", level: 90 },
      { name: "Stakeholder Management", level: 85 },
      { name: "Mentoring", level: 80 },
      { name: "Agile/Scrum", level: 85 },
    ],
  },
]

const softSkills = [
  { name: "Creative Problem Solving", icon: Lightbulb },
  { name: "Empathy & User Advocacy", icon: Users },
  { name: "Strategic Thinking", icon: Target },
  { name: "Rapid Prototyping", icon: Zap },
]

export default function SkillsPage() {
  return (
    <>
      <Navigation />
      <div className="pt-16 sm:pt-20">
        <SkillsSection skillCategories={skillCategories} softSkills={softSkills} />
      </div>
    </>
  )
}
