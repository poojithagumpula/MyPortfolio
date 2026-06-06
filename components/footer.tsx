import { Mail, Heart } from "lucide-react"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

export function Footer() {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center font-bold text-white text-sm">
                PG
              </div>
              <span className="text-white font-semibold">Poojitha Gumpula</span>
            </div>
            <p className="text-slate-500 text-sm flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> © {new Date().getFullYear()}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
            >
              About
            </a>
            <a
              href="#journey"
              className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
            >
              Journey
            </a>
            <a
              href="#projects"
              className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:poojithagumpula@gmail.com"
              className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/poojagumpula"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedInLogoIcon className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/poojithagumpula"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
              aria-label="GitHub"
            >
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2 text-xs text-slate-600 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Data Analyst | SQL Expert | BI Developer</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
