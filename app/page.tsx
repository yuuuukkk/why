import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/home/hero"
import { WorkflowMap } from "@/components/home/workflow-map"
import { FeaturedTools } from "@/components/home/featured-tools"
import { Roadmap } from "@/components/home/roadmap"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <Hero />
        <WorkflowMap />
        <FeaturedTools />
        <Roadmap />
      </main>

      <Footer />
    </div>
  )
}