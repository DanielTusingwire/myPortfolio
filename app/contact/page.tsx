"use client"
import { Navigation } from "@/components/navigation"
import { ContactSection } from "@/components/sections/contact-section"

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <div className="pt-16 sm:pt-20">
        <ContactSection />
      </div>
    </>
  )
}
