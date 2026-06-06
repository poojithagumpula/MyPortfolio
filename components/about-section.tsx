"use client"

import { Database, BarChart3, FileSpreadsheet, Code2, Server, Workflow } from "lucide-react"
import { useEffect, useRef } from "react"

const skills = [
  { name: "SQL Server (SSMS)", icon: Database, category: "Database", level: 95 },
  { name: "SSIS", icon: Workflow, category: "ETL", level: 88 },
  { name: "ETL Pipelines", icon: Server, category: "ETL", level: 90 },
  { name: "Tableau", icon: BarChart3, category: "Visualization", level: 92 },
  { name: "Power BI", icon: BarChart3, category: "Visualization", level: 94 },
  { name: "Excel", icon: FileSpreadsheet, category: "Analysis", level: 96 },
  { name: "Python", icon: Code2, category: "Programming", level: 85 },
  { name: "MySQL", icon: Database, category: "Database", level: 93 },
]

function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: { x: number; y: number; z: number; vx: number; vy: number; vz: number }[] = []

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 400,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: (Math.random() - 0.5) * 1,
      })
    }

    let animId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        p.z += p.vz

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        if (p.z < 0 || p.z > 400) p.vz *= -1

        const scale = 400 / (400 + p.z)
        const px = p.x * scale + (canvas.width / 2) * (1 - scale)
        const py = p.y * scale + (canvas.height / 2) * (1 - scale)
        const size = scale * 3
        const alpha = scale * 0.8

        ctx.beginPath()
        ctx.arc(px, py, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(34, 211, 238, ${alpha})`
        ctx.fill()

        particles.slice(i + 1).forEach((p2) => {
          const scale2 = 400 / (400 + p2.z)
          const px2 = p2.x * scale2 + (canvas.width / 2) * (1 - scale2)
          const py2 = p2.y * scale2 + (canvas.height / 2) * (1 - scale2)
          const dist = Math.sqrt((px - px2) ** 2 + (py - py2) ** 2)

          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(px, py)
            ctx.lineTo(px2, py2)
            ctx.strokeStyle = `rgba(52, 211, 153, ${0.3 * (1 - dist / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animId = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.4 }}
    />
  )
}

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 3D Particle Background */}
      <ParticleBackground />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/50 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-mono text-sm tracking-wider">// ABOUT ME</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
            Transforming Data Into{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl opacity-20 blur-lg" />
            <div className="relative p-8 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-slate-400 font-mono text-sm">about.json</span>
              </div>
              <div className="space-y-4 text-slate-300 leading-relaxed font-mono text-sm">
                <p className="text-cyan-400">{"{"}</p>
                <p className="ml-4"><span className="text-emerald-400">&quot;name&quot;</span>: <span className="text-yellow-300">&quot;Poojitha Gumpula&quot;</span>,</p>
                <p className="ml-4"><span className="text-emerald-400">&quot;role&quot;</span>: <span className="text-yellow-300">&quot;Aspiring Data Analyst&quot;</span>,</p>
                <p className="ml-4"><span className="text-emerald-400">&quot;education&quot;</span>: {"{"}</p>
                <p className="ml-8"><span className="text-emerald-400">&quot;degree&quot;</span>: <span className="text-yellow-300">&quot;B.Tech Computer Science&quot;</span>,</p>
                <p className="ml-8"><span className="text-emerald-400">&quot;college&quot;</span>: <span className="text-yellow-300">&quot;Nigama Engineering College&quot;</span></p>
                <p className="ml-4">{"}"} ,</p>
                <p className="ml-4"><span className="text-emerald-400">&quot;passion&quot;</span>: <span className="text-yellow-300">&quot;Turning raw data into actionable business insights&quot;</span></p>
                <p className="text-cyan-400">{"}"}</p>
              </div>
              <p className="mt-8 text-slate-300 leading-relaxed">
                I am a dedicated and passionate data enthusiast with a strong foundation in Computer Science. My expertise lies in extracting meaningful patterns from complex datasets and presenting them through compelling visualizations that drive business decisions.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white flex items-center gap-3">
              <span className="w-8 h-[2px] bg-gradient-to-r from-cyan-400 to-emerald-400" />
              Technical Arsenal
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <div
                  key={skill.name}
                  className="group relative p-4 rounded-xl bg-slate-900/40 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer overflow-hidden"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                      <skill.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white group-hover:text-cyan-300 transition-colors">{skill.name}</p>
                      <p className="text-xs text-slate-500">{skill.category}</p>
                    </div>
                  </div>
                  <div className="mt-3 h-1 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}