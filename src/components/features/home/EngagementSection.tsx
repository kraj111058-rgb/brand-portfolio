import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Compass, GitPullRequest, Layers, Rocket } from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { PROCESS_STEPS } from "@/data/services";
import { EASE_CURVE, VIEWPORT_CONFIG } from "@/lib/motion";
import { cn } from "@/lib/utils";

/* ─── Phase Icon Map ────────────────────────────────────────── */
function ProcessStepIcon({
  step,
  className,
}: {
  step: string;
  className?: string;
}) {
  switch (step) {
    case "01":
      return <Compass className={className} />;
    case "02":
      return <Layers className={className} />;
    case "03":
      return <GitPullRequest className={className} />;
    case "04":
    default:
      return <Rocket className={className} />;
  }
}

/* ─── Restrained Electric Blue & Violet Accents ─────────────── */
interface StepAccent {
  labelText: string;
  indicatorHover: string;
}

const STEP_ACCENTS: Record<string, StepAccent> = {
  "01": {
    labelText: "text-brand-blue dark:text-blue-400",
    indicatorHover:
      "group-hover:border-brand-blue/60 group-hover:text-brand-blue dark:group-hover:border-blue-400/60 dark:group-hover:text-blue-400",
  },
  "02": {
    labelText: "text-brand-violet dark:text-violet-400",
    indicatorHover:
      "group-hover:border-brand-violet/60 group-hover:text-brand-violet dark:group-hover:border-violet-400/60 dark:group-hover:text-violet-400",
  },
  "03": {
    labelText: "text-brand-blue dark:text-blue-400",
    indicatorHover:
      "group-hover:border-brand-blue/60 group-hover:text-brand-blue dark:group-hover:border-blue-400/60 dark:group-hover:text-blue-400",
  },
  "04": {
    labelText: "text-brand-violet dark:text-violet-400",
    indicatorHover:
      "group-hover:border-brand-violet/60 group-hover:text-brand-violet dark:group-hover:border-violet-400/60 dark:group-hover:text-violet-400",
  },
};

