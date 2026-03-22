"use client"

import { useState, useEffect } from "react"
import { Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

// RENOA Contact Info - Edit these values as needed
const RENOA_PHONE = "+502 4294-5544"
const RENOA_PHONE_CLEAN = "50242945544" // Without spaces/dashes for WhatsApp link
const WHATSAPP_DEFAULT_MESSAGE = "Hola, me interesa conocer más sobre los servicios de desarrollo web de RENOA."

const navLinks = [
  { href: "#planes", label: "Planes" },
  { href: "#care", label: "CARE" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
]

// WhatsApp URL with predefined message
const getWhatsAppUrl = (message?: string) => {
  const encodedMessage = encodeURIComponent(message || WHATSAPP_DEFAULT_MESSAGE)
  return `https://wa.me/${RENOA_PHONE_CLEAN}?text=${encodedMessage}`
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="text-xl font-bold tracking-tight text-foreground">
              RENOA
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              className="h-11 px-5 rounded-md bg-primary text-primary-foreground hover:brightness-105 transition-all"
            >
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span className="hidden lg:inline">{RENOA_PHONE}</span>
                <span className="lg:hidden">WhatsApp</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="h-11 w-full rounded-md bg-primary text-primary-foreground hover:brightness-105 transition-all mt-2"
              >
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {RENOA_PHONE}
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
