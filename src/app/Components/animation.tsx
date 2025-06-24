"use client"

import type React from "react"
import { useState, useEffect } from "react"

const TextAnimationVariant: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const roles = [
    { text: "Full Stack Developer", color: "from-purple-400 to-pink-500", accent: "#8b5cf6" },
    { text: "Problem Solver", color: "from-blue-400 to-cyan-500", accent: "#3b82f6" },
    { text: "Tech Enthusiast", color: "from-green-400 to-emerald-500", accent: "#10b981" },
    { text: "Digital Artist", color: "from-orange-400 to-red-500", accent: "#f97316" },
    { text: "Code Architect", color: "from-indigo-400 to-purple-500", accent: "#6366f1" },
    { text: "Innovation Driver", color: "from-pink-400 to-rose-500", accent: "#ec4899" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % roles.length)
        setTimeout(() => setIsAnimating(false), 200)
      }, 600)
    }, 3000)

    return () => clearInterval(interval)
  }, [roles.length])

  return (
    <div className="flex flex-col items-center justify-center ">
     
    

        {/* Animated text with border */}
        <div className="h-20 md:h-24 flex items-center justify-center">
          <div
            className="relative px-6 py-3 rounded-xl border-2 transition-all duration-1000"
            style={{
              borderColor: roles[currentIndex].accent,
              boxShadow: `0 0 20px ${roles[currentIndex].accent}40, inset 0 0 20px ${roles[currentIndex].accent}10`,
              background: `linear-gradient(135deg, ${roles[currentIndex].accent}05, transparent)`,
            }}
          >
            <div className="relative overflow-hidden">
              {/* Current text */}
              <div
                className={`transition-all duration-500 ${
                  isAnimating ? "transform translate-x-full opacity-0" : "transform translate-x-0 opacity-100"
                }`}
              >
                {roles[currentIndex].text.split("").map((letter, index) => (
                  <span
                    key={`${currentIndex}-${index}`}
                    className={`inline-block text-2xl md:text-4xl font-bold bg-gradient-to-r ${roles[currentIndex].color} bg-clip-text text-transparent`}
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      animation: `letterBounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards`,
                      animationDelay: `${index * 0.04}s`,
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </div>

              {/* Next text (sliding in) */}
              {isAnimating && (
                <div
                  className="absolute top-0 left-0 w-full transition-all duration-500 transform -translate-x-full opacity-0"
                  style={{
                    animation: "slideIn 0.5s ease-out 0.3s forwards",
                  }}
                >
                  {roles[(currentIndex + 1) % roles.length].text.split("").map((letter, index) => (
                    <span
                      key={`next-${index}`}
                      className={`inline-block text-2xl md:text-4xl font-bold bg-gradient-to-r ${
                        roles[(currentIndex + 1) % roles.length].color
                      } bg-clip-text text-transparent`}
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Border glow effect */}
            <div
              className="absolute inset-0 rounded-xl opacity-50 -z-10"
              style={{
                background: `linear-gradient(45deg, ${roles[currentIndex].accent}20, transparent, ${roles[currentIndex].accent}20)`,
                animation: "borderGlow 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        {/* Simple underline */}
        <div className="mt-6 flex justify-center">
          <div
            className="w-24 h-0.5 rounded-full transition-all duration-1000"
            style={{
              background: `linear-gradient(90deg, transparent, ${roles[currentIndex].accent}, transparent)`,
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
        </div>
    

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Space+Grotesk:wght@600&display=swap');
        
        @keyframes letterBounce {
          0% {
            transform: translateY(20px) scale(0.5);
            opacity: 0;
          }
          60% {
            transform: translateY(-5px) scale(2);
            opacity: 0.8;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }


        @media (max-width: 768px) {
          .text-4xl { font-size: 2rem; }
          .text-2xl { font-size: 1.5rem; }
        }
      `}</style>
    </div>
  )
}

export default TextAnimationVariant
