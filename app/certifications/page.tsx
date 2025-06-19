"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const certificationsData = [
  {
    id: "cert1",
    title: "Certified in CSS3 – Infosys Springboard",
    issuer: "Infosys Springboard",
    date: "June 2025",
    description: "Learned advanced CSS concepts including Flexbox, Grid, animations, and responsive layouts.",
    image: "/assets/certificates/css3.png",
    credentialUrl: "https://example.com/certificate/css3",
  },
  {
    id: "cert2",
    title: "Certified in HTML5 – Infosys Springboard",
    issuer: "Infosys Springboard",
    date: "July 2025",
    description: "Structured web content using semantic HTML5 tags and built accessible, SEO-friendly pages.",
    image: "/assets/certificates/html5.png",
    credentialUrl: "https://example.com/certificate/html5",
  },
  {
    id: "cert3",
    title: "Certified in Bootstrap 4 – Infosys Springboard",
    issuer: "Infosys Springboard",
    date: "July 2025",
    description: "Built responsive, mobile-first UIs using Bootstrap’s grid, components, and utility classes.",
    image: "/assets/certificates/bootstrap.png",
    credentialUrl: "https://example.com/certificate/bootstrap",
  },
  {
    id: "cert4",
    title: "Certified in Generative AI for All – Infosys Springboard",
    issuer: "Infosys Springboard",
    date: "July 2025",
    description: "Explored the fundamentals of generative AI and its real-world applications across industries.",
    image: "/assets/certificates/genai.png",
    credentialUrl: "https://example.com/certificate/genai",
  },
  {
    id: "cert5",
    title: "Data Analytics",
    issuer: "Teachnook",
    date: "September 2023",
    description: "Hands-on ML model building using Python, Pandas, scikit-learn, and TensorFlow.",
    image: "/assets/certificates/aiml.png",
    credentialUrl: "https://example.com/certificate/aiml",
  },
  {
  id: "cert6",
  title: "Certified in JavaScript – Infosys Springboard",
  issuer: "Infosys Springboard",
  date: "June 2025",
  description:
    "Gained hands-on experience with core JavaScript concepts such as DOM manipulation, ES6+ features, functions, events, and asynchronous programming using promises and async/await.",
  image: "/assets/certificates/javascript.png", 
  credentialUrl: "https://example.com/certificate/javascript",
  }
]

export default function CertificationsPage() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80 pt-24 pb-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <Button variant="ghost" asChild className="mb-4 -ml-4 md:mb-0">
              <Link href="/#achievements" className="flex items-center gap-2">
                <ArrowLeft size={18} />
                Back to Portfolio
              </Link>
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold">My Certifications</h1>
            <p className="text-muted-foreground mt-2">
              A collection of certifications and achievements from my professional journey.
            </p>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border border-border/40 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between">
                {/* Clickable Image */}
                <div
                  className="relative h-48 w-full overflow-hidden cursor-pointer"
                  onClick={() => setSelectedCertificate(cert.id)}
                >
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <CardContent className="p-4 flex flex-col justify-between grow">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {cert.issuer} • {cert.date}
                    </p>
                    <p className="text-sm mb-4">{cert.description}</p>
                  </div>

                  {/* Always-visible View Button */}
                  <Button
                    variant="secondary"
                    size="sm"
                    asChild
                    className="mt-auto w-fit"
                  >
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <ExternalLink size={16} />
                      View My Certificate
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Modal for enlarged certificate */}
        <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            {selectedCertificate && (
              <>
                {/* ✅ Accessibility fix */}
                <DialogTitle className="sr-only">
                  {certificationsData.find((c) => c.id === selectedCertificate)?.title || "Certificate"}
                </DialogTitle>

                <div className="relative w-full h-[60vh]">
                  <Image
                    src={
                      certificationsData.find((c) => c.id === selectedCertificate)?.image || "/placeholder.svg"
                    }
                    alt="Certificate"
                    fill
                    className="object-contain"
                  />
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </main>
  )
}



