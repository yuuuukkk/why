"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

/* ------------------------------------------------------------------ */
/*  Syntax token types                                                 */
/* ------------------------------------------------------------------ */

interface Token {
  text: string
  color: string
}

interface CodeLine {
  tokens: Token[]
  indent: number
}

/* ------------------------------------------------------------------ */
/*  Color palette for syntax highlighting                              */
/* ------------------------------------------------------------------ */

const KW = "#c084fc"   // keywords
const TP = "#60a5fa"   // types / interfaces
const ST = "#34d399"   // strings
const NM = "#f59e0b"   // numbers
const PR = "#e2e8f0"   // properties / plain text
const PN = "#64748b"   // punctuation
// const CM = "#475569"   // comments

/* ------------------------------------------------------------------ */
/*  Realistic game-dev code content                                    */
/* ------------------------------------------------------------------ */

const codeLines: CodeLine[] = [
  {
    indent: 0,
    tokens: [
      { text: "import", color: KW },
      { text: " { ", color: PN },
      { text: "Character", color: TP },
      { text: ", ", color: PN },
      { text: "DialogueNode", color: TP },
      { text: " } ", color: PN },
      { text: "from", color: KW },
      { text: " ", color: PR },
      { text: "'@why/core'", color: ST },
    ],
  },
  {
    indent: 0,
    tokens: [
      { text: "import", color: KW },
      { text: " { ", color: PN },
      { text: "Mood", color: TP },
      { text: ", ", color: PN },
      { text: "QuestState", color: TP },
      { text: " } ", color: PN },
      { text: "from", color: KW },
      { text: " ", color: PR },
      { text: "'@why/types'", color: ST },
    ],
  },
  { indent: 0, tokens: [] },
  {
    indent: 0,
    tokens: [
      { text: "const", color: KW },
      { text: " ", color: PR },
      { text: "ELDER_DIALOGUE", color: TP },
      { text: ": ", color: PN },
      { text: "DialogueNode", color: TP },
      { text: " = {", color: PN },
    ],
  },
  {
    indent: 1,
    tokens: [
      { text: "id", color: PR },
      { text: ": ", color: PN },
      { text: "'elder_forest_intro'", color: ST },
      { text: ",", color: PN },
    ],
  },
  {
    indent: 1,
    tokens: [
      { text: "speaker", color: PR },
      { text: ": ", color: PN },
      { text: "Character", color: TP },
      { text: ".", color: PN },
      { text: "ELDER_MIRA", color: PR },
      { text: ",", color: PN },
    ],
  },
  {
    indent: 1,
    tokens: [
      { text: "mood", color: PR },
      { text: ": ", color: PN },
      { text: "Mood", color: TP },
      { text: ".", color: PN },
      { text: "WISE_CALM", color: PR },
      { text: ",", color: PN },
    ],
  },
  {
    indent: 1,
    tokens: [
      { text: "conditions", color: PR },
      { text: ": {", color: PN },
    ],
  },
  {
    indent: 2,
    tokens: [
      { text: "questState", color: PR },
      { text: ": ", color: PN },
      { text: "QuestState", color: TP },
      { text: ".", color: PN },
      { text: "ACTIVE", color: PR },
      { text: ",", color: PN },
    ],
  },
  {
    indent: 2,
    tokens: [
      { text: "reputation", color: PR },
      { text: ": { ", color: PN },
      { text: "min", color: PR },
      { text: ": ", color: PN },
      { text: "30", color: NM },
      { text: " },", color: PN },
    ],
  },
  {
    indent: 1,
    tokens: [
      { text: "}", color: PN },
      { text: ",", color: PN },
    ],
  },
  {
    indent: 1,
    tokens: [
      { text: "lines", color: PR },
      { text: ": [", color: PN },
    ],
  },
  {
    indent: 2,
    tokens: [
      { text: "{ ", color: PN },
      { text: "text", color: PR },
      { text: ": ", color: PN },
      { text: "'The ancient forest remembers...'", color: ST },
      { text: ", ", color: PN },
      { text: "delay", color: PR },
      { text: ": ", color: PN },
      { text: "2.0", color: NM },
      { text: " },", color: PN },
    ],
  },
  {
    indent: 2,
    tokens: [
      { text: "{ ", color: PN },
      { text: "text", color: PR },
      { text: ": ", color: PN },
      { text: "'Even the stones have stories here.'", color: ST },
      { text: ", ", color: PN },
      { text: "delay", color: PR },
      { text: ": ", color: PN },
      { text: "1.5", color: NM },
      { text: " },", color: PN },
    ],
  },
  {
    indent: 2,
    tokens: [
      { text: "{ ", color: PN },
      { text: "text", color: PR },
      { text: ": ", color: PN },
      { text: "'Tell me, what do you seek?'", color: ST },
      { text: ", ", color: PN },
      { text: "delay", color: PR },
      { text: ": ", color: PN },
      { text: "1.8", color: NM },
      { text: " },", color: PN },
    ],
  },
  {
    indent: 1,
    tokens: [
      { text: "]", color: PN },
      { text: ",", color: PN },
    ],
  },
  {
    indent: 1,
    tokens: [
      { text: "nextNode", color: PR },
      { text: ": ", color: PN },
      { text: "'elder_quest_offer'", color: ST },
      { text: ",", color: PN },
    ],
  },
  {
    indent: 0,
    tokens: [
      { text: "}", color: PN },
    ],
  },
  { indent: 0, tokens: [] },
  {
    indent: 0,
    tokens: [
      { text: "export", color: KW },
      { text: " ", color: PR },
      { text: "default", color: KW },
      { text: " ", color: PR },
      { text: "ELDER_DIALOGUE", color: TP },
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Sidebar data                                                       */
/* ------------------------------------------------------------------ */

interface SidebarItem {
  label: string
  iconColor: string
  isActive: boolean
}

const explorerItems: SidebarItem[] = [
  { label: "Story Editor", iconColor: "bg-blue-500/30", isActive: false },
  { label: "Dialogue Graph", iconColor: "bg-indigo-500/40", isActive: true },
  { label: "Character Manager", iconColor: "bg-purple-500/30", isActive: false },
  { label: "Asset Browser", iconColor: "bg-cyan-500/30", isActive: false },
  { label: "AI Assistant", iconColor: "bg-amber-500/30", isActive: false },
  { label: "Preview", iconColor: "bg-emerald-500/30", isActive: false },
]

const outlineFiles = ["dialogue.ts", "story.map", "npc.config.ts"]

/* ------------------------------------------------------------------ */
/*  AI suggestion data                                                 */
/* ------------------------------------------------------------------ */

interface AISuggestion {
  text: string
  warning?: boolean
}

const aiSuggestions: AISuggestion[] = [
  {
    text: "Consider adding a branching path here for low-reputation players.",
  },
  {
    text: "NPC mood could affect dialogue font style. Try Mood.WISE_CALM \u2192 serif.",
  },
  {
    text: "Missing fallback for when questState is INACTIVE.",
    warning: true,
  },
]

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function WindowDots() {
  return (
    <div className="flex items-center gap-[6px]">
      <span className="inline-block h-[10px] w-[10px] rounded-full bg-[#ef4444]" aria-hidden />
      <span className="inline-block h-[10px] w-[10px] rounded-full bg-[#eab308]" aria-hidden />
      <span className="inline-block h-[10px] w-[10px] rounded-full bg-[#22c55e]" aria-hidden />
    </div>
  )
}

function Toolbar() {
  return (
    <div className="flex h-9 shrink-0 items-center gap-3 border-b border-white/[0.04] bg-[#0e0e14] px-3">
      <WindowDots />
      <div className="ml-2 flex items-center gap-4 text-[11px] text-white/30">
        <span className="cursor-default hover:text-white/50">File</span>
        <span className="cursor-default hover:text-white/50">Edit</span>
        <span className="cursor-default hover:text-white/50">View</span>
        <span className="cursor-default hover:text-white/50">Terminal</span>
        <span className="cursor-default hover:text-white/50">Help</span>
      </div>
    </div>
  )
}

function Sidebar() {
  return (
    <div className="hidden w-[160px] shrink-0 flex-col border-r border-white/[0.04] bg-[#111116] lg:flex">
      {/* EXPLORER header */}
      <div className="flex h-8 items-center px-3 text-[10px] uppercase tracking-[0.15em] text-white/20">
        Explorer
      </div>

      {/* Panel list */}
      {explorerItems.map((item) => (
        <div
          key={item.label}
          className={cn(
            "flex items-center gap-2 border-l-2 px-3 py-[7px] text-[11px] transition-colors",
            item.isActive
              ? "border-l-2 border-indigo-500 bg-indigo-500/[0.06] text-white/70"
              : "border-l-2 border-transparent text-white/30 hover:bg-white/[0.03] hover:text-white/50"
          )}
        >
          <span
            className={cn(
              "inline-block h-[12px] w-[12px] rounded-[3px]",
              item.iconColor
            )}
            aria-hidden
          />
          {item.label}
        </div>
      ))}

      {/* OUTLINE section */}
      <div className="mt-2 border-t border-white/[0.04] pt-2">
        <div className="flex h-7 items-center px-3 text-[10px] uppercase tracking-[0.15em] text-white/20">
          Outline
        </div>
        {outlineFiles.map((file) => (
          <div
            key={file}
            className="flex items-center gap-2 px-3 py-[5px] pl-6 text-[11px] text-white/20"
          >
            <span
              className="inline-block h-[8px] w-[8px] rounded-[1px] bg-white/[0.08]"
              aria-hidden
            />
            {file}
          </div>
        ))}
      </div>
    </div>
  )
}

function TabBar() {
  return (
    <div className="flex h-9 shrink-0 items-end gap-0 border-b border-white/[0.04] bg-[#0e0e14]">
      <div className="flex h-full items-center border-b-2 border-indigo-500 bg-[#0a0a0f] px-4 text-[11px] text-white/60">
        dialogue.ts
      </div>
      <div className="flex h-full items-center border-b-2 border-transparent px-4 text-[11px] text-white/25">
        story.map
      </div>
      <div className="flex h-full items-center border-b-2 border-transparent px-4 text-[11px] text-white/25">
        npc.config.ts
      </div>
    </div>
  )
}

function Breadcrumbs() {
  return (
    <div className="flex h-7 items-center gap-1 bg-[#0c0c12] px-4 text-[10px] text-white/20">
      <span>src</span>
      <span className="text-white/10">/</span>
      <span>dialogue</span>
      <span className="text-white/10">/</span>
      <span className="text-white/30">dialogue.ts</span>
    </div>
  )
}

function BlinkingCursor() {
  return (
    <motion.span
      className="inline-block h-[16px] w-[7px] bg-indigo-400/80"
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      aria-hidden
    />
  )
}

function CodeArea() {
  return (
    <div className="flex flex-1 overflow-hidden bg-[#0a0a0f]">
      {/* Line numbers */}
      <div className="flex w-10 shrink-0 flex-col items-end justify-start pt-1 pr-3 text-[11px] leading-[21px] text-white/[0.12] select-none">
        {codeLines.map((_, i) => (
          <span key={i}>{i + 1}</span>
        ))}
      </div>

      {/* Code lines */}
      <div className="flex flex-1 flex-col overflow-hidden pt-1">
        {codeLines.map((line, rowIdx) => (
          <div
            key={rowIdx}
            className="flex h-[21px] items-center leading-[21px]"
          >
            {/* Indent */}
            <span
              className="inline-block shrink-0 select-none"
              style={{ width: `${line.indent * 14}px` }}
            />
            {/* Tokens */}
            {line.tokens.length === 0 ? (
              <span className="inline-block text-[11px] select-none" style={{ opacity: 0 }}>
                {"\u00A0"}
              </span>
            ) : (
              line.tokens.map((tok, tokIdx) => (
                <span
                  key={tokIdx}
                  className="inline-block text-[11px] select-none"
                  style={{ color: tok.color }}
                >
                  {tok.text}
                </span>
              ))
            )}
            {/* Blinking cursor on last line */}
            {rowIdx === codeLines.length - 1 && <BlinkingCursor />}
          </div>
        ))}
      </div>
    </div>
  )
}

function AIAssistantPanel() {
  return (
    <div className="flex h-[55%] flex-col border-l border-white/[0.04] bg-[#0e0e14]">
      {/* Header */}
      <div className="flex h-7 shrink-0 items-center gap-2 border-b border-white/[0.04] px-3">
        <motion.span
          className="inline-block h-[5px] w-[5px] rounded-full bg-indigo-400/40"
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
        <span className="text-[9px] uppercase tracking-[0.12em] text-indigo-400/60">
          AI Assistant
        </span>
      </div>

      {/* Suggestions */}
      <div className="flex flex-col gap-2 overflow-auto p-2.5">
        {aiSuggestions.map((suggestion, i) => (
          <div
            key={i}
            className={cn(
              "rounded-lg border border-indigo-500/[0.08] bg-indigo-500/[0.06] p-2.5 text-[10px] leading-relaxed text-white/40",
              suggestion.warning && "border-l-2 border-l-amber-500/30"
            )}
          >
            {suggestion.text}
          </div>
        ))}
      </div>
    </div>
  )
}

function PreviewPanel() {
  return (
    <div className="flex h-[45%] flex-col border-l border-white/[0.04] border-t border-white/[0.04] bg-[#0a0a0e]">
      {/* Header */}
      <div className="flex h-7 shrink-0 items-center px-3 text-[9px] uppercase tracking-[0.12em] text-white/20">
        Preview
      </div>

      {/* Scene */}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden">
        {/* Mystical forest glow */}
        <div
          className="absolute top-1/2 left-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: "radial-gradient(circle, #6366f1 0%, #8b5cf6 40%, transparent 70%)",
            filter: "blur(20px)",
            opacity: 0.2,
          }}
        />

        {/* Ground plane */}
        <div className="absolute bottom-6 left-1/2 h-[1px] w-32 -translate-x-1/2 bg-white/[0.06]" />

        {/* NPC figure */}
        <div className="relative flex flex-col items-center" style={{ marginTop: "-4px" }}>
          {/* Head */}
          <div className="h-5 w-5 rounded-full bg-indigo-500/20 ring-1 ring-indigo-500/30" />
          {/* Body */}
          <div className="mt-[2px] h-8 w-4 rounded-t-sm bg-indigo-500/10" />
        </div>

        {/* Floating dialogue text lines */}
        <div className="absolute flex flex-col items-center" style={{ bottom: "52%" }}>
          <div className="mb-1 h-[3px] w-28 rounded bg-white/[0.06]" />
          <div className="h-[3px] w-20 rounded bg-white/[0.06]" />
        </div>

        {/* Particle dots */}
        <div className="absolute left-[25%] top-[30%] h-[3px] w-[3px] rounded-full bg-indigo-400/20" aria-hidden />
        <div className="absolute right-[30%] top-[22%] h-[2px] w-[2px] rounded-full bg-indigo-400/15" aria-hidden />
        <div className="absolute left-[60%] top-[38%] h-[2px] w-[2px] rounded-full bg-purple-400/15" aria-hidden />
      </div>
    </div>
  )
}

function RightPanel() {
  return (
    <div className="hidden w-[220px] shrink-0 flex-col lg:flex">
      <AIAssistantPanel />
      <PreviewPanel />
    </div>
  )
}

function StatusBar() {
  return (
    <div className="flex h-7 shrink-0 items-center justify-between border-t border-white/[0.04] bg-[#111116] px-3 text-[10px]">
      <div className="flex items-center gap-3 text-white/25">
        <span>main</span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-[5px] w-[5px] rounded-full bg-emerald-500/50" aria-hidden />
          <span>0 errors</span>
        </span>
        <span className="text-white/20">0 warnings</span>
      </div>
      <div className="flex items-center gap-3 text-white/25">
        <span>Ln 20, Col 28</span>
        <span className="text-white/20">Spaces: 2</span>
        <span>UTF-8</span>
        <span>TypeScript React</span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Mobile layout                                                      */
/* ------------------------------------------------------------------ */

function MobileLayout() {
  return (
    <div className="flex h-[280px] flex-col overflow-hidden rounded-2xl lg:hidden">
      {/* Compact toolbar */}
      <div className="flex h-8 shrink-0 items-center gap-2 border-b border-white/[0.04] bg-[#0e0e14] px-3">
        <WindowDots />
        <span className="ml-2 text-[11px] text-white/25">WHY Editor</span>
      </div>

      {/* Tab bar */}
      <TabBar />

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Code (first 12 lines) */}
      <div className="flex flex-1 overflow-hidden bg-[#0a0a0f]">
        <div className="flex w-8 shrink-0 flex-col items-end justify-start pt-1 pr-2 text-[10px] leading-[18px] text-white/[0.12] select-none">
          {codeLines.slice(0, 12).map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
        <div className="flex flex-col overflow-hidden pt-1">
          {codeLines.slice(0, 12).map((line, rowIdx) => (
            <div key={rowIdx} className="flex h-[18px] items-center leading-[18px]">
              <span
                className="inline-block shrink-0 select-none"
                style={{ width: `${line.indent * 12}px` }}
              />
              {line.tokens.length === 0 ? (
                <span className="inline-block text-[10px] select-none" style={{ opacity: 0 }}>
                  {"\u00A0"}
                </span>
              ) : (
                line.tokens.map((tok, tokIdx) => (
                  <span
                    key={tokIdx}
                    className="inline-block text-[10px] select-none"
                    style={{ color: tok.color }}
                  >
                    {tok.text}
                  </span>
                ))
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Status bar */}
      <div className="flex h-6 shrink-0 items-center justify-between border-t border-white/[0.04] bg-[#111116] px-3 text-[9px] text-white/20">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-[4px] w-[4px] rounded-full bg-emerald-500/50" aria-hidden />
          main
        </span>
        <span>TypeScript React</span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main exported component                                            */
/* ------------------------------------------------------------------ */

export function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Large radial gradient glow behind the workspace */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden
      >
        <div
          className="h-[400px] w-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, #6366f1 0%, #8b5cf6 40%, transparent 70%)",
            filter: "blur(100px)",
            opacity: 0.15,
          }}
        />
      </div>

      {/* Floating workspace container */}
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-full max-w-[900px]"
      >
        <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0f] shadow-2xl shadow-black/50">
          {/* Desktop layout */}
          <div className="hidden h-[440px] flex-col lg:flex">
            <Toolbar />
            <div className="flex flex-1 overflow-hidden">
              <Sidebar />
              {/* Main editor area */}
              <div className="flex min-w-0 flex-1 flex-col">
                <TabBar />
                <Breadcrumbs />
                <CodeArea />
              </div>
              <RightPanel />
            </div>
            <StatusBar />
          </div>

          {/* Mobile layout */}
          <MobileLayout />
        </div>
      </motion.div>
    </div>
  )
}