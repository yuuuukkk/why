"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { workflowStepsData } from "./mock-data"

interface WorkflowGeneratorProps {
  stepId: string | null
  onClose: () => void
}

export function WorkflowGenerator({ stepId, onClose }: WorkflowGeneratorProps) {
  const [isLoading, setIsLoading] = React.useState(false)
  const [result, setResult] = React.useState<(typeof workflowStepsData)[number]["result"] | null>(null)

  const step = workflowStepsData.find((s) => s.id === stepId)

  React.useEffect(() => {
    if (stepId) {
      setResult(null)
      setIsLoading(true)
      const timer = setTimeout(() => {
        setResult(step?.result ?? null)
        setIsLoading(false)
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [stepId, step])

  return (
    <AnimatePresence>
      {stepId && step && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-2xl max-h-[80vh] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c12] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex h-14 items-center justify-between border-b border-white/[0.06] px-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400/60">
                  {step.title}
                </span>
                <span className="text-xs text-white/15">AI Generation</span>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg px-3 py-1 text-xs text-white/25 transition-colors hover:bg-white/[0.05] hover:text-white/50"
              >
                Close
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto p-6">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-16 gap-4">
                  <div className="h-1.5 w-32 overflow-hidden rounded-full bg-white/[0.04]">
                    <motion.div
                      className="h-full bg-indigo-500/40"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                  </div>
                  <p className="text-sm text-white/20">Generating {step.title.toLowerCase()}...</p>
                </div>
              ) : result ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {result.title}
                  </h3>
                  <div className="mt-6 flex flex-col gap-5">
                    {result.sections.map((section, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: i * 0.06 }}
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
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}