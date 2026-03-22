import { Mail, MessageCircle, Phone } from "lucide-react"

// RENOA Contact Info - Edit these values as needed
const RENOA_PHONE = "+502 4294-5544"
const RENOA_PHONE_CLEAN = "50242945544"
const RENOA_EMAIL = "contacto@renoa.tech"
const WHATSAPP_DEFAULT_MESSAGE = "Hola, me interesa conocer más sobre los servicios de desarrollo web de RENOA."

const getWhatsAppUrl = () => {
  return `https://wa.me/${RENOA_PHONE_CLEAN}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`
}

// ============================================
// LEGAL SECTION CONFIGURATION
// Set SHOW_LEGAL to true when legal documents are ready
// Update the href values with actual document URLs/routes
// ============================================
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
      { href: "#planes", label: "RENOA BUSINESS" },
      { href: "#care", label: "RENOA CARE" },
    ],
  },
  support: {
    title: "Soporte",
    links: [
      { href: "#", label: "Centro de ayuda" },
      { href: "#", label: "Documentación" },
      { href: "#contacto", label: "Contacto" },
    ],
  },
  // Legal links - Update href with actual document paths when ready
  // These will open in a new tab when enabled
  legal: {
    title: "Legal",
    links: [
      { href: "/legal/terminos-de-servicio", label: "Términos de servicio" },
      { href: "/legal/politica-de-privacidad", label: "Política de privacidad" },
      { href: "/legal/propiedad-de-codigo", label: "Propiedad de código" },
      { href: "/legal/renovaciones", label: "Renovaciones" },
    ],
  },
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 py-16">
        {/* Main Footer Grid */}
        <div className={`grid grid-cols-2 gap-8 mb-12 ${SHOW_LEGAL ? 'md:grid-cols-4' : 'md:grid-cols-3'}`}>
          {/* Company */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">{footerLinks.company.title}</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Plans */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">{footerLinks.plans.title}</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.plans.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">{footerLinks.support.title}</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.support.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal - Only shown when SHOW_LEGAL is true */}
          {SHOW_LEGAL && (
            <div>
              <h4 className="text-foreground font-semibold mb-4">{footerLinks.legal.title}</h4>
              <ul className="flex flex-col gap-3">
                {footerLinks.legal.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Email - Opens default email client */}
            <a
              href={`mailto:${RENOA_EMAIL}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              {RENOA_EMAIL}
            </a>
            {/* WhatsApp - Opens WhatsApp with predefined message */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            {/* Phone - Opens phone dialer on mobile */}
            <a
              href={`tel:${RENOA_PHONE_CLEAN}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              {RENOA_PHONE}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-foreground">RENOA</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} RENOA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
