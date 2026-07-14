"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { assetCategories } from "./mock-data"
import type { AssetCategory } from "./types"
import type { Project } from "@/features/writer/types"

interface AssetsSidebarProps {
  activeCategory: AssetCategory
  onCategoryChange: (category: AssetCategory) => void
  activeProject: Project | null
}

export function AssetsSidebar({
  activeCategory,
  onCategoryChange,
  activeProject,
}: AssetsSidebarProps) {
  return (
    <aside className="flex w-60 shrink-0 flex-col border-r border-white/[0.06] bg-[#0c0c10]">
      {/* Logo */}
      <div className="flex h-14 items-center border-b border-white/[0.06] px-5">
        <a href="/" className="text-lg font-bold tracking-tight text-white/80 hover:text-white transition-colors">
          WHY
        </a>
        <span className="ml-2 text-xs text-white/20">Assets</span>
      </div>

      {/* Active Project */}
      <div className="border-b border-white/[0.06] p-3">
        {activeProject ? (
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-white/15">Project</span>
            <p className="mt-1 text-sm font-medium text-white/60 truncate">{activeProject.name}</p>
            <p className="text-[10px] text-white/20">{activeProject.gameType || "No type"}</p>
          </div>
        ) : (
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/15">No Project</p>
            <p className="mt-1 text-xs text-white/20">Create a project in Writer first</p>
          </div>
        )}
      </div>

      {/* Categories */}
      <nav className="flex flex-col gap-0.5 p-3">
        {assetCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={cn(
              "rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200",
              activeCategory === cat.id
                ? "bg-white/[0.06] text-white"
                : "text-white/30 hover:bg-white/[0.03] hover:text-white/50"
            )}
          >
            <div>{cat.label}</div>
            <div className="text-[10px] font-normal text-white/15">{cat.description}</div>
          </button>
        ))}
      </nav>

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
