import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Plans } from "@/components/plans"
import { Care } from "@/components/care"
import { UseCases } from "@/components/use-cases"
import { Process } from "@/components/process"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Plans />
      <Care />
      <UseCases />
      <Process />
      <CTA />
      <Footer />
    </main>
  )
}
