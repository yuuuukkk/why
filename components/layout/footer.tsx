import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const footerLinks = [
  { label: "Explore", href: "#explore" },
  { label: "Workflow", href: "#workflow" },
  { label: "Tools", href: "#tools" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "About", href: "#about" },
]

/* ------------------------------------------------------------------ */
/*  Client-only background: particle dots + cityscape silhouette      */
/* ------------------------------------------------------------------ */

const buildings: Array<{
  x: number
  width: number
  height: number
  windows: Array<{ x: number; y: number }>
}> = [
  { x: 0, width: 28, height: 38, windows: [{ x: 6, y: 8 }, { x: 16, y: 8 }, { x: 6, y: 20 }, { x: 16, y: 20 }] },
  { x: 34, width: 18, height: 54, windows: [{ x: 40, y: 10 }, { x: 40, y: 22 }, { x: 40, y: 34 }] },
  { x: 58, width: 32, height: 28, windows: [{ x: 64, y: 6 }, { x: 76, y: 6 }] },
  { x: 96, width: 14, height: 64, windows: [{ x: 100, y: 10 }, { x: 100, y: 24 }, { x: 100, y: 38 }] },
  { x: 116, width: 40, height: 34, windows: [{ x: 124, y: 8 }, { x: 136, y: 8 }, { x: 124, y: 20 }, { x: 136, y: 20 }] },
  { x: 164, width: 20, height: 50, windows: [{ x: 170, y: 10 }, { x: 170, y: 26 }] },
  { x: 190, width: 36, height: 24, windows: [{ x: 198, y: 6 }, { x: 212, y: 6 }] },
  { x: 232, width: 16, height: 58, windows: [{ x: 236, y: 10 }, { x: 236, y: 24 }, { x: 236, y: 38 }] },
  { x: 254, width: 42, height: 32, windows: [{ x: 262, y: 6 }, { x: 276, y: 6 }, { x: 262, y: 18 }, { x: 276, y: 18 }] },
  { x: 302, width: 22, height: 46, windows: [{ x: 308, y: 8 }, { x: 308, y: 22 }] },
  { x: 330, width: 30, height: 30, windows: [{ x: 338, y: 8 }, { x: 350, y: 8 }] },
  { x: 366, width: 18, height: 60, windows: [{ x: 370, y: 10 }, { x: 370, y: 26 }, { x: 370, y: 40 }] },
  { x: 390, width: 38, height: 26, windows: [{ x: 400, y: 6 }, { x: 414, y: 6 }] },
  { x: 434, width: 20, height: 44, windows: [{ x: 438, y: 8 }, { x: 438, y: 22 }] },
  { x: 460, width: 34, height: 36, windows: [{ x: 468, y: 8 }, { x: 482, y: 8 }, { x: 468, y: 20 }] },
]

const particles: Array<{ cx: number; cy: number; r: number }> = [
  { cx: 42, cy: 22, r: 1.5 },
  { cx: 138, cy: 10, r: 1 },
  { cx: 210, cy: 30, r: 1.2 },
  { cx: 305, cy: 18, r: 1 },
  { cx: 418, cy: 26, r: 1.5 },
  { cx: 88, cy: 14, r: 0.8 },
  { cx: 350, cy: 8, r: 1 },
  { cx: 480, cy: 20, r: 1.2 },
]

function FooterBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Floating particles */}
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {particles.map((p, i) => (
          <circle
            key={`particle-${i}`}
            cx={`${(p.cx / 500) * 100}%`}
            cy={p.cy}
            r={p.r}
            fill="rgba(99,102,241,0.15)"
          />
        ))}
      </svg>

      {/* Cityscape silhouette at the very bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 500 70"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Buildings */}
        {buildings.map((b, i) => (
          <rect
            key={`building-${i}`}
            x={b.x}
            y={70 - b.height}
            width={b.width}
            height={b.height}
            fill="rgba(255,255,255,0.02)"
          />
        ))}
        {/* Windows */}
        {buildings.flatMap((b, bi) =>
          b.windows.map((w, wi) => (
            <rect
              key={`window-${bi}-${wi}`}
              x={w.x}
              y={w.y}
              width={2}
              height={2}
              fill="rgba(255,255,255,0.04)"
            />
          ))
        )}
      </svg>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Footer (server component)                                         */
/* ------------------------------------------------------------------ */

export function Footer() {
  return (
    <footer className="relative w-full border-t border-white/[0.06]">
      {/* Background effect */}
      <FooterBackground />

      {/* Content layer */}
      <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        {/* Top section */}
        <div className="flex flex-col gap-12 py-20 md:flex-row md:justify-between md:py-24">
          {/* Left — Branding */}
          <div className="flex max-w-xs flex-col gap-4">
            <Link
              href="/"
              className="text-[22px] font-black tracking-tight text-white transition-opacity duration-200 hover:opacity-60"
            >
              WHY
            </Link>
            <div className="space-y-1">
              <p className="text-sm leading-relaxed text-white/60">
                让 AI 成为你的游戏开发搭档。
              </p>
              <p className="text-sm leading-relaxed text-white/40">
                Explore Better. Build Smarter.
              </p>
            </div>
          </div>

          {/* Right — Navigation */}
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-10 gap-y-4">
            {footerLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-sm font-medium text-white/35 transition-all duration-200",
                  "hover:text-white/60",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.04] py-8 md:flex-row">
          <p className="text-xs text-white/30">
            &copy; 2026 WHY
          </p>
          <p className="text-xs text-white/30">
            Built for Indie Game Developers.
          </p>
        </div>
      </div>
    </footer>
  )
}
