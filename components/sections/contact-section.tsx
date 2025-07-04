"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, MapPin, Calendar, Send, CheckCircle, Sparkles } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const formRef = useRef<HTMLFormElement>(null)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      // Focus on first error field
      const firstErrorField = Object.keys(errors)[0];
      const errorElement = formRef.current?.querySelector(`[name="${firstErrorField}"]`) as HTMLElement;
      errorElement?.focus();
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mwpbjeba", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(formRef.current!),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Announce success to screen readers
        const announcement = "Message sent successfully! I'll get back to you within 24 hours.";
        const announcer = document.createElement("div");
        announcer.setAttribute("aria-live", "assertive");
        announcer.setAttribute("aria-atomic", "true");
        announcer.className = "sr-only";
        announcer.textContent = announcement;
        document.body.appendChild(announcer);
        // Reset form after success animation
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", subject: "", message: "" });
          setErrors({});
          document.body.removeChild(announcer);
        }, 3000);
      } else {
        // Handle error (show a message to the user)
        // You can set an error state here if you want
      }
    } catch (error) {
      // Handle error (show a message to the user)
      // You can set an error state here if you want
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      aria-label="Contact information and form"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            Have a project in mind? Want to collaborate? Or just want to say hi? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
                Get in Touch
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                I'm always excited to discuss new opportunities, creative projects, or just chat about design and
                technology. Drop me a line and let's create something amazing together!
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6" role="list" aria-label="Contact information">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "dtusingwiree@gmail.com",
                  link: "mailto:dtusingwiree@gmail.com",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Nansana, Uganda",
                  link: null,
                },
                {
                  icon: Calendar,
                  label: "Availability",
                  value: "Open for new opportunities",
                  link: null,
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 hover:border-accent/50 transition-all duration-300 light-card-shadow-lg dark:shadow-none light-hover-lift"
                    role="listitem"
                  >
                    <div className="p-2.5 sm:p-3 bg-accent/10 rounded-lg flex-shrink-0" aria-hidden="true">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                        {item.label}
                      </div>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-base sm:text-lg font-semibold hover:text-accent transition-colors text-gray-900 dark:text-white light-link-underline break-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 rounded-sm"
                          aria-label={`${item.label}: ${item.value}`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Fun Fact */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-4 sm:p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl border border-accent/20 light-card-shadow dark:shadow-none"
              role="complementary"
              aria-labelledby="fun-fact-title"
            >
              <div className="flex items-center gap-3 mb-2 sm:mb-3">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" aria-hidden="true" />
                <h4 id="fun-fact-title" className="text-base sm:text-lg font-bold text-accent">
                  Fun Fact
                </h4>
              </div>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                I bring a unique perspective combining design thinking with software engineering principles. I believe
                the best products are born when creativity meets technical feasibility.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 light-card-shadow-lg dark:shadow-none">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    ref={formRef}
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-6"
                    noValidate
                    aria-label="Contact form"
                  >
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold mb-2 text-gray-800 dark:text-gray-300"
                        >
                          Name{" "}
                          <span className="text-red-500" aria-label="required">
                            *
                          </span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          aria-invalid={errors.name ? "true" : "false"}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 dark:bg-gray-700/50 border rounded-lg transition-all duration-300 outline-none text-gray-900 dark:text-white light-card-shadow dark:shadow-none text-sm sm:text-base focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 ${
                            errors.name
                              ? "border-red-500 focus:border-red-500"
                              : "border-gray-300 dark:border-gray-600 focus:border-accent"
                          }`}
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold mb-2 text-gray-800 dark:text-gray-300"
                        >
                          Email{" "}
                          <span className="text-red-500" aria-label="required">
                            *
                          </span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          aria-invalid={errors.email ? "true" : "false"}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 dark:bg-gray-700/50 border rounded-lg transition-all duration-300 outline-none text-gray-900 dark:text-white light-card-shadow dark:shadow-none text-sm sm:text-base focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 ${
                            errors.email
                              ? "border-red-500 focus:border-red-500"
                              : "border-gray-300 dark:border-gray-600 focus:border-accent"
                          }`}
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold mb-2 text-gray-800 dark:text-gray-300"
                      >
                        Subject{" "}
                        <span className="text-red-500" aria-label="required">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        aria-invalid={errors.subject ? "true" : "false"}
                        aria-describedby={errors.subject ? "subject-error" : undefined}
                        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 dark:bg-gray-700/50 border rounded-lg transition-all duration-300 outline-none text-gray-900 dark:text-white light-card-shadow dark:shadow-none text-sm sm:text-base focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 ${
                          errors.subject
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-300 dark:border-gray-600 focus:border-accent"
                        }`}
                        placeholder="What's this about?"
                      />
                      {errors.subject && (
                        <p id="subject-error" className="mt-1 text-sm text-red-500" role="alert">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold mb-2 text-gray-800 dark:text-gray-300"
                      >
                        Message{" "}
                        <span className="text-red-500" aria-label="required">
                          *
                        </span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        aria-invalid={errors.message ? "true" : "false"}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 dark:bg-gray-700/50 border rounded-lg transition-all duration-300 outline-none resize-none text-gray-900 dark:text-white light-card-shadow dark:shadow-none text-sm sm:text-base focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 ${
                          errors.message
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-300 dark:border-gray-600 focus:border-accent"
                        }`}
                        placeholder="Tell me about your project or just say hello!"
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1 text-sm text-red-500" role="alert">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-accent text-accent-contrast rounded-lg font-semibold text-base sm:text-lg hover:bg-accent/90 transition-all duration-300 glow-accent hover:glow-accent-strong disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 light-card-shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
                      aria-describedby={isSubmitting ? "submit-status" : undefined}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-accent-contrast/30 border-t-accent-contrast rounded-full"
                            aria-hidden="true"
                          />
                          <span id="submit-status">Sending...</span>
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 sm:py-12"
                    role="status"
                    aria-live="polite"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="mb-4 sm:mb-6"
                    >
                      <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-accent mx-auto" aria-hidden="true" />
                    </motion.div>
                    <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-accent">Message Sent! 🎉</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                      Thanks for reaching out! I'll get back to you within 24 hours.
                    </p>
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 1,
                      }}
                      className="text-3xl sm:text-4xl"
                      aria-hidden="true"
                    >
                      😊
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Easter Egg */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 cursor-pointer light-link-underline focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 rounded-sm p-1"
            onClick={() => {
              // Easter egg: Show a fun message
              alert("🎉 You found the easter egg! Thanks for being curious - that's the spirit of great design!")
            }}
            aria-label="Hidden easter egg - click for a surprise"
          >
            Psst... click me for a surprise! 🥚
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
