import type { Category } from "../types"
import {  Globe, Brain, Sparkles } from "lucide-react"

export const categories: Category[] = [
  {
    id: "all",
    name: "All",
    icon: <Sparkles className="w-4 h-4" />,
    color: "from-violet-500 via-purple-500 to-pink-500",
    particles: 20,
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: <Globe className="w-4 h-4" />,
    color: "from-blue-500 via-cyan-500 to-teal-500",
    particles: 15,
  },
 
  {
    id: "python",
    name: "Python",
    icon: <Brain className="w-4 h-4" />,
    color: "from-yellow-500 via-orange-500 to-red-500",
    particles: 18,
  },

]
