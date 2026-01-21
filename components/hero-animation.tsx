"use client";

import { motion } from "framer-motion";

export default function HeroAnimation() {
  return (
    <div className="relative w-full max-w-md mx-auto mb-8 md:mb-12">
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Floating container with gentle hover */}
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          {/* Subtle background glow */}
          <motion.div
            className="absolute inset-0 blur-2xl opacity-40"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/20 to-transparent rounded-full" />
          </motion.div>

          {/* Main SVG Animation - Rocket launching from Cloud */}
          <svg
            viewBox="0 0 200 200"
            className="w-48 h-48 md:w-64 md:h-64 mx-auto relative z-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Cloud base */}
            <motion.g
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {/* Cloud SVG */}
              <motion.path
                d="M 60 120 Q 50 110 60 100 Q 70 85 85 90 Q 90 75 105 75 Q 120 75 125 90 Q 140 85 150 100 Q 160 110 150 120 Z"
                fill="currentColor"
                className="text-muted-foreground/40"
                animate={{
                  scale: [1, 1.05, 1],
                  x: [0, 2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.g>

            {/* Rocket */}
            <motion.g
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {/* Rocket body */}
              <motion.path
                d="M 95 100 L 95 55 Q 95 45 100 40 Q 105 45 105 55 L 105 100 Z"
                fill="currentColor"
                className="text-primary"
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Rocket nose cone */}
              <motion.path
                d="M 95 55 L 100 35 L 105 55 Z"
                fill="currentColor"
                className="text-primary"
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Rocket window */}
              <motion.circle
                cx="100"
                cy="65"
                r="5"
                fill="currentColor"
                className="text-background"
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Left fin */}
              <motion.path
                d="M 95 95 L 85 110 L 95 100 Z"
                fill="currentColor"
                className="text-primary/80"
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Right fin */}
              <motion.path
                d="M 105 95 L 115 110 L 105 100 Z"
                fill="currentColor"
                className="text-primary/80"
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Rocket flame - animated */}
              <motion.g
                animate={{
                  scaleY: [1, 1.3, 0.9, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transformOrigin: "100px 100px" }}
              >
                <motion.path
                  d="M 97 100 L 95 115 L 100 108 L 105 115 L 103 100 Z"
                  fill="currentColor"
                  className="text-orange-500"
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.path
                  d="M 98 105 L 100 118 L 102 105 Z"
                  fill="currentColor"
                  className="text-yellow-400"
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.g>
            </motion.g>

            {/* Floating particles/stars around */}
            {[...Array(8)].map((_, i) => {
              const angle = (i * 360) / 8;
              const radius = 70;
              const x = 100 + radius * Math.cos((angle * Math.PI) / 180);
              const y = 80 + radius * Math.sin((angle * Math.PI) / 180);

              return (
                <motion.circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="2"
                  fill="currentColor"
                  className="text-primary/60"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.25,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              );
            })}
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
