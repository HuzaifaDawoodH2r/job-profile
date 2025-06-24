"use client"

import { motion } from "framer-motion"

interface ParticleProps {
  delay: number
  duration: number
  color: string
}

export const Particle = ({ delay, duration, color }: ParticleProps) => (
  <motion.div
    className={`absolute w-1 h-1 ${color} rounded-full`}
    initial={{
      x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
      y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
      opacity: 0,
    }}
    animate={{
      x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
      y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
      opacity: [0, 1, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    }}
  />
)
