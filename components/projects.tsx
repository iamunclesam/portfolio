"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, ShoppingCart, CreditCard, Code, FileText, Heart, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "Rendezvouscare App",
    description:
      "A well-being application consisting of matchmaking, therapy, life coaching, tour guides, and vendor services.",
    icon: <Heart className="h-10 w-10 text-primary" />,
    demoLink: "https://www.rendezvouscare.com",
    codeLink: "#",
  },
  {
    title: "PayRendr",
    description:
      "A tool for organizations offering automated payouts, staff management, and financial tracking solutions.",
    icon: <DollarSign className="h-10 w-10 text-primary" />,
    demoLink: "https://payrendr.com/",
    codeLink: "#",
  },
  {
    title: "Multi-Vendor E-Commerce Web App",
    description:
      "A full-featured e-commerce platform supporting multiple vendors with secure payment processing and inventory management.",
    icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Loan App",
    description:
      "A secure loan application system with credit scoring, application processing, and payment tracking features.",
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "GraphQL and Google Authentication Integration",
    description:
      "Implementation of GraphQL API with Google OAuth authentication for secure and efficient data querying.",
    icon: <Code className="h-10 w-10 text-primary" />,
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Basic Blogging App",
    description: "A blogging platform with user authentication, content management, and commenting features.",
    icon: <FileText className="h-10 w-10 text-primary" />,
    demoLink: "#",
    codeLink: "#",
  }
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
            Personal Projects
          </span>
          <span className="block h-1 w-20 bg-primary mx-auto mt-2"></span>
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-gray-900 border-gray-800 hover:border-primary transition-all duration-300 h-full flex flex-col">
                <CardHeader>
                  <div className="flex justify-center mb-4">{project.icon}</div>
                  <CardTitle className="text-xl text-center">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-gray-400 text-center">{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-center gap-4 pt-4">
                  <Button variant="outline" size="sm" className="group">
                    <a
                      href={project.demoLink}
                      className="flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Demo</span>
                      <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  {/* <Button variant="outline" size="sm" className="group">
                    <a
                      href={project.codeLink}
                      className="flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Code</span>
                      <Github size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button> */}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
