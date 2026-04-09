"use client"

import { motion } from "framer-motion"
import { HeroScene } from "./hero-scene"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroScene />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <motion.p
            className="text-primary font-mono text-sm md:text-base mb-4 tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {"// HELLO, I'M"}
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-shimmer">Pranav</span>
            <br />
            <span className="text-foreground">Ramane</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="px-4 py-2 glass rounded-full text-sm md:text-base font-medium text-foreground">
              Developer
            </span>
            <span className="text-primary text-2xl">×</span>
            <span className="px-4 py-2 glass rounded-full text-sm md:text-base font-medium text-foreground">
              UI/UX Designer
            </span>
            <span className="text-primary text-2xl">×</span>
            <span className="px-4 py-2 glass rounded-full text-sm md:text-base font-medium text-foreground">
              Creative Coder
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Computer Engineering student at PCCOER, Pune. Crafting digital experiences 
            through code and design. Passionate about building products that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              href="#projects"
              className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full overflow-hidden transition-transform hover:scale-105"
              data-cursor-hover
              data-cursor-text="VIEW"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 border border-border text-foreground font-semibold rounded-full hover:border-primary hover:text-primary transition-colors"
              data-cursor-hover
            >
              Get In Touch
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Link
              href="https://github.com/Darkwizard-Pranav"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              data-cursor-hover
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/pranav-ramane"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              data-cursor-hover
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:pranavram73.offical@gmail.com"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              data-cursor-hover
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <Link
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          data-cursor-hover
        >
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}
