"use client"

import * as React from "react"
import { Header } from "@/components/layout/header"
import { WriterSidebar } from "@/features/writer/writer-sidebar"
import { PromptEditor } from "@/features/writer/prompt-editor"
import { ResultPanel } from "@/features/writer/result-panel"
import { categoryMocks } from "@/features/writer/mock-data"
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
      setResult(categoryMocks[activeCategory])
      setIsLoading(false)
    }, 800)
  }, [prompt, activeCategory])

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden pt-[72px]">
        {/* Sidebar - hidden on mobile */}
        <div className="hidden md:block">
          <WriterSidebar
            activeCategory={activeCategory}
            onCategoryChange={(cat) => {
              setActiveCategory(cat)
              setResult(null)
            }}
          />
        </div>

        {/* Mobile category tabs */}
        <div className="flex md:hidden h-10 border-b border-white/[0.06] bg-[#0c0c10] overflow-x-auto px-3 gap-1 items-center">
          {["story","dialogue","quest","character","item","skill"].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat as WriterCategory)
                setResult(null)
              }}
              className={`shrink-0 rounded-lg px-3 py-1 text-xs font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-white/[0.06] text-white"
                  : "text-white/30 hover:text-white/50"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <PromptEditor
          prompt={prompt}
          onPromptChange={setPrompt}
          onGenerate={handleGenerate}
          isLoading={isLoading}
        />

        {/* Result panel - full width on mobile, sidebar on desktop */}
        <div className="hidden lg:block">
          <ResultPanel result={result} />
        </div>
      </div>

      {/* Mobile result overlay */}
      {result && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/50" onClick={() => setResult(null)} />
          <div className="w-80 max-w-[85vw]">
            <ResultPanel result={result} />
          </div>
        </div>
      )}
    </div>
  )
}