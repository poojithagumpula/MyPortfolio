"use client"

import { useEffect, useState } from "react"
import { ExternalLink, Database, BarChart3, Workflow } from "lucide-react"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

const projects = [
  {
    title: "Retail Sales Analysis",
    description: "Comprehensive retail sales analysis dashboard combining Excel data processing, MySQL database queries, and Power BI visualizations to uncover sales trends and customer insights.",
    tags: ["Excel", "MySQL", "Power BI"],
    category: "visualization",
    icon: BarChart3,
    github: "https://github.com/poojithagumpula/retail-sales-analysis",
    color: "cyan",
    glow: "rgba(34,211,238,0.25)",
  },
  {
    title: "Amazon Product Sales EDA",
    description: "Exploratory Data Analysis project using Python to analyze Amazon product telemetry data, visualizing product performance metrics, pricing strategies, and customer review patterns.",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    category: "analysis",
    icon: Database,
    github: "https://github.com/poojithagumpula/amazon-eda",
    color: "emerald",
    glow: "rgba(52,211,153,0.25)",
  },
  {
    title: "Database SSIS/ETL Pipeline",
    description: "Custom ETL pipeline built with SQL Server Integration Services (SSIS) demonstrating data extraction, transformation, and loading processes for enterprise data integration.",
    tags: ["SSIS", "SQL Server", "ETL", "T-SQL"],
    category: "etl",
    icon: Workflow,
    github: "https://github.com/poojithagumpula/ssis-etl-pipeline",
    color: "purple",
    glow: "rgba(167,139,250,0.25)",
  },
]

const categories = [
  { id: "all", label: "All Projects" },
  { id: "visualization", label: "Visualization" },
  { id: "analysis", label: "Analysis" },
  { id: "etl", label: "ETL" },
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [tilt, setTilt] = useState<{ [key: string]: { x: number; y: number } }>({})

  useEffect(() => {
    const els = document.querySelectorAll(".proj-reveal")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("proj-visible")
        })
      },
      { threshold: 0.1 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, title: string) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * -16
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 16
    setTilt((prev) => ({ ...prev, [title]: { x, y } }))
  }
  const handleMouseLeave = (title: string) => {
    setTilt((prev) => ({ ...prev, [title]: { x: 0, y: 0 } }))
  }

  const filteredProjects = activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <style>{`
        .proj-reveal {
          opacity: 0;
          transform: perspective(1000px) rotateY(15deg) translateX(60px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .proj-reveal:nth-child(even) {
          transform: perspective(1000px) rotateY(-15deg) translateX(-60px);
        }
        .proj-reveal.proj-visible {
          opacity: 1;
          transform: perspective(1000px) rotateY(0deg) translateX(0px);
        }
        .proj-card {
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          transform-style: preserve-3d;
          will-change: transform;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 proj-reveal proj-visible">
          <span className="text-cyan-400 font-mono text-sm tracking-wider">// PORTFOLIO</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Real-world data analytics projects showcasing my expertise in SQL, BI tools, and data pipeline development
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50 border border-white/10"
              }`}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const t = tilt[project.title] || { x: 0, y: 0 }
            return (
              <div
                key={project.title}
                className="proj-reveal proj-card"
                style={{
                  transitionDelay: `${index * 0.15}s`,
                  transform: `perspective(800px) rotateX(${t.x}deg) rotateY(${t.y}deg)`,
                  boxShadow: t.x !== 0 || t.y !== 0
                    ? `0 30px 60px rgba(0,0,0,0.5), 0 0 40px ${project.glow}`
                    : "0 10px 40px rgba(0,0,0,0.3)",
                }}
                onMouseMove={(e) => handleMouseMove(e, project.title)}
                onMouseLeave={() => handleMouseLeave(project.title)}
              >
                <div className="group relative h-full">
                  <div className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500 ${
                    project.color === "cyan" ? "bg-cyan-500" : project.color === "emerald" ? "bg-emerald-500" : "bg-purple-500"
                  }`} />

                  <div className="relative h-full p-6 rounded-2xl bg-slate-900/70 backdrop-blur-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 flex flex-col"
                    style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.05) inset" }}>

                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl ${
                        project.color === "cyan" ? "bg-cyan-500/20 text-cyan-400"
                          : project.color === "emerald" ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-purple-500/20 text-purple-400"
                      }`}>
                        <project.icon className="w-6 h-6" />
                      </div>
                      <div className="flex gap-2">
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
                          <GitHubLogoIcon className="w-5 h-5" />
                        </a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-300 border border-white/10">{tag}</span>
                      ))}
                    </div>

                    {/* 3D depth indicator — bottom right decoration */}
                    <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10 pointer-events-none">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400" />
                        <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400" />
                        <circle cx="50" cy="50" r="16" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/poojithagumpula" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group">
            <span>View all projects on GitHub</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
