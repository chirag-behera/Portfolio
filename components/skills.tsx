"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code, Database, Server, Figma, Cpu, GitBranch, Globe, Layers } from "lucide-react"

// Skill data
const skillsData = {
  "Web Development": [
    { name: "React", level: 85, icon: <Code className="size-5" /> },
    { name: "Next.js", level: 75, icon: <Globe className="size-5" /> },
    { name: "Tailwind CSS", level: 80, icon: <Layers className="size-5" /> },
    { name: "Node.js", level: 70, icon: <Code className="size-5" /> },
  ],
  "AI / ML": [
    { name: "Python for Data Science", level: 85, icon: <Server className="size-5" /> },
    { name: "Pandas & NumPy", level: 90, icon: <Server className="size-5" /> },
    { name: "Matplotlib & Seaborn (EDA)", level: 80, icon: <Database className="size-5" /> },
    { name: "TensorFlow / Keras (Deep Learning)", level: 80, icon: <Database className="size-5" /> },
  ],
  "Tools & Technologies": [
    { name: "Git", level: 80, icon: <GitBranch className="size-5" /> },
    { name: "VS Code", level: 85, icon: <Cpu className="size-5" /> },
    { name: "Jupyter Notebook", level: 80, icon: <Figma className="size-5" /> },
    { name: "Postman", level: 65, icon: <Server className="size-5" /> },
  ],
}

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Web Development Skills */}
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <Card className="border border-border/40 bg-card/50 backdrop-blur-sm h-full">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <Code className="size-6" />
                  Web Development
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skillsData["Web Development"].map((skill, index) => (
                  <motion.div key={skill.name} variants={item} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        {skill.icon}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* AI/ML Skills */}
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <Card className="border border-border/40 bg-card/50 backdrop-blur-sm h-full">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <Server className="size-6" />
                  AI / ML
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skillsData["AI / ML"].map((skill) => (
                  <motion.div key={skill.name} variants={item} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        {skill.icon}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Tools */}
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <Card className="border border-border/40 bg-card/50 backdrop-blur-sm h-full">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <Cpu className="size-6" />
                  Tools & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skillsData["Tools & Technologies"].map((skill) => (
                  <motion.div key={skill.name} variants={item} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        {skill.icon}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
