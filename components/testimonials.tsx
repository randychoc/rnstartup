import { Star, ExternalLink } from "lucide-react"

const GOOGLE_REVIEWS_URL = "https://share.google/lloSHsgYioV36KJvN"

// TODO: Reemplazar con testimonio real cuando esté disponible
const testimonial = {
  quote: "Excelente servicio, muy buen seguimiento. Servicio profesional.",
  name: "Jhonatan De La Cruz",
  businessType: "Servicios de asistencia",
}

export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="py-20 md:py-28"
      style={{ background: "#f8f8fc" }}
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span
            className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full mb-4"
            style={{
              background: "rgba(112,48,239,0.1)",
              color: "#7030EF",
            }}
          >
            Testimonios
          </span>
          <h2 style={{ color: "#1a1a2e" }}>
            Lo que dicen{" "}
            <span style={{ color: "#7030EF" }}>nuestros clientes</span>
          </h2>
        </div>

        {/* Single testimonial */}
        <div className="mx-auto max-w-2xl">
          <div
            className="rounded-2xl p-8 sm:p-10 shadow-sm relative"
            style={{
              background: "#ffffff",
              border: "1px solid #e2e2ea",
            }}
          >
            {/* Decorative quote mark */}
            <span
              className="absolute top-6 left-8 text-6xl font-serif leading-none select-none pointer-events-none"
              style={{ color: "rgba(112,48,239,0.18)", lineHeight: 1 }}
              aria-hidden="true"
            >
              &ldquo;
            </span>

            {/* Stars */}
            <div className="flex gap-0.5 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5"
                  style={{ color: "#7030EF", fill: "#7030EF" }}
                />
              ))}
            </div>

            {/* Quote */}
            <p
              className="text-xl italic leading-relaxed mb-8 relative"
              style={{ color: "#2a2a4a" }}
            >
              {testimonial.quote}
            </p>

            {/* Attribution */}
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <p className="font-semibold" style={{ color: "#1a1a2e" }}>
                  {testimonial.name}
                </p>
                <p className="text-sm mt-0.5" style={{ color: "#8a8aaa" }}>
                  {testimonial.businessType}
                </p>
              </div>

              <span
                className="text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(112,48,239,0.08)",
                  border: "1px solid rgba(112,48,239,0.2)",
                  color: "#7030EF",
                }}
              >
                Reseña verificada en Google
              </span>
            </div>
          </div>

          {/* Google link */}
          <div className="flex justify-center mt-8">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-75 transition-opacity"
              style={{ color: "#7030EF" }}
            >
              Ver todas nuestras reseñas en Google
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
