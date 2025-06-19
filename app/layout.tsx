import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chirag Behera | Full Stack Developer",
  description: "Personal portfolio of Chirag Behera, Full Stack Developer and ML Enthusiast",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} relative bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white min-h-screen overflow-x-hidden`}
      >
        {/* 🔮 Global Glowing Background Effects */}
        <div className="fixed top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl -z-10" />
        <div className="fixed bottom-20 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl -z-10" />
        <div className="fixed top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[200px] transform -translate-x-1/2 -translate-y-1/2 -z-10" />

        {/* 🌙 Theme + App Components */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
