import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-12 bg-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Tushar Sharma</h2>
            <p className="text-muted-foreground mt-2">Full Stack Developer & Software Engineer</p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="mailto:tushar.sharma@example.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {currentYear} Tushar Sharma. All rights reserved.</p>
          <nav className="flex gap-6 mt-4 md:mt-0">
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary">
              About
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-primary">
              Projects
            </a>
            <a href="#experience" className="text-sm text-muted-foreground hover:text-primary">
              Experience
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

