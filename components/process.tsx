import { Search, GitBranch, Code2, Rocket, Headphones } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Análisis",
    description: "Entendemos tu negocio, objetivos y requerimientos técnicos.",
    step: "01",
  },
  {
    icon: GitBranch,
    title: "Arquitectura",
    description: "Diseñamos la estructura y flujo de tu sitio web.",
    step: "02",
  },
  {
    icon: Code2,
    title: "Desarrollo",
    description: "Construimos tu sitio con código limpio y escalable.",
    step: "03",
  },
  {
    icon: Rocket,
    title: "Entrega",
    description: "Lanzamos tu sitio web optimizado y documentado.",
    step: "04",
  },
  {
    icon: Headphones,
    title: "Soporte",
    description: "Acompañamiento continuo con RENOA CARE.",
    step: "05",
  },
]

export function Process() {
  return (
    <section id="proceso" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-xs mb-4">
            PROCESO
          </span>
          <h2 className="text-foreground mb-4 text-balance">
            Cómo trabajamos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un proceso estructurado para garantizar resultados profesionales
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-border" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 text-center h-full">
                  {/* Step Number */}
                  <div className="relative z-10 w-10 h-10 rounded-md bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h4 className="text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
