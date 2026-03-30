import { Search, Users, Clock, Share2 } from "lucide-react"

const problems = [
  {
    icon: Search,
    title: "No te encuentran en Google",
    description:
      "El 80% de las personas busca en Google antes de visitar un negocio. Si no apareces, la competencia se queda con ese cliente.",
  },
  {
    icon: Users,
    title: "Pierdes credibilidad",
    description:
      "Sin sitio web, los clientes dudan si tu negocio es serio o confiable. La primera impresión ahora ocurre en línea.",
  },
  {
    icon: Clock,
    title: "Tu negocio cierra a las 6pm",
    description:
      "Un sitio web trabaja por ti las 24 horas, los 365 días del año. Tus clientes no esperan a que abras.",
  },
  {
    icon: Share2,
    title: "Solo dependes del boca a boca",
    description:
      "Las referencias son valiosas, pero un sitio web multiplica tu alcance sin que tengas que estar presente.",
  },
]

export function Services() {
  return (
    <section
      id="servicios"
      className="py-24 md:py-24"
      style={{ background: "#090820" }}
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full mb-4"
            style={{
              background: "rgba(112,48,239,0.18)",
              border: "1px solid rgba(112,48,239,0.3)",
              color: "#9B6BF5",
            }}
          >
            El problema
          </span>
          <h2 style={{ color: "#FFFFFF" }}>
            ¿Qué pasa cuando tu negocio{" "}
            <span style={{ color: "#9B6BF5" }}>no está en línea</span>?
          </h2>
          <p
            className="mt-4 text-lg max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Cada día sin presencia digital es un día perdiendo clientes frente a la competencia.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 transition-all duration-300"
              style={{
                background: "#11102E",
                border: "1px solid rgba(112,48,239,0.2)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(112,48,239,0.18)" }}
              >
                <item.icon className="w-5 h-5" style={{ color: "#9B6BF5" }} />
              </div>
              <h4 className="mb-2" style={{ color: "#FFFFFF", fontSize: "0.95rem" }}>
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
