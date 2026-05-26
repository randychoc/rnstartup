import { Check, MessageCircle, Users, TrendingDown, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"

const RENOA_PHONE_CLEAN = "50242945544"

const getWhatsAppUrl = (planName: string) => {
  const message = `Hola, me interesa solicitar información sobre el plan ${planName} de RENOA.`
  return `https://wa.me/${RENOA_PHONE_CLEAN}?text=${encodeURIComponent(message)}`
}

const plans = [
  {
    name: "RENOA START",
    tag: "Tu primer cliente desde Google",
    price: "Q2,500",
    period: "pago único",
    description:
      "De invisible a encontrable: tu negocio aparece en Google, genera confianza y recibe contactos los 7 días de la semana, aunque estés ocupado.",
    highlighted: false,
    features: [
      "Una página diseñada para que el cliente confíe antes de llamarte",
      "Tus servicios, precios y contacto — organizados para que el cliente decida",
      "Tu propia dirección en internet, sin depender de redes sociales",
      "Google entiende tu negocio y lo muestra cuando alguien lo busca en tu zona",
      "Apareces en Google Maps con horario, dirección y fotos",
      "Tus clientes te contactan con un clic, a cualquier hora, aunque tú estés ocupado",
      "Se ve perfecto en celular — donde el 80% de tus clientes te va a buscar",
      "Hosting y dominio .com incluidos — tú no gestionas nada técnico",
      "Tu negocio en internet en 7 días hábiles",
    ],
  },
  {
    name: "RENOA GROW",
    tag: "De encontrado a elegido",
    price: "Q4,500",
    period: "pago único",
    description:
      "Cuando un cliente te busca, encuentra todo lo que necesita para elegirte a ti antes que a la competencia: quién eres, qué haces, dónde estás y por qué confiar en ti.",
    highlighted: true,
    features: [
      "Todo lo del plan START, más:",
      "5 páginas que responden cada pregunta antes de que el cliente tenga que hacértela",
      "Cada página optimizada para aparecer en Google por una búsqueda diferente — más puertas de entrada a tu negocio",
      "Tus clientes te ubican en el mapa, ven tus reseñas y llegan directo a ti",
      "Carga en menos de 2 segundos — Google te premia y los clientes no se van antes de ver nada",
      "Estrategia de credibilidad: qué mostrar y cómo posicionarte por encima de tu competencia",
      "Presencia completa en 10 días hábiles",
    ],
  },
  {
    name: "RENOA PRO",
    tag: "Tu negocio vende mientras duermes",
    price: "Q8,000",
    period: "pago único",
    description:
      "Un sistema digital completo: tus clientes encuentran, se informan, reservan o compran — sin que tú tengas que estar presente.",
    highlighted: false,
    features: [
      "Todo lo del plan GROW, más:",
      "Tus productos o menú siempre visibles y actualizables — el cliente decide antes de llegar",
      "Tus clientes agendan solos, las 24 horas — sin llamadas ni coordinación manual de tu parte",
      "Cambias precios, fotos y textos desde tu celular, sin contratar a nadie",
      "Integración completa con WhatsApp en cada punto de decisión del cliente",
      "Sistema completo en 15 días hábiles",
    ],
  },
]

export function Plans() {
  return (
    <section id="planes" className="py-20 md:py-28" style={{ background: "#F8F7FF" }}>
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span
            className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full mb-4"
            style={{
              background: "rgba(112,48,239,0.1)",
              color: "#7030EF",
            }}
          >
            Planes de proyecto
          </span>
          <h2 style={{ color: "#090820" }}>
            Elige el plan que necesita tu negocio
          </h2>
          <p className="mt-4 text-base max-w-lg mx-auto" style={{ color: "#5A5780" }}>
            Pago único. Dominio .com y hosting incluidos en todos los planes.
          </p>
        </div>

        {/* Value context */}
        <div
          className="mb-16 rounded-2xl p-6 sm:p-8"
          style={{
            background: "linear-gradient(135deg, rgba(112,48,239,0.08), rgba(155,107,245,0.05))",
            border: "1px solid rgba(112,48,239,0.1)",
          }}
        >
          <h3
            className="text-center text-base font-semibold mb-6"
            style={{ color: "#090820" }}
          >
            ¿Cuánto te cuesta <span style={{ color: "#7030EF" }}>no tener</span> sitio web?
          </h3>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {[
              {
                Icon: Users,
                stat: "Q2,500",
                statLabel: "que pierdes cada mes sin sitio web",
                detail: "Solo por 5 clientes a Q500 promedio que no te encuentran en Google.",
              },
              {
                Icon: TrendingDown,
                stat: "Cada día",
                statLabel: "tu competencia capta tus clientes",
                detail: "Ya están en internet. Cada día sin presencia digital, ellos avanzan y tú no.",
              },
              {
                Icon: Calculator,
                stat: "5 clientes",
                statLabel: "nuevos al mes pagan tu sitio completo",
                detail: "Recuperas tu inversión en el primer mes. Del segundo en adelante, es ganancia pura.",
              },
            ].map(({ Icon, stat, statLabel, detail }) => (
              <div
                key={stat}
                className="rounded-xl p-5 flex flex-col gap-3"
                style={{
                  background: "rgba(112,48,239,0.07)",
                  border: "1px solid rgba(112,48,239,0.15)",
                }}
              >
                {/* Stat */}
                <div className="flex items-start justify-between gap-2">
                  <div
                    className="inline-block px-3 py-1 rounded-lg"
                    style={{ background: "rgba(112,48,239,0.12)" }}
                  >
                    <span
                      className="text-3xl font-bold leading-none"
                      style={{ color: "#9B6BF5" }}
                    >
                      {stat}
                    </span>
                  </div>
                  <div
                    className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ background: "rgba(112,48,239,0.1)" }}
                  >
                    <Icon className="w-3.5 h-3.5" style={{ color: "#7030EF" }} />
                  </div>
                </div>

                {/* Label + detail */}
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "#090820" }}>
                    {statLabel}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "#5A5780" }}>
                    {detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 mb-10">
            <p className="text-lg font-semibold" style={{ color: "#090820" }}>
              Inversión única. Sin mensualidades obligatorias. Sin letras pequeñas.
            </p>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl p-7 flex flex-col"
              style={{
                background: "#FFFFFF",
                border: plan.highlighted
                  ? "2px solid #7030EF"
                  : "1px solid rgba(112,48,239,0.12)",
              }}
            >
              {/* Badge */}
              <div className="mb-5">
                <span
                  className="inline-block text-xs font-bold px-3 py-1 rounded-full"
                  style={{
                    background: plan.highlighted
                      ? "rgba(112,48,239,0.12)"
                      : "#F4F2FF",
                    color: "#7030EF",
                  }}
                >
                  {plan.tag}
                </span>
              </div>

              {/* Plan name + price */}
              <h3 className="mb-1" style={{ color: "#090820", fontSize: "1.15rem" }}>
                {plan.name}
              </h3>
              <p className="text-sm mb-4" style={{ color: "#5A5780" }}>
                {plan.description}
              </p>
              <div className="mb-2">
                <span className="text-3xl font-extrabold" style={{ color: "#090820" }}>
                  {plan.price}
                </span>
                <span className="text-sm ml-2" style={{ color: "#5A5780" }}>
                  {plan.period}
                </span>
              </div>
              <div
                className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5"
                style={{ background: "#F0EBFF", color: "#7030EF" }}
              >
                Hosting + dominio .com incluidos
              </div>

              <hr style={{ border: "none", borderTop: "1px solid rgba(112,48,239,0.1)", marginBottom: "1.25rem" }} />

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1 mb-6">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <span
                      className="mt-0.5 font-bold flex-shrink-0"
                      style={{ color: "#7030EF" }}
                    >
                      +
                    </span>
                    <span className="text-sm" style={{ color: "#5A5780" }}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                asChild
                className="w-full h-11 rounded-xl font-semibold transition-all"
                style={
                  plan.highlighted
                    ? { background: "#7030EF", color: "#fff", border: "none" }
                    : { background: "#F4F2FF", color: "#7030EF", border: "none" }
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
