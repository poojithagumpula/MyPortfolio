"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/80 backdrop-blur-xl border-b border-white/10" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center font-bold text-white text-lg group-hover:scale-110 transition-transform">
              PG
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
            </div>
            <span className="text-white font-semibold hidden sm:block">Poojitha Gumpula</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-300 hover:text-cyan-400 transition-colors font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="https://github.com/poojithagumpula"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all hover:scale-105"
            >
              GitHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-lg text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://github.com/poojithagumpula"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 text-center rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-medium"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  )
}
