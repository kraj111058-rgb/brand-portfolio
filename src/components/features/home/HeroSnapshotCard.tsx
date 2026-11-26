import { useEffect, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import {
  Activity,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EASE_CURVE, SPRINGS, TRANSITIONS } from "@/lib/motion";
import { cn } from "@/lib/utils";

const HERO_TABS = [
  { id: "saas", label: "SaaS", icon: Layers },
  { id: "mobile", label: "FinTech", icon: Smartphone },
  { id: "ai", label: "AI Ops", icon: Cpu },
] as const;

const SAAS_VELOCITY_BARS = [
  { label: "Q1", value: 46, metric: "1.4x" },
  { label: "Q2", value: 62, metric: "1.9x" },
  { label: "Q3", value: 58, metric: "1.8x" },
  { label: "Q4", value: 78, metric: "2.4x" },
  { label: "Q5", value: 88, metric: "2.8x" },
  { label: "Now", value: 96, metric: "3.2x" },
];

const FINTECH_BENCHMARKS = [
  { label: "iOS & Android Parity", value: 100, suffix: "%" },
  { label: "Onboarding Flow Completion", value: 91, suffix: "%" },
  { label: "Crash-Free Sessions", value: 99.94, decimals: 2, suffix: "%" },
];

const AI_PIPELINE_STAGES = [
  { stage: "Vector Retrieval", score: 96, latency: "1.8s" },
  { stage: "Policy Verification", score: 94, latency: "3.2s" },
  { stage: "Grounded Response", score: 98, latency: "6.0s" },
];

interface AnimatedCounterProps {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

function AnimatedCounter({
  target,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
}: AnimatedCounterProps) {
  const prefersReducedMotion = useReducedMotion();
  const motionValue = useMotionValue(prefersReducedMotion ? target : 0);
  const formatted = useTransform(
    motionValue,
    (latest) => `${prefix}${latest.toFixed(decimals)}${suffix}`
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      motionValue.set(target);
      return;
    }

    motionValue.set(0);
    const controls = animate(motionValue, target, {
      duration: 0.85,
      ease: EASE_CURVE,
    });

    return () => controls.stop();
  }, [motionValue, prefersReducedMotion, target]);

  return (
    <motion.span className={cn("tabular-nums", className)}>
      {formatted}
    </motion.span>
  );
}

