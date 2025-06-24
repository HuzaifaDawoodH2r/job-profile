
"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Progress } from "./ui/progress"
import { useRef } from "react"
import { Code2, Palette, Database, Award, Star, TrendingUp, Zap } from "lucide-react"

const skillsData = [
  { name: "React/Next.js", level: 95, icon: Code2, color: "from-cyan-400 to-blue-500" },
  { name: "TypeScript", level: 85, icon: Code2, color: "from-blue-400 to-indigo-500" },
  { name: "Tailwind CSS", level: 90, icon: Palette, color: "from-green-400 to-emerald-500" },
  { name: "Python", level: 80, icon: Database, color: "from-yellow-400 to-orange-500" },
  { name: "HTML/CSS", level: 95, icon: Palette, color: "from-purple-400 to-pink-500" },
  { name: "JavaScript", level: 88, icon: Code2, color: "from-orange-400 to-red-500" },
]

const achievements = [
  { title: "Web Developer", years: "1+", icon: Code2, color: "from-blue-400 to-cyan-500" },
  { title: "Projects Built", years: "20+", icon: Award, color: "from-purple-400 to-pink-500" },
  { title: "Technologies", years: "6+", icon: Star, color: "from-yellow-400 to-orange-500" },
  { title: "Years Learning", years: "1.5+", icon: TrendingUp, color: "from-green-400 to-teal-500" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.8 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 100,
    },
  },
}

function SkillCard({ skill, index }: { skill: any; index: number }) {
  const [progress, setProgress] = useState(0)
  const Icon = skill.icon
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setProgress(skill.level), 300 + index * 150)
      controls.start("visible")
      return () => clearTimeout(timer)
    }
  }, [isInView, skill.level, index, controls])

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={controls}
      whileHover={{
        scale: 1.05,
        y: -10,
        transition: { duration: 0.3 },
      }}
      className="group"
    >
      <Card className="relative h-full border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/60 transition-all duration-500 overflow-hidden">
        {/* Animated background gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
        />

        <CardContent className="relative p-6 z-10">
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} text-white shadow-lg`}
              whileHover={{
                scale: 1.2,
                rotate: 360,
                transition: { duration: 0.5 },
              }}
            >
              <Icon className="w-6 h-6" />
            </motion.div>
            <h3 className="font-bold text-xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
              {skill.name}
            </h3>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 font-medium">Proficiency</span>
              <motion.span
                className={`font-bold text-2xl bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
              >
                {progress}%
              </motion.span>
            </div>
            <div className="relative">
              <Progress value={progress} className="h-3 bg-gray-800 border border-gray-700" />
              <motion.div
                className={`absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function AchievementCard({ achievement, index }: { achievement: any; index: number }) {
  const Icon = achievement.icon
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 },
      }}
      className="text-center group"
    >
      <Card className="relative border border-gray-800 bg-gray-900/60 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-500 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-10 group-hover:opacity-25 transition-opacity duration-500`}
        />

        <CardContent className="relative p-6 z-10">
          <div className="flex flex-col items-center space-y-4">
            <motion.div
              className={`p-3 rounded-full bg-gradient-to-br ${achievement.color} shadow-xl`}
              whileHover={{
                scale: 1.2,
                rotate: 360,
                transition: { duration: 0.6 },
              }}
            >
              <Icon className="w-6 h-6 text-white" />
            </motion.div>

            <div className="space-y-2">
              <motion.div
                className={`text-3xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  delay: 0.3 + index * 0.1,
                  type: "spring",
                  duration: 0.8,
                }}
              >
                {achievement.years}
              </motion.div>
              <p className="text-gray-300 font-semibold">{achievement.title}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function SkillsPage() {
  return (
    <section id="skill">
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      {/* Hero Section */}
      <motion.section
        className="relative py-10 px-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
              <Zap className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl p-2 mb-6 font-serif font-extrabold italic bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            My Skills
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Passionate developer with expertise in modern web technologies
          </motion.p>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        className=" px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Key Achievements
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <AchievementCard key={achievement.title} achievement={achievement} index={index} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="py-16 px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Technical Skills
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skillsData.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="py-12 px-4 text-center border-t border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400 mb-4">Ready to work together Lets build something amazing</p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </div>
      </motion.footer>
    </div>
    </section>
  )
}
