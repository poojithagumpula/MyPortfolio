"use client"

import { Mail, ChevronDown, Play, Pause } from "lucide-react"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { TypingEffect } from "./typing-effect"
import { useRef, useState } from "react"

const skills = ["SQL", "Power BI", "Tableau", "Python", "SSIS", "ETL"]

const floatingTags = [
  { label: "Data Analytics" },
  { label: "Business Intelligence" },
  { label: "ETL Pipelines" },
  { label: "Data Visualization" },
]

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const togglePlay = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause()
        setPlaying(false)
      } else {
        videoRef.current.play().then(() => {
          setPlaying(true)
        }).catch(() => {
          setPlaying(false)
        })
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        playsInline
        preload="auto"
      >
        <source src="/intro-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60 z-10" />

      <button
        onClick={togglePlay}
        className="absolute inset-0 z-20 w-full h-full cursor-pointer bg-transparent border-none flex items-center justify-center"
      >
        <div className={`w-20 h-20 rounded-full bg-white/20 border-2 border-white/50 flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-all ${playing ? "opacity-0 hover:opacity-100" : "opacity-100"}`}>
          {playing ? (
            <Pause className="w-8 h-8 text-white" />
          ) : (
            <Play className="w-8 h-8 text-white ml-1" />
          )}
        </div>
      </button>

      <div className="relative z-30 max-w-3xl w-full mx-auto lg:mx-0 lg:ml-16 space-y-6 pointer-events-none">
        <div className="flex flex-wrap gap-3">
          {floatingTags.map((tag, i) => (
            <span key={i} className="px-4 py-2 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 backdrop-blur-sm">
              {tag.label}
            </span>
          ))}
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            <span className="block">Poojitha</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Gumpula
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 italic">
            Aspiring Data Analyst | SQL & BI Developer
          </p>
        </div>

        <div className="h-12 flex items-center">
          <span className="text-lg text-slate-400 mr-2">Specializing in:</span>
          <TypingEffect words={skills} className="text-lg font-mono text-cyan-400" />
        </div>

        <div className="flex gap-4 pointer-events-auto">
          <a href="mailto:poojithagumpula@gmail.com" className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300">
            <Mail className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
          </a>
          <a href="https://linkedin.com/in/poojagumpula" target="_blank" rel="noopener noreferrer" className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300">
            <LinkedInLogoIcon className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
          </a>
          <a href="https://github.com/poojithagumpula" target="_blank" rel="noopener noreferrer" className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300">
            <GitHubLogoIcon className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
          </a>
        </div>

        <div className="pt-4 pointer-events-auto">
          <a href="#projects" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
            View My Work
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 z-30 pointer-events-none">
        <span className="text-sm">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
        </div>
      </div>
    </section>
  )
}