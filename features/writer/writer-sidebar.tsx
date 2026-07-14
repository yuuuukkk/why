"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { categories, categoryItems } from "./mock-data"
import type { WriterCategory } from "./types"
import type { Project } from "./types"

interface WriterSidebarProps {
  activeCategory: WriterCategory
  onCategoryChange: (category: WriterCategory) => void
  showHistory: boolean
  onToggleHistory: () => void
  activeProject: Project | null
  projects: Project[]
  onSwitchProject: (id: string) => void
  onOpenCreateProject: () => void
  onOpenSettings: () => void
}

export function WriterSidebar({
  activeCategory,
  onCategoryChange,
  showHistory,
  onToggleHistory,
  activeProject,
  projects,
  onSwitchProject,
  onOpenCreateProject,
  onOpenSettings,
}: WriterSidebarProps) {
  const [showProjects, setShowProjects] = React.useState(false)

  return (
    <aside className="flex w-60 shrink-0 flex-col border-r border-white/[0.06] bg-[#0c0c10]">
      {/* Logo */}
      <div className="flex h-14 items-center border-b border-white/[0.06] px-5">
        <a href="/" className="text-lg font-bold tracking-tight text-white/80 hover:text-white transition-colors">
          WHY
        </a>
        <span className="ml-2 text-xs text-white/20">Writer</span>
      </div>

      {/* Active Project */}
      <div className="border-b border-white/[0.06] p-3">
        {activeProject ? (
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-white/15">Project</span>
              <button
                onClick={() => setShowProjects((s) => !s)}
                className="text-[10px] text-white/20 hover:text-white/40 transition-colors"
              >
                {showProjects ? "Close" : "Switch"}
              </button>
            </div>
            <p className="mt-1 text-sm font-medium text-white/60 truncate">{activeProject.name}</p>
            <p className="text-[10px] text-white/20">{activeProject.gameType || "No type"}</p>
          </div>
        ) : (
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/15">No Project</p>
            <button
              onClick={onOpenCreateProject}
              className="mt-2 w-full rounded-lg bg-white/[0.04] py-2 text-xs font-medium text-white/40 transition-colors hover:bg-white/[0.08] hover:text-white/60"
            >
              + Create Project
            </button>
          </div>
        )}

        {/* Project switcher */}
        {showProjects && projects.length > 0 && (
          <div className="mt-2 flex flex-col gap-0.5">
            {projects.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  onSwitchProject(p.id)
                  setShowProjects(false)
                }}
                className={cn(
                  "rounded-lg px-3 py-2 text-left text-xs transition-colors",
                  activeProject?.id === p.id
                    ? "bg-white/[0.06] text-white/60"
                    : "text-white/25 hover:bg-white/[0.03] hover:text-white/40"
                )}
              >
                {p.name}
              </button>
            ))}
            <button
              onClick={() => { onOpenCreateProject(); setShowProjects(false) }}
              className="rounded-lg px-3 py-2 text-left text-xs text-white/20 hover:bg-white/[0.03] hover:text-white/40 transition-colors"
            >
              + New Project
            </button>
          </div>
        )}
      </div>

      {/* Categories */}
      <nav className="flex flex-col gap-0.5 p-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              onCategoryChange(cat.id as WriterCategory)
              if (showHistory) onToggleHistory()
            }}
            className={cn(
              "rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200",
              !showHistory && activeCategory === cat.id
                ? "bg-white/[0.06] text-white"
                : "text-white/30 hover:bg-white/[0.03] hover:text-white/50"
            )}
          >
            {cat.label}
          </button>
        ))}
      </nav>

      <div className="mx-3 border-t border-white/[0.04]" />

      {/* History toggle */}
      <div className="p-3">
        <button
          onClick={onToggleHistory}
          className={cn(
            "w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200",
            showHistory
              ? "bg-white/[0.06] text-white"
              : "text-white/30 hover:bg-white/[0.03] hover:text-white/50"
          )}
        >
          History
        </button>
      </div>

      <div className="mx-3 border-t border-white/[0.04]" />

      {/* Settings */}
      <div className="p-3">
        <button
          onClick={onOpenSettings}
          className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-white/30 transition-colors duration-200 hover:bg-white/[0.03] hover:text-white/50"
        >
          Settings
        </button>
      </div>

      <div className="flex-1" />

      {/* Bottom info */}
      {activeProject && (
        <div className="border-t border-white/[0.04] p-3">
          <p className="px-3 text-[9px] text-white/10 leading-relaxed">
            {activeProject.worldDescription.slice(0, 80)}
            {activeProject.worldDescription.length > 80 ? "..." : ""}
          </p>
        </div>
      )}
    </aside>
  )
}

// Need React import for useState