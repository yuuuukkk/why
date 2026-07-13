"use client"

import { motion } from "framer-motion"
import type { GeneratedContent } from "./types"

interface ResultPanelProps {
  result: GeneratedContent | null
}

export function ResultPanel({ result }: ResultPanelProps) {
  return (
    <aside className="flex w-80 shrink-0 flex-col border-l border-white/[0.06] bg-[#0c0c10] lg:w-96">
      {/* Top bar */}
      <div className="flex h-14 items-center justify-between border-b border-white/[0.06] px-5">
        <h2 className="text-sm font-medium text-white/60">Result</h2>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-5">
        {result ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <h3 className="text-lg font-semibold tracking-tight text-white">
              {result.title}
            </h3>
            <div className="mt-6 flex flex-col gap-5">
              {result.sections.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: i * 0.08 }}
                >
                  <h4 className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-white/30">
                    {section.heading}
                  </h4>
                  <p className="text-sm leading-relaxed text-white/50">
                    {section.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-white/15">
              Your generated content will appear here.
            </p>
          </div>
        )}
      </div>
    </aside>
  )
}