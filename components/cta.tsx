const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
)

const SOCIAL_LINKS = [
  {
    href: "https://www.tiktok.com/@renoa.tech",
    label: "TikTok",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20} aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.79 1.53V6.76a4.85 4.85 0 0 1-1.02-.07z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/renoa.tech/",
    label: "Instagram",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={20} height={20} aria-hidden="true">
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
      <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20} aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
]

const RENOA_PHONE_CLEAN = "50242945544"
const WHATSAPP_DEFAULT_MESSAGE = "Hola, me interesa el diagnóstico gratuito de RENOA. Quiero saber cómo aparece mi negocio en Google."

const getWhatsAppUrl = () =>
  `https://wa.me/${RENOA_PHONE_CLEAN}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`

export function CTA() {
  return (
    <section
      id="contacto"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #7030EF 0%, #4A1DAF 50%, #2D0F7A 100%)",
      }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,255,255,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-2xl px-4 md:px-6 text-center flex flex-col items-center gap-6">

        {/* Eyebrow */}
        <p
          className="text-sm font-semibold uppercase tracking-widest"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          Tu competencia ya está en internet
        </p>

        {/* Title */}
        <h2
          className="text-3xl md:text-4xl font-bold leading-tight"
          style={{ color: "#FFFFFF" }}
        >
          ¿Quieres saber qué ven tus clientes cuando te buscan en Google?
        </h2>

        {/* Description */}
        <p
          className="text-lg max-w-xl"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          En 15 minutos te mostramos cómo aparece tu negocio hoy, qué hace tu competencia, y qué necesitas para superarlos.
        </p>

        {/* CTA Button */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 py-4 px-8 rounded-full text-lg font-bold transition-all duration-200 hover:scale-105 hover:shadow-2xl"
          style={{
            background: "#FFFFFF",
            color: "#7030EF",
            boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
          }}
        >
          <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
          Agendar mi diagnóstico gratuito
        </a>

        {/* Trust note */}
        <p
          className="text-sm"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          Sin costo · Sin compromiso · 15 minutos
        </p>

        {/* Social links */}
        <div className="flex flex-col items-center gap-3 pt-1">
          <p
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Síguenos
          </p>
          <div className="flex items-center gap-5">
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
        </div>

      </div>
    </section>
  )
}
