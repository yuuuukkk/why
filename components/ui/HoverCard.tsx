"use client"

import { cn } from "@/lib/utils"

interface HoverCardProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export function HoverCard({
  children,
  className,
  as: Component = "div",
}: HoverCardProps) {
  return (
    <Component
      className={cn(
        "rounded-xl border border-white/[0.06] bg-card text-card-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/[0.12] hover:shadow-glow-sm",
        className
      )}
    >
      {children}
    </Component>
  )
}