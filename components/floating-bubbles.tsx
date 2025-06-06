"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"

export function FloatingBubbles() {
  const bubbles = useMemo(() => {
    return [...Array(10)].map((_, i) => ({
      id: i,
      initialX: (i * 10) % 100,
      initialY: (i * 9) % 100,
      animateX: ((i + 5) * 10) % 100,
      animateY: ((i + 5) * 11) % 100,
      duration: 30 + (i % 3) * 10
    }))
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute w-64 h-64 bg-white/5 rounded-full blur-3xl"
          initial={{
            x: bubble.initialX + "%",
            y: bubble.initialY + "%",
          }}
          animate={{
            x: bubble.animateX + "%",
            y: bubble.animateY + "%",
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  )
}