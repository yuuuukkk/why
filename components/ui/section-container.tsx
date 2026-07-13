import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType
  size?: "default" | "sm" | "lg" | "xl"
}

const SectionContainer = React.forwardRef<HTMLElement, SectionContainerProps>(
  ({ className, as: Component = "section", size = "default", ...props }, ref) => {
    const sizeClasses = {
      sm: "py-16 md:py-24",
      default: "py-24 md:py-32",
      lg: "py-32 md:py-40",
      xl: "py-40 md:py-52",
    }

    return (
      <Component
        ref={ref}
        className={cn(
          "relative w-full",
          sizeClasses[size],
          className
        )}
        {...props}
      />
    )
  }
)
SectionContainer.displayName = "SectionContainer"

interface SectionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: "default" | "narrow" | "wide"
}

const SectionContent = React.forwardRef<HTMLDivElement, SectionContentProps>(
  ({ className, width = "default", ...props }, ref) => {
    const widthClasses = {
      narrow: "max-w-3xl",
      default: "max-w-5xl",
      wide: "max-w-7xl",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto px-6 md:px-8 lg:px-12",
          widthClasses[width],
          className
        )}
        {...props}
      />
    )
  }
)
SectionContent.displayName = "SectionContent"

export { SectionContainer, SectionContent }