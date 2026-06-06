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
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      <style>{`
        @keyframes floatTag {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .float-tag {
          animation: floatTag 3s ease-in-out infinite;
        }
        @keyframes floatVideo {
          0%, 100% { transform: translateY(0px) rotateY(-4deg) rotateX(1deg); }
          50% { transform: translateY(-14px) rotateY(2deg) rotateX(-1deg); }
        }
        .video-3d-wrap {
          perspective: 1000px;
          transform-style: preserve-3d;
        }
        .video-3d {
          animation: floatVideo 6s ease-in-out infinite;
          transform-style: preserve-3d;
          transition: transform 0.4s ease;
        }
        .video-3d:hover {
          transform: rotateY(6deg) rotateX(-3deg) scale(1.03) translateY(-6px);
        }
      `}</style>

      {/* Background glow */}
      <div className="absolute inset-0 bg-slate-950 z-0" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl z-0" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

        {/* LEFT: Text content */}
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
            <a href="mailto:poojithagumpula@gmail.com"
              className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm"
              aria-label="Email">
              <Mail className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
            </a>
            <a href="https://linkedin.com/in/poojagumpula" target="_blank" rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm"
              aria-label="LinkedIn">
              <LinkedInLogoIcon className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
            </a>
            <a href="https://github.com/poojithagumpula" target="_blank" rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm"
              aria-label="GitHub">
              <GitHubLogoIcon className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <a href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
              View My Work
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </a>
          </div>
        </div>

        {/* RIGHT: 3D Floating Video */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="video-3d-wrap w-full max-w-lg">
            <div className="video-3d relative">

              {/* Outer glow */}
              <div className="absolute -inset-6 bg-gradient-to-br from-cyan-500/25 via-emerald-500/15 to-purple-500/20 rounded-3xl blur-2xl pointer-events-none" />

              {/* 3D Card frame */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/80 backdrop-blur-xl p-2 shadow-[0_30px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.05)]">

                {/* Top sheen */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10" />

                {/* Holographic gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-emerald-500/10 pointer-events-none z-10 rounded-2xl" />

                {/* Video */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-950">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    preload="none"
                    poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3Crect fill='%230f172a' width='16' height='9'/%3E%3C/svg%3E"
                  >
                    <source src="/intro-video.mp4" type="video/mp4" />
                  </video>

                  {/* Corner brackets */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400/60 pointer-events-none" />
                  <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400/60 pointer-events-none" />
                  <div className="absolute bottom-12 left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-400/60 pointer-events-none" />
                  <div className="absolute bottom-12 right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-400/60 pointer-events-none" />
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
              <div className="absolute -top-3 -right-3 w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
              <div className="absolute -bottom-2 -left-2 w-2 h-2 rounded-full bg-emerald-400 animate-ping" style={{ animationDelay: "0.5s" }} />
              <div className="absolute top-1/3 -right-5 w-2 h-2 rounded-full bg-purple-400 animate-ping" style={{ animationDelay: "1s" }} />
              <div className="absolute bottom-1/3 -left-4 w-1.5 h-1.5 rounded-full bg-yellow-400 animate-ping" style={{ animationDelay: "1.5s" }} />
            </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 z-10">
        <span className="text-sm">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
