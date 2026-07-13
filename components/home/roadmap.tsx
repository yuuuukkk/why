"use client"

import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"

export function Roadmap() {
  return (
    <Section className="border-t border-white/[0.06]">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              Roadmap
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Placeholder for the roadmap section.
            </p>
          </div>
          <div className="mt-16 flex h-80 items-center justify-center rounded-xl border border-white/[0.06] bg-card text-muted-foreground">
            Roadmap Placeholder
          </div>
        </div>
      </Container>
    </Section>
  )
}