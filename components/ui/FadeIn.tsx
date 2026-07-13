"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { fadeIn, fadeUp, scaleIn } from "@/lib/motion"

interface FadeInProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  direction?: "none" | "up" | "scale"
  delay?: number
}

const variants = {
  none: fadeIn,
  up: fadeUp,
  scale: scaleIn,
}

export function FadeIn({
  children,
  className,
  as: Component = "div",
  direction = "up",
  delay = 0,
}: FadeInProps) {
  const variant = variants[direction]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: variant.hidden,
        visible: {
          ...variant.visible,
          transition: {
            duration: 0.2,
            ease: "easeOut",
            delay,
          },
        },
      }}
      className={cn(className)}
    >
      <Component>{children}</Component>
    </motion.div>
  )
}