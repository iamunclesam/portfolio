import { ArrowDown } from "lucide-react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <Hero />

        <div className="flex justify-center my-12">
          <a
            href="#about"
            className="animate-bounce flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
          >
            Scroll Down <ArrowDown size={16} />
          </a>
        </div>

        <About />
        <Skills />
        {/* <Experience /> */}
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
