import { Check, MessageCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

// RENOA Contact Info
const RENOA_PHONE_CLEAN = "50242945544"
const WHATSAPP_DEFAULT_MESSAGE = "Hola, me interesa conocer más sobre los servicios de desarrollo web de RENOA."

const getWhatsAppUrl = (planName?: string) => {
  const message = planName 
    ? `Hola, me interesa solicitar información sobre el plan ${planName}.`
    : WHATSAPP_DEFAULT_MESSAGE
  return `https://wa.me/${RENOA_PHONE_CLEAN}?text=${encodeURIComponent(message)}`
}

// ============================================
// PRICING CONFIGURATION
// Set SHOW_PRICES to true to display prices
// Currency: Q (Quetzal)
// ============================================
const SHOW_PRICES = false

const plans = [
  {
    name: "RENOA START",
    badge: "Esencial",
    // TODO: Update price when ready - Currency: Quetzal (Q)
    price: "Q0,000",
    period: "",
    description: "Ideal para negocios que inician su presencia digital profesional.",
    features: [
      "Sitio web hasta 5 páginas",
      "Diseño responsive",
      "Optimización SEO básica",
      "Formulario de contacto",
      "Integración redes sociales",
      "1 mes de soporte incluido",
      "Entrega en 2-3 semanas",
    ],
    highlighted: false,
  },
  {
    name: "RENOA BUSINESS",
    badge: "Recomendado",
    // TODO: Update price when ready - Currency: Quetzal (Q)
    price: "Q0,000",
    period: "",
    description: "Para empresas que necesitan una solución web completa y escalable.",
    features: [
      "Sitio web hasta 10 páginas",
      "Arquitectura escalable",
      "Optimización SEO avanzada",
      "Sistema de blog integrado",
      "Panel de administración",
      "Integraciones personalizadas",
      "Analytics y métricas",
      "3 meses de RENOA CARE",
      "Entrega en 3-4 semanas",
    ],
    highlighted: true,
  },
]

export function Plans() {
  return (
    <section id="planes" className="py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-xs mb-4">
            PLANES
          </span>
          <h2 className="text-foreground mb-4 text-balance">
            Elige tu plan
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluciones adaptadas a las necesidades de tu negocio
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card border rounded-xl p-8 shadow-card ${
                plan.highlighted
                  ? "border-primary shadow-card-hover"
                  : "border-border"
              }`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-6">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-xs ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground"
                  }`}
                >
                  {plan.highlighted && <Star className="w-3 h-3" />}
                  {plan.badge}
                </span>
              </div>

              {/* Plan Info */}
              <h3 className="text-foreground mb-2">{plan.name}</h3>
              {/* Price Section - Toggle SHOW_PRICES constant to show/hide */}
              {SHOW_PRICES ? (
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-sm text-muted-foreground">{plan.period}</span>}
                </div>
              ) : (
                <div className="mb-4">
                  <span className="text-lg font-medium text-primary">Solicita cotización</span>
                </div>
              )}
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-xs flex items-center justify-center shrink-0 ${
                        plan.highlighted ? "bg-primary/20" : "bg-secondary"
                      }`}
                    >
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                asChild
                className={`w-full h-11 rounded-md font-medium transition-all ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:brightness-105"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                <a
                  href={getWhatsAppUrl(plan.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
