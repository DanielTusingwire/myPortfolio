import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-6xl sm:text-8xl font-bold text-accent mb-4">404</h1>
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white">Project Not Found</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
          Sorry, the project you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-contrast rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 glow-accent hover:glow-accent-strong text-sm sm:text-base"
        >
          <ArrowLeft size={16} className="sm:w-5 sm:h-5" />
          Back to Projects
        </Link>
      </div>
    </div>
  )
}
