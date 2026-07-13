import { cn } from "@/lib/utils"

interface TagProps {
  children: React.ReactNode
  variant?: "default" | "secondary" | "outline"
  className?: string
}

export function Tag({ children, variant = "default", className }: TagProps) {
  const variants = {
    default: "bg-white/[0.06] text-white/70",
    secondary: "bg-zinc-800 text-zinc-300",
    outline: "border border-white/[0.1] text-white/60",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-0.5 text-xs font-medium transition-colors",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}