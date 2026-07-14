"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"

interface CreateProjectModalProps {
  open: boolean
  onClose: () => void
  onCreate: (name: string, gameType: string, worldDescription: string, style: string) => void
}

export function CreateProjectModal({ open, onClose, onCreate }: CreateProjectModalProps) {
  const [name, setName] = React.useState("")
  const [gameType, setGameType] = React.useState("")
  const [worldDescription, setWorldDescription] = React.useState("")
  const [style, setStyle] = React.useState("")

  const handleSubmit = React.useCallback(() => {
    if (!name.trim()) return
    onCreate(name.trim(), gameType.trim(), worldDescription.trim(), style.trim())
    setName("")
    setGameType("")
    setWorldDescription("")
    setStyle("")
    onClose()
  }, [name, gameType, worldDescription, style, onCreate, onClose])

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
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c12] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex h-14 items-center justify-between border-b border-white/[0.06] px-6">
              <h2 className="text-sm font-medium text-white/70">Create New Project</h2>
              <button onClick={onClose} className="rounded-lg px-3 py-1 text-xs text-white/25 hover:bg-white/[0.05] hover:text-white/50">Close</button>
            </div>

            {/* Form */}
            <div className="flex flex-col gap-4 p-6">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-white/40">Project Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Shadow of the Hollow"
                  className="w-full rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-2.5 text-sm text-white/70 placeholder:text-white/20 focus:border-white/[0.12] focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-white/40">Game Type</label>
                <input
                  value={gameType}
                  onChange={(e) => setGameType(e.target.value)}
                  placeholder="e.g. Action RPG, Horror, Strategy"
                  className="w-full rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-2.5 text-sm text-white/70 placeholder:text-white/20 focus:border-white/[0.12] focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-white/40">World Description</label>
                <textarea
                  value={worldDescription}
                  onChange={(e) => setWorldDescription(e.target.value)}
                  placeholder="Describe your game world..."
                  rows={4}
                  className="w-full resize-none rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-2.5 text-sm text-white/70 placeholder:text-white/20 focus:border-white/[0.12] focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-white/40">Art Style</label>
                <input
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  placeholder="e.g. Dark Fantasy, Pixel Art, Realistic"
                  className="w-full rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-2.5 text-sm text-white/70 placeholder:text-white/20 focus:border-white/[0.12] focus:outline-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                disabled={!name.trim()}
                className="mt-2 w-full rounded-xl bg-white/[0.08] py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/[0.12] disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Create Project
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}