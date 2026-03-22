import { Code2, Boxes, Headphones, Check } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Desarrollo web profesional",
    description: "Sitios web construidos con las mejores prácticas de la industria.",
    bullets: [
      "Código limpio y mantenible",
      "Diseño responsive",
      "SEO optimizado",
    ],
  },
  {
    icon: Boxes,
    title: "Arquitectura preparada para crecer",
    description: "Estructura modular lista para expandirse según tus necesidades.",
    bullets: [
      "Componentes reutilizables",
      "Integración de APIs",
      "Escalabilidad planificada",
    ],
  },
  {
    icon: Headphones,
    title: "Soporte estructurado",
    description: "Acompañamiento técnico continuo para tu proyecto.",
    bullets: [
      "Mantenimiento preventivo",
      "Actualizaciones de seguridad",
      "Soporte técnico dedicado",
    ],
  },
]

export function Services() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-xs mb-4">
            SERVICIOS
          </span>
          <h2 className="text-foreground mb-4 text-balance">
            Qué hace RENOA
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluciones web profesionales con enfoque en crecimiento tecnológico
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Bullets */}
              <ul className="flex flex-col gap-3">
                {service.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-xs bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
