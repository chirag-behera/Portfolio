"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Website (Spring Boot)",
    description: "A complete e-commerce platform with user roles, cart, order, admin panel, and Spring Security.",
    image: "https://okcredit-blog-images-prod.storage.googleapis.com/2021/04/ecommerce3-2.jpg",
    techStack: ["Spring Boot", "MySQL"],
    githubUrl: "https://github.com/chirag-behera/E-commerce-Springboot",
  },
  {
    id: 2,
    title: "PharmaAI – Disease Prediction",
    description: "ML-based healthcare system to predict diseases and recommend medicine using symptoms & reports.",
    image: "https://randomtrees.com/blog/wp-content/uploads/2023/12/Ai-in-pharma--1600x900.jpg",
    techStack: ["Python", "Flask", "Scikit-learn", "Pandas"],
    githubUrl: "https://github.com/chirag-behera/pharmaai",
  },
  {
    id: 3,
    title: "YouTube Sentiment Analysis",
    description: "Scrapes and analyzes YouTube comments using NLP to determine public opinion and reactions.",
    image: "https://www.analyticssteps.com/backend/media/thumbnail/5826250/4059220_1592205269_Untitled-2.jpg",
    techStack: ["Python", "NLTK", "Streamlit"],
    githubUrl: "https://github.com/chirag-behera/Youtube_sentiment_analysis",
  }
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent work in Machine Learning and Full Stack Development. Each project reflects my
            problem-solving skills and creativity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Card className="overflow-hidden border border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      hoveredId === project.id ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                  <CardDescription className="text-sm line-clamp-2">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-3">
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5"
                    >
                      <Github size={14} />
                      Code
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <a
            href="https://github.com/chirag-behera"
            target="_blank"
            rel="noopener noreferrer"
            >
            View All Projects
            </a>
          </Button>
</div>

      </div>
    </section>
  )
}
