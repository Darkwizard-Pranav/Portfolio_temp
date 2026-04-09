"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, GraduationCap, Calendar } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { value: "9.4+", label: "CGPA" },
    { value: "10+", label: "Projects" },
    { value: "10+", label: "UI Designs" },
    { value: "3rd", label: "Hackathon" },
  ]

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I&apos;m a passionate <span className="text-foreground font-medium">Computer Engineering student</span> at 
              Pimpri Chinchwad College of Engineering & Research, Pune. My journey in tech began with 
              curiosity and has evolved into a deep passion for creating meaningful digital experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I specialize in <span className="text-primary font-medium">Web Development</span> with expertise in 
              Next.js and the MERN stack, combined with a keen eye for <span className="text-primary font-medium">UI/UX Design</span>. 
              Having designed 10+ websites, I bring both technical skills and design sensibility to every project.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, participating in hackathons, 
              or contributing to the developer community as the <span className="text-foreground font-medium">UI/UX Coordinator 
              at GDG on Campus PCCOER</span>.
            </p>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass rounded-xl p-4 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Location</p>
                  <p className="text-foreground font-medium">Chinchwad, Pune</p>
                </div>
              </div>
              <div className="glass rounded-xl p-4 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Education</p>
                  <p className="text-foreground font-medium">B.E. Computer Engineering</p>
                </div>
              </div>
              <div className="glass rounded-xl p-4 flex items-center gap-4 sm:col-span-2">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Expected Graduation</p>
                  <p className="text-foreground font-medium">June 2027</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass rounded-2xl p-8 text-center group hover:border-primary/50 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.p 
                  className="text-4xl md:text-5xl font-bold text-primary mb-2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
