"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Sparkles } from "lucide-react";
import Link from "next/link";

export default function PapercloudHero() {
  return (
    <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center">
      {/* Decorative Borders - Using theme colors */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-border">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-border">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-border">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>
      
      <div className="px-4 py-20 md:py-32 lg:py-40">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 mb-8 flex justify-center"
        >
          <div className="inline-flex items-center rounded-full border border-border bg-background/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium">
            <Sparkles className="mr-2 h-4 w-4 text-primary" />
            Open Source Innovation
          </div>
        </motion.div>

        {/* Animated Title */}
        <h1 className="relative z-10 mx-auto max-w-5xl text-center text-3xl font-bold tracking-tight md:text-5xl lg:text-7xl">
          <span className="text-muted-foreground">Papercloudtech: </span>
          {"Building the future through open collaboration"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.08,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
              >
                {word}
              </motion.span>
            ))}
        </h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="relative z-10 mx-auto mt-6 max-w-2xl text-center text-base text-muted-foreground md:text-lg lg:text-xl leading-relaxed"
        >
          We create innovative, production-ready open-source solutions that
          empower developers and organizations worldwide to build better software.
          Join our community and contribute to the future of technology.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="#projects">
            <button className="group flex w-60 transform items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
          <a
            href="https://github.com/papercloudtech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="group flex w-60 transform items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent">
              <Github className="h-4 w-4" />
              Explore GitHub
            </button>
          </a>
        </motion.div>

        {/* Project Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="relative z-10 mt-16 md:mt-20 rounded-3xl border border-border bg-muted/30 p-4 shadow-2xl backdrop-blur-sm"
        >
          <div className="w-full overflow-hidden rounded-2xl border border-border bg-background">
            <div className="aspect-[16/9] w-full bg-gradient-to-br from-primary/10 via-background to-primary/5 p-8 md:p-12">
              <div className="flex h-full flex-col items-center justify-center space-y-6">
                {/* Mock Project Cards */}
                <div className="grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
                  {[
                    { name: "SecureChat", tech: "Node.js • Firebase", color: "from-green-500 to-emerald-600" },
                    { name: "E-Seva", tech: "Java • Spring Boot", color: "from-blue-500 to-cyan-600" },
                    { name: "Crop Yield AI", tech: "Python • TensorFlow", color: "from-purple-500 to-pink-600" },
                  ].map((project, i) => (
                    <motion.div
                      key={project.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + i * 0.1 }}
                      className="rounded-xl border border-border bg-card p-4 shadow-md backdrop-blur-sm transition-all hover:scale-105 hover:shadow-lg"
                    >
                      <div className={`mb-3 h-2 w-16 rounded-full bg-gradient-to-r ${project.color}`} />
                      <h3 className="font-semibold text-foreground mb-1">{project.name}</h3>
                      <p className="text-xs text-muted-foreground">{project.tech}</p>
                    </motion.div>
                  ))}
                </div>
                
                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="flex gap-8 md:gap-12 text-center"
                >
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-foreground">6+</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-foreground">10+</div>
                    <div className="text-xs text-muted-foreground">Contributors</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-foreground">100%</div>
                    <div className="text-xs text-muted-foreground">Open Source</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
