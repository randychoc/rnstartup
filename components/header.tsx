"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
)

const RENOA_PHONE_CLEAN = "50242945544"
const WHATSAPP_DEFAULT_MESSAGE = "Hola, me interesa agendar un diagnóstico gratuito con RENOA."

const navLinks = [
  { href: "#servicios", label: "Por qué" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#planes", label: "Planes" },
  { href: "#care", label: "CARE" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#nosotros", label: "Nosotros" },
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
                <WhatsAppIcon className="w-4 h-4 mr-2" />
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
                  <WhatsAppIcon className="w-4 h-4 mr-2" />
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
