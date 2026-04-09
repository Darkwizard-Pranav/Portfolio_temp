"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Trophy, Users, Code, Award } from "lucide-react"

const experiences = [
  {
    type: "leadership",
    icon: Users,
    title: "UI/UX Coordinator",
    organization: "Google Developers Group on Campus PCCOER",
    period: "Current",
    description: "Coordinated and mentored the student UI/UX design team, guiding the creation of visual branding and ensuring a consistent, high-quality user experience across all GDG events and digital platforms.",
    achievements: ["Led design team", "Created visual branding", "Improved UX across platforms"],
  },
  {
    type: "leadership",
    icon: Code,
    title: "Web Co-head",
    organization: "Codecraft 2024-25",
    period: "2024-25",
    description: "Coordinated and led the web team of Codecraft PCCOER. Designed and developed the official website of Codecraft 2k24.",
    achievements: ["Led web development team", "Built event website", "Managed technical operations"],
  },
]

const achievements = [
  {
    icon: Trophy,
    title: "3rd Position - Craftverse Hackathon 2025",
    subtitle: "National Level",
    description: "Secured 3rd position with the project 'Vulnera: A bug bounty platform'",
    date: "October 2025",
    color: "#fbbf24",
  },
  {
    icon: Award,
    title: "Semifinalist - Reimagined Hackathon",
    subtitle: "All India",
    description: "Qualified for the third round (Semifinals) of the Reimagined Hackathon by Sheryians Coding School",
    date: "August 2024",
    color: "#8b5cf6",
  },
]

const education = [
  {
    degree: "B.E. Computer Engineering",
    institution: "Pimpri Chinchwad College of Engineering & Research",
    location: "Ravet, Pune",
    period: "June 2023 - Expected June 2027",
    grades: [
      { semester: "Sem 1", cgpa: "9.73" },
      { semester: "Sem 2", cgpa: "9.68" },
      { semester: "Sem 3", cgpa: "9.18" },
      { semester: "Sem 4", cgpa: "9.05" },
    ],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState<"experience" | "achievements" | "education">("experience")

  const tabs = [
    { id: "experience", label: "Experience" },
    { id: "achievements", label: "Achievements" },
    { id: "education", label: "Education" },
  ] as const

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-mono text-sm">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Experience & Achievements</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex flex-wrap gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
              data-cursor-hover
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <div className="min-h-[500px]">
          {/* Experience Tab */}
          {activeTab === "experience" && (
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  className="glass rounded-2xl p-8 hover:border-primary/50 transition-colors"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="p-4 rounded-xl bg-primary/10 w-fit">
                      <exp.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                        <span className="text-sm text-primary font-mono">{exp.period}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{exp.organization}</p>
                      <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement) => (
                          <span
                            key={achievement}
                            className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Achievements Tab */}
          {activeTab === "achievements" && (
            <motion.div
              className="grid md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  className="glass rounded-2xl p-8 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Glow effect */}
                  <div
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"
                    style={{ backgroundColor: achievement.color }}
                  />
                  
                  <div className="relative z-10">
                    <div 
                      className="p-4 rounded-xl w-fit mb-6"
                      style={{ backgroundColor: `${achievement.color}20` }}
                    >
                      <achievement.icon className="w-8 h-8" style={{ color: achievement.color }} />
                    </div>
                    <span className="text-xs text-muted-foreground font-mono">{achievement.date}</span>
                    <h3 className="text-xl font-semibold text-foreground mt-2 mb-1">{achievement.title}</h3>
                    <p className="text-sm text-primary mb-4">{achievement.subtitle}</p>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Education Tab */}
          {activeTab === "education" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  className="glass rounded-2xl p-8"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-foreground mb-2">{edu.degree}</h3>
                      <p className="text-primary mb-1">{edu.institution}</p>
                      <p className="text-muted-foreground mb-2">{edu.location}</p>
                      <p className="text-sm text-muted-foreground font-mono">{edu.period}</p>
                    </div>
                    
                    {/* Grades */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {edu.grades.map((grade, gradeIndex) => (
                        <motion.div
                          key={grade.semester}
                          className="text-center p-4 rounded-xl bg-muted/50"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.3 + gradeIndex * 0.1 }}
                        >
                          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{grade.semester}</p>
                          <p className="text-2xl font-bold text-primary">{grade.cgpa}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Previous Education */}
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <motion.div
                  className="glass rounded-xl p-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <p className="text-sm text-muted-foreground mb-1">12th Standard (HSC)</p>
                  <p className="text-foreground font-medium">Dr. D.Y. Patil Junior College, Nigdi</p>
                  <p className="text-2xl font-bold text-primary mt-2">77.83%</p>
                </motion.div>
                <motion.div
                  className="glass rounded-xl p-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <p className="text-sm text-muted-foreground mb-1">10th Standard (SSC)</p>
                  <p className="text-foreground font-medium">Vidya Niketan English Medium School, Pimpri</p>
                  <p className="text-2xl font-bold text-primary mt-2">93.40%</p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
