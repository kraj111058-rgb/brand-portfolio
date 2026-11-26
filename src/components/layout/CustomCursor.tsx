import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

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
      "a, button, [role='button'], [role='tab'], [role='menuitem'], summary, label"
    )
  ) {
    return "pointer";
  }
  return "default";
}

export function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState<boolean>(supportsFinePointer);
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [variant, setVariant] = useState<CursorVariant>("default");

  const visibleRef = useRef(false);
  const variantRef = useRef<CursorVariant>("default");

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const dotX = useSpring(rawX, { stiffness: 950, damping: 45, mass: 0.2 });
  const dotY = useSpring(rawY, { stiffness: 950, damping: 45, mass: 0.2 });

  const ringX = useSpring(rawX, { stiffness: 260, damping: 24, mass: 0.45 });
  const ringY = useSpring(rawY, { stiffness: 260, damping: 24, mass: 0.45 });

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

    const handleMouseMove = (event: MouseEvent) => {
      rawX.set(event.clientX);
      rawY.set(event.clientY);

      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }

      const nextVariant = resolveCursorVariant(event.target);
      if (nextVariant !== variantRef.current) {
        variantRef.current = nextVariant;
        setVariant(nextVariant);
      }
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

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", handleMouseMove);
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
    variant === "pointer"
      ? pressed
        ? 1.35
        : 1.55
      : pressed
        ? 0.82
        : 1;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
    >
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: variant === "view" ? (pressed ? 0.94 : 1) : ringScale,
        }}
        transition={{ type: "spring", stiffness: 360, damping: 26 }}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2"
      >
        {variant === "view" ? (
          <div className="flex h-8 items-center justify-center rounded-full bg-indigo-600 px-3.5 text-[11px] font-bold tracking-tight text-white shadow-lg shadow-indigo-600/30">
            View ↗
          </div>
        ) : (
          <div
            className={
              variant === "pointer"
                ? "size-9 rounded-full border border-indigo-600/75 bg-indigo-500/12 transition-colors duration-200 dark:border-indigo-400/80 dark:bg-indigo-400/15"
                : "size-9 rounded-full border border-indigo-600/45 bg-transparent transition-colors duration-200 dark:border-indigo-400/50"
            }
          />
        )}
      </motion.div>

      <motion.div
        style={{ x: dotX, y: dotY }}
        animate={{
          opacity: isVisible && variant !== "view" ? 1 : 0,
          scale: variant === "pointer" ? 0.55 : pressed ? 0.75 : 1,
        }}
        transition={{ type: "spring", stiffness: 520, damping: 30 }}
        className="fixed top-0 left-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600 shadow-xs dark:bg-indigo-400"
      />
    </div>
  );
}
