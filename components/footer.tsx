import { Mail, MessageCircle, Phone } from "lucide-react"

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
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  WhatsApp
                </a>
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
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            © {new Date().getFullYear()} RENOA. Todos los derechos reservados. · Guatemala
          </p>
        </div>
      </div>
    </footer>
  )
}
