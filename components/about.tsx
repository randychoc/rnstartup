import { Shield, MapPin, Headphones, ArrowRight } from "lucide-react"

const pillars = [
  {
    Icon: Shield,
    title: "Ingeniería real",
    description:
      "No somos diseñadores improvisados. Somos ingenieros de software con experiencia en sistemas que no pueden fallar.",
  },
  {
    Icon: MapPin,
    title: "100% Guatemala",
    description:
      "Entendemos el mercado local. Sabemos qué necesita un negocio guatemalteco para crecer en internet.",
  },
  {
    Icon: Headphones,
    title: "Soporte real",
    description:
      "No desaparecemos después de entregar. RENOA CARE existe porque tu sitio necesita mantenimiento continuo.",
  },
]

export function About() {
  return (
    <section
      id="nosotros"
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
            Nosotros
          </span>
          <h2 style={{ color: "#FFFFFF" }}>
            Detrás de{" "}
            <span style={{ color: "#9B6BF5" }}>RENOA</span>
          </h2>
          <p
            className="mt-4 text-base max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Somos un equipo de ingenieros de software con experiencia en sistemas empresariales.
            Construimos sitios web con el mismo rigor técnico que usamos en ambientes de misión crítica.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pillars.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{
                background: "#11102E",
                border: "1px solid rgba(112,48,239,0.2)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(112,48,239,0.12)" }}
              >
                <Icon className="w-5 h-5" style={{ color: "#9B6BF5" }} />
              </div>
              <div>
                <h4
                  className="font-bold mb-2"
                  style={{ color: "#FFFFFF", fontSize: "1rem" }}
                >
                  {title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom link */}
        <div className="flex justify-center">
          <a
            href="#proceso"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-75 transition-opacity"
            style={{ color: "#9B6BF5" }}
          >
            ¿Querés conocer más sobre cómo trabajamos?
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  )
}
