const steps = [
  {
    number: "01",
    title: "Diagnóstico gratuito",
    description:
      "Revisamos tu presencia digital actual y te decimos exactamente qué necesitas. Sin compromiso.",
  },
  {
    number: "02",
    title: "Propuesta en 24h",
    description:
      "Recibes una propuesta clara: problema, solución, precio y fecha de entrega. Sin tecnicismos.",
  },
  {
    number: "03",
    title: "Desarrollamos",
    description:
      "Construimos tu sitio y te mantenemos informado en cada paso. Anticipo del 50% para arrancar.",
  },
  {
    number: "04",
    title: "Lanzamos",
    description:
      "Tu sitio en línea, en Google y en tus redes. Al entregar te presentamos tu plan RENOA CARE.",
  },
]

export function Process() {
  return (
    <section id="proceso" className="py-24 md:py-32" style={{ background: "#FFFFFF" }}>
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full mb-4"
            style={{ background: "rgba(112,48,239,0.1)", color: "#7030EF" }}
          >
            Proceso
          </span>
          <h2 style={{ color: "#090820" }}>Así de simple es trabajar con RENOA</h2>
          <p className="mt-4 text-base max-w-lg mx-auto" style={{ color: "#5A5780" }}>
            De la idea a tu sitio funcionando en menos de 2 semanas.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="text-center px-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5 text-sm font-extrabold"
                style={{ background: "#7030EF", color: "#FFFFFF" }}
              >
                {step.number}
              </div>
              <h4 className="mb-2" style={{ color: "#090820", fontSize: "1rem" }}>
                {step.title}
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: "#5A5780" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
