"use client"

import { Database, BarChart3, FileSpreadsheet, Code2, Server, Workflow } from "lucide-react"

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

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
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
          {/* Bio Card */}
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
                <p className="ml-4">
                  <span className="text-emerald-400">&quot;name&quot;</span>:{" "}
                  <span className="text-yellow-300">&quot;Poojitha Gumpula&quot;</span>,
                </p>
                <p className="ml-4">
                  <span className="text-emerald-400">&quot;role&quot;</span>:{" "}
                  <span className="text-yellow-300">&quot;Aspiring Data Analyst&quot;</span>,
                </p>
                <p className="ml-4">
                  <span className="text-emerald-400">&quot;education&quot;</span>: {"{"}
                </p>
                <p className="ml-8">
                  <span className="text-emerald-400">&quot;degree&quot;</span>:{" "}
                  <span className="text-yellow-300">&quot;B.Tech Computer Science&quot;</span>,
                </p>
                <p className="ml-8">
                  <span className="text-emerald-400">&quot;college&quot;</span>:{" "}
                  <span className="text-yellow-300">&quot;Nigama Engineering College&quot;</span>
                </p>
                <p className="ml-4">{"}"},</p>
                <p className="ml-4">
                  <span className="text-emerald-400">&quot;passion&quot;</span>:{" "}
                  <span className="text-yellow-300">
                    &quot;Turning raw data into actionable business insights&quot;
                  </span>
                </p>
                <p className="text-cyan-400">{"}"}</p>
              </div>

              <p className="mt-8 text-slate-300 leading-relaxed">
                I am a dedicated and passionate data enthusiast with a strong foundation in Computer
                Science. My expertise lies in extracting meaningful patterns from complex datasets
                and presenting them through compelling visualizations that drive business decisions.
              </p>
            </div>
          </div>

          {/* Skills Matrix */}
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
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                      <skill.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </p>
                      <p className="text-xs text-slate-500">{skill.category}</p>
                    </div>
                  </div>

                  {/* Skill level indicator */}
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
