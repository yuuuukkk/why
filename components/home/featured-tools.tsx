"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { GridBackground } from "@/components/ui/GridBackground"
import {
  PenTool,
  Gamepad2,
  Image,
  ListChecks,
  Languages,
  Bot,
  ArrowUpRight,
} from "lucide-react"

const tools = [
  {
    icon: PenTool,
    title: "AI Writer",
    description:
      "Generate stories, quests, dialogues, and world building.",
  },
  {
    icon: Gamepad2,
    title: "Gameplay Designer",
    description:
      "Design mechanics, combat, levels, and balancing.",
  },
  {
    icon: Image,
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
    description:
      "Translate game content into multiple languages.",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    description:
      "Answer project questions, review documents, and accelerate production.",
  },
]

function ToolCard({
  tool,
  index,
}: {
  tool: (typeof tools)[number]
  index: number
}) {
  const Icon = tool.icon

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
      <div
        className={
          "relative flex h-full flex-col gap-5 rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.12] hover:shadow-glow-sm"
        }
      >
        {/* Top row: icon + arrow */}
        <div className="flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.04]">
            <Icon className="h-5 w-5 text-white/50 transition-colors duration-200 group-hover:text-white/80" />
          </div>
          <ArrowUpRight className="h-4 w-4 text-white/15 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/40" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-2">
          <h3 className="text-lg font-semibold tracking-tight text-white">
            {tool.title}
          </h3>
          <p className="text-sm leading-relaxed text-white/35">
            {tool.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

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