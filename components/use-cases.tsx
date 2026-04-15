import { Utensils, Stethoscope, ShoppingBag, Briefcase } from "lucide-react"

const RENOA_PHONE_CLEAN = "50242945544"
const WHATSAPP_MESSAGE = "Hola, me interesa conocer más sobre los servicios de RENOA para mi negocio."
const getWhatsAppUrl = () =>
  `https://wa.me/${RENOA_PHONE_CLEAN}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

const useCases = [
  {
    Icon: Briefcase,
    title: "Profesionales y servicios",
    description:
      "Tus clientes te buscan en Google antes de llamarte. Con un sitio profesional, te encuentran, confían y te contactan.",
    badge: "Ideal con RENOA START",
  },
  {
    Icon: Utensils,
    title: "Restaurantes",
    description:
      "Tus clientes quieren ver tu menú antes de llegar. Un sitio web con menú digital y Google Maps convierte búsquedas en reservas.",
    badge: "Ideal con RENOA GROW",
  },
  {
    Icon: Stethoscope,
    title: "Clínicas y consultorios",
    description:
      "Los pacientes nuevos investigan en internet antes de agendar. Un sitio con servicios, doctores y citas en línea genera confianza inmediata.",
    badge: "Ideal con RENOA GROW",
  },
  {
    Icon: ShoppingBag,
    title: "Tiendas y comercios",
    description:
      "No dependas solo del tráfico que pasa frente a tu local. Un catálogo digital con WhatsApp te da ventas las 24 horas.",
    badge: "Ideal con RENOA PRO",
  },
]

export function UseCases() {
  return (
    <section
      className="py-16 md:py-20 lg:py-28"
      style={{ background: "#090820" }}
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span
            className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full mb-4"
            style={{
              background: "rgba(112,48,239,0.18)",
              border: "1px solid rgba(112,48,239,0.3)",
              color: "#9B6BF5",
            }}
          >
            Para quién es RENOA
          </span>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold"
            style={{ color: "#FFFFFF" }}
          >
            Soluciones para negocios reales
          </h2>
          <p className="mt-4 text-base max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            Trabajamos con negocios locales que quieren crecer en internet sin complicaciones.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {useCases.map(({ Icon, title, description, badge }) => (
            <div
              key={title}
              className="rounded-xl p-6 flex flex-col gap-4 transition-transform duration-200 hover:scale-[1.02] shadow-card hover:shadow-card-hover"
              style={{
                background: "#11102E",
                border: "1px solid rgba(112,48,239,0.2)",
              }}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(112,48,239,0.15)" }}
              >
                <Icon className="w-5 h-5" style={{ color: "#9B6BF5" }} />
              </div>

              {/* Title */}
              <h4
                className="font-bold text-lg leading-snug"
                style={{ color: "#FFFFFF" }}
              >
                {title}
              </h4>

              {/* Description */}
              <p
                className="text-sm md:text-base leading-relaxed flex-1"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                {description}
              </p>

              {/* Plan badge */}
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full self-start"
                style={{
                  background: "rgba(112,48,239,0.12)",
                  border: "1px solid rgba(112,48,239,0.25)",
                  color: "#9B6BF5",
                }}
              >
                {badge}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center mt-10 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
          ¿No ves tu tipo de negocio? Todos los negocios locales pueden beneficiarse de un sitio web profesional.{" "}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity"
            style={{ color: "#9B6BF5" }}
          >
            Consultá tu caso →
          </a>
        </p>

      </div>
    </section>
  )
}
