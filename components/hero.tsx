import Image from "next/image"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { TypewriterEffect } from "./typewriter-effect"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-muted/50">
      <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="text-primary">Tushar Sharma</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            <TypewriterEffect
              words={["Full Stack Developer", "Software Engineer", "Web Developer", "UI/UX Enthusiast"]}
              typingSpeed={80}
              deletingSpeed={50}
              delayBetweenWords={2000}
            />
          </p>
          <p className="text-lg text-muted-foreground max-w-md">
            I build exceptional and accessible digital experiences for the web.
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          <div className="flex gap-4 pt-2">
            <a href="https://github.com/TusharSharma811" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a href="https://linkedin.com/in/tusharsharma8" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a href="https://twitter.com/tusharrpandat" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
            <Image
              src="/placeholder.svg?height=320&width=320"
              alt="Tushar Sharma"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

