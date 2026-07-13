import { cn } from "@/lib/utils"

interface GridBackgroundProps {
  className?: string
  cellSize?: number
  opacity?: number
}

export function GridBackground({
  className,
  cellSize = 64,
  opacity = 0.03,
}: GridBackgroundProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,${opacity}) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,${opacity}) 1px, transparent 1px)`,
          backgroundSize: `${cellSize}px ${cellSize}px`,
        }}
      />
    </div>
  )
}