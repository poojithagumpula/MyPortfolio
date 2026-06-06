"use client"

import { useState } from "react"
import { ExternalLink, Database, BarChart3, Workflow } from "lucide-react"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

const projects = [
  {
    title: "Retail Sales Analysis",
    description:
      "Comprehensive retail sales analysis dashboard combining Excel data processing, MySQL database queries, and Power BI visualizations to uncover sales trends and customer insights.",
    tags: ["Excel", "MySQL", "Power BI"],
    category: "visualization",
    icon: BarChart3,
    github: "https://github.com/poojithagumpula/retail-sales-analysis",
    color: "cyan",
  },
  {
    title: "Amazon Product Sales EDA",
    description:
      "Exploratory Data Analysis project using Python to analyze Amazon product telemetry data, visualizing product performance metrics, pricing strategies, and customer review patterns.",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    category: "analysis",
    icon: Database,
    github: "https://github.com/poojithagumpula/amazon-eda",
    color: "emerald",
  },
  {
    title: "Database SSIS/ETL Pipeline",
    description:
      "Custom ETL pipeline built with SQL Server Integration Services (SSIS) demonstrating data extraction, transformation, and loading processes for enterprise data integration.",
    tags: ["SSIS", "SQL Server", "ETL", "T-SQL"],
    category: "etl",
    icon: Workflow,
    github: "https://github.com/poojithagumpula/ssis-etl-pipeline",
    color: "purple",
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

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-cyan-400 font-mono text-sm tracking-wider">// PORTFOLIO</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Real-world data analytics projects showcasing my expertise in SQL, BI tools, and data
            pipeline development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50 border border-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect */}
              <div
                className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 ${
                  project.color === "cyan"
                    ? "bg-cyan-500"
                    : project.color === "emerald"
                      ? "bg-emerald-500"
                      : "bg-purple-500"
                }`}
              />

              <div className="relative h-full p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 rounded-xl ${
                      project.color === "cyan"
                        ? "bg-cyan-500/20 text-cyan-400"
                        : project.color === "emerald"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-purple-500/20 text-purple-400"
                    }`}
                  >
                    <project.icon className="w-6 h-6" />
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                      aria-label="View on GitHub"
                    >
                      <GitHubLogoIcon className="w-5 h-5" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                      aria-label="View project"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Data visualization decoration */}
                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10 pointer-events-none">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400" />
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400" />
                    <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/poojithagumpula"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group"
          >
            <span>View all projects on GitHub</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
