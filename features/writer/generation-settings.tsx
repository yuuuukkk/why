"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { GenerationSettings, CreativityLevel, LengthLevel, StylePreset } from "./types"

interface GenerationSettingsPanelProps {
  open: boolean
  onClose: () => void
  settings: GenerationSettings
  onChange: (s: GenerationSettings) => void
}

export function GenerationSettingsPanel({ open, onClose, settings, onChange }: GenerationSettingsPanelProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c12] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex h-14 items-center justify-between border-b border-white/[0.06] px-6">
              <h2 className="text-sm font-medium text-white/70">Generation Settings</h2>
              <button onClick={onClose} className="rounded-lg px-3 py-1 text-xs text-white/25 hover:bg-white/[0.05] hover:text-white/50">Close</button>
            </div>

            <div className="flex flex-col gap-5 p-6">
              {/* Creativity */}
              <div>
                <label className="mb-2 block text-xs font-medium text-white/40">Creativity</label>
                <div className="flex gap-2">
                  {(["low", "medium", "high"] as CreativityLevel[]).map((level) => (
                    <button
                      key={level}
                      onClick={() => onChange({ ...settings, creativity: level })}
                      className={`flex-1 rounded-lg py-2 text-xs font-medium capitalize transition-colors ${
                        settings.creativity === level
                          ? "bg-white/[0.08] text-white"
                          : "bg-white/[0.02] text-white/30 hover:bg-white/[0.04] hover:text-white/50"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Length */}
              <div>
                <label className="mb-2 block text-xs font-medium text-white/40">Length</label>
                <div className="flex gap-2">
                  {(["short", "medium", "long"] as LengthLevel[]).map((level) => (
                    <button
                      key={level}
                      onClick={() => onChange({ ...settings, length: level })}
                      className={`flex-1 rounded-lg py-2 text-xs font-medium capitalize transition-colors ${
                        settings.length === level
                          ? "bg-white/[0.08] text-white"
                          : "bg-white/[0.02] text-white/30 hover:bg-white/[0.04] hover:text-white/50"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Style */}
              <div>
                <label className="mb-2 block text-xs font-medium text-white/40">Style</label>
                <div className="grid grid-cols-2 gap-2">
                  {(["fantasy", "horror", "sci-fi", "realistic"] as StylePreset[]).map((s) => (
                    <button
                      key={s}
                      onClick={() => onChange({ ...settings, style: s })}
                      className={`rounded-lg py-2 text-xs font-medium capitalize transition-colors ${
                        settings.style === s
                          ? "bg-white/[0.08] text-white"
                          : "bg-white/[0.02] text-white/30 hover:bg-white/[0.04] hover:text-white/50"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}