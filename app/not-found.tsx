import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      style={{ background: "#090820" }}
    >
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none"
        style={{
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(112,48,239,0.15) 0%, transparent 70%)",
        }}
      />

      <p
        className="text-8xl md:text-[10rem] font-extrabold leading-none mb-4"
        style={{ color: "#7030EF", opacity: 0.25 }}
      >
        404
      </p>

      <h1
        className="text-2xl md:text-3xl font-bold mb-4 max-w-md"
        style={{ color: "#FFFFFF" }}
      >
        Esta página no existe...{" "}
        <span style={{ color: "#9B6BF5" }}>pero tu sitio web sí podría.</span>
      </h1>

      <p
        className="text-base mb-10 max-w-sm"
        style={{ color: "rgba(255,255,255,0.45)" }}
      >
        El link que seguiste no lleva a ningún lado. Te llevamos de vuelta.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          asChild
          size="lg"
          className="h-12 px-8 rounded-xl font-semibold text-base"
          style={{ background: "#7030EF", color: "#fff", border: "none" }}
        >
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-12 px-8 rounded-xl font-semibold text-base"
          style={{
            background: "transparent",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <Link href="/#planes">
            Ver planes
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </main>
  )
}
