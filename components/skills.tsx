"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Terminal, Users } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages & Tools",
    icon: <Code className="h-6 w-6 text-primary" />,
    skills: [
      "Node.js",
      "Python",
      "TypeScript",
      "JavaScript",
      "JSON Web Token",
      "gRPC",
      "PostgreSQL",
      "MongoDB",
      "Git",
      "GitHub",
      "Docker",
      "RESTful APIs",
      "GraphQL",
      "Apache Kafka",
      "Mocha/Chai",
      "Amazon Web Services",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Development Practices",
    icon: <Terminal className="h-6 w-6 text-primary" />,
    skills: [
      "CI/CD",
      "Asynchronous Programming",
      "Basic Linux",
      "Software Architecture",
      "Object-Oriented Programming",
      "SOLID Principles",
      "Unit Testing",
      "Integration Testing",
      "Object-Relational Mapping",
      "Object Data Mapping",
      "Owasp security practice",
    ],
  },
  {
    title: "Methodologies",
    icon: <Users className="h-6 w-6 text-primary" />,
    skills: ["Scrum", "Agile"],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
            Skills & Abilities
          </span>
          <span className="block h-1 w-20 bg-primary mx-auto mt-2"></span>
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800 hover:border-primary transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-2">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center">
                    <span className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
