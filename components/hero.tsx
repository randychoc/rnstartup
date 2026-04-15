"use client"

import { MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const RENOA_PHONE_CLEAN = "50242945544"
const CURRENT_MONTH = "abril"
const AVAILABLE_SLOTS: number = 2
const WHATSAPP_MESSAGE = "Hola, me interesa el diagnóstico gratuito de RENOA. Quiero saber cómo aparece mi negocio en Google."

const getWhatsAppUrl = () =>
  `https://wa.me/${RENOA_PHONE_CLEAN}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

const trustItems = [
  "Dominio .com incluido",
  "Hosting gestionado",
  "SEO desde el día 1",
  "Entrega en 7 días",
]

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 text-center"
      style={{ background: "#090820" }}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(112,48,239,0.06) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(112,48,239,0.06) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow center */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
        style={{
          width: "100%",
          maxWidth: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(112,48,239,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="mx-auto max-w-[800px] w-full px-4 md:px-6 py-20 md:py-28 flex flex-col items-center gap-8">

        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
          style={{
            background: "rgba(112,48,239,0.18)",
            border: "1px solid rgba(112,48,239,0.3)",
            color: "#9B6BF5",
          }}
        >
          <span
            style={{ width: 6, height: 6, borderRadius: "50%", background: "#9B6BF5", display: "inline-block" }}
          />
          Desarrollo web profesional · Guatemala
        </div>

        {/* Headline */}
        <h1 style={{ color: "#FFFFFF", maxWidth: 680 }}>
          Tu negocio merece estar en{" "}
          <span style={{ color: "#9B6BF5" }}>internet</span> hoy
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg max-w-xl leading-relaxed"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          Creamos sitios web que atraen clientes, generan confianza y trabajan
          por tu negocio las 24 horas del día.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto h-12 px-8 rounded-xl font-semibold text-base transition-all"
            style={{ background: "#7030EF", color: "#fff", border: "none" }}
          >
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Diagnóstico gratis
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto h-12 px-8 rounded-xl font-semibold text-base transition-all"
            style={{
              background: "transparent",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <a href="#planes">
              Ver planes
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>

        {/* Availability indicator */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
            <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.75)" }}>
              Disponibilidad en {CURRENT_MONTH}: {AVAILABLE_SLOTS} proyecto{AVAILABLE_SLOTS !== 1 ? "s" : ""}
            </p>
          </div>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>
            Trabajamos máximo 4 proyectos al mes para garantizar calidad
          </p>
        </div>

        {/* Trust bar */}
        <div
          className="flex flex-wrap justify-center gap-6 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", width: "100%" }}
        >
          {trustItems.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-sm"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "#9B6BF5",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
