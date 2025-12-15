"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface NepalMapProps {
  className?: string
  showConnections?: boolean
}

export function NepalMap({ className = "", showConnections = true }: NepalMapProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Kathmandu Valley locations (7 member units)
  const locations = [
    { name: "Kalanki", x: 45, y: 52, color: "#0ea5e9" },
    { name: "Sundhara", x: 52, y: 48, color: "#10b981" },
    { name: "Bagbazar", x: 54, y: 46, color: "#f59e0b" },
    { name: "Koteshwor", x: 58, y: 50, color: "#ef4444" },
    { name: "Airport", x: 56, y: 44, color: "#8b5cf6" },
    { name: "Chabahil", x: 55, y: 42, color: "#ec4899" },
    { name: "New Bus Park", x: 48, y: 45, color: "#14b8a6" },
    { name: "Balaju", x: 50, y: 40, color: "#f97316" },
  ]

  // Center point (Kathmandu center)
  const center = { x: 52, y: 47 }

  if (!mounted) return null

  return (
    <div className={`relative w-full h-full ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ filter: "drop-shadow(0 0 20px rgba(14, 165, 233, 0.3))" }}
      >
        {/* Background glow */}
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="rgba(14, 165, 233, 0.3)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Kathmandu Valley circle */}
        <motion.circle
          cx={center.x}
          cy={center.y}
          r="15"
          fill="url(#glow)"
          stroke="rgba(14, 165, 233, 0.3)"
          strokeWidth="0.5"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Connection lines */}
        {showConnections &&
          locations.map((location, i) => (
            <motion.line
              key={`line-${i}`}
              x1={center.x}
              y1={center.y}
              x2={location.x}
              y2={location.y}
              stroke={location.color}
              strokeWidth="0.3"
              strokeOpacity="0.4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}

        {/* Location dots */}
        {locations.map((location, i) => (
          <g key={`location-${i}`}>
            {/* Pulse effect */}
            <motion.circle
              cx={location.x}
              cy={location.y}
              r="2"
              fill={location.color}
              opacity="0.3"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 1,
              }}
            />

            {/* Main dot */}
            <motion.circle
              cx={location.x}
              cy={location.y}
              r="1.2"
              fill={location.color}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: "easeOut",
              }}
            />

            {/* Label */}
            <motion.text
              x={location.x}
              y={location.y - 3}
              fontSize="2.5"
              fill="white"
              textAnchor="middle"
              opacity="0.8"
              initial={{ opacity: 0, y: location.y }}
              animate={{ opacity: 0.8, y: location.y - 3 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1 + 0.5,
              }}
              style={{ fontWeight: 600 }}
            >
              {location.name}
            </motion.text>
          </g>
        ))}

        {/* Center marker (DHBA HQ) */}
        <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8, delay: 1 }}>
          <circle cx={center.x} cy={center.y} r="2" fill="#0ea5e9" stroke="white" strokeWidth="0.5" />
          <motion.circle
            cx={center.x}
            cy={center.y}
            r="2"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="0.3"
            animate={{ r: [2, 4, 2], opacity: [1, 0, 1] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <text x={center.x} y={center.y + 5} fontSize="2.5" fill="white" textAnchor="middle" fontWeight="bold">
            DHBA
          </text>
        </motion.g>

        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <motion.circle
            key={`particle-${i}`}
            cx={center.x + (Math.random() - 0.5) * 30}
            cy={center.y + (Math.random() - 0.5) * 30}
            r="0.3"
            fill="rgba(255, 255, 255, 0.6)"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              delay: Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  )
}
