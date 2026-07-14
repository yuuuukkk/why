"use client"

import * as React from "react"
import { Header } from "@/components/layout/header"
import { DesignerSidebar } from "@/features/designer/designer-sidebar"
import { PromptEditor } from "@/features/writer/prompt-editor"
import { ResultPanel } from "@/features/writer/result-panel"
import { CreateProjectModal } from "@/features/writer/create-project-modal"
import { useProjects } from "@/features/writer/project-store"
import { getDesignerMockResult, designerExamplePrompts } from "@/features/designer/mock-data"
import type { DesignerCategory } from "@/features/designer/types"
import type { GeneratedContent } from "@/features/writer/types"

export default function DesignerPage() {
  const [activeCategory, setActiveCategory] = React.useState<DesignerCategory>("game-concept")
  const [prompt, setPrompt] = React.useState("")
  const [result, setResult] = React.useState<GeneratedContent | null>(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const [showCreateProject, setShowCreateProject] = React.useState(false)

  const projects = useProjects()

  const handleGenerate = React.useCallback(() => {
    if (!prompt.trim()) return
    setIsLoading(true)
    setTimeout(() => {
      const generated = getDesignerMockResult(
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

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden pt-[72px]">
        {/* Sidebar */}
        <div className="hidden md:block">
          <DesignerSidebar
            activeCategory={activeCategory}
            onCategoryChange={(cat) => {
              setActiveCategory(cat)
              setResult(null)
            }}
            activeProject={projects.activeProject}
            projects={projects.projects}
            onSwitchProject={projects.setActive}
            onOpenCreateProject={() => setShowCreateProject(true)}
          />
        </div>

        {/* Mobile tabs */}
        <div className="flex md:hidden h-10 border-b border-white/[0.06] bg-[#0c0c10] overflow-x-auto px-3 gap-1 items-center">
          {designerCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id)
                setResult(null)
              }}
              className={`shrink-0 rounded-lg px-3 py-1 text-xs font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-white/[0.06] text-white"
                  : "text-white/30 hover:text-white/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <PromptEditor
          prompt={prompt}
          onPromptChange={setPrompt}
          onGenerate={handleGenerate}
          isLoading={isLoading}
          subtitle="Gameplay Designer"
          examples={designerExamplePrompts[activeCategory].map((text, i) => ({ label: `Example ${i + 1}`, text }))}
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

      {/* Create Project Modal */}
      <CreateProjectModal
        open={showCreateProject}
        onClose={() => setShowCreateProject(false)}
        onCreate={(name, gameType, worldDescription, style) => {
          projects.create(name, gameType, worldDescription, style)
        }}
      />
    </div>
  )
}

const designerCategories = [
  { id: "game-concept" as DesignerCategory, label: "Concept" },
  { id: "core-gameplay" as DesignerCategory, label: "Gameplay" },
  { id: "combat-system" as DesignerCategory, label: "Combat" },
  { id: "character-progression" as DesignerCategory, label: "Progression" },
  { id: "level-design" as DesignerCategory, label: "Level" },
  { id: "economy-system" as DesignerCategory, label: "Economy" },
  { id: "boss-design" as DesignerCategory, label: "Boss" },
]
