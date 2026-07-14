"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { HistoryEntry, GeneratedContent } from "./types"

interface HistoryPanelProps {
  entries: HistoryEntry[]
  onSelect: (entry: HistoryEntry) => void
  onDelete: (id: string) => void
  onClear: () => void
}

function formatTime(ts: number): string {
  const d = new Date(ts)
  return d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
}

function formatDate(ts: number): string {
  const d = new Date(ts)
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" })
}

export function HistoryPanel({ entries, onSelect, onDelete, onClear }: HistoryPanelProps) {
  const [confirmClear, setConfirmClear] = React.useState(false)

  if (entries.length === 0) {
    return (
      <aside className="flex w-80 shrink-0 flex-col border-l border-white/[0.06] bg-[#0c0c10] lg:w-96">
        <div className="flex h-14 items-center border-b border-white/[0.06] px-5">
          <h2 className="text-sm font-medium text-white/60">History</h2>
        </div>
        <div className="flex flex-1 items-center justify-center p-5">
          <p className="text-sm text-white/15">No history yet. Generate some content to see it here.</p>
        </div>
      </aside>
    )
  }

  return (
    <aside className="flex w-80 shrink-0 flex-col border-l border-white/[0.06] bg-[#0c0c10] lg:w-96">
      <div className="flex h-14 items-center justify-between border-b border-white/[0.06] px-5">
        <h2 className="text-sm font-medium text-white/60">History</h2>
        {confirmClear ? (
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-white/30">Sure?</span>
            <button
              onClick={onClear}
              className="rounded-md px-2 py-1 text-[10px] font-medium text-red-400/60 hover:bg-red-500/10 hover:text-red-400"
            >
              Yes
            </button>
            <button
              onClick={() => setConfirmClear(false)}
              className="rounded-md px-2 py-1 text-[10px] font-medium text-white/30 hover:bg-white/[0.05] hover:text-white/50"
            >
              No
            </button>
          </div>
        ) : (
          <button
            onClick={() => setConfirmClear(true)}
            className="rounded-md px-2 py-1 text-[10px] font-medium text-white/20 hover:bg-white/[0.05] hover:text-white/40"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-3">
        <AnimatePresence initial={false}>
          {entries.map((entry) => (
            <motion.div
              key={entry.id}
              layout
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.2 }}
              className="group mb-2 cursor-pointer rounded-xl border border-white/[0.04] bg-white/[0.02] p-3 transition-colors hover:border-white/[0.08] hover:bg-white/[0.04]"
              onClick={() => onSelect(entry)}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-white/50">{entry.result.title}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-white/15">{formatDate(entry.timestamp)} {formatTime(entry.timestamp)}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onDelete(entry.id)
                    }}
                    className="rounded px-1 text-[10px] text-white/10 opacity-0 transition-opacity group-hover:opacity-100 hover:text-red-400/60"
                  >
                    Del
                  </button>
                </div>
              </div>
              <p className="mt-1 truncate text-[10px] text-white/20">{entry.prompt}</p>
              <span className="mt-1.5 inline-block rounded bg-white/[0.04] px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-white/20">
                {entry.category}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </aside>
  )
}