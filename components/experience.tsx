"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar, ChevronRight } from "lucide-react"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
            Work Experience
          </span>
          <span className="block h-1 w-20 bg-primary mx-auto mt-2"></span>
        </h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="relative border-l-2 border-primary pl-8 ml-4"
        >
          <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>

          <div className="mb-12">
            <div className="flex items-center mb-2">
              <Briefcase className="text-primary mr-2" size={18} />
              <h3 className="text-xl font-semibold">Software Engineer (Back-End Developer)</h3>
            </div>
            <div className="flex items-center text-gray-400 mb-4">
              <Calendar className="mr-2" size={16} />
              <span>Mother Unicorn (2023)</span>
            </div>

            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <ChevronRight className="text-primary mt-1 mr-1 flex-shrink-0" size={16} />
                <span>
                  Designed and implemented a comprehensive set of RESTful APIs, GraphQL APIs, and gRPCs for user
                  registration, login, and authentication.
                </span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="text-primary mt-1 mr-1 flex-shrink-0" size={16} />
                <span>
                  Implemented a robust CI/CD pipeline, automating testing and deployment processes for rapid and
                  reliable updates.
                </span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="text-primary mt-1 mr-1 flex-shrink-0" size={16} />
                <span>
                  Led a team of developers, setting clear objectives, assigning tasks, and facilitating regular meetings
                  to ensure project success.
                </span>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <div className="flex items-center mb-2">
              <Briefcase className="text-primary mr-2" size={18} />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="flex items-center text-gray-400 mb-4">
              <Calendar className="mr-2" size={16} />
              <span>Federal University of Petroleum Resources (FUPRE), Effurun</span>
            </div>
            <p className="text-gray-300">2nd Class Lower</p>
          </div>

          <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] bottom-0"></div>
        </motion.div>
      </div>
    </section>
  )
}
