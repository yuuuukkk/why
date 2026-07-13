"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Tag } from "@/components/ui/Tag"
import { Button } from "@/components/ui/Button"
import { GridBackground } from "@/components/ui/GridBackground"
import { HeroVisual } from "./hero-visual"

export function Hero() {
  return (
    <Section className="overflow-hidden">
      {/* Background */}
      <GridBackground cellSize={80} opacity={0.025} />

      <Container>
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-12 xl:gap-20">
          {/* Left — Content */}
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              <Tag variant="outline" className="mb-6">
                AI Powered Workflow
              </Tag>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Build Better Games
              <br />
              <span className="text-white/40">with AI.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              className="mt-6 max-w-md text-base leading-relaxed text-white/40 sm:text-lg"
            >
              WHY helps game developers organize ideas,
              design gameplay, generate content,
              and build faster.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <Button variant="primary" size="lg" className="rounded-xl px-7">
                Start Exploring
              </Button>
              <Button variant="outline" size="lg" className="rounded-xl px-7">
                View Workflow
              </Button>
            </motion.div>
          </div>

          {/* Right — Visual */}
          <motion.div
            className="flex flex-1 justify-center lg:justify-end"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}