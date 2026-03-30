import { Utensils, Stethoscope, ShoppingBag, Briefcase } from "lucide-react"

const useCases = [
  {
    icon: Briefcase,
    title: "Profesionales y servicios",
    problem: "Sin presencia digital pierden credibilidad frente a la competencia",
    solution: "Sitio que muestra su trabajo, experiencia y contacto",
    result: "Posicionamiento como referente en su área",
  },
  {
    icon: Utensils,
    title: "Restaurantes",
    problem: "Los clientes buscan tu menú en Google y no apareces",
    solution: "Sitio con menú digital, horarios y Google Maps",
    result: "Más reservas y clientes que llegan sabiendo qué esperar",
  },
  {
    icon: Stethoscope,
    title: "Clínicas y consultorios",
    problem: "Pacientes nuevos no encuentran información confiable",
    solution: "Sitio profesional con servicios, doctores y citas en línea",
    result: "Mayor confianza y más citas agendadas desde internet",
  },
  {
    icon: ShoppingBag,
    title: "Tiendas y comercios",
    problem: "Solo venden a quien pasa frente al local",
    solution: "Catálogo digital con WhatsApp integrado",
    result: "Ventas las 24 horas sin depender del tráfico físico",
  },
]

export function UseCases() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "#F8F7FF" }}
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full mb-4"
            style={{ background: "rgba(112,48,239,0.1)", color: "#7030EF" }}
          >
            Para quién es RENOA
          </span>
          <h2 style={{ color: "#090820" }}>
            Soluciones para negocios reales
          </h2>
          <p className="mt-4 text-base max-w-lg mx-auto" style={{ color: "#5A5780" }}>
            Trabajamos con negocios locales que quieren crecer en internet sin complicaciones.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl p-7 flex items-start gap-5"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(112,48,239,0.12)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(112,48,239,0.1)" }}
              >
                <item.icon className="w-6 h-6" style={{ color: "#7030EF" }} />
              </div>
              <div className="flex-1">
                <h4 className="mb-4" style={{ color: "#090820", fontSize: "1rem" }}>
                  {item.title}
                </h4>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <span
                      className="text-xs font-semibold px-2 py-1 rounded flex-shrink-0"
                      style={{ background: "#F4F2FF", color: "#5A5780" }}
                    >
                      Problema
                    </span>
                    <span className="text-sm" style={{ color: "#5A5780" }}>
                      {item.problem}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span
                      className="text-xs font-semibold px-2 py-1 rounded flex-shrink-0"
                      style={{ background: "rgba(112,48,239,0.1)", color: "#7030EF" }}
                    >
                      Solución
                    </span>
                    <span className="text-sm" style={{ color: "#090820" }}>
                      {item.solution}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span
                      className="text-xs font-semibold px-2 py-1 rounded flex-shrink-0"
                      style={{ background: "#F4F2FF", color: "#090820" }}
                    >
                      Resultado
                    </span>
                    <span className="text-sm font-medium" style={{ color: "#090820" }}>
                      {item.result}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
