"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function MouseFollower() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 30, stiffness: 100 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null
  }

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {/* Large gradient follower */}
      <motion.div
        className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 opacity-30"
        style={{
          x,
          y,
          background: "radial-gradient(circle, oklch(0.75 0.18 195 / 0.15) 0%, transparent 70%)",
        }}
      />
      
      {/* Smaller accent follower */}
      <motion.div
        className="absolute w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 opacity-20"
        style={{
          x,
          y,
          background: "radial-gradient(circle, oklch(0.6 0.15 260 / 0.3) 0%, transparent 60%)",
        }}
      />
    </div>
  )
}
