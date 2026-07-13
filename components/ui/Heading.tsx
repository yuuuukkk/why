import { cn } from "@/lib/utils"

type HeadingLevel = "display" | "h1" | "h2" | "h3" | "h4"

interface HeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
  level?: HeadingLevel
  children: React.ReactNode
  className?: string
}

const headingStyles: Record<HeadingLevel, string> = {
  display: "text-5xl font-bold leading-none tracking-tighter sm:text-6xl md:text-7xl",
  h1: "text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl",
  h2: "text-3xl font-semibold leading-tight tracking-tight sm:text-4xl",
  h3: "text-2xl font-semibold leading-tight tracking-tight md:text-3xl",
  h4: "text-xl font-semibold leading-tight tracking-tight md:text-2xl",
}

export function Heading({
  as: Component = "h2",
  level = "h2",
  children,
  className,
}: HeadingProps) {
  return (
    <Component className={cn(headingStyles[level], className)}>
      {children}
    </Component>
  )
}