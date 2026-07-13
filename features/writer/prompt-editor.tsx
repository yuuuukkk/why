"use client"

import { Button } from "@/components/ui/Button"
import { examplePrompts } from "./mock-data"

interface PromptEditorProps {
  prompt: string
  onPromptChange: (value: string) => void
  onGenerate: () => void
  isLoading: boolean
}

export function PromptEditor({ prompt, onPromptChange, onGenerate, isLoading }: PromptEditorProps) {
  return (
    <div className="flex flex-1 flex-col bg-background">
      {/* Top bar */}
      <div className="flex h-14 items-center justify-between border-b border-white/[0.06] px-6">
        <h2 className="text-sm font-medium text-white/60">Prompt Editor</h2>
        <span className="text-xs text-white/20">AI Writer</span>
      </div>

      {/* Prompt area */}
      <div className="flex-1 overflow-y-auto p-6">
        <textarea
          value={prompt}
          onChange={(e) => onPromptChange(e.target.value)}
          placeholder="Describe what you want to create..."
          className="h-full min-h-[200px] w-full resize-none rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 text-sm leading-relaxed text-white/70 placeholder:text-white/20 focus:border-white/[0.12] focus:outline-none transition-colors"
        />

        {/* Example prompts */}
        <div className="mt-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-white/15">
            Try an example
          </p>
          <div className="flex flex-wrap gap-2">
            {examplePrompts.map((ep) => (
              <button
                key={ep.label}
                onClick={() => onPromptChange(ep.text)}
                className="rounded-lg border border-white/[0.04] bg-white/[0.02] px-3 py-1.5 text-xs text-white/30 transition-colors duration-200 hover:border-white/[0.1] hover:text-white/50"
              >
                {ep.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Generate button */}
      <div className="border-t border-white/[0.06] p-4">
        <Button
          variant="primary"
          size="lg"
          className="w-full rounded-xl"
          onClick={onGenerate}
          disabled={isLoading || !prompt.trim()}
        >
          {isLoading ? "Generating..." : "Generate"}
        </Button>
      </div>
    </div>
  )
}