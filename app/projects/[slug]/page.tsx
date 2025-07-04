import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { ArrowLeft, Mail, Figma, Calendar, Users, Wrench, Target, Clock, Sparkles, TrendingUp } from "lucide-react"
import ProjectMotionContent from '@/components/ProjectMotionContent';

// Project data with updated prototype links and descriptions
const projectsData = {
  "payslo-digital-wallet": {
    title: "PaysLo – Seamless Digital Wallet for Everyone",
    subtitle: "Revolutionizing Digital Payments for Global Accessibility",
    description:
      "A modern digital wallet app built for fast, secure, and accessible money management. PaysLo allows users to send, receive, deposit, withdraw, and exchange funds through mobile money, bank, PayPal, and Stripe. Designed with simplicity and trust at its core, the app empowers users across currencies and borders.",
    image: "/images/payslo.png",
    color: "from-green-400 to-blue-500",
    duration: "6 months",
    team: "3 designers, 5 developers",
    role: "Lead Product Designer",
    tools: ["Figma", "Adobe XD", "Principle", "Miro"],
    emailUrl:
      "mailto:dtusingwiree@gmail.com?subject=Interested in PaysLo Project&body=Hi Daniel, I'd like to discuss your PaysLo project.",
    githubUrl: "#",
    figmaUrl:
      "https://www.figma.com/proto/6sBHelBOWnLNrsaHLjrHrj/PaysLo--local-?page-id=0%3A1&node-id=79-618&p=f&viewport=476%2C102%2C0.04&t=rbKUsP0FD2x71Hjf-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A2",
  },
  "budytalk-social-platform": {
    title: "Budytalk – Voice-First Social Platform",
    subtitle: "Empowering Authentic Digital Connections",
    description:
      "A dynamic social platform designed for real-time connection through posts, live video, audio spaces, and professional networking. Budytalk empowers users to share, chat, and grow their digital presence—all while sounding like themselves.",
    image: "/images/budytalk.png",
    color: "from-purple-400 to-pink-500",
    duration: "8 months",
    team: "4 designers, 8 developers",
    role: "Senior Product Designer",
    tools: ["Figma", "Principle", "Adobe Creative Suite", "Miro"],
    emailUrl:
      "mailto:dtusingwiree@gmail.com?subject=Interested in Budytalk Project&body=Hi Daniel, I'd like to discuss your Budytalk project.",
    githubUrl: "#",
    figmaUrl:
      "https://www.figma.com/proto/MPfl5K0T7G8zCBSvez50ZB/Budytalk-App--local-?page-id=0%3A1&node-id=1793-4440&p=f&viewport=414%2C238%2C0.03&t=HYFWPHvVLTbM8gxi-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1793%3A4440",
  },
  "fullness-finance-habits": {
    title: "Fullness – Personal Finance & Habit Builder",
    subtitle: "Building Better Money Habits Through Design",
    description:
      "A human-centered finance app designed to help users build better money habits through personalized daily tasks, budget tracking, account monitoring, and simplified financial planning. Fullness empowers individuals to take control of their finances—one intentional step at a time.",
    image: "/images/fullness.png",
    color: "from-blue-400 to-indigo-500",
    duration: "9 months",
    team: "4 designers, 7 developers",
    role: "Lead Product Designer",
    tools: ["Figma", "Adobe XD", "Principle", "Miro"],
    emailUrl:
      "mailto:dtusingwiree@gmail.com?subject=Interested in Fullness Project&body=Hi Daniel, I'd like to discuss your Fullness project.",
    githubUrl: "#",
    figmaUrl:
      "https://www.figma.com/proto/369WPwzkPBxcZrCDtYe7xi/Fullness-Application--Copy-?page-id=0%3A1&node-id=4972-3821&p=f&viewport=426%2C190%2C0.05&t=vz1OlsKYkEwzvPEP-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A5&show-proto-sidebar=1",
  },
  "utluff-service-connector": {
    title: "Utluff – Global Service Connector App",
    subtitle: "Bridging Service Seekers with Verified Professionals Worldwide",
    description:
      "A seamless mobile platform that bridges the gap between service seekers and verified professionals across the world. From booking doctors or handymen to live chat and secure wallet integration—Utluff is built for convenience, trust, and global accessibility.",
    image: "/images/utluff.png",
    color: "from-orange-400 to-red-500",
    duration: "10 months",
    team: "5 designers, 12 developers",
    role: "Lead Product Designer",
    tools: ["Figma", "Adobe XD", "Principle", "Miro"],
    emailUrl:
      "mailto:dtusingwiree@gmail.com?subject=Interested in Utluff Project&body=Hi Daniel, I'd like to discuss your Utluff project.",
    githubUrl: "#",
    figmaUrl:
      "https://www.figma.com/proto/7lljoFdh5QNAJgsuVdvSOc/Utluff-App?page-id=0%3A1&node-id=516-3631&p=f&viewport=454%2C543%2C0.18&t=jWH2sMHQIdwqU4IV-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
  },
  "icpau-website-redesign": {
    title: "ICPAU Website Redesign – Transforming the Digital Experience for Uganda's Accountants",
    subtitle: "Modernizing Uganda's Premier Accounting Institution",
    description:
      "A complete redesign of the homepage and key sections for the Institute of Certified Public Accountants of Uganda (ICPAU). This project focused on enhancing user experience, content clarity, and modern interface design—tailored for students, members, and the broader financial community.",
    image: "/images/icpau.png",
    color: "from-teal-400 to-blue-500",
    duration: "4 months",
    team: "2 designers, 3 developers",
    role: "Lead UX/UI Designer",
    tools: ["Figma", "Adobe Creative Suite", "Miro"],
    emailUrl:
      "mailto:dtusingwiree@gmail.com?subject=Interested in ICPAU Project&body=Hi Daniel, I'd like to discuss your ICPAU website redesign project.",
    githubUrl: "#",
    figmaUrl:
      "https://www.figma.com/proto/kL0HdNlhQeTC0YXTXzV9FM/CPA-Website--Copy-?page-id=0%3A1&node-id=3-2&p=f&viewport=627%2C213%2C0.05&t=7xd6hezLIl739nBH-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A2",
  },
  "enterprise-solutions-website": {
    title: "Enterprise Solutions – Tech Solutions for Business Growth",
    subtitle: "Corporate Digital Transformation",
    description:
      "A corporate website crafted for Enterprise Solutions Limited to showcase their digital transformation services. It features intuitive navigation, product storytelling, and client-focused design to drive engagement and conversions for ERP, Power Platform, and vertical solution offerings.",
    image: "/images/enterprise-solutions.png",
    color: "from-indigo-400 to-cyan-500",
    duration: "5 months",
    team: "3 designers, 5 developers",
    role: "Lead UX/UI Designer",
    tools: ["Figma", "Adobe Creative Suite", "Miro"],
    emailUrl:
      "mailto:dtusingwiree@gmail.com?subject=Interested in Enterprise Solutions Project&body=Hi Daniel, I'd like to discuss your Enterprise Solutions website project.",
    githubUrl: "#",
    figmaUrl:
      "https://www.figma.com/proto/PuNs8xNkqTJwm7oG8S8TyB/Enterprise-Solutions-Ltd?page-id=0%3A1&node-id=2-2&starting-point-node-id=2%3A2&scaling=contain&content-scaling=responsive&t=OuhZixlNY1kT9Rqj-1",
  },
  "rentify-property-platform": {
    title: "RENTIFY – Property Rental Platform",
    subtitle: "Simplifying House Rentals for Everyone",
    description:
      "A user-centric web platform designed to simplify house rentals. RENTIFY enables users to search properties by location, price, and rooms, then seamlessly book visits or contact landlords. With landlord onboarding, admin review flow, and property listing dashboard—RENTIFY balances intuitive UX with functional scalability.",
    image: "/images/rentify.png",
    color: "from-yellow-400 to-orange-500",
    duration: "7 months",
    team: "3 designers, 6 developers",
    role: "Product Designer",
    tools: ["Figma", "Adobe XD", "Miro"],
    emailUrl:
      "mailto:dtusingwiree@gmail.com?subject=Interested in RENTIFY Project&body=Hi Daniel, I'd like to discuss your RENTIFY project.",
    githubUrl: "#",
    figmaUrl:
      "https://www.figma.com/proto/Xdcll2HHPPXX9lMu6RFBhT/Rentify-Home-Renting?page-id=0%3A1&node-id=1-8&p=f&viewport=268%2C299%2C0.04&t=KALGJFTrKAM9kfgt-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A8",
  },
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = projectsData[slug as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return <ProjectMotionContent project={project} />;
}
