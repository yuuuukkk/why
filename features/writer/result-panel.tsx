"use client"

import * as React from "react"
import { motion } from "framer-motion"
import type { GeneratedContent } from "./types"

interface ResultPanelProps {
  result: GeneratedContent | null
}

function exportJSON(result: GeneratedContent) {
  const blob = new Blob([JSON.stringify(result, null, 2)], { type: "application/json" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = `${result.title.replace(/\s+/g, "_")}.json`
  a.click()
  URL.revokeObjectURL(url)
}

function exportTXT(result: GeneratedContent) {
  const text = [
    result.title,
    "=".repeat(result.title.length),
    "",
    ...result.sections.map((s) => `${s.heading}\n${"-".repeat(s.heading.length)}\n${s.body}\n`),
  ].join("\n")
  const blob = new Blob([text], { type: "text/plain" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = `${result.title.replace(/\s+/g, "_")}.txt`
  a.click()
  URL.revokeObjectURL(url)
}

async function copyToClipboard(result: GeneratedContent) {
  const text = [
    result.title,
    "",
    ...result.sections.map((s) => `${s.heading}\n${s.body}`),
  ].join("\n\n")
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    // fallback
    const ta = document.createElement("textarea")
    ta.value = text
    document.body.appendChild(ta)
    ta.select()
    document.execCommand("copy")
    document.body.removeChild(ta)
  }
}

export function ResultPanel({ result }: ResultPanelProps) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = React.useCallback(async () => {
    if (!result) return
    await copyToClipboard(result)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [result])

  return (
    <aside className="flex w-80 shrink-0 flex-col border-l border-white/[0.06] bg-[#0c0c10] lg:w-96">
      {/* Top bar */}
      <div className="flex h-14 items-center justify-between border-b border-white/[0.06] px-5">
        <h2 className="text-sm font-medium text-white/60">Result</h2>
        {result && (
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleCopy}
              className="rounded-md px-2 py-1 text-[10px] font-medium text-white/30 transition-colors hover:bg-white/[0.05] hover:text-white/50"
              title="Copy"
            >
              {copied ? "Copied" : "Copy"}
            </button>
            <button
              onClick={() => result && exportJSON(result)}
              className="rounded-md px-2 py-1 text-[10px] font-medium text-white/30 transition-colors hover:bg-white/[0.05] hover:text-white/50"
              title="Export JSON"
            >
              JSON
            </button>
            <button
              onClick={() => result && exportTXT(result)}
              className="rounded-md px-2 py-1 text-[10px] font-medium text-white/30 transition-colors hover:bg-white/[0.05] hover:text-white/50"
              title="Export TXT"
            >
              TXT
            </button>
          </div>
        )}
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