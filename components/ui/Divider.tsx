import { cn } from "@/lib/utils"

interface DividerProps {
  className?: string
  orientation?: "horizontal" | "vertical"
}

export function Divider({ className, orientation = "horizontal" }: DividerProps) {
  return (
    <hr
      className={cn(
        "border-white/[0.06]",
        orientation === "vertical"
          ? "h-full w-px border-r"
          : "w-full border-t",
        className
      )}
    />
  )
}