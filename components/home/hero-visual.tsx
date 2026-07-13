"use client"

import { motion } from "framer-motion"
import { GlassPanel } from "@/components/ui/GlassPanel"

function FloatingCard({
  delay = 0,
  className,
  children,
}: {
  delay?: number
  className?: string
  children: React.ReactNode
}) {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center lg:h-[520px]">
      {/* Base glass panel */}
      <GlassPanel className="relative flex h-[380px] w-full max-w-[480px] flex-col items-center justify-center gap-6 overflow-hidden p-8 sm:h-[420px] md:max-w-[520px]">
        {/* Decorative dots */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute left-8 top-10 h-2 w-2 rounded-full bg-white/20" />
          <div className="absolute right-12 top-16 h-1.5 w-1.5 rounded-full bg-white/15" />
          <div className="absolute bottom-14 left-16 h-1 w-1 rounded-full bg-white/10" />
          <div className="absolute bottom-10 right-8 h-2 w-2 rounded-full bg-white/12" />
        </div>

        {/* Floating cards */}
        <FloatingCard delay={0} className="w-full">
          <div className="rounded-lg border border-white/[0.06] bg-white/[0.04] p-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md bg-white/[0.08]" />
              <div className="flex-1 space-y-2">
                <div className="h-2 w-24 rounded-full bg-white/[0.08]" />
                <div className="h-1.5 w-16 rounded-full bg-white/[0.04]" />
              </div>
            </div>
          </div>
        </FloatingCard>

        <FloatingCard delay={1.3} className="w-full">
          <div className="rounded-lg border border-white/[0.06] bg-white/[0.04] p-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md bg-white/[0.08]" />
              <div className="flex-1 space-y-2">
                <div className="h-2 w-32 rounded-full bg-white/[0.08]" />
                <div className="h-1.5 w-20 rounded-full bg-white/[0.04]" />
              </div>
            </div>
          </div>
        </FloatingCard>

        <FloatingCard delay={2.6} className="w-full">
          <div className="rounded-lg border border-white/[0.06] bg-white/[0.04] p-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md bg-white/[0.08]" />
              <div className="flex-1 space-y-2">
                <div className="h-2 w-20 rounded-full bg-white/[0.08]" />
                <div className="h-1.5 w-14 rounded-full bg-white/[0.04]" />
              </div>
            </div>
          </div>
        </FloatingCard>
      </GlassPanel>
    </div>
  )
}