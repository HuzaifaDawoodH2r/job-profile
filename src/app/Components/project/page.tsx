"use client"

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { useState, useRef } from "react"
import { projects } from "./data/projects"
import { categories } from "./data/categories"
import { MorphingShape } from "./morphing-shape"
import { HeroSection } from "./hero-section"
import { CategoryFilter } from "./category-filter"
import { ProjectCard } from "./project-card"
import { Particle } from "./particle"

export default function InternationalProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [isPlaying,] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const currentCategory = categories.find((cat) => cat.id === activeCategory)

  return (
    <section id="project">
    <div
      ref={containerRef}
      className="min-h-screen top-20 bg-black overflow-hidden"
    >
      {/* Dynamic Particle System */}
      <div className="fixed inset-0 pointer-events-none">
        {isPlaying &&
          [...Array(currentCategory?.particles || 20)].map((_, i) => (
            <Particle
              key={`${activeCategory}-${i}`}
              delay={i * 0.1}
              duration={5 + Math.random() * 5}
              color="bg-violet-400"
            />
          ))}
      </div>

      {/* Morphing Background */}
      <div className="fixed inset-0 pointer-events-none">
        <MorphingShape />
      </div>

      {/* Hero Section */}
      <HeroSection y={y} opacity={opacity} scale={scale} />

      {/* Category Filter with Advanced Animations */}
      <motion.section className="px-4">
        <div className="max-w-6xl mx-auto">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {/* Projects Grid with 3D Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, rotateX: -30 }}
              animate={{ opacity: 1, rotateX: 0 }}
              exit={{ opacity: 0, rotateX: 30 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>
    </div>
    </section>
  )
}
