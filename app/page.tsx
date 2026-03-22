import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Plans } from "@/components/plans"
// TODO: Uncomment when plan comparison details are ready
// import { ComparisonTable } from "@/components/landing/comparison-table"
import { Care } from "@/components/care"
import { Process } from "@/components/process"
import { UseCases } from "@/components/use-cases"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Plans />
      {/* TODO: Uncomment when plan comparison details are ready
      <ComparisonTable />
      */}
      <Care />
      <Process />
      <UseCases />
      <CTA />
      <Footer />
    </main>
  )
}
