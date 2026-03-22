import { Check, X } from "lucide-react"

const features = [
  { name: "Páginas incluidas", start: "Hasta 5", business: "Hasta 10" },
  { name: "Diseño responsive", start: true, business: true },
  { name: "Optimización SEO", start: "Básica", business: "Avanzada" },
  { name: "Formulario de contacto", start: true, business: true },
  { name: "Integración redes sociales", start: true, business: true },
  { name: "Sistema de blog", start: false, business: true },
  { name: "Panel de administración", start: false, business: true },
  { name: "Integraciones personalizadas", start: false, business: true },
  { name: "Analytics y métricas", start: false, business: true },
  { name: "Arquitectura escalable", start: false, business: true },
  { name: "Soporte incluido", start: "1 mes", business: "3 meses" },
  { name: "Tiempo de entrega", start: "2-3 semanas", business: "3-4 semanas" },
]

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <div className="w-6 h-6 rounded-xs bg-primary/20 flex items-center justify-center mx-auto">
        <Check className="w-4 h-4 text-primary" />
      </div>
    ) : (
      <div className="w-6 h-6 rounded-xs bg-secondary flex items-center justify-center mx-auto">
        <X className="w-4 h-4 text-muted-foreground" />
      </div>
    )
  }
  return <span className="text-sm text-foreground">{value}</span>
}

export function ComparisonTable() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-xs mb-4">
            COMPARATIVA
          </span>
          <h2 className="text-foreground mb-4 text-balance">
            Compara los planes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Encuentra el plan que mejor se adapte a tu proyecto
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">
                  Característica
                </th>
                <th className="text-center py-4 px-4 text-sm font-medium text-foreground">
                  RENOA START
                </th>
                <th className="text-center py-4 px-4 text-sm font-medium text-foreground bg-primary/5 rounded-t-lg">
                  RENOA BUSINESS
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className={`border-b border-border ${
                    index % 2 === 0 ? "bg-transparent" : "bg-secondary/20"
                  }`}
                >
                  <td className="py-4 px-4 text-sm text-foreground">
                    {feature.name}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <CellValue value={feature.start} />
                  </td>
                  <td className="py-4 px-4 text-center bg-primary/5">
                    <CellValue value={feature.business} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
