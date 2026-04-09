"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send, Mail, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
    
    // Reset submission state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Darkwizard-Pranav",
      icon: Github,
      username: "@Darkwizard-Pranav",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/pranav-ramane",
      icon: Linkedin,
      username: "pranav-ramane",
    },
    {
      name: "Email",
      href: "mailto:pranavram73.offical@gmail.com",
      icon: Mail,
      username: "pranavram73.offical@gmail.com",
    },
  ]

  return (
    <section id="contact" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-mono text-sm">05.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Let&apos;s build something{" "}
              <span className="text-primary">amazing</span> together.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I&apos;m currently looking for new opportunities and my inbox is always open. 
              Whether you have a project in mind, want to collaborate, or just want to say hi, 
              I&apos;ll do my best to get back to you!
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Email</p>
                  <Link 
                    href="mailto:pranavram73.offical@gmail.com" 
                    className="text-foreground hover:text-primary transition-colors"
                    data-cursor-hover
                  >
                    pranavram73.offical@gmail.com
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Location</p>
                  <p className="text-foreground">Chinchwad, Pune, India 411033</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    target={link.name !== "Email" ? "_blank" : undefined}
                    rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between glass rounded-xl p-4 hover:border-primary/50 transition-colors"
                    data-cursor-hover
                  >
                    <div className="flex items-center gap-4">
                      <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <div>
                        <p className="text-sm text-muted-foreground">{link.name}</p>
                        <p className="text-foreground font-medium">{link.username}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-muted rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder:text-muted-foreground"
                    placeholder="Your name"
                    required
                    data-cursor-hover
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-muted rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder:text-muted-foreground"
                    placeholder="your@email.com"
                    required
                    data-cursor-hover
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-muted rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                    placeholder="Tell me about your project..."
                    required
                    data-cursor-hover
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-cursor-hover
                  data-cursor-text="SEND"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  ) : isSubmitted ? (
                    "Message Sent!"
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
