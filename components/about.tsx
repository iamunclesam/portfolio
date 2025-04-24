"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-center mb-12 relative">
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">About Me</span>
            <span className="block h-1 w-20 bg-primary mx-auto mt-2"></span>
          </h2>

          <div className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800">
            <p className="text-gray-300 leading-relaxed">
              I am a skilled backend developer with expertise in Node.js, TypeScript, JavaScript, and various
              frameworks, specialized in building scalable and maintainable server-side applications. I have a keen
              interest in building secure software using best security practices.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              My experience includes designing and implementing comprehensive API solutions, setting up CI/CD pipelines,
              and leading development teams to ensure project success. I am proficient in both SQL and NoSQL databases,
              and have experience with cloud services like AWS.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
