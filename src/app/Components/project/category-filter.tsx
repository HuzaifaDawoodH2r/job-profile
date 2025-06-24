"use client"

import { motion } from "framer-motion"
import type { Category } from "./types"

interface CategoryFilterProps {
  categories: Category[]
  activeCategory: string
  onCategoryChange: (categoryId: string) => void
}

export const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-4 mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.1 }}
    >
      {categories.map((category, index) => (
        <motion.button
          key={category.id}
          initial={{ opacity: 0, scale: 0, rotateY: -90 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
          whileHover={{
            scale: 1.1,
            rotateY: 10,
            boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category.id)}
          className={`relative flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-500 ${
            activeCategory === category.id
              ? `bg-gradient-to-r ${category.color} text-white shadow-2xl`
              : "bg-slate-800/50 text-gray-400 hover:bg-slate-700/50 hover:text-white border border-slate-700/50"
          }`}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div animate={activeCategory === category.id ? { rotate: 360 } : {}} transition={{ duration: 0.5 }}>
            {category.icon}
          </motion.div>
          <span>{category.name}</span>

          {activeCategory === category.id && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
          )}
        </motion.button>
      ))}
    </motion.div>
  )
}
