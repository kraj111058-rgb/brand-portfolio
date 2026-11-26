import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";

import { EASE_CURVE } from "@/lib/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppShell } from "@/context/useAppShell";
import { BRAND_INFO, CLIENT_LOGOS, HERO_METRICS } from "@/data/agencyData";

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

export function HeroSection() {
  const { openInquiryModal } = useAppShell();
  const [activeTab, setActiveTab] = useState<string>("saas");

  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.85, 0.6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_75%_50%_at_50%_-10%,rgba(79,70,229,0.16),transparent)] dark:bg-[radial-gradient(ellipse_75%_50%_at_50%_-10%,rgba(99,102,241,0.24),transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(128,128,128,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.06)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_15%,#000_55%,transparent_100%)]"
      />

      <div className="mx-auto max-w-7xl px-4 pt-10 pb-14 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="flex min-w-0 flex-col items-start text-left lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE_CURVE }}
            >
              <Badge
                variant="outline"
                className="mb-5 gap-2 rounded-full border-indigo-500/30 bg-indigo-500/8 px-3 py-1.5 text-[11px] font-semibold text-indigo-700 transition-colors hover:border-indigo-500/60 hover:bg-indigo-500/15 dark:text-indigo-300 sm:text-xs"
              >
                <Star className="size-3.5 shrink-0 fill-amber-400 text-amber-400" />
                <span>
                  {BRAND_INFO.rating} {BRAND_INFO.reviewSource}
                </span>
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: EASE_CURVE }}
              className="text-[1.9rem] font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-5xl sm:leading-[1.1] lg:text-[3.35rem] lg:leading-[1.08]"
            >
              We engineer{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-500 bg-clip-text text-transparent dark:from-indigo-400 dark:via-sky-400 dark:to-teal-300">
                scalable software
              </span>{" "}
              &amp; digital products built to convert.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16, ease: EASE_CURVE }}
              className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base lg:text-lg"
            >
              From custom React SaaS platforms and 60fps mobile apps to AI
              automation and dedicated engineering squads—we take ambitious
              brands from product strategy to resilient global scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24, ease: EASE_CURVE }}
              className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center"
            >
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Button
                  type="button"
                  size="lg"
                  className="group h-12 w-full justify-center rounded-xl bg-indigo-600 px-6 text-sm font-bold text-white shadow-lg shadow-indigo-600/25 transition-all hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-600/30 dark:bg-indigo-500 dark:hover:bg-indigo-400 sm:w-auto cursor-pointer"
                  onClick={() => openInquiryModal("Web & SaaS Product")}
                >
                  <span>Start a Project</span>
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  nativeButton={false}
                  render={<a href="#work" />}
                  className="h-12 w-full justify-center rounded-xl px-6 text-sm font-semibold transition-all hover:border-indigo-500/40 hover:bg-muted/80 sm:w-auto"
                >
                  Explore Case Studies
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32, ease: EASE_CURVE }}
              className="mt-9 grid w-full grid-cols-2 gap-3 border-t border-border/80 pt-7 sm:mt-10 sm:grid-cols-4 sm:gap-4 sm:pt-8"
            >
              {HERO_METRICS.map((metric) => (
                <motion.div
                  key={metric.label}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 360, damping: 24 }}
                  className="rounded-2xl border border-transparent p-2.5 transition-colors hover:border-indigo-500/25 hover:bg-muted/50 sm:p-3"
                >
                  <span className="block text-xl font-extrabold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
                    {metric.value}
                  </span>
                  <span className="mt-0.5 block text-[11px] font-medium text-muted-foreground sm:text-xs">
                    {metric.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE_CURVE }}
            className="min-w-0 lg:col-span-5"
          >
            <div className="group/card relative rounded-3xl border border-border/80 bg-card/90 p-4 shadow-2xl shadow-indigo-950/8 backdrop-blur-md transition-all duration-300 hover:border-indigo-500/35 hover:shadow-indigo-600/12 dark:shadow-black/45 sm:p-6">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-transparent to-teal-500/20 opacity-0 blur-sm transition-opacity duration-300 group-hover/card:opacity-100"
              />

              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Client Delivery Snapshot
                  </span>
                </div>
                <Badge variant="secondary" className="rounded-full text-[11px]">
                  Live Metrics
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
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
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
                              Production Deployment Velocity
                            </p>
                            <p className="mt-0.5 text-xl font-extrabold text-foreground sm:text-2xl">
                              99.98% Uptime
                            </p>
                          </div>
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                            <TrendingUp className="size-3.5" />
                            +42% speed
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
                                style={{
                                  height: `${bar.value}%`,
                                  originY: 1,
                                }}
                                className="w-full rounded-t-md bg-gradient-to-t from-indigo-600 to-sky-400 opacity-85 transition-all duration-200 group-hover/bar:scale-x-105 group-hover/bar:opacity-100 group-hover/bar:shadow-md group-hover/bar:shadow-indigo-500/30"
                              />
                            </div>
                          ))}
                        </div>

                        <Separator />

                        <div className="grid grid-cols-2 gap-2.5 text-xs">
                          <div className="rounded-xl border border-border/70 bg-background/80 p-2.5 transition-colors hover:border-indigo-500/35 sm:p-3">
                            <p className="text-muted-foreground">
                              Core Web Vitals
                            </p>
                            <p className="mt-1 font-bold text-foreground">
                              98 / 100 Score
                            </p>
                          </div>
                          <div className="rounded-xl border border-border/70 bg-background/80 p-2.5 transition-colors hover:border-indigo-500/35 sm:p-3">
                            <p className="text-muted-foreground">
                              Release Cadence
                            </p>
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
                              2.4M+ Txns / mo
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
                              68% Deflection
                            </p>
                          </div>
                          <span className="inline-flex items-center gap-1 rounded-full bg-violet-500/15 px-2.5 py-1 text-xs font-bold text-violet-600 dark:text-violet-400">
                            <Sparkles className="size-3.5" />
                            RAG Grounded
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
                            Semantic index → SQL entitlement check → Cited
                            answer verified with confidence score{" "}
                            <strong className="text-foreground">0.96</strong>.
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
                          <span>Zero hallucinated policy citations</span>
                          <Badge variant="outline" className="text-[11px]">
                            SOC2 Ready
                          </Badge>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </TabsContent>
              </Tabs>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 border-t border-border/60 pt-7 sm:mt-14 sm:pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="shrink-0 text-[11px] font-bold uppercase tracking-widest text-muted-foreground sm:text-xs">
              Trusted by scaling teams
            </span>
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] sm:max-w-2xl lg:max-w-3xl">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex w-max items-center gap-10 whitespace-nowrap py-1"
              >
                {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, index) => (
                  <span
                    key={`${logo}-${index}`}
                    className="text-xs font-bold tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground sm:text-sm"
                  >
                    {logo}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
