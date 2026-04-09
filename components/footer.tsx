"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-2xl font-bold tracking-tight" data-cursor-hover>
              <span className="text-primary">P</span>
              <span className="text-foreground">R</span>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href="https://github.com/Darkwizard-Pranav"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              data-cursor-hover
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/pranav-ramane"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              data-cursor-hover
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:pranavram73.offical@gmail.com"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              data-cursor-hover
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="text-sm text-muted-foreground flex items-center gap-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Built with <Heart className="w-4 h-4 text-primary fill-primary" /> by Pranav Ramane &copy; {currentYear}
          </motion.p>
        </div>

        {/* Decorative line */}
        <motion.div
          className="mt-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>
    </footer>
  )
}