export function HeroSnapshotCard() {
  const prefersReducedMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<string>("saas");
  const [hoveredBarIndex, setHoveredBarIndex] = useState<number | null>(null);

  return (
    <motion.div
      animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }}
      transition={
        prefersReducedMotion
          ? undefined
          : { duration: 6.5, repeat: Infinity, ease: "easeInOut" }
      }
      className="relative mx-auto w-full max-w-xl lg:max-w-none"
    >
      <div
        data-surface="navy"
        className="group/card relative overflow-hidden rounded-2xl border border-white/12 bg-brand-navy/95 p-4 text-left text-white shadow-[0_28px_70px_-18px_rgba(9,17,36,0.34)] backdrop-blur-xl transition-colors duration-300 hover:border-blue-400/35 sm:p-6 dark:border-blue-400/20 dark:shadow-[0_28px_70px_-18px_rgba(0,0,0,0.65)]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-6 left-6 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -right-16 size-56 rounded-full bg-brand-violet/20 blur-3xl transition-opacity duration-500 group-hover/card:opacity-100"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-16 size-52 rounded-full bg-brand-blue/15 blur-3xl"
        />

        <div className="relative z-10 mb-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <motion.span
              aria-hidden="true"
              animate={
                prefersReducedMotion
                  ? undefined
                  : { scale: [1, 1.35, 1], opacity: [0.9, 0.4, 0.9] }
              }
              transition={
                prefersReducedMotion
                  ? undefined
                  : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
              }
              className="size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.75)]"
            />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-300">
              Engineering Telemetry
            </span>
          </div>

          <span className="inline-flex items-center rounded-full border border-white/12 bg-white/6 px-2.5 py-0.5 text-[11px] font-medium text-slate-300">
            Sample Benchmarks
          </span>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={(val) => {
            if (typeof val === "string") {
              setActiveTab(val);
              setHoveredBarIndex(null);
            }
          }}
          className="relative z-10 gap-4"
        >
          <TabsList className="grid w-full grid-cols-3 rounded-xl border border-white/10 bg-[#050a18]/80 p-1">
            {HERO_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={cn(
                    "relative z-0 rounded-lg px-2 py-2 text-xs font-semibold transition-colors data-[active]:border-transparent data-[active]:bg-transparent data-[active]:shadow-none",
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-slate-200"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="hero-tab-pill"
                      transition={SPRINGS.tactile}
                      className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-brand-blue to-brand-violet shadow-sm shadow-blue-600/30"
                    />
                  )}
                  <Icon className="size-3.5 shrink-0" />
                  <span>{tab.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          <TabsContent value={activeTab}>
            <AnimatePresence mode="wait">
              {activeTab === "saas" && (
                <motion.div
                  key="saas"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={TRANSITIONS.tabSwitch}
                  className="space-y-4 rounded-xl border border-white/10 bg-[#081024]/85 p-4"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="text-xs font-medium text-slate-400">
                        Cloud Platform SLA Target
                      </p>
                      <p className="mt-0.5 text-2xl font-bold tracking-tight text-white sm:text-[1.65rem]">
                        <AnimatedCounter target={99.98} decimals={2} suffix="%" />{" "}
                        <span className="text-base font-semibold text-slate-300">
                          Uptime
                        </span>
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full border border-blue-400/25 bg-blue-500/15 px-2.5 py-1 text-xs font-semibold text-blue-200">
                      <TrendingUp className="size-3.5" />
                      <AnimatedCounter prefix="+" target={42} suffix="%" />{" "}
                      Release Velocity
                    </span>
                  </div>

                  <div className="rounded-xl border border-white/8 bg-[#050a18]/65 p-3">
                    <div className="mb-2 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Sprint Deployment Throughput</span>
                      <span className="font-mono text-blue-300">
                        {hoveredBarIndex !== null
                          ? `${SAAS_VELOCITY_BARS[hoveredBarIndex].label}: ${SAAS_VELOCITY_BARS[hoveredBarIndex].metric}`
                          : "6-Cycle Index"}
                      </span>
                    </div>

                    <div className="relative grid h-24 grid-cols-6 items-end gap-2 pt-3">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 top-1/2 border-t border-dashed border-white/10"
                      />
                      {SAAS_VELOCITY_BARS.map((bar, idx) => {
                        const isBarHighlighted = hoveredBarIndex === idx;
                        return (
                          <div
                            key={bar.label}
                            onMouseEnter={() => setHoveredBarIndex(idx)}
                            onMouseLeave={() => setHoveredBarIndex(null)}
                            className="group/bar relative flex h-full flex-col items-center justify-end gap-1.5"
                          >
                            <div className="flex h-full w-full items-end">
                              <motion.div
                                initial={{ scaleY: prefersReducedMotion ? 1 : 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{
                                  duration: prefersReducedMotion ? 0 : 0.48,
                                  delay: prefersReducedMotion ? 0 : idx * 0.055,
                                  ease: EASE_CURVE,
                                }}
                                style={{ height: `${bar.value}%` }}
                                className={cn(
                                  "w-full origin-bottom rounded-t-md bg-gradient-to-t from-brand-blue via-blue-400 to-violet-400 transition-[opacity,filter,box-shadow] duration-200",
                                  isBarHighlighted
                                    ? "opacity-100 brightness-110 shadow-[0_0_16px_rgba(59,130,246,0.45)]"
                                    : "opacity-85 group-hover/bar:opacity-100"
                                )}
                              />
                            </div>
                            <span className="font-mono text-[10px] text-slate-400 transition-colors group-hover/bar:text-blue-200">
                              {bar.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 text-xs">
                    <div className="rounded-xl border border-white/10 bg-[#050a18]/65 p-3 transition-colors hover:border-blue-400/30">
                      <p className="text-slate-400">Lighthouse Target</p>
                      <p className="mt-1 font-mono text-sm font-bold text-white">
                        <AnimatedCounter target={98} suffix=" / 100" />
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-[#050a18]/65 p-3 transition-colors hover:border-violet-400/30">
                      <p className="text-slate-400">Delivery Cadence</p>
                      <p className="mt-1 font-mono text-sm font-bold text-white">
                        2-Week Sprints
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "mobile" && (
                <motion.div
                  key="mobile"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={TRANSITIONS.tabSwitch}
                  className="space-y-4 rounded-xl border border-white/10 bg-[#081024]/85 p-4"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="text-xs font-medium text-slate-400">
                        Wallet Throughput Architecture
                      </p>
                      <p className="mt-0.5 text-2xl font-bold tracking-tight text-white sm:text-[1.65rem]">
                        <AnimatedCounter target={2.4} decimals={1} suffix="M+" />{" "}
                        <span className="text-base font-semibold text-slate-300">
                          Monthly Txns
                        </span>
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full border border-violet-400/25 bg-violet-500/15 px-2.5 py-1 text-xs font-semibold text-violet-200">
                      <ShieldCheck className="size-3.5" />
                      Biometric KYC
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {FINTECH_BENCHMARKS.map((row, idx) => (
                      <div
                        key={row.label}
                        className="rounded-xl border border-white/10 bg-[#050a18]/65 p-3 transition-colors hover:border-blue-400/30"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-slate-300">
                            {row.label}
                          </span>
                          <span className="font-mono font-bold text-white">
                            <AnimatedCounter
                              target={row.value}
                              decimals={row.decimals ?? 0}
                              suffix={row.suffix}
                            />
                          </span>
                        </div>
                        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            initial={{ width: prefersReducedMotion ? `${row.value}%` : "0%" }}
                            animate={{ width: `${row.value}%` }}
                            transition={{
                              duration: prefersReducedMotion ? 0 : 0.7,
                              delay: prefersReducedMotion ? 0 : idx * 0.08,
                              ease: EASE_CURVE,
                            }}
                            className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-violet"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="size-4 shrink-0 text-blue-400" />
                    <span>Flutter, React Native, Swift &amp; Kotlin pipelines</span>
                  </div>
                </motion.div>
              )}

              {activeTab === "ai" && (
                <motion.div
                  key="ai"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={TRANSITIONS.tabSwitch}
                  className="space-y-4 rounded-xl border border-white/10 bg-[#081024]/85 p-4"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="text-xs font-medium text-slate-400">
                        Support Copilot Target
                      </p>
                      <p className="mt-0.5 text-2xl font-bold tracking-tight text-white sm:text-[1.65rem]">
                        <AnimatedCounter target={68} suffix="%" />{" "}
                        <span className="text-base font-semibold text-slate-300">
                          Auto-Resolved
                        </span>
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full border border-violet-400/25 bg-violet-500/15 px-2.5 py-1 text-xs font-semibold text-violet-200">
                      <Sparkles className="size-3.5" />
                      Citation Grounded
                    </span>
                  </div>

                  <div className="space-y-2.5 rounded-xl border border-white/10 bg-[#050a18]/65 p-3.5 text-xs">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="inline-flex items-center gap-1.5 font-semibold text-white">
                        <Activity className="size-3.5 text-blue-400" />
                        Agent Execution Pipeline
                      </span>
                      <span className="font-mono text-blue-300">
                        <AnimatedCounter target={11} suffix="s median" />
                      </span>
                    </div>

                    <div className="space-y-2 pt-1">
                      {AI_PIPELINE_STAGES.map((item, idx) => (
                        <div key={item.stage} className="space-y-1">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="text-slate-300">{item.stage}</span>
                            <span className="font-mono text-slate-400">
                              {item.latency} · {item.score}%
                            </span>
                          </div>
                          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                            <motion.div
                              initial={{
                                width: prefersReducedMotion ? `${item.score}%` : "0%",
                              }}
                              animate={{ width: `${item.score}%` }}
                              transition={{
                                duration: prefersReducedMotion ? 0 : 0.65,
                                delay: prefersReducedMotion ? 0 : idx * 0.08,
                                ease: EASE_CURVE,
                              }}
                              className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-violet"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300">
                    <span>Grounded in private enterprise docs</span>
                    <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-slate-200">
                      SOC 2 Aligned
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
}
