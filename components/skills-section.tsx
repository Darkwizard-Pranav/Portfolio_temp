"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C++", level: 90 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 80 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 88 },
      { name: "Next.js", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
      { name: "MongoDB", level: 82 },
      { name: "MySQL", level: 75 },
    ],
  },
  {
    title: "Tools & Libraries",
    skills: [
      { name: "NumPy", level: 85 },
      { name: "Pandas", level: 82 },
      { name: "Matplotlib", level: 78 },
      { name: "YOLOv8", level: 70 },
    ],
  },
]

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "C++",
  "MongoDB", "MySQL", "Tailwind", "Figma", "Git", "Redux"
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Animated background lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Skills & Expertise</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </motion.div>

        {/* Marquee Tech Stack */}
        <motion.div
          className="mb-20 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex gap-8 animate-marquee">
            {[...techStack, ...techStack].map((tech, index) => (
              <span
                key={index}
                className="text-6xl md:text-8xl font-bold text-muted/30 whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="glass rounded-2xl p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + catIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">{skill.name}</span>
                      <span className="text-xs text-primary font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-primary/50 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1, 
                          delay: 0.5 + catIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Design Skills */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg text-muted-foreground mb-8">
            Also proficient in <span className="text-primary">UI/UX Design</span> with experience in
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research", "Design Systems"].map((skill, index) => (
              <motion.span
                key={skill}
                className="px-6 py-3 glass rounded-full text-sm font-medium text-foreground hover:border-primary/50 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                data-cursor-hover
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
