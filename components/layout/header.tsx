"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { NavLink } from "./nav-link"

const navItems = [
  { label: "Explore", href: "#explore" },
  { label: "Workflow", href: "#workflow" },
  { label: "Tools", href: "#tools" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "About", href: "#about" },
]

const toolItems = [
  { label: "Writer", href: "/writer" },
  { label: "Designer", href: "/designer" },
]

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export function Header() {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 w-full border-b transition-all duration-200",
          scrolled
            ? "border-white/[0.06] bg-[#09090b]/60 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-8 lg:px-12">
          {/* Logo */}
          <Link
            href="/"
            className="text-[22px] font-black tracking-tight text-white transition-opacity duration-200 hover:opacity-60"
          >
            WHY
          </Link>

          {/* Navigation — hidden below lg */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <NavLink key={item.label} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Language Switch — Segmented */}
            <div
              className="flex items-center rounded-lg border border-white/[0.06] bg-white/[0.02] p-[3px]"
              role="group"
              aria-label="Language switch"
            >
              <button
                className="rounded-md px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/35 transition-all duration-200 hover:text-white/70"
                aria-label="Switch to Chinese"
              >
                CN
              </button>
              <button
                className="rounded-md bg-white/[0.10] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white shadow-[0_1px_2px_rgba(0,0,0,0.3)] transition-all duration-200"
                aria-label="Current language: English"
                aria-current="true"
              >
                EN
              </button>
            </div>

            {/* Tool Links */}
            <div className="hidden md:flex items-center gap-1 mr-2">
              {toolItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-1.5 text-xs font-medium text-white/40 transition-colors hover:bg-white/[0.05] hover:text-white/70"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* GitHub Button */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group inline-flex items-center gap-2.5 rounded-xl border px-5 py-2.5 text-sm font-medium transition-all duration-200",
                "border-white/[0.08] bg-white/[0.03] text-white/70",
                "hover:-translate-y-px hover:border-white/[0.18] hover:bg-white/[0.07] hover:text-white hover:shadow-[0_0_24px_rgba(255,255,255,0.05)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
              )}
            >
              <GitHubIcon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from jumping under fixed header */}
      <div className="h-[72px]" />
    </>
  )
}