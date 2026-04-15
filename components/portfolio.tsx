import Image from "next/image"
import { TrendingUp } from "lucide-react"
import imgVegasPizzaLasOriginales from "../app/ClientesRenoa/vegaspizzalasoriginales.png"
import imgPizzeriaLasVegas from "../app/ClientesRenoa/pizzerialasvegas.png"
import imgAsis247 from "../app/ClientesRenoa/asis247gt.png"
import imgTallerRPM from "../app/ClientesRenoa/tallerrpmgt.png"

type Plan = "START" | "GROW" | "PRO"

const planStyles: Record<Plan, { bg: string; color: string; border: string }> = {
  START: {
    bg: "rgba(112,48,239,0.12)",
    color: "#9B6BF5",
    border: "1px solid rgba(112,48,239,0.25)",
  },
  GROW: {
    bg: "rgba(112,48,239,0.22)",
    color: "#C4A0FA",
    border: "1px solid rgba(112,48,239,0.45)",
  },
  PRO: {
    bg: "#7030EF",
    color: "#FFFFFF",
    border: "1px solid #7030EF",
  },
}

const projects: {
  client: string
  businessType: string
  result: string
  plan: Plan
  image: typeof imgVegasPizzaLasOriginales
}[] = [
  {
    client: "ASIS 247 GT",
    businessType: "Servicios de asistencia",
    result: "Clientes encuentran sus servicios en Google las 24 horas",
    plan: "START",
    image: imgAsis247,
  },
  {
    client: "Pizzería Las Vegas",
    businessType: "Restaurante / Pizzería",
    result: "Presencia digital lista para recibir pedidos",
    plan: "START",
    image: imgPizzeriaLasVegas,
  },
  {
    client: "Vegas Pizza Las Originales",
    businessType: "Restaurante / Pizzería",
    result: "Ahora sus clientes encuentran el menú completo en Google",
    plan: "START",
    image: imgVegasPizzaLasOriginales,
  },
  {
    client: "Taller RPM GT",
    businessType: "Taller mecánico",
    result: "Genera consultas de nuevos clientes sin pagar publicidad",
    plan: "START",
    image: imgTallerRPM,
  },
]

export function Portfolio() {
  return (
    <section
      id="portafolio"
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
            Portafolio
          </span>
          <h2 style={{ color: "#FFFFFF" }}>
            Proyectos que ya están{" "}
            <span style={{ color: "#9B6BF5" }}>generando resultados</span>
          </h2>
          <p
            className="mt-4 text-base max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Negocios reales en Guatemala que confiaron en RENOA para dar el salto a internet.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const badge = planStyles[project.plan]
            return (
              <div
                key={project.client}
                className="rounded-2xl overflow-hidden flex flex-col transition-transform duration-200 hover:scale-[1.015] shadow-card hover:shadow-card-hover"
                style={{
                  background: "#11102E",
                  border: "1px solid rgba(112,48,239,0.2)",
                }}
              >
                {/* Project image */}
                <div
                  className="w-full relative"
                  style={{
                    aspectRatio: "16 / 9",
                    borderBottom: "1px solid rgba(112,48,239,0.15)",
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.client}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4
                        className="font-bold"
                        style={{ color: "#FFFFFF", fontSize: "1rem" }}
                      >
                        {project.client}
                      </h4>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                      >
                        {project.businessType}
                      </p>
                    </div>

                    {/* Plan badge */}
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0"
                      style={{
                        background: badge.bg,
                        color: badge.color,
                        border: badge.border,
                      }}
                    >
                      {project.plan}
                    </span>
                  </div>

                  {/* Result */}
                  <div
                    className="flex items-start gap-2.5 rounded-xl p-3"
                    style={{ background: "rgba(112,48,239,0.08)" }}
                  >
                    <TrendingUp
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                      style={{ color: "#9B6BF5" }}
                    />
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.7)" }}
                    >
                      {project.result}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
