"use client"

import { CustomCursor } from "@/components/custom-cursor"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { MouseFollower } from "@/components/mouse-follower"

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative noise">
        {/* Custom Cursor */}
        <CustomCursor />
        
        {/* Mouse Follower Gradient */}
        <MouseFollower />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  )
}
