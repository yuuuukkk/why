import { cn } from "@/lib/utils"

interface GlassPanelProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export function GlassPanel({
  children,
  className,
  as: Component = "div",
}: GlassPanelProps) {
  return (
    <Component
      className={cn(
        "rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl",
        className
      )}
    >
      {children}
    </Component>
  )
}