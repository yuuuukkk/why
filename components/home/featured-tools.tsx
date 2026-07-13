"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { GridBackground } from "@/components/ui/GridBackground"
import {
  PenTool,
  Gamepad2,
  ImageIcon,
  ListChecks,
  Languages,
  Bot,
  ArrowUpRight,
} from "lucide-react"

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const tools = [
  {
    icon: PenTool,
    title: "AI Writer",
    description: "Generate stories, quests, dialogues, and world building.",
  },
  {
    icon: Gamepad2,
    title: "Gameplay Designer",
    description: "Design mechanics, combat, levels, and balancing.",
  },
  {
    icon: ImageIcon,
    title: "Image Generator",
    description:
      "Generate concept art, characters, props, and environments.",
  },
  {
    icon: ListChecks,
    title: "Workflow Planner",
    description:
      "Turn ideas into tasks, roadmaps, and production pipelines.",
  },
  {
    icon: Languages,
    title: "Localization",
    description: "Translate game content into multiple languages.",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    description:
      "Answer project questions, review documents, and accelerate production.",
  },
] as const

type ToolEntry = (typeof tools)[number]

/* ------------------------------------------------------------------ */
/*  Visual - AI Writer  (fake text editor with cursor)                */
/* ------------------------------------------------------------------ */

function VisualWriter() {
  const widths = ["w-full", "w-11/12", "w-9/12", "w-full", "w-7/12"]

  return (
    <div className="relative flex h-full items-center justify-center bg-[#0c0c12] px-6">
      {/* Editor chrome */}
      <div className="w-full max-w-[85%]">
        {/* Title bar dots */}
        <div className="mb-3 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/[0.08]" />
          <span className="h-2 w-2 rounded-full bg-white/[0.08]" />
          <span className="h-2 w-2 rounded-full bg-white/[0.08]" />
        </div>
        {/* Fake text lines */}
        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={`h-[5px] rounded-full bg-white/[0.06] ${widths[i]}`}
            />
          ))}
          {/* Line with cursor */}
          <div className="flex items-center gap-0">
            <div className="h-[5px] w-4/12 rounded-full bg-white/[0.06]" />
            <span className="inline-block h-[11px] w-[2px] animate-pulse rounded-full bg-indigo-500" />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Visual - Gameplay Designer  (skill tree nodes + branches)          */
/* ------------------------------------------------------------------ */

