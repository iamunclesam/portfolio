import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-gray-800 mt-20">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://github.com/beardgod7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/nwaoke-chizaram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:nwaokefrancis@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>

        <p className="text-gray-500 text-sm">&copy; {currentYear} Nwaoke Chizaram Francis. All rights reserved.</p>
      </div>
    </footer>
  )
}
