"use client"

import { useState } from "react"
import { Mail, Send, Loader2, CheckCircle } from "lucide-react"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

export function ContactSection() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle")
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("loading")

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setFormState("success")

    // Reset after showing success
    setTimeout(() => {
      setFormState("idle")
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-mono text-sm tracking-wider">// GET IN TOUCH</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Have a project in mind or want to discuss data analytics opportunities? I&apos;d love to
            hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl opacity-20 blur-lg" />
              <div className="relative p-8 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <a
                    href="mailto:poojithagumpula@gmail.com"
                    className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/50 transition-all"
                  >
                    <div className="p-3 rounded-lg bg-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/30 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Email</p>
                      <p className="text-white group-hover:text-cyan-300 transition-colors">
                        poojithagumpula@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/poojagumpula"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/50 transition-all"
                  >
                    <div className="p-3 rounded-lg bg-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/30 transition-colors">
                      <LinkedInLogoIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">LinkedIn</p>
                      <p className="text-white group-hover:text-cyan-300 transition-colors">
                        linkedin.com/in/poojagumpula
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/poojithagumpula"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/50 transition-all"
                  >
                    <div className="p-3 rounded-lg bg-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/30 transition-colors">
                      <GitHubLogoIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">GitHub</p>
                      <p className="text-white group-hover:text-cyan-300 transition-colors">
                        github.com/poojithagumpula
                      </p>
                    </div>
                  </a>
                </div>

                {/* Data visualization decoration */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 opacity-20 pointer-events-none">
                  <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                    <path
                      d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-cyan-400"
                    />
                    <path
                      d="M50 20 L80 35 L80 65 L50 80 L20 65 L20 35 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-emerald-400"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl opacity-20 blur-lg" />
            <form
              onSubmit={handleSubmit}
              className="relative p-8 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState !== "idle"}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formState === "idle" && (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                  {formState === "loading" && (
                    <>
                      Sending...
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </>
                  )}
                  {formState === "success" && (
                    <>
                      Message Sent!
                      <CheckCircle className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
