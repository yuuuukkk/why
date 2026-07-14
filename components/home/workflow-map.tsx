"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { GridBackground } from "@/components/ui/GridBackground"
import { WorkflowGenerator } from "@/features/workflow/workflow-generator"
import { cn } from "@/lib/utils"

const workflowSteps = [
  {
    id: "01",
    title: "Idea",
    description: "Brainstorm concepts and shape raw creativity into actionable game concepts.",
  },
  {
    id: "02",
    title: "Game Design",
    description: "Define mechanics, systems, and player progression through structured frameworks.",
  },
  {
    id: "03",
    title: "Art",
    description: "Create visual assets, character concepts, and immersive world aesthetics.",
  },
  {
    id: "04",
    title: "Programming",
    description: "Build game systems, write logic, and bring interactive mechanics to life.",
  },
  {
    id: "05",
    title: "Testing",
    description: "Validate quality, track bugs, and polish the experience before launch.",
  },
  {
    id: "06",
    title: "Publish",
    description: "Ship to players, monitor analytics, and iterate on live metrics.",
  },
] as const

/* ------------------------------------------------------------------ */
/*  Mini-illustration components (CSS-only, no images / icons)          */
/* ------------------------------------------------------------------ */

function IdeaIllustration() {
  return (
    <div className="relative h-full w-full p-4">
      {/* Sticky notes grid */}
      <div className="grid grid-cols-3 gap-2">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "rounded-sm border p-1.5",
              "bg-amber-500/10 border-amber-500/20"
            )}
          >
            {/* Tiny fake text lines */}
            <div className="space-y-1">
              <div className="h-px w-3/4 bg-amber-500/25" />
              <div className="h-px w-1/2 bg-amber-500/20" />
              {(i % 2 === 0) && <div className="h-px w-2/3 bg-amber-500/15" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function GameDesignIllustration() {
  return (
    <div className="relative h-full w-full">
      {/* Skill tree: central node + branches */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Branch lines */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 128 128"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Central to top-left */}
          <line x1="64" y1="64" x2="32" y2="32" stroke="rgba(99,102,241,0.3)" strokeWidth="1.5" />
          {/* Central to top-right */}
          <line x1="64" y1="64" x2="96" y2="32" stroke="rgba(99,102,241,0.3)" strokeWidth="1.5" />
          {/* Central to bottom-left */}
          <line x1="64" y1="64" x2="32" y2="96" stroke="rgba(99,102,241,0.3)" strokeWidth="1.5" />
          {/* Central to bottom-right */}
          <line x1="64" y1="64" x2="96" y2="96" stroke="rgba(99,102,241,0.3)" strokeWidth="1.5" />
          {/* Central to top */}
          <line x1="64" y1="64" x2="64" y2="24" stroke="rgba(99,102,241,0.3)" strokeWidth="1.5" />
          {/* Central to right */}
          <line x1="64" y1="64" x2="104" y2="64" stroke="rgba(99,102,241,0.3)" strokeWidth="1.5" />
          {/* Secondary branches */}
          <line x1="32" y1="32" x2="16" y2="18" stroke="rgba(99,102,241,0.2)" strokeWidth="1" />
          <line x1="32" y1="32" x2="18" y2="44" stroke="rgba(99,102,241,0.2)" strokeWidth="1" />
          <line x1="96" y1="32" x2="112" y2="18" stroke="rgba(99,102,241,0.2)" strokeWidth="1" />
          <line x1="96" y1="96" x2="112" y2="108" stroke="rgba(99,102,241,0.2)" strokeWidth="1" />
        </svg>

        {/* Central node */}
        <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/25 ring-2 ring-indigo-500/30" />

        {/* Primary child nodes */}
        <div className="absolute left-[22%] top-[22%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 ring-1 ring-indigo-500/25" />
        <div className="absolute left-[78%] top-[22%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 ring-1 ring-indigo-500/25" />
        <div className="absolute left-[50%] top-[16%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 ring-1 ring-indigo-500/25" />
        <div className="absolute left-[50%] top-[82%] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/15 ring-1 ring-indigo-500/20" />
        <div className="absolute left-[22%] top-[78%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 ring-1 ring-indigo-500/25" />
        <div className="absolute left-[78%] top-[78%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 ring-1 ring-indigo-500/25" />
        <div className="absolute left-[84%] top-[50%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 ring-1 ring-indigo-500/25" />

        {/* Leaf nodes */}
        <div className="absolute left-[11%] top-[12%] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/15" />
        <div className="absolute left-[13%] top-[32%] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/15" />
        <div className="absolute left-[89%] top-[12%] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/15" />
        <div className="absolute left-[89%] top-[86%] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/15" />
      </div>
    </div>
  )
}

function ArtIllustration() {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      {/* Character silhouette */}
      <div className="flex items-end gap-6">
        {/* Silhouette figure */}
        <div className="flex flex-col items-center">
          {/* Head */}
          <div className="h-5 w-5 rounded-full bg-white/[0.06] ring-1 ring-white/[0.08]" />
          {/* Body */}
          <div className="mt-1 h-10 w-7 rounded-lg bg-white/[0.06] ring-1 ring-white/[0.08]" />
          {/* Legs suggestion */}
          <div className="mt-0.5 flex gap-1">
            <div className="h-5 w-2.5 rounded-b-sm bg-white/[0.05]" />
            <div className="h-5 w-2.5 rounded-b-sm bg-white/[0.05]" />
          </div>
        </div>

        {/* Color swatches */}
        <div className="flex flex-col gap-1.5">
          <div className="h-4 w-4 rounded-sm bg-blue-500/30 ring-1 ring-blue-500/20" />
          <div className="h-4 w-4 rounded-sm bg-purple-500/30 ring-1 ring-purple-500/20" />
          <div className="h-4 w-4 rounded-sm bg-pink-500/30 ring-1 ring-pink-500/20" />
        </div>
      </div>
    </div>
  )
}

function ProgrammingIllustration() {
  const codeLines = [
    { indent: 0, tokens: [{ color: "#c084fc", text: "const" }, { color: "#e2e8f0", text: " player = " }, { color: "#60a5fa", text: "new" }, { color: "#e2e8f0", text: " Entity()" }] },
    { indent: 1, tokens: [{ color: "#c084fc", text: "this" }, { color: "#e2e8f0", text: ".speed = " }, { color: "#34d399", text: "12" }] },
    { indent: 1, tokens: [{ color: "#c084fc", text: "this" }, { color: "#e2e8f0", text: ".health = " }, { color: "#34d399", text: "100" }] },
    { indent: 0, tokens: [{ color: "#60a5fa", text: "function" }, { color: "#e2e8f0", text: " onUpdate" }, { color: "#c084fc", text: "()" }, { color: "#e2e8f0", text: " {" }] },
    { indent: 1, tokens: [{ color: "#c084fc", text: "if" }, { color: "#e2e8f0", text: " (input." }, { color: "#60a5fa", text: "jump" }, { color: "#e2e8f0", text: ") {" }] },
    { indent: 2, tokens: [{ color: "#c084fc", text: "this" }, { color: "#e2e8f0", text: ".velocity.y = " }, { color: "#34d399", text: "-8" }] },
    { indent: 1, tokens: [{ color: "#e2e8f0", text: "}" }] },
  ] as const

  return (
    <div className="relative h-full w-full p-3 font-mono text-[9px] leading-relaxed">
      <div className="flex">
        {/* Gutter with line numbers */}
        <div className="mr-3 flex flex-col select-none border-r border-white/[0.04] pr-2 text-right text-white/[0.15]">
          {codeLines.map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>

        {/* Code area */}
        <div className="flex flex-col">
          {codeLines.map((line, lineIdx) => (
            <div key={lineIdx} className="flex" style={{ paddingLeft: `${line.indent * 8}px` }}>
              {line.tokens.map((token, tokenIdx) => (
                <span key={tokenIdx} style={{ color: token.color }}>
                  {token.text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TestingIllustration() {
  return (
    <div className="relative h-full w-full p-3 flex flex-col justify-between">
      {/* Status grid */}
      <div className="grid grid-cols-4 gap-1.5">
        {[
          "green", "green", "green", "red",
          "green", "green", "red", "green",
          "green", "green", "green", "green",
        ].map((status, i) => (
          <div
            key={i}
            className={cn(
              "h-2.5 rounded-sm",
              status === "green" ? "bg-emerald-500/20" : "bg-red-500/20"
            )}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-2 space-y-1">
        <div className="flex items-center justify-between text-[8px] text-white/[0.25]">
          <span>Pass rate</span>
          <span>91.6%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-white/[0.04]">
          <div
            className="h-full rounded-full bg-emerald-500/30"
            style={{ width: "91.6%" }}
          />
        </div>
      </div>
    </div>
  )
}

function PublishIllustration() {
  const bars = [40, 65, 30, 80, 55, 70, 45, 85] as const

  return (
    <div className="relative h-full w-full p-3 flex items-end gap-2">
      <div className="flex h-full w-full items-end justify-around gap-1.5">
        {bars.map((height, i) => (
          <div
            key={i}
            className="w-full max-w-[14%] rounded-t-sm bg-indigo-500/30"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Illustration switch                                                */
/* ------------------------------------------------------------------ */

const illustrations: Record<string, React.FC> = {
  "01": IdeaIllustration,
  "02": GameDesignIllustration,
  "03": ArtIllustration,
  "04": ProgrammingIllustration,
  "05": TestingIllustration,
  "06": PublishIllustration,
}

/* ------------------------------------------------------------------ */
/*  Workflow node card                                                 */
/* ------------------------------------------------------------------ */

function WorkflowNode({
  step,
  index,
  onClick,
}: {
  step: (typeof workflowSteps)[number]
  index: number
  onClick?: () => void
}) {
  const IllustrationComponent = illustrations[step.id]

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
      className="group relative flex flex-col"
    >
      <div
        onClick={onClick}
        className={cn(
          "flex w-full flex-col rounded-2xl border border-white/[0.06] bg-[#0d0d10] p-6 transition-all duration-200 cursor-pointer",
          "hover:-translate-y-1 hover:border-white/[0.15] hover:shadow-glow-sm"
        )}
      >
        {/* Mini illustration area */}
        <div className="mb-4 h-32 overflow-hidden rounded-xl border border-white/[0.04] bg-white/[0.02]">
          {IllustrationComponent && <IllustrationComponent />}
        </div>

        {/* Step label */}
        <span className="mb-1 text-xs font-semibold uppercase tracking-widest text-white/25">
          Step {step.id}
        </span>

        {/* Title */}
        <h3 className="text-lg font-semibold tracking-tight text-white">
          {step.title}
        </h3>

        {/* Description */}
        <p className="mt-1 text-sm leading-relaxed text-white/35">
          {step.description}
        </p>
      </div>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  Connector                                                          */
/* ------------------------------------------------------------------ */

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
            aria-hidden="true"
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
            aria-hidden="true"
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

/* ------------------------------------------------------------------ */
/*  Main export                                                        */
/* ------------------------------------------------------------------ */

export function WorkflowMap() {
  const [activeStep, setActiveStep] = React.useState<string | null>(null)

  return (
    <Section className="overflow-hidden border-t border-white/[0.06]">
      <GridBackground cellSize={80} opacity={0.025} />
      <WorkflowGenerator stepId={activeStep} onClose={() => setActiveStep(null)} />

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

          {/* Desktop: horizontal layout with arrow connectors */}
          <div className="hidden items-center justify-center lg:flex">
            {workflowSteps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="w-48 xl:w-56">
                  <WorkflowNode step={step} index={index} onClick={() => setActiveStep(step.id)} />
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

          {/* Tablet (md): 2-column grid, no connectors */}
          <div className="hidden grid-cols-2 gap-6 md:grid lg:hidden">
            {workflowSteps.map((step, index) => (
              <WorkflowNode key={step.id} step={step} index={index} />
            ))}
          </div>

          {/* Mobile: vertical stack with down-arrow connectors */}
          <div className="flex flex-col items-center md:hidden">
            {workflowSteps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="w-full max-w-xs">
                  <WorkflowNode step={step} index={index} onClick={() => setActiveStep(step.id)} />
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