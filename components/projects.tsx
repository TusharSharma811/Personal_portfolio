import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Projects() {
  const projects = [
    {
      title: "Social Media Platform",
      description:
        "A full-featured social media platform with post management, image upload functionality, user authentication, and networking functionality.",
      image: "/Thoughts.png",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux","Tailwind CSS", "JWT"],
      liveLink: "https://thought-a1iw.onrender.com",
      githubLink: "https://github.com/TusharSharma811/Thoughts",
    },
    {
      title: "Leetcode Contest Generator",
      description:
        "A platform to generate and host Leetcode contests with a timer and problem randomization.",
      image: "/download.png",
      technologies: ["React.js", "JavaScript", "Node.js", "GraphQL", "Express", "Tailwind CSS"],
      liveLink: "https://leetoce-contest-generator.vercel.app/",
      githubLink: "https://github.com/TusharSharma811/Leetoce_contest_generator",
    },
    {
      title: "Online Chess Game",
      description:
        "A real-time online chess game with game history and user authentication.",
      image: "/Chess.png",
      technologies: ["Javascript","Ejs", "CSS", "Socket.io", "Node.js"],
      liveLink: "https://dlchess-1.onrender.com",
      githubLink: "https://github.com/TusharSharma811/DLchess",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-contain" />
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <a href="#projects">
              View All Projects <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

