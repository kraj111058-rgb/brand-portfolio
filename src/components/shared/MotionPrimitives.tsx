import { type MouseEvent, type ReactNode, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";

import {
  EASE_CURVE,
  SPRINGS,
  TRANSITIONS,
  VIEWPORT_CONFIG,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
  y?: number;
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_CONFIG}
      transition={{ duration: TRANSITIONS.reveal.duration, delay, ease: EASE_CURVE }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  onClick?: () => void;
  cursorMode?: string;
  surface?: "light" | "navy";
}

export function SpotlightCard({
  children,
  className,
  spotlightColor,
  onClick,
  cursorMode,
  surface = "light",
}: SpotlightCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(-320);
  const mouseY = useMotionValue(-320);

  const resolvedSpotlight =
    spotlightColor ??
    (surface === "navy"
      ? "rgba(59, 130, 246, 0.18)"
      : "rgba(37, 99, 235, 0.1)");

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(-320);
    mouseY.set(-320);
  };

  const spotlightBackground = useMotionTemplate`radial-gradient(380px circle at ${mouseX}px ${mouseY}px, ${resolvedSpotlight}, transparent 75%)`;

  return (
    <motion.div
      data-cursor={cursorMode}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={prefersReducedMotion ? undefined : { y: -3 }}
      transition={SPRINGS.tactile}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/80 bg-card transition-[border-color,box-shadow,background-color] duration-300 hover:border-brand-blue/35 hover:shadow-xl hover:shadow-brand-navy/6 dark:hover:shadow-black/45",
        surface === "navy" &&
          "border-white/12 bg-brand-navy-elevated/90 hover:border-blue-400/35 hover:shadow-2xl hover:shadow-black/50",
        className
      )}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlightBackground }}
      />
      <div className="relative z-10 flex h-full flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
}

interface MagneticWrapProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticWrap({
  children,
  className,
  strength = 0.22,
}: MagneticWrapProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springX = useSpring(rawX, SPRINGS.magnetic);
  const springY = useSpring(rawY, SPRINGS.magnetic);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !ref.current) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    rawX.set(offsetX * strength);
    rawY.set(offsetY * strength);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={prefersReducedMotion ? undefined : { x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("inline-flex", className)}
    >
      {children}
    </motion.div>
  );
}
