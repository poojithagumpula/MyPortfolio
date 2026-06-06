"use client"

import { Mail, ChevronDown } from "lucide-react"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { TypingEffect } from "./typing-effect"

const skills = ["SQL", "Power BI", "Tableau", "Python", "SSIS", "ETL"]

const floatingTags = [
  { label: "Data Analytics", delay: "0s" },
  { label: "Business Intelligence", delay: "0.4s" },
  { label: "ETL Pipelines", delay: "0.8s" },
  { label: "Data Visualization", delay: "1.2s" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <style>{`
        @keyframes floatTag {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .float-tag {
          animation: floatTag 3s ease-in-out infinite;
        }
        @keyframes floatVideo {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-12px) rotate(0.5deg); }
        }
        .float-video {
          animation: floatVideo 5s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* LEFT: Main Content */}
        <div className="text-center lg:text-left space-y-6 order-2 lg:order-1">
          {/* Floating Tags */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {floatingTags.map((tag, i) => (
              <span
                key={i}
                className="float-tag px-4 py-2 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 backdrop-blur-sm"
                style={{ animationDelay: tag.delay }}
              >
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
          <div className="h-12 flex items-center justify-center lg:justify-start">
            <span className="text-lg text-slate-400 mr-2">Specializing in:</span>
            <TypingEffect words={skills} className="text-lg font-mono text-cyan-400" />
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="mailto:poojithagumpula@gmail.com"
              className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/poojagumpula"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedInLogoIcon className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
            </a>
            <a
              href="https://github.com/poojithagumpula"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <GitHubLogoIcon className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </a>
          </div>
        </div>

        {/* RIGHT: Floating Video Player */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="float-video relative w-full max-w-lg">
            {/* Glow behind */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 rounded-3xl blur-2xl" />

            <div className="relative rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 p-2 shadow-2xl shadow-cyan-500/10">
              {/* Holographic frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-emerald-500/20 pointer-events-none rounded-2xl" />

              {/* Video */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900/80">
                <video
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="none"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3Crect fill='%230f172a' width='16' height='9'/%3E%3C/svg%3E"
                >
                  <source src="/intro-video.mp4" type="video/mp4" />
                </video>
                {/* Corner decorations */}
                <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400/50 pointer-events-none" />
                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400/50 pointer-events-none" />
                <div className="absolute bottom-12 left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-400/50 pointer-events-none" />
                <div className="absolute bottom-12 right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-400/50 pointer-events-none" />
              </div>

              {/* Status bar */}
              <div className="mt-2 flex items-center justify-between px-2 py-1 text-xs text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Ready
                </span>
                <span className="font-mono">VIDEO_INTRO.mp4</span>
              </div>
            </div>

            {/* Floating particles */}
            <div className="absolute -top-4 -right-4 w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
            <div className="absolute -bottom-2 -left-2 w-2 h-2 rounded-full bg-emerald-400 animate-ping" style={{ animationDelay: "0.5s" }} />
            <div className="absolute top-1/2 -right-6 w-2 h-2 rounded-full bg-purple-400 animate-ping" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
        <span className="text-sm">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
