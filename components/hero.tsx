"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Backend Developer"
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index])
        setIndex((prev) => prev + 1)
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [index])

  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Nwaoke Chizaram Francis
        </h1>

        <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
          <span className="text-primary">{text}</span>
          <span className="animate-blink">|</span>
        </h2>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Building scalable and maintainable server-side applications with a focus on security best practices.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:bg-primary hover:text-white transition-all"
          >
            <a href="https://github.com/beardgod7" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:bg-primary hover:text-white transition-all"
          >
            <a href="https://linkedin.com/in/nwaoke-chizaram" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:bg-primary hover:text-white transition-all"
          >
            <a href="mailto:nwaokefrancis@gmail.com">
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </div>

        <div className="pt-8">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
