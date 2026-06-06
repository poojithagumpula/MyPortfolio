"use client"

import { Download, FileText, Briefcase, GraduationCap, Award } from "lucide-react"

export function ResumeSection() {
  return (
    <section id="resume" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay:"1s"}} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay:"2s"}} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-mono text-sm tracking-wider">// RESUME</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Skills */}
          <div className="relative p-8 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-cyan-500/10">
                <Briefcase className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Technical Skills</h3>
            </div>
            <div className="space-y-3 text-slate-300 text-sm">
              <p><span className="text-cyan-400">Databases:</span> SQL Server, MySQL, T-SQL, Stored Procedures</p>
              <p><span className="text-cyan-400">BI & Viz:</span> Power BI (DAX, Power Query), Tableau, Excel</p>
              <p><span className="text-cyan-400">ETL:</span> SSIS, ETL Pipeline Design</p>
              <p><span className="text-cyan-400">Programming:</span> Python (Pandas, NumPy, Matplotlib, Seaborn)</p>
              <p><span className="text-cyan-400">Core:</span> EDA, Data Modelling, KPI Reporting, Business Intelligence</p>
            </div>
          </div>

          {/* Education */}
          <div className="relative p-8 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-emerald-500/10">
                <GraduationCap className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-white font-semibold">B.Tech – Computer Science & Engineering</p>
                <p className="text-slate-400 text-sm">Nigama Engineering College, Peddapalli</p>
                <p className="text-cyan-400 text-sm font-mono">2019 – 2023 | JNTUH</p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-500/10">
                <Award className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Certifications</h3>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <p><span className="text-purple-400">→</span> <span className="text-white">Data Analytics Job Simulation 2026</span> <span className="text-slate-400">– Deloitte Australia (Forage)</span></p>
              <p><span className="text-purple-400">→</span> <span className="text-white">Crash Course on Python 2025</span> <span className="text-slate-400">– Google (Coursera)</span></p>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="flex justify-center gap-4">
          
            href="/Poojitha_Gumpula_Resume.pdf"
            download
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
          >
            <FileText className="w-6 h-6" />
            Download Resume
            <Download className="w-5 h-5 group-hover:animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}