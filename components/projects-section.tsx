"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Automated Crater Detection",
    description: "A Python-based AI project that automatically detects craters on the surface of the moon and highlights them using YOLOv8 and U-Net deep learning models.",
    tags: ["Python", "YOLOv8", "Pandas", "NumPy", "AI/ML"],
    image: "/projects/crater.jpg",
    github: "https://github.com/Darkwizard-Pranav",
    color: "#00d4ff",
  },
  {
    title: "Vulnera - Bug Bounty Platform",
    description: "Award-winning bug bounty platform that secured 3rd position in the Craftverse Hackathon 2025 (National level). Built for security researchers and organizations.",
    tags: ["Full Stack", "Security", "Web App"],
    image: "/projects/vulnera.jpg",
    github: "https://github.com/Darkwizard-Pranav",
    color: "#ff6b6b",
  },
  {
    title: "URL Shortener - MERN Stack",
    description: "Full-stack URL shortener featuring JWT authentication, custom URL generation, and click analytics. Built with React, Redux Toolkit, and TanStack Query.",
    tags: ["React", "Node.js", "MongoDB", "Redux", "JWT"],
    image: "/projects/url-shortener.jpg",
    github: "https://github.com/Darkwizard-Pranav",
    color: "#a855f7",
  },
  {
    title: "Travel Agency Website",
    description: "Modern and responsive frontend for a travel agency website, designed and developed using Next.js 15 and Tailwind CSS with smooth animations.",
    tags: ["Next.js 15", "Tailwind CSS", "UI/UX"],
    image: "/projects/travel.jpg",
    github: "https://github.com/Darkwizard-Pranav",
    color: "#22c55e",
  },
  {
    title: "Codecraft 2k24 Website",
    description: "Official website for Codecraft PCCOER - designed and developed as the Web Co-head. Features event information, registration, and schedule management.",
    tags: ["Web Development", "Event", "Leadership"],
    image: "/projects/codecraft.jpg",
    github: "https://github.com/Darkwizard-Pranav",
    color: "#f59e0b",
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="relative overflow-hidden rounded-2xl glass p-1"
        style={{
          boxShadow: isHovered ? `0 20px 60px -15px ${project.color}40` : "none",
          transition: "box-shadow 0.3s ease"
        }}
      >
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${project.color}20, ${project.color}05)`,
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span 
              className="text-6xl font-bold opacity-10"
              style={{ color: project.color }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          
          {/* Overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
              data-cursor-hover
              data-cursor-text="CODE"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full border border-foreground text-foreground hover:scale-110 transition-transform"
              data-cursor-hover
              data-cursor-text="LIVE"
            >
              <ExternalLink className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <motion.div
              animate={{ rotate: isHovered ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
            </motion.div>
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono rounded-full bg-muted text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            href="https://github.com/Darkwizard-Pranav"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            data-cursor-hover
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
