"use client"

import { motion } from "framer-motion"

interface HeroSectionProps {
  y:any
  opacity:  any
  scale: any
}

export const HeroSection = ({ y, opacity, scale }: HeroSectionProps) => {
  return (
  
    <motion.section className="relative  px-4" style={{ y, opacity, scale }}>
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-5xl font-serif font-extrabold italic md:text-8xl p-2 bg-gradient-to-t from-purple-500 via-gray-500 to-blue-500 bg-clip-text text-transparent mb-6 "
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Project
        </motion.h1>
      </div>
    </motion.section>
    
  )
}
