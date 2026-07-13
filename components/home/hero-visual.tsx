"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

/* ------------------------------------------------------------------ */
/*  Inline "icon" helpers  so we avoid any external icon dependency    */
/* ------------------------------------------------------------------ */

function WindowDot({ color }: { color: string }) {
  return (
    <span
      className="inline-block h-[10px] w-[10px] rounded-full"
      style={{ backgroundColor: color }}
      aria-hidden
    />
  )
}

/* ------------------------------------------------------------------ */
/*  Syntax-highlighted fake code lines                                 */
/* ------------------------------------------------------------------ */

const codeLines: Array<{ indent: number; tokens: Array<{ text: string; color: string }> }> = [
  { indent: 0, tokens: [{ text: "import", color: "#c084fc" }, { text: " { ", color: "#e2e8f0" }, { text: "Character", color: "#60a5fa" }, { text: " } ", color: "#e2e8f0" }, { text: "from", color: "#c084fc" }, { text: " ", color: "#e2e8f0" }, { text: "'@why/core'", color: "#34d399" }] },
  { indent: 0, tokens: [{ text: "", color: "" }] },
  { indent: 0, tokens: [{ text: "interface", color: "#c084fc" }, { text: " ", color: "#e2e8f0" }, { text: "NPCDialogue", color: "#60a5fa" }, { text: " {", color: "#e2e8f0" }] },
  { indent: 1, tokens: [{ text: "id", color: "#e2e8f0" }, { text: ": ", color: "#64748b" }, { text: "string", color: "#c084fc" }] },
  { indent: 1, tokens: [{ text: "speaker", color: "#e2e8f0" }, { text: ": ", color: "#64748b" }, { text: "Character", color: "#60a5fa" }] },
  { indent: 1, tokens: [{ text: "lines", color: "#e2e8f0" }, { text: ": ", color: "#64748b" }, { text: "string", color: "#c084fc" }, { text: "[]", color: "#e2e8f0" }] },
  { indent: 1, tokens: [{ text: "mood", color: "#e2e8f0" }, { text: "?: ", color: "#64748b" }, { text: '"neutral"', color: "#34d399" }] },
  { indent: 0, tokens: [{ text: "}", color: "#e2e8f0" }] },
  { indent: 0, tokens: [{ text: "", color: "" }] },
  { indent: 0, tokens: [{ text: "const", color: "#c084fc" }, { text: " ", color: "#e2e8f0" }, { text: "dialogue", color: "#60a5fa" }, { text: " = (", color: "#e2e8f0" }] },
  { indent: 1, tokens: [{ text: "speaker", color: "#e2e8f0" }, { text: ": ", color: "#64748b" }, { text: '"Elder"', color: "#34d399" }, { text: ",", color: "#e2e8f0" }] },
  { indent: 1, tokens: [{ text: "lines", color: "#e2e8f0" }, { text: ": [", color: "#64748b" }] },
  { indent: 2, tokens: [{ text: '"The forest speaks..."', color: "#34d399" }, { text: ",", color: "#e2e8f0" }] },
  { indent: 2, tokens: [{ text: '"Listen carefully."', color: "#34d399" }] },
  { indent: 1, tokens: [{ text: "]", color: "#e2e8f0" }] },
  { indent: 0, tokens: [{ text: "})", color: "#e2e8f0" }] },
]

/* ------------------------------------------------------------------ */
/*  Sidebar panel items                                                 */
/* ------------------------------------------------------------------ */

const sidebarPanels = [
  "Story Editor",
  "Dialogue Graph",
  "Character Manager",
  "Asset Browser",
  "AI Assistant",
  "Preview Window",
]

/* ------------------------------------------------------------------ */
/*  Sub-components                                                      */
/* ------------------------------------------------------------------ */

function Toolbar() {
  return (
    <div className="flex h-9 shrink-0 items-center gap-3 border-b border-white/[0.06] bg-[#131318] px-3">
      {/* Traffic-light dots */}
      <div className="flex items-center gap-[6px]">
        <WindowDot color="#ef4444" />
        <WindowDot color="#eab308" />
        <WindowDot color="#22c55e" />
      </div>

      {/* Fake menu */}
      <div className="ml-2 flex items-center gap-4 text-[11px] text-white/30">
        <span className="hover:text-white/50 cursor-default">File</span>
        <span className="hover:text-white/50 cursor-default">Edit</span>
        <span className="hover:text-white/50 cursor-default">View</span>
      </div>
    </div>
  )
}

function Sidebar() {
  return (
    <div className="flex w-[156px] shrink-0 flex-col border-r border-white/[0.06] bg-[#131318]">
      <div className="flex h-8 items-center px-3 text-[10px] font-medium uppercase tracking-wider text-white/20">
        Explorer
      </div>
      {sidebarPanels.map((name, i) => {
        const isActive = i === 1
        return (
          <div
            key={name}
            className={cn(
              "flex items-center gap-2 border-l-2 px-3 py-[7px] text-[12px] transition-colors",
              isActive
                ? "border-indigo-500 bg-indigo-500/[0.08] text-white/80"
                : "border-transparent text-white/30 hover:bg-white/[0.03] hover:text-white/50"
            )}
          >
            {/* Tiny icon square */}
            <span
              className={cn(
                "inline-block h-[5px] w-[5px] rounded-[1px]",
                isActive ? "bg-indigo-400" : "bg-white/20"
              )}
              aria-hidden
            />
            {name}
          </div>
        )
      })}
    </div>
  )
}

