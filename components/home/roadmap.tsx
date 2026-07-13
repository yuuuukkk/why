"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { GridBackground } from "@/components/ui/GridBackground"
import { cn } from "@/lib/utils"

type MilestoneStatus = "SHIPPED" | "IN PROGRESS" | "PLANNED"

interface Milestone {
  version: string
  label: string
  description: string
  status: MilestoneStatus
}

const milestones: Milestone[] = [
  {
    version: "WHY v1",
    label: "Core Platform",
    description: "AI writing, dialogue, and asset generation tools.",
    status: "SHIPPED",
  },
  {
    version: "WHY Studio",
    label: "Integrated Workspace",
    description: "Unified editor with real-time collaboration.",
    status: "IN PROGRESS",
  },
  {
    version: "AI NPC",
    label: "Intelligent Characters",
    description: "AI-driven NPCs with dynamic behavior trees.",
    status: "PLANNED",
  },
  {
    version: "Cloud Build",
    label: "Cloud Compilation",
    description: "One-click cloud builds for all platforms.",
    status: "PLANNED",
  },
  {
    version: "Marketplace",
    label: "Asset Marketplace",
    description: "Community-driven asset sharing and monetization.",
    status: "PLANNED",
  },
  {
    version: "WHY API",
    label: "Developer Platform",
    description: "REST API, SDKs, and plugin ecosystem.",
    status: "PLANNED",
  },
]

function statusColor(status: MilestoneStatus) {
  switch (status) {
    case "SHIPPED":
      return {
        dot: "bg-emerald-500",
        label: "text-emerald-400",
        ring: "ring-emerald-500/40",
      }
    case "IN PROGRESS":
      return {
        dot: "bg-indigo-500",
        label: "text-indigo-400",
        ring: "ring-indigo-500/40",
      }
    case "PLANNED":
      return {
        dot: "bg-white/20",
        label: "text-white/25",
        ring: "ring-white/10",
      }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
}

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

export function Roadmap() {
  return (
    <Section className="relative border-t border-white/[0.06]">
      <GridBackground cellSize={80} opacity={0.025} />

      <Container>
        <div className="relative mx-auto max-w-4xl px-6 py-24 sm:py-32">
          {/* Header */}
          <motion.div
            className="mb-20 text-center"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              Roadmap
            </h2>
            <p className="mt-4 text-lg text-white/40">
              The journey ahead.
            </p>
            <p className="mt-2 text-base text-white/30">
              From core tools to a full AI-powered game development platform.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Center vertical line */}
            <div className="absolute left-4 top-0 h-full w-px bg-white/[0.06] md:left-1/2 md:-translate-x-px" />

            <div className="space-y-12 md:space-y-16">
              {milestones.map((milestone, index) => {
                const colors = statusColor(milestone.status)
                const isEven = index % 2 === 0
                const isInProgress = milestone.status === "IN PROGRESS"

                return (
                  <motion.div
                    key={milestone.version}
                    className="relative"
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                  >
                    {/* Status dot on the timeline */}
                    <div
                      className={cn(
                        "absolute left-4 top-6 z-10 -translate-x-1/2 md:left-1/2",
                      )}
                    >
                      {/* Pulsing ring for IN PROGRESS */}
                      {isInProgress && (
                        <motion.div
                          className={cn(
                            "absolute inset-[-6px] rounded-full ring-2",
                            colors.ring,
                          )}
                          animate={{ opacity: [0.6, 0, 0.6], scale: [1, 1.6, 1] }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      )}

                      <div
                        className={cn(
                          "h-3 w-3 rounded-full",
                          colors.dot,
                        )}
                      />
                    </div>

                    {/* Dashed connector segment between nodes */}
                    {index < milestones.length - 1 && (
                      <div
                        className="absolute left-4 top-[2.25rem] z-0 w-px -translate-x-px md:left-1/2"
                        aria-hidden="true"
                      >
                        <div className="h-full w-full border-l border-dashed border-white/[0.06]" />
                      </div>
                    )}

                    {/* Card content */}
                    <div
                      className={cn(
                        "ml-10 md:ml-0 md:w-[calc(50%-2rem)]",
                        isEven
                          ? "md:mr-auto md:pr-0 md:text-right"
                          : "md:ml-auto md:pl-0 md:text-left",
                      )}
                    >
                      <div className="rounded-xl border border-white/[0.06] bg-[#0d0d10] p-6">
                        <span
                          className={cn(
                            "text-xs font-semibold uppercase tracking-widest",
                            colors.label,
                          )}
                        >
                          {milestone.version}
                        </span>
                        <h3 className="mt-2 text-xl font-semibold text-white">
                          {milestone.label}
                        </h3>
                        <p className="mt-1 text-sm text-white/35">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
