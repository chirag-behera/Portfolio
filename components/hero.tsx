"use client"

import { useState, useEffect } from "react"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Send, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import profileImage from "@/assets/Profile.png"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      {/* Glowing Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[200px] transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-6 text-center lg:text-left"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-pink-400 font-medium"
          >
            Hello, I&apos;m
          </motion.span>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            Chirag Behera
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl font-medium text-gray-300 h-[40px] flex items-center justify-center lg:justify-start"
          >
            <span className="mr-2">I&apos;m a</span>
            <TypeAnimation
              sequence={["Computer Science Student", 2000, "ML Enthusiast", 2000, "Front-End Developer", 2000]}
              wrapper="span"
              speed={50}
              className="text-yellow-400"
              repeat={Number.POSITIVE_INFINITY}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300 max-w-lg mx-auto lg:mx-0"
          >
            Final-year CSE student specializing in AI & ML with strong data science skills. Gold Medalist in Web Tech (OdishaSkills), passionate about frontend development, hackathons, and building intelligent, real-world solutions with clean UI and data-driven innovation.
          </motion.p>

          {/* Buttons & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col gap-4 justify-center lg:justify-start"
          >
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="https://drive.google.com/file/d/1K5mI0cgWmKRXWbqzFLspnWKd7PObO1Ww/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="gap-2 bg-pink-600 hover:bg-pink-700 text-white">
                  <Download size={18} />
                  Download Resume
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="gap-2 border-white text-white hover:bg-white/10">
                  <Send size={18} />
                  Contact Me
                </Button>
              </a>
            </div>

            <div className="flex gap-4 mt-4 justify-center lg:justify-start">
              <a href="https://github.com/chirag-behera" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 hover:text-yellow-400 transition" />
              </a>
              <a href="https://www.linkedin.com/in/chiragbehera" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 hover:text-yellow-400 transition" />
              </a>
              <a href="mailto:chiragbehera1454@gmail.com">
                <Mail className="w-6 h-6 hover:text-yellow-400 transition" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
            <Image
              src={profileImage}
              alt="Chirag Behera"
              fill
              className="object-cover"
              priority
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="absolute -bottom-4 -right-4 bg-pink-600 text-white p-4 rounded-2xl shadow-lg"
          >
            <span className="font-medium">AI/ML & Frontend Developer</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
            className="absolute -top-4 -left-4 bg-blue-600 text-white p-4 rounded-2xl shadow-lg"
          >
            <span className="font-medium">Open to Work</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-gray-300 mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
