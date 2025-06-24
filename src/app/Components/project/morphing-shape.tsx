"use client"

import { motion } from "framer-motion"

export const MorphingShape = () => (
  <motion.div
    className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
    animate={{
      rotate: [0, 360],
    }}
    transition={{
      duration: 20,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
    }}
  >
    <motion.div
      className="w-full h-full bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
      animate={{
        borderRadius: ["50%", "30% 70% 70% 30% / 30% 30% 70% 70%", "50%"],
        scale: [1, 1.2, 0.8, 1],
      }}
      transition={{
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  </motion.div>
)
