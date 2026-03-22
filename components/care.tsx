import { Headphones, Wrench, RefreshCw, Shield, TrendingUp } from "lucide-react"

const careFeatures = [
  {
    icon: Headphones,
    title: "Soporte técnico",
    description: "Asistencia dedicada para resolver cualquier incidencia de tu sitio web.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
    description: "Actualizaciones regulares y optimización continua del rendimiento.",
  },
  {
    icon: RefreshCw,
    title: "Actualizaciones",
    description: "Mejoras de contenido y funcionalidades según tus necesidades.",
  },
  {
    icon: Shield,
    title: "Seguridad",
    description: "Monitoreo de vulnerabilidades y copias de seguridad periódicas.",
  },
  {
    icon: TrendingUp,
    title: "Mejoras",
    description: "Evolución constante de tu sitio web con nuevas funcionalidades.",
  },
]

export function Care() {
  return (
    <section id="care" className="py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-xs mb-4">
            RENOA CARE
          </span>
          <h2 className="text-foreground mb-4 text-balance">
            Soporte continuo para tu proyecto
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mantenemos tu sitio web actualizado, seguro y funcionando al máximo rendimiento
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {careFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-foreground mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-card border border-border rounded-lg px-6 py-4 shadow-card">
            <div>
              <span className="text-sm text-muted-foreground">Desde </span>
              <span className="text-2xl font-bold text-foreground">Q200</span>
              <span className="text-muted-foreground">/mensual</span>
            </div>
            <div className="w-px h-8 bg-border" />
            <p className="text-sm text-muted-foreground">
              Plan mensual de mantenimiento y soporte
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
