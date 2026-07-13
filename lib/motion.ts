import { type Variants, type Transition } from "framer-motion"

/* ─── Transition presets ─── */

export const smoothTransition: Transition = {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1],
}

export const springTransition: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 20,
  mass: 1,
}

export const quickTransition: Transition = {
  duration: 0.2,
  ease: "easeOut",
}

/* ─── Variants ─── */

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: quickTransition },
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
}

export const fadeUpSmall: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: quickTransition,
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: smoothTransition,
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: quickTransition,
  },
}

export const hoverLift = {
  rest: { y: 0 },
  hover: { y: -2, transition: quickTransition },
}

/* ─── Scroll reveal variants ─── */

export const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...smoothTransition, delay: 0.1 },
  },
}