import { Store, Briefcase, Building2, Layers } from "lucide-react"

const useCases = [
  {
    icon: Store,
    title: "Negocios locales",
    problem: "Presencia digital básica o inexistente",
    solution: "Sitio web profesional con SEO local",
    result: "Mayor visibilidad y captación de clientes",
  },
  {
    icon: Briefcase,
    title: "Profesionales",
    problem: "Portafolio desactualizado o sin impacto",
    solution: "Sitio web que destaque tu expertise",
    result: "Posicionamiento como referente en tu área",
  },
  {
    icon: Building2,
    title: "Empresas en crecimiento",
    problem: "Sitio web que no escala con el negocio",
    solution: "Arquitectura preparada para crecer",
    result: "Plataforma digital lista para expansión",
  },
  {
    icon: Layers,
    title: "Proyectos escalables",
    problem: "Necesidad de funcionalidades avanzadas",
    solution: "Desarrollo modular e integraciones",
    result: "Sistema web que evoluciona contigo",
  },
]

export function UseCases() {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-xs mb-4">
            CASOS DE USO
          </span>
          <h2 className="text-foreground mb-4 text-balance">
            Para quién es RENOA
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluciones adaptadas a diferentes necesidades empresariales
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <useCase.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="text-foreground mb-4">{useCase.title}</h4>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-xs shrink-0">
                        Problema
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {useCase.problem}
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-xs shrink-0">
                        Solución
                      </span>
                      <span className="text-sm text-foreground">
                        {useCase.solution}
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-xs font-medium text-foreground bg-secondary px-2 py-1 rounded-xs shrink-0">
                        Resultado
                      </span>
                      <span className="text-sm text-foreground font-medium">
                        {useCase.result}
                      </span>
                    </div>
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
