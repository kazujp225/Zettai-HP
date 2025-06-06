"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"

export function FloatingParticles() {
  const particles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      initialX: i * 5,
      initialY: i * 5,
      animateX: ((i + 1) * 5) % 100,
      animateY: ((i + 1) * 4) % 100,
      duration: 20 + (i % 5) * 4
    }))
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          initial={{
            x: particle.initialX + "%",
            y: particle.initialY + "%",
          }}
          animate={{
            x: particle.animateX + "%",
            y: particle.animateY + "%",
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}