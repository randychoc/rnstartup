"use client"

import { useState, useEffect } from "react"
import { Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const RENOA_PHONE_CLEAN = "50242945544"
const WHATSAPP_DEFAULT_MESSAGE = "Hola, me interesa agendar un diagnóstico gratuito con RENOA."

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#planes", label: "Planes" },
  { href: "#care", label: "CARE" },
  { href: "#proceso", label: "Proceso" },
]

const getWhatsAppUrl = () =>
  `https://wa.me/${RENOA_PHONE_CLEAN}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [ctaPulse, setCtaPulse] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setCtaPulse(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  const navStyle: React.CSSProperties = {
    background: isScrolled ? "rgba(9,8,32,0.92)" : "#090820",
    borderBottom: `1px solid rgba(112,48,239,${isScrolled ? "0.2" : "0.1"})`,
    backdropFilter: isScrolled ? "blur(14px)" : "none",
    transition: "all 0.3s ease",
  }

  return (
    <header
      className={`sticky top-0 z-50 ${isScrolled ? "shadow-lg shadow-black/20" : ""}`}
      style={navStyle}
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center">
            <span
              className="text-xl font-extrabold tracking-widest"
              style={{ color: "#FFFFFF" }}
            >
              REN<span style={{ color: "#9B6BF5" }}>O</span>A
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors"
                style={{ color: "rgba(255,255,255,0.75)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              className={`h-10 px-5 rounded-lg font-semibold transition-all ${ctaPulse ? "animate-pulse" : ""}`}
              style={{ background: "#7030EF", color: "#fff", border: "none" }}
              onMouseEnter={() => setCtaPulse(false)}
            >
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                <span className="hidden lg:inline">Diagnóstico gratis</span>
                <span className="lg:hidden">WhatsApp</span>
              </a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden p-3"
            style={{ color: "#fff" }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden py-4"
            style={{ borderTop: "1px solid rgba(112,48,239,0.2)" }}
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="h-11 w-full rounded-lg font-semibold mt-2"
                style={{ background: "#7030EF", color: "#fff", border: "none" }}
              >
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Diagnóstico gratis
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
