"use client"

import { Mail, Phone } from "lucide-react"
import WhatsAppLink from "@/components/WhatsAppLink"

const SOCIAL_LINKS = [
  {
    href: "https://www.tiktok.com/@renoa.tech",
    label: "TikTok",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.79 1.53V6.76a4.85 4.85 0 0 1-1.02-.07z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/renoa.tech/",
    label: "Instagram",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={18} height={18} aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/renoa.tech/",
    label: "Facebook",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
]

const RENOA_PHONE = "+502 4294-5544"
const RENOA_PHONE_CLEAN = "50242945544"
const RENOA_EMAIL = "contacto@renoa.tech"
const WHATSAPP_DEFAULT_MESSAGE = "Hola, me interesa conocer más sobre los servicios de RENOA."

const getWhatsAppUrl = () =>
  `https://wa.me/${RENOA_PHONE_CLEAN}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`

const SHOW_LEGAL = false

const footerLinks = {
  company: {
    title: "RENOA",
    links: [
      { href: "#", label: "Inicio" },
      { href: "#planes", label: "Planes" },
      { href: "#proceso", label: "Proceso" },
      { href: "#care", label: "RENOA CARE" },
    ],
  },
  plans: {
    title: "Planes",
    links: [
      { href: "#planes", label: "RENOA START" },
      { href: "#planes", label: "RENOA GROW" },
      { href: "#planes", label: "RENOA PRO" },
      { href: "#care", label: "RENOA CARE" },
    ],
  },
  contact: {
    title: "Contacto",
    links: [
      { href: `mailto:${RENOA_EMAIL}`, label: RENOA_EMAIL },
      { href: `tel:${RENOA_PHONE_CLEAN}`, label: RENOA_PHONE },
    ],
  },
}

const linkStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "rgba(255,255,255,0.7)",
  textDecoration: "none",
  transition: "color 0.2s",
}

export function Footer() {
  return (
    <footer style={{ background: "#090820", borderTop: "1px solid rgba(112,48,239,0.2)" }}>
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 py-14">

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mb-12">
          <div>
            <p className="text-sm font-bold mb-4" style={{ color: "#FFFFFF" }}>
              {footerLinks.company.title}
            </p>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} style={linkStyle}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold mb-4" style={{ color: "#FFFFFF" }}>
              {footerLinks.plans.title}
            </p>
            <ul className="flex flex-col gap-3">
              {footerLinks.plans.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} style={linkStyle}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold mb-4" style={{ color: "#FFFFFF" }}>
              {footerLinks.contact.title}
            </p>
            <ul className="flex flex-col gap-3">
              {footerLinks.contact.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} style={linkStyle}>{link.label}</a>
                </li>
              ))}
              <li>
                <WhatsAppLink
                  href={getWhatsAppUrl()}
                  section="footer"
                  style={linkStyle}
                >
                  WhatsApp
                </WhatsAppLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(112,48,239,0.15)" }}
        >
          <span
            className="text-xl font-extrabold tracking-widest"
            style={{ color: "#FFFFFF" }}
          >
            REN<span style={{ color: "#9B6BF5" }}>O</span>A
          </span>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ href, label, svg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="opacity-60 hover:opacity-100 transition-opacity duration-200"
                style={{ color: "#FFFFFF" }}
              >
                {svg}
              </a>
            ))}
          </div>

          <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            © {new Date().getFullYear()} RENOA. Todos los derechos reservados. · Guatemala
          </p>
        </div>
      </div>
    </footer>
  )
}
