"use client"

import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"

export function WorkflowMap() {
  return (
    <Section className="border-t border-white/[0.06]">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              Workflow Map
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Placeholder for the workflow map section.
            </p>
          </div>
          <div className="mt-16 flex h-96 items-center justify-center rounded-xl border border-white/[0.06] bg-card text-muted-foreground">
            Workflow Map Placeholder
          </div>
        </div>
      </Container>
    </Section>
  )
}