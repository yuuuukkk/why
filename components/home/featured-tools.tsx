"use client"

import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"

export function FeaturedTools() {
  return (
    <Section className="border-t border-white/[0.06]">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              Featured Tools
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Placeholder for the featured tools section.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex h-64 items-center justify-center rounded-xl border border-white/[0.06] bg-card transition-colors hover:bg-card/80"
              >
                <span className="text-muted-foreground">Tool {i}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}