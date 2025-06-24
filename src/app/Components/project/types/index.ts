import type React from "react"
export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  link: string
  category: string
  complexity: number
  year: string
}

export interface Category {
  id: string
  name: string
  icon: React.ReactNode
  color: string
  particles: number
}
