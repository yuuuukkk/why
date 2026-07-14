"use client"

import { cn } from "@/lib/utils"
import { categories, categoryItems } from "./mock-data"
import type { WriterCategory } from "./types"

interface WriterSidebarProps {
  activeCategory: WriterCategory
  onCategoryChange: (category: WriterCategory) => void
}

export function WriterSidebar({ activeCategory, onCategoryChange }: WriterSidebarProps) {
  return (
    <aside className="flex w-60 shrink-0 flex-col border-r border-white/[0.06] bg-[#0c0c10]">
      {/* Logo */}
      <div className="flex h-14 items-center border-b border-white/[0.06] px-5">
        <a href="/" className="text-lg font-bold tracking-tight text-white/80 hover:text-white transition-colors">
          WHY
        </a>
        <span className="ml-2 text-xs text-white/20">Writer</span>
      </div>

      {/* Categories */}
      <nav className="flex flex-col gap-0.5 p-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id as WriterCategory)}
            className={cn(
              "rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200",
              activeCategory === cat.id
                ? "bg-white/[0.06] text-white"
                : "text-white/30 hover:bg-white/[0.03] hover:text-white/50"
            )}
          >
            {cat.label}
          </button>
        ))}
      </nav>

      {/* Divider */}
      <div className="mx-3 border-t border-white/[0.04]" />

      {/* Category items */}
      <div className="flex-1 overflow-y-auto p-3">
        <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-widest text-white/15">
          {categories.find((c) => c.id === activeCategory)?.label}
        </p>
        <div className="flex flex-col gap-0.5">
          {categoryItems
            .filter((item) => item.category === activeCategory)
            .map((item) => (
              <div
                key={item.id}
                className="rounded-lg px-3 py-2 text-sm text-white/25 transition-colors duration-200 hover:bg-white/[0.03] hover:text-white/40 cursor-default"
              >
                {item.label}
              </div>
            ))}
        </div>
      </div>
    </aside>
  )
}