function CodeEditor() {
  return (
    <div className="flex min-w-0 flex-1 flex-col bg-[#0d0d10]">
      {/* Tab bar */}
      <div className="flex h-8 shrink-0 items-center gap-0 border-b border-white/[0.06] bg-[#111114]">
        <span className="flex h-full items-center border-b-2 border-indigo-500 bg-[#0d0d10] px-4 text-[12px] text-white/60">
          dialogue.ts
        </span>
        <span className="flex h-full items-center border-b-2 border-transparent px-4 text-[12px] text-white/25">
          story.map
        </span>
      </div>

      {/* Code area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Line numbers */}
        <div className="flex w-10 shrink-0 flex-col items-end justify-start pt-3 pr-3 text-[11px] leading-[20px] text-white/15 select-none">
          {codeLines.map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>

        {/* Lines */}
        <div className="flex flex-1 flex-col pt-3 overflow-hidden">
          {codeLines.map((line, rowIdx) => (
            <div key={rowIdx} className="flex h-[20px] items-center leading-[20px]">
              <span className="inline-block w-4 shrink-0" />
              {line.tokens.length === 0 ? (
                <span className="text-[12px] text-white/40 select-none" style={{ opacity: 0.3 }}>
                  &nbsp;
                </span>
              ) : (
                line.tokens.map((tok, tokIdx) => (
                  <span
                    key={tokIdx}
                    className="text-[12px] select-none"
                    style={{ color: tok.color }}
                  >
                    {tok.text}
                  </span>
                ))
              )}
            </div>
          ))}
        </div>

        {/* Preview mini-panel */}
        <div className="hidden w-[180px] shrink-0 flex-col border-l border-white/[0.06] bg-[#0a0a0e] lg:flex">
          <div className="flex h-8 items-center border-b border-white/[0.06] px-3 text-[10px] font-medium uppercase tracking-wider text-white/20">
            Preview
          </div>
          {/* Dark scene with blue glow */}
          <div className="relative flex flex-1 items-center justify-center overflow-hidden">
            {/* Glow */}
            <div
              className="absolute h-24 w-24 rounded-full opacity-30"
              style={{
                background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
                filter: "blur(18px)",
              }}
            />
            {/* Ground line */}
            <div className="absolute bottom-8 left-1/2 h-[1px] w-20 -translate-x-1/2 bg-white/[0.06]" />
            {/* Character silhouette - simple CSS shapes */}
            <div className="relative flex flex-col items-center">
              <div className="h-4 w-4 rounded-full bg-white/[0.08]" />
              <div className="mt-[2px] h-6 w-[14px] rounded-t-sm bg-white/[0.06]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatusBar() {
  return (
    <div className="flex h-7 shrink-0 items-center justify-between border-t border-white/[0.06] bg-[#131318] px-3 text-[10px] text-white/25">
      <div className="flex items-center gap-3">
        <span>main</span>
        <span className="flex items-center gap-1">
          <span
            className="inline-block h-[6px] w-[6px] rounded-full bg-green-500/60"
            aria-hidden
          />
          0 errors
        </span>
      </div>
      <div className="flex items-center gap-3">
        <span>Ln 8, Col 12</span>
        <span>UTF-8</span>
        <span>TypeScript</span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Mobile-only simplified editor                                      */
/* ------------------------------------------------------------------ */

function MobileEditor() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      {/* Mini toolbar */}
      <div className="flex h-8 shrink-0 items-center gap-2 border-b border-white/[0.06] bg-[#131318] px-3">
        <WindowDot color="#ef4444" />
        <WindowDot color="#eab308" />
        <WindowDot color="#22c55e" />
        <span className="ml-2 text-[11px] text-white/25">dialogue.ts</span>
      </div>

      {/* Code */}
      <div className="flex flex-1 overflow-hidden">
        <div className="flex w-8 shrink-0 flex-col items-end justify-start pt-2 pr-2 text-[10px] leading-[18px] text-white/15 select-none">
          {codeLines.slice(0, 10).map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
        <div className="flex flex-col pt-2 overflow-hidden">
          {codeLines.slice(0, 10).map((line, rowIdx) => (
            <div key={rowIdx} className="flex h-[18px] items-center leading-[18px]">
              {line.tokens.map((tok, tokIdx) => (
                <span
                  key={tokIdx}
                  className="text-[11px] select-none"
                  style={{ color: tok.color }}
                >
                  {tok.text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Status bar */}
      <div className="flex h-6 shrink-0 items-center border-t border-white/[0.06] bg-[#131318] px-3 text-[9px] text-white/20">
        <span>main</span>
        <span className="ml-auto">TypeScript</span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main exported component                                            */
/* ------------------------------------------------------------------ */

export function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center lg:h-[520px]">
      {/* Ambient glow behind panel */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden
      >
        <div
          className="h-[340px] w-[560px] rounded-full opacity-20 lg:h-[420px] lg:w-[640px]"
          style={{
            background:
              "radial-gradient(ellipse at center, #6366f1 0%, #8b5cf6 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* Floating panel */}
      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-full max-w-[540px] lg:max-w-[700px]"
      >
        <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d10] overflow-hidden shadow-2xl shadow-black/40">

          {/* Desktop layout */}
          <div className="hidden flex-col h-[400px] lg:flex">
            <Toolbar />
            <div className="flex flex-1 overflow-hidden">
              <Sidebar />
              <CodeEditor />
            </div>
            <StatusBar />
          </div>

          {/* Mobile layout */}
          <div className="flex flex-col h-[320px] lg:hidden rounded-2xl overflow-hidden">
            <MobileEditor />
          </div>

        </div>
      </motion.div>
    </div>
  )
}