import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  Cpu,
  GitBranch,
  Handshake,
  MessageSquareCode,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { Reveal } from "@/components/shared/MotionPrimitives";
import { WHY_CHOOSE_US_FEATURES, type WhyChooseUsFeature } from "@/data/whyChooseUs";
import { EASE_CURVE, SPRINGS, VIEWPORT_CONFIG } from "@/lib/motion";
import { cn } from "@/lib/utils";

// ─── Static icon component (must stay outside render) ───────────────────────
function FeatureIcon({ id, className }: { id: string; className?: string }) {
  switch (id) {
    case "strategic-thinking":       return <Compass           className={className} />;
    case "expert-team":              return <Users             className={className} />;
    case "scalable-architecture":    return <Cpu               className={className} />;
    case "transparent-communication":return <MessageSquareCode className={className} />;
    case "reliable-delivery":        return <ShieldCheck       className={className} />;
    case "long-term-partnership":    return <Handshake         className={className} />;
    default:                         return <Sparkles          className={className} />;
  }
}

// ─── Visual accent: one per card, keyed to feature id ───────────────────────
function CardAccent({ feature }: { feature: WhyChooseUsFeature }) {
  const isNavy = feature.surface === "navy";

  // Strategic Thinking — 3-phase horizontal flow strip
  if (feature.id === "strategic-thinking") {
    const phases = [
      { num: "01", label: "Discover", sub: "Goals & market fit" },
      { num: "02", label: "Blueprint", sub: "Architecture & schema" },
      { num: "03", label: "Deliver", sub: "Shipped with ROI" },
    ];
    return (
      <div className="mt-6 rounded-xl border border-border/70 bg-surface-subtle/60 p-4">
        <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Delivery Methodology
        </p>
        <div className="grid grid-cols-3 gap-2">
          {phases.map((p, i) => (
            <div key={p.num} className="relative">
              <div className="rounded-lg border border-border/60 bg-card px-2.5 py-2.5 text-center">
                <span
                  className={cn(
                    "block font-mono text-[11px] font-bold",
                    i === 0
                      ? "text-brand-blue dark:text-blue-400"
                      : i === 1
                      ? "text-brand-violet dark:text-violet-400"
                      : "text-emerald-600 dark:text-emerald-400"
                  )}
                >
                  {p.num}
                </span>
                <span className="mt-1 block text-xs font-semibold text-foreground">
                  {p.label}
                </span>
                <span className="mt-0.5 block text-[11px] leading-tight text-muted-foreground">
                  {p.sub}
                </span>
              </div>
              {i < 2 && (
                <ArrowRight className="absolute -right-1.5 top-1/2 z-10 size-3 -translate-y-1/2 text-muted-foreground/50" />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Scalable Architecture (Navy) — simple system stat row
  if (feature.id === "scalable-architecture") {
    return (
      <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="mb-2 flex items-center gap-1.5">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-blue-400" />
          </span>
          <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-blue-300">
            Architecture Principles
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          {[
            { label: "Elastically Scalable", accent: "text-blue-300" },
            { label: "Event-Driven Design", accent: "text-violet-300" },
            { label: "Zero Single SPOF",    accent: "text-emerald-400" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-lg border border-white/10 bg-white/5 px-2 py-2.5"
            >
              <span className={cn("block font-semibold leading-tight", s.accent)}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Bottom three cards — a single-line pillar row (compact)
  const pillars = feature.pillars;
  return (
    <div
      className={cn(
        "mt-5 flex flex-wrap items-center gap-2",
        isNavy ? "" : ""
      )}
    >
      {pillars.map((p) => (
        <span
          key={p.label}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium",
            isNavy
              ? "border border-white/12 bg-white/6 text-slate-200"
              : "border border-border/80 bg-surface-subtle text-foreground"
          )}
        >
          <GitBranch className="size-3 shrink-0 opacity-60" />
          {p.label}
        </span>
      ))}
    </div>
  );
}

// ─── Individual bento card ───────────────────────────────────────────────────
interface BentoCardProps {
  feature: WhyChooseUsFeature;
  index: number;
  variant?: "large" | "stacked" | "bottom";
}

function BentoCard({ feature, index, variant = "bottom" }: BentoCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const isNavy = feature.surface === "navy";
  const isLarge = variant === "large";

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_CONFIG}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.42,
        delay: prefersReducedMotion ? 0 : index * 0.065,
        ease: EASE_CURVE,
      }}
      className="flex flex-col min-w-0 h-full"
    >
      <motion.article
        data-surface={isNavy ? "navy" : undefined}
        whileHover={prefersReducedMotion ? undefined : { y: -4 }}
        transition={SPRINGS.tactile}
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-2xl transition-[border-color,box-shadow] duration-300",
          isLarge ? "p-7 sm:p-9" : variant === "stacked" ? "p-6 sm:p-7" : "p-6 sm:p-7",
          isNavy
            ? "border border-white/12 bg-brand-navy-elevated/95 text-white hover:border-blue-400/30 hover:shadow-2xl hover:shadow-black/50"
            : "border border-border/80 bg-card hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-navy/5 dark:hover:shadow-black/40"
        )}
      >
        {/* Navy ambient glow */}
        {isNavy && (
          <>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-28 -right-24 size-80 rounded-full bg-brand-violet/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-20 size-64 rounded-full bg-brand-blue/15 blur-3xl"
            />
          </>
        )}

        {/* ── Card header: number (left) + icon (right) ── */}
        <div className="relative z-10 flex items-center justify-between gap-3">
          <span
            className={cn(
              "font-mono text-sm font-bold tracking-widest",
              isNavy
                ? "text-blue-300/70"
                : "text-brand-blue/60 dark:text-blue-400/60"
            )}
          >
            {feature.number}
          </span>

          <span
            className={cn(
              "inline-flex shrink-0 items-center justify-center rounded-xl border p-2.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
              isNavy
                ? "border-blue-400/25 bg-brand-blue/15 text-blue-300"
                : "border-border/70 bg-surface-subtle text-muted-foreground group-hover:border-brand-blue/40 group-hover:text-brand-blue"
            )}
          >
            <FeatureIcon id={feature.id} className="size-5" />
          </span>
        </div>

        {/* ── Title ── */}
        <div className="relative z-10 mt-5">
          <h3
            className={cn(
              "font-bold tracking-tight transition-colors duration-200",
              isLarge ? "text-2xl sm:text-[1.75rem] leading-tight" : "text-xl",
              isNavy
                ? "text-white group-hover:text-blue-200"
                : "text-foreground group-hover:text-brand-blue"
            )}
          >
            {feature.title}
          </h3>

          {/* ── Description ── */}
          <p
            className={cn(
              "mt-3 leading-relaxed",
              isLarge ? "text-[15px] sm:text-base" : "text-sm",
              isNavy ? "text-slate-300" : "text-muted-foreground"
            )}
          >
            {feature.description}
          </p>
        </div>

        {/* ── Visual accent ── */}
        <div className="relative z-10 mt-auto">
          <CardAccent feature={feature} />
        </div>
      </motion.article>
    </motion.div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────
export function WhyChooseUsSection() {
  const feat = WHY_CHOOSE_US_FEATURES;

  return (
    <section
      id="why-us"
      className="relative scroll-mt-20 overflow-hidden border-t border-border/70 bg-background py-16 sm:py-20 lg:py-28"
    >
      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(37,99,235,0.055),rgba(124,58,237,0.035)_50%,transparent_80%)] dark:bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(59,130,246,0.1),rgba(139,92,246,0.07)_50%,transparent_80%)]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* ── Heading ── */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center justify-center gap-2.5">
            <span
              aria-hidden="true"
              className="h-[2px] w-6 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet"
            />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue dark:text-blue-400">
              WHY CHOOSE US
            </span>
            <span
              aria-hidden="true"
              className="h-[2px] w-6 rounded-full bg-gradient-to-l from-brand-blue to-brand-violet"
            />
          </div>

          <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]">
            Built on expertise,{" "}
            <span className="bg-gradient-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent">
              driven by precision.
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From first discovery call to long-term partnership — a focused
            engineering team that cares about your outcomes as much as the code.
          </p>
        </Reveal>

        {/* ── Uniform 3-column × 2-row grid ── */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {feat.map((f, i) => (
            <BentoCard key={f.id} feature={f} index={i} variant="bottom" />
          ))}
        </div>
      </div>
    </section>
  );
}
