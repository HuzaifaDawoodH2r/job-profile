"use client"

import { motion } from "framer-motion"
import {  CardContent } from "../Components/ui/card"
import { Code, Database, Globe, Smartphone, Server} from "lucide-react"

const skills = [
  { name: "Frontend", level: 95, icon: Globe, color: "stroke-cyan-400" },
  { name: "Backend", level: 88, icon: Server, color: "stroke-green-400" },
  { name: "Database", level: 82, icon: Database, color: "stroke-purple-400" },
  { name: "Mobile", level: 75, icon: Smartphone, color: "stroke-orange-400" },
  { name: "DevOps", level: 65, icon: Code, color: "stroke-yellow-400" },
]

const CircularProgress = ({ percentage, color, size = 120 }: { percentage: number; color: string; size?: number }) => {
  const radius = (size - 20) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          className="text-gray-800"
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          strokeLinecap="round"
          className={color}
          style={{
            strokeDasharray,
          }}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>
      {/* Percentage text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-2xl font-bold text-white"
        >
          {percentage}%
        </motion.span>
      </div>
    </div>
  )
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export default function SkillsSection() {
  return (
    <div className="flex items-center justify-center p-4">
      <motion.div variants={itemVariants} initial="hidden" animate="visible" className="max-w-7xl mx-auto">
        
          <CardContent className="relative p-8 md:p-12">

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 justify-items-center">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{
                    delay: 0.2 * index,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                  className="group relative"
                >
                  <div className="relative">
                    {/* Circular Progress */}
                    <div className="relative mb-4 md:mb-6">
                      <CircularProgress
                        percentage={skill.level}
                        color={skill.color}
                        size={window?.innerWidth < 768 ? 100 : 140}
                      />

                      {/* Icon in center */}
                      <motion.div
                        whileHover={{
                          rotate: 360,
                          scale: 1.2,
                        }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="p-2 md:p-3 rounded-full bg-gray-900/80 border border-gray-700 group-hover:border-gray-600 transition-colors duration-300">
                          <skill.icon className="w-6 h-6 md:w-8 md:h-8 text-gray-300 group-hover:text-white transition-colors duration-300" />
                        </div>
                      </motion.div>

                      {/* Glow effect */}
                      <div
                        className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl ${
                          skill.color.includes("cyan")
                            ? "bg-cyan-400"
                            : skill.color.includes("green")
                              ? "bg-green-400"
                              : skill.color.includes("purple")
                                ? "bg-purple-400"
                                : skill.color.includes("orange")
                                  ? "bg-orange-400"
                                  : skill.color.includes("pink")
                                    ? "bg-pink-400"
                                    : "bg-yellow-400"
                        }`}
                      />
                    </div>

                    {/* Skill Name */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + 0.1 * index }}
                      className="text-center"
                    >
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                        {skill.name}
                      </h3>
                      <div className="flex items-center justify-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1 + 0.1 * i }}
                            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
                              i < Math.floor(skill.level / 20)
                                ? skill.color.includes("cyan")
                                  ? "bg-cyan-400"
                                  : skill.color.includes("green")
                                    ? "bg-green-400"
                                    : skill.color.includes("purple")
                                      ? "bg-purple-400"
                                      : skill.color.includes("orange")
                                        ? "bg-orange-400"
                                        : skill.color.includes("pink")
                                          ? "bg-pink-400"
                                          : "bg-yellow-400"
                                : "bg-gray-700"
                            }`}
                          />
                        ))}
                      </div>
                    </motion.div>

                    {/* Floating particles */}
                    <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-1 h-1 rounded-full ${
                            skill.color.includes("cyan")
                              ? "bg-cyan-400"
                              : skill.color.includes("green")
                                ? "bg-green-400"
                                : skill.color.includes("purple")
                                  ? "bg-purple-400"
                                  : skill.color.includes("orange")
                                    ? "bg-orange-400"
                                    : skill.color.includes("pink")
                                      ? "bg-pink-400"
                                      : "bg-yellow-400"
                          }`}
                          animate={{
                            x: [0, Math.random() * 40 - 20],
                            y: [0, Math.random() * 40 - 20],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.2,
                          }}
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

    
          </CardContent>
     
      </motion.div>
    </div>
  )
}
