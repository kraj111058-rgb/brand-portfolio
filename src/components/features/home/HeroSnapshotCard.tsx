import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EASE_CURVE } from "@/lib/motion";

const HERO_TABS = [
  { id: "saas", label: "SaaS", icon: Layers },
  { id: "mobile", label: "FinTech", icon: Smartphone },
  { id: "ai", label: "AI Ops", icon: Cpu },
] as const;

const CHART_BARS = [
  { label: "Q1", value: 45 },
  { label: "Q2", value: 62 },
  { label: "Q3", value: 58 },
  { label: "Q4", value: 78 },
  { label: "Q5", value: 88 },
  { label: "Now", value: 96 },
];

export function HeroSnapshotCard() {
  const [activeTab, setActiveTab] = useState<string>("saas");

  return (
    <div className="group/card relative rounded-3xl border border-border/80 bg-card/90 p-4 shadow-2xl shadow-indigo-950/8 backdrop-blur-md transition-all duration-300 hover:border-indigo-500/35 hover:shadow-indigo-600/12 dark:shadow-black/45 sm:p-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-transparent to-teal-500/20 opacity-0 blur-sm transition-opacity duration-300 group-hover/card:opacity-100"
      />

      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            Performance Snapshot
          </span>
        </div>
        <Badge variant="secondary" className="rounded-full text-[11px]">
          Verified Benchmarks
        </Badge>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={(val) => {
          if (typeof val === "string") setActiveTab(val);
        }}
        className="gap-4"
      >
        <TabsList className="grid w-full grid-cols-3">
          {HERO_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="relative z-0 px-2 text-xs data-[active]:border-transparent data-[active]:bg-transparent data-[active]:shadow-none"
              >
                {isActive && (
                  <motion.span
                    layoutId="hero-tab-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 -z-10 rounded-lg border border-border/60 bg-background shadow-xs"
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
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: EASE_CURVE }}
                className="space-y-4 rounded-2xl border border-border/70 bg-muted/40 p-4 text-left"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      Platform Reliability &amp; Speed
                    </p>
                    <p className="mt-0.5 text-xl font-extrabold text-foreground sm:text-2xl">
                      99.98% Uptime
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    <TrendingUp className="size-3.5" />
                    +42% Faster Releases
                  </span>
                </div>

                <div className="grid h-20 grid-cols-6 items-end gap-2 pt-2 sm:h-24">
                  {CHART_BARS.map((bar, idx) => (
                    <div
                      key={bar.label}
                      className="group/bar flex h-full flex-col justify-end gap-1"
                    >
                      <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{
                          duration: 0.45,
                          delay: idx * 0.05,
                          ease: EASE_CURVE,
                        }}
                        style={{ height: `${bar.value}%`, originY: 1 }}
                        className="w-full rounded-t-md bg-gradient-to-t from-indigo-600 to-sky-400 opacity-85 transition-all duration-200 group-hover/bar:scale-x-105 group-hover/bar:opacity-100 group-hover/bar:shadow-md group-hover/bar:shadow-indigo-500/30"
                      />
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  <div className="rounded-xl border border-border/70 bg-background/80 p-2.5 transition-colors hover:border-indigo-500/35 sm:p-3">
                    <p className="text-muted-foreground">Core Web Vitals</p>
                    <p className="mt-1 font-bold text-foreground">
                      98 / 100 Score
                    </p>
                  </div>
                  <div className="rounded-xl border border-border/70 bg-background/80 p-2.5 transition-colors hover:border-indigo-500/35 sm:p-3">
                    <p className="text-muted-foreground">Release Cadence</p>
                    <p className="mt-1 font-bold text-foreground">
                      2-Week Sprints
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "mobile" && (
              <motion.div
                key="mobile"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: EASE_CURVE }}
                className="space-y-4 rounded-2xl border border-border/70 bg-muted/40 p-4 text-left"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      Cross-Platform Wallet Volume
                    </p>
                    <p className="mt-0.5 text-xl font-extrabold text-foreground sm:text-2xl">
                      2.4M+ Monthly Transactions
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-teal-500/15 px-2.5 py-1 text-xs font-bold text-teal-600 dark:text-teal-400">
                    <ShieldCheck className="size-3.5" />
                    Biometric KYC
                  </span>
                </div>

                <div className="space-y-2">
                  {[
                    { label: "iOS & Android Parity", pct: "100%" },
                    { label: "Onboarding Completion", pct: "91%" },
                    { label: "Crash-Free Sessions", pct: "99.94%" },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between rounded-xl border border-border/70 bg-background/80 px-3 py-2 text-xs transition-all hover:translate-x-0.5 hover:border-teal-500/35"
                    >
                      <span className="font-medium text-muted-foreground">
                        {row.label}
                      </span>
                      <span className="font-bold text-foreground">
                        {row.pct}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="size-4 shrink-0 text-teal-500" />
                  <span>Flutter, React Native, Swift &amp; Kotlin</span>
                </div>
              </motion.div>
            )}

            {activeTab === "ai" && (
              <motion.div
                key="ai"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: EASE_CURVE }}
                className="space-y-4 rounded-2xl border border-border/70 bg-muted/40 p-4 text-left"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      Autonomous Copilot Resolution
                    </p>
                    <p className="mt-0.5 text-xl font-extrabold text-foreground sm:text-2xl">
                      68% Automated Resolution
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-violet-500/15 px-2.5 py-1 text-xs font-bold text-violet-600 dark:text-violet-400">
                    <Sparkles className="size-3.5" />
                    Verified Sources
                  </span>
                </div>

                <div className="space-y-2 rounded-xl border border-border/70 bg-background/90 p-3.5 text-xs transition-colors hover:border-violet-500/35">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5 font-semibold text-foreground">
                      <Activity className="size-3.5 text-indigo-500" />
                      Agent Pipeline Trace
                    </span>
                    <span>11s median</span>
                  </div>
                  <p className="leading-relaxed text-muted-foreground">
                    Searches documentation, verifies account permissions, and
                    delivers cited responses in real time (0.96 confidence).
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
                  <span>Grounded in verified company data</span>
                  <Badge variant="outline" className="text-[11px]">
                    SOC 2 Ready
                  </Badge>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </div>
  );
}
