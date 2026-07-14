"use client"

import * as React from "react"
import { Header } from "@/components/layout/header"
import { AssetsSidebar } from "@/features/assets/assets-sidebar"
import { PromptEditor } from "@/features/writer/prompt-editor"
import { ResultPanel } from "@/features/writer/result-panel"
import { useProjects } from "@/features/writer/project-store"
import { getAssetMockResult, assetExamplePrompts } from "@/features/assets/mock-data"
import type { AssetCategory, GeneratedAsset } from "@/features/assets/types"
import type { GeneratedContent } from "@/features/writer/types"

export default function AssetsPage() {
  const [activeCategory, setActiveCategory] = React.useState<AssetCategory>("character")
  const [prompt, setPrompt] = React.useState("")
  const [result, setResult] = React.useState<GeneratedContent | null>(null)
  const [isLoading, setIsLoading] = React.useState(false)

  const projects = useProjects()

  const handleGenerate = React.useCallback(() => {
    if (!prompt.trim()) return
    setIsLoading(true)
    setTimeout(() => {
      const generated = getAssetMockResult(
        activeCategory,
        prompt,
        projects.activeProject
          ? {
              name: projects.activeProject.name,
              gameType: projects.activeProject.gameType,
              worldDescription: projects.activeProject.worldDescription,
              style: projects.activeProject.style,
            }
          : null
      )
      setResult(generated)
      setIsLoading(false)
    }, 800)
  }, [prompt, activeCategory, projects.activeProject])

  const examples = React.useMemo(() => {
    return assetExamplePrompts[activeCategory].map((text, i) => ({
      label: `Example ${i + 1}`,
      text,
    }))
  }, [activeCategory])

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden pt-[72px]">
        {/* Sidebar */}
        <div className="hidden md:block">
          <AssetsSidebar
            activeCategory={activeCategory}
            onCategoryChange={(cat) => {
              setActiveCategory(cat)
              setResult(null)
            }}
            activeProject={projects.activeProject}
          />
        </div>

        {/* Mobile tabs */}
        <div className="flex md:hidden h-10 border-b border-white/[0.06] bg-[#0c0c10] overflow-x-auto px-3 gap-1 items-center">
          {["character","environment","weapon","item","creature","ui","icon"].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat as AssetCategory)
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
          subtitle="Asset Generator"
          examples={examples}
        />

        <div className="hidden lg:block">
          <ResultPanel result={result} />
        </div>
      </div>

      {/* Mobile overlay */}
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
