"use client"

import { GraduationCap, Award, Calendar } from "lucide-react"

const timelineItems = [
  {
    type: "education",
    title: "B.Tech Computer Science Engineering",
    organization: "Nigama Engineering College",
    period: "2019 - 2023",
    description:
      "Developed a strong foundation in computer science fundamentals, database management, and software development principles.",
    icon: GraduationCap,
  },
  {
    type: "certification",
    title: "Data Analytics Job Simulation",
    organization: "Deloitte Australia (via Forage)",
    period: "2024",
    description:
      "Completed comprehensive job simulation covering data analysis, visualization, and business intelligence reporting in a professional consulting environment.",
    icon: Award,
  },
  {
    type: "certification",
    title: "Crash Course on Python",
    organization: "Google (Coursera)",
    period: "2024",
    description:
      "Mastered Python programming fundamentals including data structures, algorithms, and automation scripting for data analysis tasks.",
    icon: Award,
  },
]

export function TimelineSection() {
  return (
    <section id="journey" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-mono text-sm tracking-wider">// MY JOURNEY</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
            Education &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-emerald-500 to-purple-500" />

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 z-10">
                  <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-30" />
                </div>

                {/* Content card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity" />
                    <div className="relative p-6 rounded-xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-cyan-500/50 transition-colors">
                      {/* Type badge */}
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                          item.type === "education"
                            ? "bg-purple-500/20 text-purple-300"
                            : "bg-emerald-500/20 text-emerald-300"
                        }`}
                      >
                        <item.icon className="w-3 h-3" />
                        {item.type === "education" ? "Education" : "Certification"}
                      </div>

                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-cyan-400 font-medium mb-2">{item.organization}</p>

                      <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </div>

                      <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>

                      {/* Decorative corner */}
                      <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-cyan-500/20 rounded-tr-xl" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
