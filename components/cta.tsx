import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const RENOA_PHONE_CLEAN = "50242945544"
const WHATSAPP_DEFAULT_MESSAGE = "Hola, me interesa agendar un diagnóstico gratuito con RENOA."

const getWhatsAppUrl = () =>
  `https://wa.me/${RENOA_PHONE_CLEAN}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`

export function CTA() {
  return (
    <section
      id="contacto"
      className="py-24 md:py-32"
      style={{ background: "#090820" }}
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div
          className="rounded-3xl p-12 md:p-16 text-center"
          style={{
            background: "#11102E",
            border: "1px solid rgba(112,48,239,0.25)",
          }}
        >
          <h2 style={{ color: "#FFFFFF" }}>
            ¿Listo para llevar tu negocio a{" "}
            <span style={{ color: "#9B6BF5" }}>internet</span>?
          </h2>
          <p
            className="mt-4 text-base max-w-md mx-auto mb-10"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Agenda un diagnóstico gratuito de 15 minutos. Sin compromisos.
            Te decimos qué necesita tu negocio y cómo lo resolvemos.
          </p>
          <Button
            asChild
            size="lg"
            className="h-13 px-10 rounded-xl font-semibold text-base transition-all"
            style={{ background: "#7030EF", color: "#fff", border: "none" }}
          >
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Solicitar diagnóstico
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
