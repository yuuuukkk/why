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

export function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
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
                  "hover:text-white/70",
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