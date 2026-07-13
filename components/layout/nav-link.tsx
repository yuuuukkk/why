"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

export interface NavLinkProps {
  href: string
  children: React.ReactNode
  isActive?: boolean
  className?: string
}

export function NavLink({ href, children, isActive, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-200",
        isActive
          ? "text-white"
          : "text-white/35 hover:text-white",
        className
      )}
    >
      {children}
      <span
        className={cn(
          "absolute bottom-0.5 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-white transition-all duration-200",
          isActive ? "w-3.5" : "w-0 group-hover:w-3.5"
        )}
      />
    </Link>
  )
}