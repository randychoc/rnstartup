import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const RENOA_PHONE_CLEAN = "50242945544"

const getWhatsAppUrl = (plan: string) => {
  const message = `Hola, me interesa el plan ${plan} de RENOA CARE.`
  return `https://wa.me/${RENOA_PHONE_CLEAN}?text=${encodeURIComponent(message)}`
}

const carePlans = [
  {
    name: "CARE Básico",
    price: "Q350",
    period: "/mes",
    target: "Para negocios con contenido estable",
    highlighted: false,
    features: [
      "Hosting y dominio gestionados por RENOA",
      "Renovación de dominio incluida",
      "Hasta 2 cambios de contenido al mes",
      "Reporte mensual de visitas",
      "Respuesta en 48 horas hábiles",
    ],
    examples: "Actualizar horarios · cambiar teléfono · reemplazar foto · añadir promoción",
  },
  {
    name: "CARE Plus",
    price: "Q650",
    period: "/mes",
    target: "Para negocios con movimiento frecuente",
    highlighted: true,
    features: [
      "Todo lo de CARE Básico",
      "Hasta 5 cambios de contenido al mes",
      "Actualización de galería de fotos",
      "Revisión de SEO cada 3 meses",
      "Respuesta en 24 horas hábiles",
    ],
    examples: "Subir menú nuevo · actualizar precios · añadir testimonios · cambiar portada",
  },
  {
    name: "CARE Premium",
    price: "Q1,200",
    period: "/mes",
    target: "Socio digital mensual",
    highlighted: false,
    features: [
      "Todo lo de CARE Plus",
      "Cambios de contenido ilimitados",
      "Soporte directo por WhatsApp",
      "Respuesta en 4 horas hábiles",
      "1 mejora de diseño por trimestre",
    ],
    examples: "Añadir nueva sección · nueva página · integrar red social · evento especial",
  },
]

export function Care() {
  return (
    <section
      id="care"
      className="py-20 md:py-28"
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
            RENOA CARE
          </span>
          <h2 style={{ color: "#FFFFFF" }}>
            Tu sitio, siempre{" "}
            <span style={{ color: "#9B6BF5" }}>activo y actualizado</span>
          </h2>
          <p
            className="mt-4 text-base max-w-lg mx-auto"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Planes mensuales para que no tengas que preocuparte por nada.
            Tú enfócate en tu negocio, RENOA se encarga de tu sitio.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6">
          {carePlans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl p-6 flex flex-col"
              style={{
                background: "#11102E",
                border: plan.highlighted
                  ? "1.5px solid rgba(112,48,239,0.6)"
                  : "1px solid rgba(112,48,239,0.2)",
              }}
            >
              <div className="mb-4">
                <h4 style={{ color: "#FFFFFF", fontSize: "1rem", fontWeight: 700 }}>
                  {plan.name}
                </h4>
                <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {plan.target}
                </p>
              </div>

              <div className="mb-5">
                <span className="text-3xl font-extrabold" style={{ color: "#FFFFFF" }}>
                  {plan.price}
                </span>
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {plan.period}
                </span>
              </div>

              <ul className="flex flex-col gap-3 flex-1 mb-4">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <span
                      className="mt-0.5 font-bold flex-shrink-0"
                      style={{ color: "#9B6BF5" }}
                    >
                      +
                    </span>
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Examples */}
              {/* <div
                className="rounded-xl p-3 mb-5"
                style={{ background: "rgba(112,48,239,0.08)" }}
              >
                <p className="text-xs font-semibold mb-1" style={{ color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Ejemplos de cambios
                </p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
                  {plan.examples}
                </p>
              </div> */}

              <Button
                asChild
                className="w-full h-10 rounded-xl font-semibold text-sm transition-all"
                style={
                  plan.highlighted
                    ? { background: "#7030EF", color: "#fff", border: "none" }
                    : { background: "rgba(112,48,239,0.18)", color: "#9B6BF5", border: "1px solid rgba(112,48,239,0.3)" }
                }
              >
                <a href={getWhatsAppUrl(plan.name)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Solicitar {plan.name}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
