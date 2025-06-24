"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Github } from "lucide-react"
import type { Project } from "./types"
import { Card, CardContent } from "../ui/card"


interface ProjectCardProps {
  project: Project
  index: number
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition] = useState({ x: 0, y: 0 })

  return (
    <motion.div
      className="group perspective-1000"
      initial={{ opacity: 0, y: 100, rotateX: -30 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
        z: 50,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <Card className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-slate-700/50 overflow-hidden backdrop-blur-xl h-full">
        {/* Animated Border */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100"
          style={{
            background: `conic-gradient(from 0deg, violet, purple, pink, violet)`,
            padding: "1px",
            borderRadius: "12px",
          }}
          animate={isHovered ? { rotate: 360 } : {}}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 rounded-xl m-[1px] h-full">
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden rounded-xl">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full opacity-20"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -50, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.5,
                }}
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + i * 10}%`,
                }}
              />
            ))}
          </div>

          <div className="relative overflow-hidden rounded-t-xl">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
              animate={
                isHovered
                  ? {
                      scale: 1.1,
                      rotateX: mousePosition.y * 0.1,
                      rotateY: mousePosition.x * 0.1,
                    }
                  : { scale: 1 }
              }
              transition={{ duration: 0.3 }}
            />

            {/* Status Badge */}
            <motion.div
              className="absolute top-4 right-4"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
            >

            </motion.div>

            {/* Complexity Meter */}
            <div className="absolute bottom-4 left-4">
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400">Complexity</span>
                <div className="w-16 h-1 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-violet-400 to-purple-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${project.complexity}%` }}
                    transition={{ delay: index * 0.1 + 1, duration: 1 }}
                  />
                </div>
                <span className="text-xs text-violet-400 font-bold">{project.complexity}%</span>
              </div>
            </div>
          </div>

          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-3">
              <motion.h3
                className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors duration-300"
                animate={isHovered ? { x: 5 } : { x: 0 }}
              >
                {project.title}
              </motion.h3>
              <span className="text-xs text-gray-500 font-mono">{project.year}</span>
            </div>

            <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">{project.description}</p>

            <div className="flex  items-center">
              <motion.a
                href={project.github}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-violet-400 transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </motion.a>
                <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute ml-32 h-10 flex items-center  text-white font-semibold"
                          >
                            
                            <span>View Live</span>
                    
                          </a>
            </div>
          </CardContent>
        </div>
      </Card>
      
    </motion.div>
  )
}
