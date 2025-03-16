import { Card, CardContent } from "@/components/ui/card"
import { Database, Layout, Server, Terminal, GitBranch, Wrench } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="h-6 w-6" />,
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Redux"],
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: ["Node.js", "Express", "RESTful APIs", "GraphQL"],
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Prisma", "SQL", "NoSQL"],
    },
    {
      title: "DevOps",
      icon: <Terminal className="h-6 w-6" />,
      skills: ["Docker", "Kubernetes", "AWS", "Linux", "Bash"],
    },
    {
      title: "Version Control",
      icon: <GitBranch className="h-6 w-6" />,
      skills: ["Git", "GitHub"],
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["VS Code", "Postman", "Testing", "Debugging"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

