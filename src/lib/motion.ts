export const EASE_CURVE = [0.22, 1, 0.36, 1] as const;

export const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.14,
} as const;

export const SPRINGS = {
  tactile: { type: "spring", stiffness: 360, damping: 26 },
  magnetic: { type: "spring", stiffness: 280, damping: 22, mass: 0.35 },
  gentle: { type: "spring", stiffness: 220, damping: 28 },
  cursorDot: { stiffness: 950, damping: 45, mass: 0.2 },
  cursorRing: { stiffness: 250, damping: 24, mass: 0.45 },
} as const;

export const TRANSITIONS = {
  reveal: { duration: 0.52, ease: EASE_CURVE },
  quick: { duration: 0.24, ease: EASE_CURVE },
  tabSwitch: { duration: 0.22, ease: EASE_CURVE },
} as const;

export const REVEAL_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  },
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  },
  staggerItem: {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.48, ease: EASE_CURVE },
    },
  },
} as const;
