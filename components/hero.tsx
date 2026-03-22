import { MessageCircle, ArrowRight, Code2, Layers, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

// RENOA Contact Info
const RENOA_PHONE_CLEAN = "50242945544"
const WHATSAPP_DEFAULT_MESSAGE = "Hola, me interesa iniciar un proyecto de desarrollo web con RENOA."

const getWhatsAppUrl = () => {
  return `https://wa.me/${RENOA_PHONE_CLEAN}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`
}

const features = [
  { icon: Code2, text: "Código limpio y documentado" },
  { icon: Layers, text: "Arquitectura escalable" },
  { icon: Zap, text: "Optimizado para rendimiento" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="mx-auto max-w-[1200px] w-full px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h1 className="text-foreground text-balance">
                Desarrollo web profesional con visión de crecimiento
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Construimos sitios web con arquitectura preparada para escalar.
                Tu presencia digital, lista para crecer cuando tu negocio lo necesite.
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="flex flex-col gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-sm bg-secondary">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-foreground font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="h-11 px-6 rounded-md bg-primary text-primary-foreground hover:brightness-105 transition-all font-medium"
              >
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Iniciar proyecto
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-11 px-6 rounded-md border-border text-foreground hover:bg-secondary transition-all font-medium bg-transparent"
              >
                <a href="#planes">
                  Ver planes
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Technical Mockup */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Panel */}
              <div className="bg-card border border-border rounded-xl p-6 shadow-card">
                {/* Header Bar */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-[#E53E3E]" />
                  <div className="w-3 h-3 rounded-full bg-[#ECC94B]" />
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <div className="ml-4 flex-1 h-6 bg-secondary rounded-sm" />
                </div>

                {/* Code Preview */}
                <div className="bg-background rounded-lg p-4 font-mono text-sm">
                  <div className="flex gap-2 text-muted-foreground">
                    <span className="text-primary">const</span>
                    <span className="text-foreground">website</span>
                    <span>=</span>
                    <span className="text-primary">{'{'}</span>
                  </div>
                  <div className="flex gap-2 text-muted-foreground pl-4">
                    <span className="text-foreground">scalable:</span>
                    <span className="text-primary">true</span>,
                  </div>
                  <div className="flex gap-2 text-muted-foreground pl-4">
                    <span className="text-foreground">performance:</span>
                    <span className="text-accent">"optimized"</span>,
                  </div>
                  <div className="flex gap-2 text-muted-foreground pl-4">
                    <span className="text-foreground">support:</span>
                    <span className="text-accent">"RENOA CARE"</span>
                  </div>
                  <div className="text-primary">{'}'}</div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {[
                    { label: "Performance", value: "98%" },
                    { label: "Uptime", value: "99.9%" },
                    { label: "Support", value: "24/7" },
                  ].map((stat, index) => (
                    <div key={index} className="bg-secondary rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-card-hover">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-primary/20 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Arquitectura modular</div>
                    <div className="text-xs text-muted-foreground">Preparada para crecer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(230, 237, 243, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(230, 237, 243, 0.1) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>
    </section>
  )
}