function VisualGameplay() {
  return (
    <div className="relative flex h-full items-center justify-center bg-[#0c0c12]">
      <svg
        viewBox="0 0 200 120"
        className="absolute inset-0 m-auto h-[75%] w-[85%]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Branches */}
        <line x1="100" y1="20" x2="50" y2="55" className="stroke-indigo-500/30" strokeWidth="1.5" />
        <line x1="100" y1="20" x2="150" y2="55" className="stroke-indigo-500/30" strokeWidth="1.5" />
        <line x1="50" y1="55" x2="30" y2="95" className="stroke-blue-500/25" strokeWidth="1.5" />
        <line x1="50" y1="55" x2="75" y2="95" className="stroke-blue-500/25" strokeWidth="1.5" />
        <line x1="150" y1="55" x2="125" y2="95" className="stroke-blue-500/25" strokeWidth="1.5" />
        <line x1="150" y1="55" x2="170" y2="95" className="stroke-blue-500/25" strokeWidth="1.5" />

        {/* Root node */}
        <circle cx="100" cy="20" r="6" className="fill-indigo-500/60" />
        <circle cx="100" cy="20" r="9" className="stroke-indigo-500/30" strokeWidth="1" fill="none" />

        {/* Tier-2 nodes */}
        <circle cx="50" cy="55" r="5" className="fill-indigo-500/40" />
        <circle cx="150" cy="55" r="5" className="fill-indigo-500/40" />

        {/* Tier-3 leaves */}
        <circle cx="30" cy="95" r="4" className="fill-blue-500/30" />
        <circle cx="75" cy="95" r="4" className="fill-blue-500/30" />
        <circle cx="125" cy="95" r="4" className="fill-blue-500/30" />
        <circle cx="170" cy="95" r="4" className="fill-blue-500/30" />
      </svg>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Visual - Image Generator  (colour palette grid)                   */
/* ------------------------------------------------------------------ */

function VisualImageGenerator() {
  const colors = [
    "bg-indigo-600/50",
    "bg-purple-500/45",
    "bg-pink-500/40",
    "bg-blue-500/35",
    "bg-indigo-400/40",
    "bg-violet-500/45",
    "bg-sky-500/30",
    "bg-purple-400/35",
    "bg-indigo-500/40",
  ]

  return (
    <div className="flex h-full items-center justify-center bg-[#0c0c12] px-6">
      <div className="grid w-[85%] grid-cols-3 gap-2">
        {colors.map((bg, i) => {
          const isFirst = i === 0
          return (
            <div
              key={i}
              className={`${isFirst ? "col-span-2 row-span-2 h-auto" : "h-8"} rounded-md ${bg}`}
            />
          )
        })}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Visual - Workflow Planner  (kanban columns)                        */
/* ------------------------------------------------------------------ */

function VisualWorkflow() {
  const columns = [
    { color: "bg-indigo-500/25", count: 3 },
    { color: "bg-purple-500/20", count: 2 },
    { color: "bg-blue-500/20", count: 4 },
  ]

  return (
    <div className="flex h-full items-end justify-center gap-3 bg-[#0c0c12] px-5 pb-5">
      {columns.map((col, ci) => (
        <div key={ci} className="flex w-1/3 flex-col gap-1.5">
          {/* Column header */}
          <div className="mb-1 h-[3px] w-full rounded-full bg-white/[0.06]" />
          {/* Cards */}
          {Array.from({ length: col.count }).map((_, i) => (
            <div
              key={i}
              className={`h-5 rounded ${col.color}`}
              style={{ width: `${65 + ((ci * i) % 3) * 10}%` }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Visual - Localization  (speech bubbles with fake text)            */
/* ------------------------------------------------------------------ */

function VisualLocalization() {
  return (
    <div className="relative flex h-full items-center justify-center bg-[#0c0c12] px-5">
      <div className="flex w-[85%] flex-col gap-3">
        {/* Bubble 1 - left-aligned */}
        <div className="flex gap-2">
          <div className="h-5 w-5 rounded-full bg-white/[0.06]" />
          <div className="rounded-lg rounded-tl-none bg-white/[0.04] p-2">
            <div className="space-y-1">
              <div className="h-[3px] w-14 rounded-full bg-white/[0.08]" />
              <div className="h-[3px] w-10 rounded-full bg-white/[0.06]" />
            </div>
          </div>
        </div>

        {/* Bubble 2 - right-aligned */}
        <div className="flex flex-row-reverse gap-2">
          <div className="h-5 w-5 rounded-full bg-indigo-500/20" />
          <div className="rounded-lg rounded-tr-none bg-indigo-500/[0.06] p-2">
            <div className="space-y-1">
              <div className="h-[3px] w-16 rounded-full bg-indigo-400/[0.12]" />
              <div className="h-[3px] w-8 rounded-full bg-indigo-400/[0.09]" />
              <div className="h-[3px] w-12 rounded-full bg-indigo-400/[0.08]" />
            </div>
          </div>
        </div>

        {/* Bubble 3 - left-aligned, different language */}
        <div className="flex gap-2">
          <div className="h-5 w-5 rounded-full bg-white/[0.06]" />
          <div className="rounded-lg rounded-tl-none bg-white/[0.04] p-2">
            <div className="space-y-1.5">
              <div className="h-[3px] w-12 rounded-full bg-white/[0.07]" />
              <div className="h-[3px] w-16 rounded-full bg-white/[0.05]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Visual - AI Assistant  (chat bubbles)                             */
/* ------------------------------------------------------------------ */

function VisualChat() {
  return (
    <div className="flex h-full flex-col justify-end gap-2 bg-[#0c0c12] px-5 pb-5">
      {/* AI message */}
      <div className="flex w-[80%] items-start gap-2">
        <div className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-indigo-500/25" />
        <div className="rounded-lg rounded-tl-none bg-indigo-500/[0.08] px-2.5 py-2">
          <div className="space-y-1">
            <div className="h-[3px] w-16 rounded-full bg-indigo-400/[0.12]" />
            <div className="h-[3px] w-11 rounded-full bg-indigo-400/[0.08]" />
          </div>
        </div>
      </div>

      {/* User message */}
      <div className="ml-auto flex w-[70%] flex-row-reverse items-start gap-2">
        <div className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-white/[0.08]" />
        <div className="rounded-lg rounded-tr-none bg-white/[0.05] px-2.5 py-2">
          <div className="h-[3px] w-12 rounded-full bg-white/[0.08]" />
        </div>
      </div>

      {/* AI message */}
      <div className="flex w-[85%] items-start gap-2">
        <div className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-indigo-500/25" />
        <div className="rounded-lg rounded-tl-none bg-indigo-500/[0.08] px-2.5 py-2">
          <div className="space-y-1">
            <div className="h-[3px] w-14 rounded-full bg-indigo-400/[0.12]" />
            <div className="h-[3px] w-10 rounded-full bg-indigo-400/[0.08]" />
            <div className="h-[3px] w-16 rounded-full bg-indigo-400/[0.06]" />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Visual dispatcher                                                  */
/* ------------------------------------------------------------------ */

const visualMap: Record<string, React.FC> = {
  "AI Writer": VisualWriter,
  "Gameplay Designer": VisualGameplay,
  "Image Generator": VisualImageGenerator,
  "Workflow Planner": VisualWorkflow,
  "Localization": VisualLocalization,
  "AI Assistant": VisualChat,
}

/* ------------------------------------------------------------------ */
/*  ToolCard                                                           */
/* ------------------------------------------------------------------ */

function ToolCard({ tool, index }: { tool: ToolEntry; index: number }) {
  const Visual = visualMap[tool.title]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
        delay: index * 0.08,
      }}
      className="group"
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0d0d10] transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.12] hover:shadow-glow-sm">
        {/* Top visual area */}
        <div className="relative h-48 overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
          {Visual ? <Visual /> : null}
        </div>

        {/* Bottom content */}
        <div className="flex flex-1 flex-col gap-2 p-6">
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-semibold tracking-tight text-white">
              {tool.title}
            </h3>
            <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-white/15 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/40" />
          </div>
          <p className="text-sm leading-relaxed text-white/35">
            {tool.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  FeaturedTools (exported)                                           */
/* ------------------------------------------------------------------ */

export function FeaturedTools() {
  return (
    <Section className="overflow-hidden border-t border-white/[0.06]">
      <GridBackground cellSize={80} opacity={0.025} />

      <Container>
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <motion.div
            className="mb-16 text-center md:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Featured Tools
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-white/35">
              Powerful AI tools built for modern game development.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, index) => (
              <ToolCard key={tool.title} tool={tool} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}