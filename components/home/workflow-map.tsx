"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { GridBackground } from "@/components/ui/GridBackground"
import { cn } from "@/lib/utils"

const workflowSteps = [
  { id: "01", title: "Idea", description: "Brainstorm concepts" },
  { id: "02", title: "Game Design", description: "Define mechanics" },
  { id: "03", title: "Art", description: "Create visuals" },
  { id: "04", title: "Programming", description: "Build systems" },
  { id: "05", title: "Testing", description: " Polish & debug" },
  { id: "06", title: "Publish", description: "Ship to players" },
]

function WorkflowNode({
  step,
  index,
}: {
  step: (typeof workflowSteps)[number]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.1,
      }}
      className="group relative flex flex-col items-center"
    >
      <div
        className={cn(
          "relative flex w-full flex-col items-center gap-3 rounded-xl border bg-card p-6 text-center transition-all duration-200",
          "border-white/[0.06] hover:-translate-y-1 hover:border-white/[0.15] hover:shadow-glow-sm",
          "md:p-8"
        )}
      >
        {/* Step number */}
        <span className="text-xs font-semibold uppercase tracking-widest text-white/25">
          Step {step.id}
        </span>

        {/* Title */}
        <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-white/35">{step.description}</p>
      </div>
    </motion.div>
  )
}

function Connector({
  orientation = "horizontal",
  delay = 0,
}: {
  orientation?: "horizontal" | "vertical"
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: orientation === "horizontal" ? 0.5 : 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      className={cn(
        "flex items-center justify-center",
        orientation === "horizontal"
          ? "hidden w-8 shrink-0 lg:flex"
          : "flex h-8 w-full lg:hidden"
      )}
    >
      {orientation === "horizontal" ? (
        <div className="flex w-full items-center">
          <div className="h-px flex-1 bg-white/[0.08]" />
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="ml-1 text-white/15"
          >
            <path
              d="M4 2L8 6L4 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="w-px flex-1 bg-white/[0.08]" />
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="mt-1 text-white/15"
          >
            <path
              d="M2 4L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </motion.div>
  )
}

export function WorkflowMap() {
  return (
    <Section className="overflow-hidden border-t border-white/[0.06]">
      <GridBackground cellSize={80} opacity={0.025} />

      <Container>
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <motion.div
            className="mb-20 text-center md:mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Workflow Map
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg font-medium text-white/40">
              One workflow. Endless possibilities.
            </p>
            <p className="mx-auto mt-3 max-w-xl text-base text-white/30">
              Visualize how AI assists every stage of modern game development.
            </p>
          </motion.div>

          {/* Desktop: horizontal with connectors */}
          <div className="hidden items-center justify-center lg:flex">
            {workflowSteps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="w-36 xl:w-40">
                  <WorkflowNode step={step} index={index} />
                </div>
                {index < workflowSteps.length - 1 && (
                  <Connector
                    orientation="horizontal"
                    delay={index * 0.1 + 0.2}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Tablet: 2-column grid */}
          <div className="hidden grid-cols-2 gap-6 md:grid lg:hidden">
            {workflowSteps.map((step, index) => (
              <WorkflowNode key={step.id} step={step} index={index} />
            ))}
          </div>

          {/* Mobile: vertical timeline with connectors */}
          <div className="flex flex-col items-center md:hidden">
            {workflowSteps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="w-full max-w-xs">
                  <WorkflowNode step={step} index={index} />
                </div>
                {index < workflowSteps.length - 1 && (
                  <Connector
                    orientation="vertical"
                    delay={index * 0.1 + 0.2}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}