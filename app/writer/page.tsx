"use client"

import * as React from "react"
import { WriterSidebar } from "@/features/writer/writer-sidebar"
import { PromptEditor } from "@/features/writer/prompt-editor"
import { ResultPanel } from "@/features/writer/result-panel"
import { mockResult } from "@/features/writer/mock-data"
import type { WriterCategory, GeneratedContent } from "@/features/writer/types"

export default function WriterPage() {
  const [activeCategory, setActiveCategory] = React.useState<WriterCategory>("story")
  const [prompt, setPrompt] = React.useState("")
  const [result, setResult] = React.useState<GeneratedContent | null>(null)
  const [isLoading, setIsLoading] = React.useState(false)

  const handleGenerate = React.useCallback(() => {
    if (!prompt.trim()) return
    setIsLoading(true)
    setTimeout(() => {
      setResult(mockResult)
      setIsLoading(false)
    }, 800)
  }, [prompt])

  return (
    <div className="flex h-screen overflow-hidden">
      <WriterSidebar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <PromptEditor
        prompt={prompt}
        onPromptChange={setPrompt}
        onGenerate={handleGenerate}
        isLoading={isLoading}
      />
      <ResultPanel result={result} />
    </div>
  )
}