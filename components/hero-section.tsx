"use client"

import { Mail, ChevronDown } from "lucide-react"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { TypingEffect } from "./typing-effect"

const skills = ["SQL", "Power BI", "Tableau", "Python", "SSIS", "ETL"]

const floatingTags = [
  { label: "Data Analytics", color: "cyan" },
  { label: "Business Intelligence", color: "cyan" },
  { label: "ETL Pipelines", color: "cyan" },
  { label: "Data Visualization", color: "cyan" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      {/* Full screen background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/intro-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content overlay */}
      <div className="relative z-20 max-w-3xl w-full mx-auto lg:mx-0 lg:ml-16 space-y-6">
        {/* Floating Tags */}
        <div className="flex flex-wrap gap-3">
          {floatingTags.map((tag, i) => (
            <span key={i} className="px-4 py-2 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 backdrop-blur-sm">
              {tag.label}
            </span>
          ))}
        </div>

        {/* Main Title */}
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

        {/* Typing Effect */}
        <div className="h-12 flex items-center">
          <span className="text-lg text-slate-400 mr-2">Specializing in:</span>
          <TypingEffect words={skills} className="text-lg font-mono text-cyan-400" />
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a href="mailto:poojithagumpula@gmail.com" className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300" aria-label="Email">
            <Mail className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
          </a>
          <a href="https://linkedin.com/in/poojagumpula" target="_blank" rel="noopener noreferrer" className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300" aria-label="LinkedIn">
            <LinkedInLogoIcon className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
          </a>
          <a href="https://github.com/poojithagumpula" target="_blank" rel="noopener noreferrer" className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300" aria-label="GitHub">
            <GitHubLogoIcon className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
          </a>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <a href="#projects" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
            View My Work
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 z-20">
        <span className="text-sm">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
        </div>
      </div>
    </section>
  )
}