"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Trophy, Award } from "lucide-react"
import Link from "next/link"

const achievementsData = [
  {
    id: 1,
    title: "Third Prize – Hack For Tomorrow",
    event: "VSSUT Hackathon 2025",
    description:
      "We developed PharmaAI, an AI-powered platform for medicine recommendation and rural healthcare accessibility. Our team secured 3rd prize among 80+ participants. The project involved building a user-friendly interface, training ML models, and integrating with healthcare APIs.",
    year: "2025",
    icon: <Trophy className="size-5 text-yellow-500" />,
  },
  {
    id: 2,
    title: "Gold Medalist – Web Development",
    event: "OdishaSkills 2024",
    description:
      "Awarded Gold Medal at the OdishaSkills competition for building a fully responsive and accessible web application with high performance and clean UI. Competed against top developers across the state and presented a real-time dashboard for smart traffic solutions.",
    year: "2024",
    icon: <Award className="size-5 text-blue-500" />,
  },
]

export default function Achievements() {
  const [selectedId, setSelectedId] = useState<number>(achievementsData[0].id)
  const selectedItem = achievementsData.find((item) => item.id === selectedId)

  return (
    <section id="achievements" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore some major recognitions and events I've proudly been a part of.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left: Event List */}
          <div className="space-y-4">
            {achievementsData.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`cursor-pointer rounded-lg p-4 border ${
                  selectedId === item.id
                    ? "bg-primary text-white border-primary"
                    : "hover:bg-muted/50 border-border/40"
                } transition`}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.event} • {item.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Selected Detail */}
          <div className="md:col-span-2 bg-background border border-border/40 rounded-xl p-6 shadow-sm">
            {selectedItem && (
              <motion.div
                key={selectedItem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>
                <p className="text-muted-foreground mb-4">
                  <span className="font-medium">{selectedItem.event}</span> • {selectedItem.year}
                </p>
                <p className="text-base leading-relaxed">{selectedItem.description}</p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Certifications Button */}
        <div className="text-center mt-12">
          <Link href="/certifications">
            <button className="px-6 py-2 border border-border/40 rounded-md hover:bg-muted/40 transition text-sm font-medium">
              See All Certifications
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
