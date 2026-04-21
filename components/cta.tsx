import { MessageCircle } from "lucide-react"

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
          ¿Querés saber qué ven tus clientes cuando te buscan en Google?
        </h2>

        {/* Description */}
        <p
          className="text-lg max-w-xl"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          En 15 minutos te mostramos cómo aparece tu negocio hoy, qué hace tu competencia, y qué necesitás para superarlos.
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
          <MessageCircle className="w-5 h-5 flex-shrink-0" />
          Agendar mi diagnóstico gratuito
        </a>

        {/* Trust note */}
        <p
          className="text-sm"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          Sin costo · Sin compromiso · 15 minutos
        </p>


      </div>
    </section>
  )
}
