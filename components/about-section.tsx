"use client"

import { useEffect, useRef } from "react"
import { Database, BarChart3, FileSpreadsheet, Code2, Server, Workflow } from "lucide-react"

const skills = [
  { name: "SQL Server", icon: Database, category: "Database", color: "#22d3ee", bg: "from-cyan-500/20 to-cyan-600/10" },
  { name: "SSIS", icon: Workflow, category: "ETL", color: "#a78bfa", bg: "from-violet-500/20 to-violet-600/10" },
  { name: "ETL Pipelines", icon: Server, category: "ETL", color: "#34d399", bg: "from-emerald-500/20 to-emerald-600/10" },
  { name: "Tableau", icon: BarChart3, category: "Visualization", color: "#fb923c", bg: "from-orange-500/20 to-orange-600/10" },
  { name: "Power BI", icon: BarChart3, category: "Visualization", color: "#facc15", bg: "from-yellow-400/20 to-yellow-500/10" },
  { name: "Excel", icon: FileSpreadsheet, category: "Analysis", color: "#4ade80", bg: "from-green-500/20 to-green-600/10" },
  { name: "Python", icon: Code2, category: "Programming", color: "#60a5fa", bg: "from-blue-500/20 to-blue-600/10" },
  { name: "MySQL", icon: Database, category: "Database", color: "#f472b6", bg: "from-pink-500/20 to-pink-600/10" },
]

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".scroll-reveal")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.15 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export function AboutSection() {
  useScrollReveal()

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <style>{`
        .scroll-reveal {
          opacity: 0;
          transform: translateY(40px) rotateX(8deg);
          transition: opacity 0.7s ease, transform 0.7s ease;
          transform-origin: top center;
        }
        .scroll-reveal.revealed {
          opacity: 1;
          transform: translateY(0) rotateX(0deg);
        }
        .scroll-reveal-left {
          opacity: 0;
          transform: translateX(-50px) rotateY(10deg);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .scroll-reveal-left.revealed {
          opacity: 1;
          transform: translateX(0) rotateY(0deg);
        }
        .scroll-reveal-right {
          opacity: 0;
          transform: translateX(50px) rotateY(-10deg);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .scroll-reveal-right.revealed {
          opacity: 1;
          transform: translateX(0) rotateY(0deg);
        }

        @keyframes floatBio {
          0%, 100% { transform: translateY(0px) rotate(-0.5deg); }
          50% { transform: translateY(-10px) rotate(0.5deg); }
        }
        .bio-float { animation: floatBio 6s ease-in-out infinite; }

        @keyframes floatSkill {
          0%, 100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
          50% { transform: translateY(-8px) rotateX(4deg) rotateY(-2deg); }
        }
        .skill-float { animation: floatSkill 4s ease-in-out infinite; }

        .skill-3d-card {
          perspective: 600px;
          transform-style: preserve-3d;
        }
        .skill-3d-inner {
          transform-style: preserve-3d;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          box-shadow: 0 4px 20px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.05) inset;
        }
        .skill-3d-card:hover .skill-3d-inner {
          transform: rotateY(-10deg) rotateX(6deg) scale(1.07) translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.08) inset;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <span className="text-cyan-400 font-mono text-sm tracking-wider">// ABOUT ME</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
            Transforming Data Into{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Card */}
          <div className="scroll-reveal-left revealed" style={{ transitionDelay: "0.1s" }}>
            <div className="bio-float relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl opacity-20 blur-lg" />
              <div className="relative p-8 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10"
                style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.05) inset" }}>
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
                  <p className="ml-4">{"};"},</p>
                  <p className="ml-4"><span className="text-emerald-400">&quot;passion&quot;</span>: <span className="text-yellow-300">&quot;Turning raw data into actionable business insights&quot;</span></p>
                  <p className="text-cyan-400">{"}"}</p>
                </div>
                <p className="mt-8 text-slate-300 leading-relaxed">
                  I am a dedicated and passionate data enthusiast with a strong foundation in Computer Science. My expertise lies in extracting meaningful patterns from complex datasets and presenting them through compelling visualizations that drive business decisions.
                </p>
              </div>
            </div>
          </div>

          {/* 3D Skill Badges */}
          <div className="scroll-reveal-right revealed space-y-6" style={{ transitionDelay: "0.2s" }}>
            <h3 className="text-xl font-semibold text-white flex items-center gap-3">
              <span className="w-8 h-[2px] bg-gradient-to-r from-cyan-400 to-emerald-400" />
              Technical Arsenal
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, i) => (
                <div key={skill.name} className="skill-3d-card skill-float" style={{ animationDelay: `${i * 0.25}s` }}>
                  <div className="skill-3d-inner">
                    <div className={`relative px-3 py-3 rounded-xl bg-gradient-to-br ${skill.bg} border border-white/10 backdrop-blur-sm overflow-hidden`}>
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-transparent to-transparent" />
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg" style={{ backgroundColor: `${skill.color}22` }}>
                          <skill.icon className="w-4 h-4" style={{ color: skill.color }} />
                        </div>
                        <div>
                          <p className="text-white font-semibold text-xs leading-tight">{skill.name}</p>
                          <p className="text-slate-400 text-[10px] mt-0.5">{skill.category}</p>
                        </div>
                      </div>
                      <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full opacity-70"
                        style={{ backgroundColor: skill.color, boxShadow: `0 0 6px ${skill.color}` }} />
                    </div>
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