/* ─── Compact Vertical Editorial Timeline Row ───────────────── */
function ProcessRow({
  item,
  idx,
  totalSteps,
  scrollYProgress,
}: {
  item: (typeof PROCESS_STEPS)[number];
  idx: number;
  totalSteps: number;
  scrollYProgress: MotionValue<number>;
}) {
  const prefersReducedMotion = useReducedMotion();
  const isFirst = idx === 0;
  const isLast = idx === totalSteps - 1;
  const segments = Math.max(1, totalSteps - 1);
  const accent = STEP_ACCENTS[item.step] ?? STEP_ACCENTS["01"];

  const prevSegmentStart = Math.max(0, (idx - 1) / segments);
  const incomingStart = prevSegmentStart + 0.65 / segments;
  const incomingEnd = idx / segments;
  const incomingScaleY = useTransform(
    scrollYProgress,
    [incomingStart, incomingEnd],
    [0, 1]
  );

  const outgoingStart = idx / segments;
  const outgoingEnd = Math.min(1, outgoingStart + 0.65 / segments);
  const outgoingScaleY = useTransform(
    scrollYProgress,
    [outgoingStart, outgoingEnd],
    [0, 1]
  );

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_CONFIG}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.4,
        delay: prefersReducedMotion ? 0 : idx * 0.05,
        ease: EASE_CURVE,
      }}
      className={cn(
        "group grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-3.5 px-2 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-x-4 sm:px-3",
        "md:grid-cols-[2.5rem_7.75rem_minmax(0,1fr)_11.25rem] md:gap-x-3.5",
        "lg:grid-cols-[2.5rem_8.75rem_minmax(0,1fr)_14.5rem] lg:gap-x-6 lg:px-4",
        "xl:grid-cols-[2.5rem_9.5rem_minmax(0,1fr)_16.5rem] xl:gap-x-10",
        "transition-colors duration-200 motion-reduce:transition-none",
        "hover:bg-surface-subtle/80 dark:hover:bg-brand-navy-elevated/35"
      )}
    >
      {/* ── Track 1: Continuous Vertical Connector Line + Circular Step Indicator ── */}
      <div className="row-span-3 flex w-9 flex-col items-center sm:w-10 md:col-start-1 md:row-start-1 md:row-span-1">
        {/* Incoming connector (hidden above step 01) */}
        <div className="flex h-4 w-full justify-center lg:h-5">
          {!isFirst && (
            <div
              aria-hidden="true"
              className="relative -mt-px h-[calc(100%+1px)] w-[1.5px] overflow-hidden bg-border/80"
            >
              <motion.span
                style={
                  prefersReducedMotion
                    ? undefined
                    : { scaleY: incomingScaleY, originY: 0 }
                }
                className="block h-full w-full bg-brand-blue/70 dark:bg-blue-400/70"
              />
            </div>
          )}
        </div>

        {/* Single Circular Step Indicator (01–04) */}
        <div
          className={cn(
            "relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-background font-mono text-xs font-bold tracking-tight text-foreground tabular-nums transition-colors duration-200 motion-reduce:transition-none sm:size-10 sm:text-[13px] dark:bg-brand-navy-elevated",
            accent.indicatorHover
          )}
        >
          {item.step}
        </div>

        {/* Outgoing connector (stops cleanly at step 04) */}
        {!isLast && (
          <div
            aria-hidden="true"
            className="relative flex w-[1.5px] flex-1 overflow-hidden bg-border/80"
          >
            <motion.span
              style={
                prefersReducedMotion
                  ? undefined
                  : { scaleY: outgoingScaleY, originY: 0 }
              }
              className="block h-full w-full bg-brand-blue/70 dark:bg-blue-400/70"
            />
          </div>
        )}
      </div>

      {/* ── Track 2: Icon + Phase Label (Left on Desktop/Tablet, Header Row on Mobile) ── */}
      <div className="col-start-2 min-w-0 pt-4 md:row-start-1 md:py-4 lg:py-5">
        <div className="flex h-9 items-center gap-2 sm:h-10">
          <ProcessStepIcon
            step={item.step}
            className={cn("size-3.5 shrink-0", accent.labelText)}
          />
          <span
            className={cn(
              "font-mono text-[11px] font-semibold uppercase tracking-[0.14em]",
              accent.labelText
            )}
          >
            {item.duration}
          </span>
        </div>
      </div>

      {/* ── Track 3: Center Column (Heading + Description) ── */}
      <div className="col-start-2 min-w-0 pt-1 md:col-start-3 md:row-start-1 md:py-4 lg:py-5">
        <h3 className="text-base font-bold leading-snug tracking-[-0.02em] text-foreground transition-colors duration-200 group-hover:text-brand-blue motion-reduce:transition-none md:pt-1 sm:text-lg lg:text-[1.1875rem] dark:group-hover:text-blue-400">
          {item.title}
        </h3>
        <p className="mt-1 max-w-[54ch] text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>

      {/* ── Track 4: Right Column (Compact Uppercase Label + Deliverable Text) ── */}
      <div className="col-start-2 min-w-0 pt-2.5 pb-4 md:col-start-4 md:row-start-1 md:py-4 lg:py-5">
        <div className="md:border-l md:border-border/75 md:pl-3.5 md:pt-0.5 lg:pl-4">
          <span className="block font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Deliverable
          </span>
          <p className="mt-0.5 text-sm font-semibold leading-snug text-foreground">
            {item.artifact}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Section ───────────────────────────────────────────────── */
export function EngagementSection() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 78%", "end 68%"],
  });

  return (
    <section
      id="process"
      className="relative scroll-mt-20 overflow-x-clip border-t border-border/70 bg-background py-14 sm:py-18 lg:py-22"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:pl-14 md:pr-8 lg:pl-16 lg:pr-10 min-[1400px]:px-8">
        <SectionHeading
          badge="Delivery Process"
          title="From initial concept to production scale in four clear phases"
          description="A structured, transparent engineering workflow built to keep business scope, system architecture, and delivery execution aligned."
          align="left"
        />

        {/* Four Compact Vertically Stacked Editorial Rows */}
        <div
          ref={timelineRef}
          className="relative mt-9 divide-y divide-border/75 border-y border-border/75 sm:mt-11"
        >
          {PROCESS_STEPS.map((item, idx) => (
            <ProcessRow
              key={item.step}
              item={item}
              idx={idx}
              totalSteps={PROCESS_STEPS.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>

      {/*
        Engagement Models block intentionally disabled; #process remains anchored cleanly above.
      */}
    </section>
  );
}
