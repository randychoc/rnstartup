import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

// RENOA Contact Info
const RENOA_PHONE_CLEAN = "50242945544"
const WHATSAPP_DEFAULT_MESSAGE = "Hola, me interesa conocer más sobre los servicios de desarrollo web de RENOA."

const getWhatsAppUrl = () => {
  return `https://wa.me/${RENOA_PHONE_CLEAN}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`
}

export function CTA() {
  return (
    <section id="contacto" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="bg-card border border-border rounded-xl p-12 md:p-16 shadow-card text-center">
          <h2 className="text-foreground mb-4 text-balance">
            Inicia tu proyecto hoy
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Conversemos sobre tus necesidades y cómo RENOA puede ayudarte a construir tu presencia digital profesional.
          </p>
          <Button
            asChild
            size="lg"
            className="h-14 px-8 rounded-md bg-primary text-primary-foreground hover:brightness-105 transition-all font-medium text-base"
          >
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contactar por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
