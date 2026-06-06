"use client"

import { Mail, ChevronDown, Play, Pause } from "lucide-react"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { TypingEffect } from "./typing-effect"
import { useRef, useState } from "react"

const skills = ["SQL", "Power BI", "Tableau", "Python", "SSIS", "ETL"]

const floatingTags = [
  { label: "Data Analytics", color: "cyan" },
  { label: "Business Intelligence", color: "cyan" },
  { label: "ETL Pipelines", color: "cyan" },
  { label: "Data Visualization", color: "cyan" },
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
      {/* Full screen background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        playsInline
        preload="auto"
      >
        <source src="/intro-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay - click to play/pause */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Play/Pause button - center screen */}
      <button
        onClick={togglePlay}
        className="absolute inset-0 z-20 flex items-center justify-center w-full h-full cursor-pointer bg-transparent border-none"
        aria-label={playing ? "Pause video" : "Play video"}
      >
        <div className={`w-20 h-20 rounded-full bg-white/20 border-2 border-white/50 flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-all ${playing ? "opacity-0 hover:opacity-100" : "opacity-100"}`}>
          {playing ? (
            <Pause className="w-8 h-8 text-white" />
          ) : (
            <Play className="w-8 h-8 text-white ml-1" />
          )}
        </div>
      </button>

      {/* Content overlay - pointer events none so clicks go through to button */}
      <div className="relative z-30 max-w-3xl w-full mx-auto lg:mx-0 lg:ml-16 space-y-6 pointer-events-none">
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

        {/* Social Links - pointer events auto so they're clickable */}
        <div className="flex gap-4 pointer