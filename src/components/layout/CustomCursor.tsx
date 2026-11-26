import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

import { SPRINGS } from "@/lib/motion";
import { cn } from "@/lib/utils";

type CursorVariant = "default" | "pointer" | "view" | "hidden";

function supportsFinePointer() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function resolveCursorVariant(target: EventTarget | null): CursorVariant {
  if (!(target instanceof Element)) return "default";
  if (target.closest("input, textarea, select, [contenteditable='true']")) {
    return "hidden";
  }
  if (target.closest("[data-cursor='view']")) {
    return "view";
  }
  if (
    target.closest(
      "a, button, [role='button'], [role='tab'], [role='menuitem'], summary, label, .cursor-pointer"
    )
  ) {
    return "pointer";
  }
  return "default";
}

function isNavySurface(target: EventTarget | null): boolean {
  if (target instanceof Element) {
    if (target.closest("[data-surface='navy']")) return true;
    if (target.closest("[data-surface='light']")) return false;
  }
  return document.documentElement.classList.contains("dark");
}

export function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState<boolean>(supportsFinePointer);
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [onNavy, setOnNavy] = useState<boolean>(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );

  const visibleRef = useRef(false);
  const variantRef = useRef<CursorVariant>("default");
  const onNavyRef = useRef(onNavy);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const dotX = useSpring(rawX, SPRINGS.cursorDot);
  const dotY = useSpring(rawY, SPRINGS.cursorDot);

  const ringX = useSpring(rawX, SPRINGS.cursorRing);
  const ringY = useSpring(rawY, SPRINGS.cursorRing);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const handleMediaChange = (event: MediaQueryListEvent) => {
      setEnabled(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  useEffect(() => {
    if (!enabled || prefersReducedMotion) {
      document.documentElement.classList.remove("has-custom-cursor");
      return;
    }

    document.documentElement.classList.add("has-custom-cursor");

    const syncFromTarget = (target: EventTarget | null) => {
      const nextVariant = resolveCursorVariant(target);
      if (nextVariant !== variantRef.current) {
        variantRef.current = nextVariant;
        setVariant(nextVariant);
      }

      const nextOnNavy = isNavySurface(target);
      if (nextOnNavy !== onNavyRef.current) {
        onNavyRef.current = nextOnNavy;
        setOnNavy(nextOnNavy);
      }
    };

    const syncAtLastPointer = () => {
      if (!visibleRef.current) return;
      const hoveredElement = document.elementFromPoint(rawX.get(), rawY.get());
      syncFromTarget(hoveredElement);
    };

    const handleMouseMove = (event: MouseEvent) => {
      rawX.set(event.clientX);
      rawY.set(event.clientY);

      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }

      syncFromTarget(event.target);
    };

    const handleMouseDown = () => setPressed(true);
    const handleMouseUp = () => setPressed(false);
    const handleMouseLeave = () => {
      visibleRef.current = false;
      setVisible(false);
    };
    const handleMouseEnter = () => {
      visibleRef.current = true;
      setVisible(true);
    };

    const themeObserver = new MutationObserver(syncAtLastPointer);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", syncAtLastPointer, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      themeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", syncAtLastPointer);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
      document.documentElement.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );
    };
  }, [enabled, prefersReducedMotion, rawX, rawY]);

  if (!enabled || prefersReducedMotion) {
    return null;
  }

  const isVisible = visible && variant !== "hidden";

  const ringScale =
    variant === "view"
      ? pressed
        ? 0.92
        : 1
      : variant === "pointer"
        ? pressed
          ? 1.28
          : 1.5
        : pressed
          ? 0.84
          : 1;

  const dotScale = variant === "pointer" ? 0.65 : pressed ? 0.72 : 1;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
    >
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="fixed top-0 left-0 will-change-transform"
      >
        <motion.div
          animate={{ opacity: isVisible ? 1 : 0, scale: ringScale }}
          transition={{ type: "spring", stiffness: 360, damping: 26 }}
          className="-translate-x-1/2 -translate-y-1/2"
        >
          {variant === "view" ? (
            <div
              className={cn(
                "flex h-8 items-center justify-center rounded-full px-3.5 text-[11px] font-bold tracking-tight transition-colors duration-200",
                onNavy
                  ? "bg-white text-brand-navy shadow-lg shadow-blue-500/20"
                  : "bg-gradient-to-r from-brand-blue to-brand-violet text-white shadow-lg shadow-brand-blue/25"
              )}
            >
              View ↗
            </div>
          ) : (
            <div
              className={cn(
                "size-9 rounded-full border transition-[background-color,border-color,box-shadow] duration-200",
                onNavy
                  ? variant === "pointer"
                    ? "border-violet-300/85 bg-blue-400/15 shadow-[0_0_24px_rgba(124,58,237,0.22)]"
                    : "border-blue-300/60 bg-transparent"
                  : variant === "pointer"
                    ? "border-brand-blue/80 bg-brand-blue/10 shadow-[0_0_18px_rgba(37,99,235,0.14)]"
                    : "border-brand-blue/45 bg-transparent"
              )}
            />
          )}
        </motion.div>
      </motion.div>

      <motion.div
        style={{ x: dotX, y: dotY }}
        className="fixed top-0 left-0 will-change-transform"
      >
        <motion.div
          animate={{
            opacity: isVisible && variant !== "view" ? 1 : 0,
            scale: dotScale,
          }}
          transition={{ type: "spring", stiffness: 520, damping: 30 }}
          className={cn(
            "size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-200",
            onNavy
              ? "bg-white shadow-[0_0_8px_rgba(96,165,250,0.75)]"
              : "bg-brand-blue shadow-xs"
          )}
        />
      </motion.div>
    </div>
  );
}
