"use client"

import * as React from "react"
import { Header } from "@/components/layout/header"
import { WriterSidebar } from "@/features/writer/writer-sidebar"
import { PromptEditor } from "@/features/writer/prompt-editor"
import { ResultPanel } from "@/features/writer/result-panel"
import { HistoryPanel } from "@/features/writer/history-panel"
import { CreateProjectModal } from "@/features/writer/create-project-modal"
import { GenerationSettingsPanel } from "@/features/writer/generation-settings"
import { useHistory } from "@/features/writer/history"
import { useProjects, useGenerationSettings } from "@/features/writer/project-store"
import { getMockResult } from "@/features/writer/mock-data"
import type { WriterCategory, GeneratedContent, HistoryEntry } from "@/features/writer/types"

export default function WriterPage() {
  const [activeCategory, setActiveCategory] = React.useState<WriterCategory>("story")
  const [prompt, setPrompt] = React.useState("")
  const [result, setResult] = React.useState<GeneratedContent | null>(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const [showHistory, setShowHistory] = React.useState(false)
  const [showCreateProject, setShowCreateProject] = React.useState(false)
  const [showSettings, setShowSettings] = React.useState(false)

  const projects = useProjects()
  const settings = useGenerationSettings()
  const history = useHistory()

  const handleGenerate = React.useCallback(() => {
    if (!prompt.trim()) return
    setIsLoading(true)
    setTimeout(() => {
      const generated = getMockResult(
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
      history.add(activeCategory, prompt, generated, projects.activeProjectId ?? undefined)
      setIsLoading(false)
    }, 800)
  }, [prompt, activeCategory, projects.activeProject, projects.activeProjectId, history])

  const handleHistorySelect = React.useCallback((entry: HistoryEntry) => {
    setActiveCategory(entry.category)
    setPrompt(entry.prompt)
    setResult(entry.result)
    setShowHistory(false)
  }, [])

  const activePanel = showHistory ? (
    <HistoryPanel
      entries={history.entries}
      onSelect={handleHistorySelect}
      onDelete={history.remove}
      onClear={history.clear}
    />
  ) : (
    <ResultPanel result={result} />
  )

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden pt-[72px]">
        {/* Sidebar */}
        <div className="hidden md:block">
          <WriterSidebar
            activeCategory={activeCategory}
            onCategoryChange={(cat) => {
              setActiveCategory(cat)
              setResult(null)
            }}
            showHistory={showHistory}
            onToggleHistory={() => setShowHistory((s) => !s)}
            activeProject={projects.activeProject}
            projects={projects.projects}
            onSwitchProject={projects.setActive}
            onOpenCreateProject={() => setShowCreateProject(true)}
            onOpenSettings={() => setShowSettings(true)}
          />
        </div>

        {/* Mobile tabs */}
        <div className="flex md:hidden h-10 border-b border-white/[0.06] bg-[#0c0c10] overflow-x-auto px-3 gap-1 items-center">
          {["story","dialogue","quest","character","item","skill"].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat as WriterCategory)
                setResult(null)
                setShowHistory(false)
              }}
              className={`shrink-0 rounded-lg px-3 py-1 text-xs font-medium transition-colors ${
                activeCategory === cat && !showHistory
                  ? "bg-white/[0.06] text-white"
                  : "text-white/30 hover:text-white/50"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
          <button
            onClick={() => setShowHistory((s) => !s)}
            className={`shrink-0 rounded-lg px-3 py-1 text-xs font-medium transition-colors ${
              showHistory ? "bg-white/[0.06] text-white" : "text-white/30 hover:text-white/50"
            }`}
          >
            History
          </button>
        </div>

        <PromptEditor
          prompt={prompt}
          onPromptChange={setPrompt}
          onGenerate={handleGenerate}
          isLoading={isLoading}
        />

        <div className="hidden lg:block">
          {activePanel}
        </div>
      </div>

      {/* Mobile overlay */}
      {(result || showHistory) && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/50" onClick={() => { setResult(null); setShowHistory(false) }} />
          <div className="w-80 max-w-[85vw]">
            {activePanel}
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

      {/* Generation Settings */}
      <GenerationSettingsPanel
        open={showSettings}
        onClose={() => setShowSettings(false)}
        settings={settings.settings}
        onChange={settings.setSettings}
      />
    </div>
  )
}