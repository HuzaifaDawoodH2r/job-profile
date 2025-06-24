"use client"

import { motion, useAnimation } from "framer-motion"
import {
  Code,
  Palette,
  Zap,
  Coffee,

  
  Star,
  Sparkles,
  Rocket,
  
} from "lucide-react"

import { useEffect } from "react"
import SkillsSection from "./about1"

export default function AboutPage() {
  const controls = useAnimation()





  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
      },
    },
  }

 

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      rotate: [-3, 3, -3],
      scale: [1, 1.05, 1],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const sparkleVariants = {
    animate: {
      scale: [0, 1, 0],
      rotate: [0, 180, 360],
      opacity: [0, 1, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        times: [0, 0.5, 1],
      },
    },
  }

  useEffect(() => {
    controls.start("visible")
  }, [controls])

  return (
    <section id="about">
    <div className="bg-black top-20 text-white overflow-hidden relative">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        .font-modern {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-green-500/15 to-emerald-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      {/* Floating Sparkles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          variants={sparkleVariants}
          animate="animate"
          transition={{ delay: i * 0.5 }}
        >
          <Sparkles className="w-4 h-4 text-yellow-400/60" />
        </motion.div>
      ))}

      <motion.div
        className="relative h-full flex flex-col justify-between p-8 font-modern"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {/* Enhanced Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-6">
          <motion.div className="flex items-center justify-center mb-6" variants={floatingVariants} animate="animate">
            <motion.div
              className="relative mr-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/50 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <Code className="w-10 h-10 text-white relative z-10" />
              </div>
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center"
                variants={pulseVariants}
                animate="animate"
              >
                <Star className="w-4 h-4 text-white" />
              </motion.div>
            </motion.div>

            <div className="text-left">
              <motion.h1
                className="text-5xl lg:text-6xl font-extrabold font-serif italic bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1, type: "spring" }}
              >
                About Us
              </motion.h1>
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <Rocket className="w-5 h-5 text-cyan-400 mr-2" />
                <p className="text-xl text-gray-300 font-medium">Full Stack Developer & Creative Technologist</p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
             
              {/* Animated Icon Display */}
              <motion.div
                className="flex justify-center space-x-4 mb-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[Code, Palette, Zap, Coffee].map((Icon, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.3,
                      rotate: 360,
                      y: -10,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-gray-700/50"
                  >
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

        </motion.div>

        {/* Enhanced Main Content Grid */}
        <div className="gap-8 max-w-7xl mx-auto w-full">

          
          <motion.div variants={itemVariants} className=" flex flex-col justify-center">
            {/* Enhanced Tech Stack */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <h3 className="text-xl font-bold mb-4 text-center bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Tech Arsenal
              </h3>
              <div className="flex flex-wrap justify-center mb-10 gap-3">
                {["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS", "Docker"].map(
                  (tech, index) => (
                    <motion.span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-gray-800/80 to-gray-700/80 border border-gray-600/50 rounded-full text-sm text-gray-300 hover:text-white backdrop-blur-sm font-medium"
                      whileHover={{
                        scale: 1.15,
                        y: -5,
                        boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                        background: "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
                      }}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.5, type: "spring" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ),
                )}
              </div>
            </motion.div>
          </motion.div>

       <SkillsSection/>         
        </div>

        {/* Enhanced Footer */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-12 text-sm text-gray-400">
            {[
              { icon: Code, text: "Available for freelance", color: "hover:text-cyan-400" },
              { icon: Coffee, text: "Always learning", color: "hover:text-purple-400" },
              { icon: Zap, text: "Open to opportunities", color: "hover:text-pink-400" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`flex items-center cursor-pointer ${item.color} transition-colors duration-300`}
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <item.icon className="w-4 h-4 mr-2" />
                <span className="font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
    </section>
  )
}
