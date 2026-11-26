import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  GraduationCap,
  HeartPulse,
  Landmark,
  Layers2,
  ShoppingBag,
  Truck,
} from "lucide-react";

import { Reveal } from "@/components/shared/MotionPrimitives";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { INDUSTRIES_WE_SERVE, type IndustryItem } from "@/data/industries";
import { EASE_CURVE, SPRINGS, VIEWPORT_CONFIG } from "@/lib/motion";
import { cn } from "@/lib/utils";

function IndustryIcon({
  id,
  className,
}: {
  id: IndustryItem["id"];
  className?: string;
}) {
  switch (id) {
    case "fintech-banking":
      return <Landmark className={className} />;
    case "healthcare":
      return <HeartPulse className={className} />;
    case "ecommerce-retail":
      return <ShoppingBag className={className} />;
    case "education-edtech":
      return <GraduationCap className={className} />;
    case "logistics-supply-chain":
      return <Truck className={className} />;
    case "saas-enterprise":
      return <Layers2 className={className} />;
  }
}

function IndustryVisualScene({ id }: { id: IndustryItem["id"] }) {
  switch (id) {
    case "fintech-banking":
      return (
        <div
          aria-hidden="true"
          className="relative flex h-full min-h-[188px] w-full flex-col justify-between overflow-hidden rounded-xl border border-white/12 bg-[#060c1b] p-4 shadow-inner transition-transform duration-500 ease-out group-hover:scale-[1.015]"
        >
          <div className="pointer-events-none absolute -top-10 -right-10 size-32 rounded-full bg-brand-blue/20 blur-2xl" />

          <div className="relative flex items-center justify-between text-[11px] font-medium text-slate-300">
            <span className="font-mono text-[10px] uppercase tracking-wider text-blue-300">
              Treasury &amp; Settlement Flow
            </span>
            <span className="flex items-center gap-1">
              <span className="size-1.5 rounded-full bg-brand-blue" />
              <span className="size-1.5 rounded-full bg-brand-violet" />
            </span>
          </div>

          <svg
            viewBox="0 0 280 82"
            fill="none"
            className="my-2 h-20 w-full overflow-visible"
          >
            <defs>
              <linearGradient
                id="ind-fintech-area"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="ind-fintech-line"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            <path
              d="M4 66 C 42 62, 68 42, 108 46 C 148 50, 174 22, 214 26 C 242 29, 258 14, 276 10 L 276 78 L 4 78 Z"
              fill="url(#ind-fintech-area)"
            />
            <path
              d="M4 66 C 42 62, 68 42, 108 46 C 148 50, 174 22, 214 26 C 242 29, 258 14, 276 10"
              stroke="url(#ind-fintech-line)"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <circle cx="108" cy="46" r="3.5" fill="#3B82F6" />
            <circle cx="214" cy="26" r="3.5" fill="#8B5CF6" />
            <circle
              cx="276"
              cy="10"
              r="4.5"
              fill="#FFFFFF"
              stroke="#3B82F6"
              strokeWidth="2"
            />
          </svg>

          <div className="relative grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-2">
              <div className="h-1.5 w-3/4 rounded-full bg-brand-blue/80" />
              <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-white/20" />
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-2">
              <div className="h-1.5 w-2/3 rounded-full bg-brand-violet/80" />
              <div className="mt-1.5 h-1.5 w-3/5 rounded-full bg-white/20" />
            </div>
          </div>
        </div>
      );

    case "healthcare":
      return (
        <div
          aria-hidden="true"
          className="relative flex h-full min-h-[188px] w-full flex-col justify-between overflow-hidden rounded-xl border border-white/80 bg-white p-4 text-slate-900 shadow-lg transition-transform duration-500 ease-out group-hover:scale-[1.015]"
        >
          <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-brand-blue">
              Care Coordination
            </span>
            <Activity className="size-3.5 text-brand-blue" />
          </div>

          <div className="my-2.5 space-y-2">
            {[
              { color: "bg-brand-blue", w1: "w-2/3", w2: "w-1/2" },
              { color: "bg-brand-violet", w1: "w-3/4", w2: "w-2/5" },
              { color: "bg-brand-blue/70", w1: "w-1/2", w2: "w-3/5" },
            ].map((row, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 rounded-lg border border-slate-200/80 bg-slate-50/90 px-2.5 py-2"
              >
                <span className={cn("size-2.5 shrink-0 rounded-full", row.color)} />
                <div className="flex-1 space-y-1">
                  <div className={cn("h-1.5 rounded-full bg-slate-800/80", row.w1)} />
                  <div className={cn("h-1 rounded-full bg-slate-300", row.w2)} />
                </div>
                <span className="h-4 w-10 rounded-full bg-blue-50 border border-blue-200/70" />
              </div>
            ))}
          </div>

          <svg
            viewBox="0 0 240 24"
            fill="none"
            className="h-5 w-full opacity-80"
          >
            <path
              d="M0 14 L52 14 L64 4 L74 20 L84 8 L92 14 L156 14 L166 5 L176 19 L186 10 L194 14 L240 14"
              stroke="#2563EB"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );

    case "ecommerce-retail":
      return (
        <div
          aria-hidden="true"
          className="relative flex h-full min-h-[188px] w-full flex-col justify-between overflow-hidden rounded-xl border border-white/12 bg-[#080f23] p-4 shadow-inner transition-transform duration-500 ease-out group-hover:scale-[1.015]"
        >
          <div className="pointer-events-none absolute -bottom-10 -left-10 size-32 rounded-full bg-brand-violet/25 blur-2xl" />

          <div className="relative flex items-center justify-between text-[11px]">
            <span className="font-mono text-[10px] uppercase tracking-wider text-violet-300">
              Storefront &amp; Checkout Funnel
            </span>
            <span className="h-1.5 w-8 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet" />
          </div>

          <div className="relative my-2 grid grid-cols-12 items-stretch gap-2.5">
            <div className="col-span-5 flex flex-col justify-between rounded-lg border border-white/12 bg-white/[0.04] p-2.5">
              <div className="h-12 w-full rounded-md bg-gradient-to-br from-brand-blue/35 via-brand-violet/25 to-transparent border border-white/10" />
              <div className="mt-2 space-y-1.5">
                <div className="h-1.5 w-4/5 rounded-full bg-white/80" />
                <div className="h-4 w-full rounded-md bg-brand-blue" />
              </div>
            </div>

            <div className="col-span-7 flex flex-col justify-center space-y-2 rounded-lg border border-white/12 bg-white/[0.03] p-2.5">
              {[
                { label: "Catalog", width: "w-full", color: "from-brand-blue to-blue-400" },
                { label: "Cart Sync", width: "w-4/5", color: "from-brand-blue to-brand-violet" },
                { label: "Checkout", width: "w-3/5", color: "from-brand-violet to-violet-400" },
              ].map((step) => (
                <div key={step.label} className="space-y-1">
                  <span className="block font-mono text-[9px] uppercase tracking-wider text-slate-400">
                    {step.label}
                  </span>
                  <div className="h-2 w-full rounded-full bg-white/10">
                    <div
                      className={cn(
                        "h-full rounded-full bg-gradient-to-r",
                        step.width,
                        step.color
                      )}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-between border-t border-white/10 pt-2">
            <span className="h-1.5 w-16 rounded-full bg-white/20" />
            <span className="h-1.5 w-10 rounded-full bg-violet-400/70" />
          </div>
        </div>
      );

    case "education-edtech":
      return (
        <div
          aria-hidden="true"
          className="relative flex h-full min-h-[188px] w-full flex-col justify-between overflow-hidden rounded-xl border border-white/80 bg-[#f8fafc] p-4 text-slate-900 shadow-lg transition-transform duration-500 ease-out group-hover:scale-[1.015]"
        >
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-brand-violet">
              Learning Workspace
            </span>
            <span className="size-2 rounded-full bg-brand-violet" />
          </div>

          <div className="my-2 grid grid-cols-12 items-center gap-3">
            <div className="col-span-5 flex items-center justify-center">
              <svg viewBox="0 0 84 84" className="size-20">
                <defs>
                  <linearGradient
                    id="ind-edtech-ring"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#7C3AED" />
                    <stop offset="100%" stopColor="#2563EB" />
                  </linearGradient>
                </defs>
                <circle
                  cx="42"
                  cy="42"
                  r="32"
                  fill="none"
                  stroke="#E2E8F0"
                  strokeWidth="7"
                />
                <circle
                  cx="42"
                  cy="42"
                  r="32"
                  fill="none"
                  stroke="url(#ind-edtech-ring)"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeDasharray="152 202"
                  transform="rotate(-90 42 42)"
                />
                <circle cx="42" cy="42" r="10" fill="#EFF6FF" />
                <circle cx="42" cy="42" r="4.5" fill="#7C3AED" />
              </svg>
            </div>

            <div className="col-span-7 space-y-2">
              {[
                { active: true, width: "w-4/5" },
                { active: false, width: "w-3/4" },
                { active: false, width: "w-2/3" },
              ].map((mod, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "flex items-center gap-2 rounded-lg border px-2.5 py-2",
                    mod.active
                      ? "border-violet-200 bg-white shadow-2xs"
                      : "border-slate-200/80 bg-white/70"
                  )}
                >
                  <span
                    className={cn(
                      "size-2 shrink-0 rounded-full",
                      mod.active ? "bg-brand-violet" : "bg-brand-blue/50"
                    )}
                  />
                  <div
                    className={cn(
                      "h-1.5 rounded-full",
                      mod.active ? "bg-slate-800" : "bg-slate-400/70",
                      mod.width
                    )}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1.5 pt-1">
            <span className="h-1.5 rounded-full bg-brand-violet/70" />
            <span className="h-1.5 rounded-full bg-brand-blue/60" />
            <span className="h-1.5 rounded-full bg-slate-200" />
          </div>
        </div>
      );

    case "logistics-supply-chain":
      return (
        <div
          aria-hidden="true"
          className="relative flex h-full min-h-[188px] w-full flex-col justify-between overflow-hidden rounded-xl border border-white/12 bg-[#060c1b] bg-[radial-gradient(rgba(148,163,184,0.16)_1px,transparent_1px)] bg-[size:16px_16px] p-4 shadow-inner transition-transform duration-500 ease-out group-hover:scale-[1.015]"
        >
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-mono text-[10px] uppercase tracking-wider text-blue-300">
              Route Network Topology
            </span>
            <span className="size-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.9)]" />
          </div>

          <svg
            viewBox="0 0 280 86"
            fill="none"
            className="my-1.5 h-22 w-full overflow-visible"
          >
            <path
              d="M28 60 C 84 18, 124 68, 166 36 C 200 12, 226 42, 254 24"
              stroke="#3B82F6"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M28 60 C 90 74, 152 72, 254 24"
              stroke="#8B5CF6"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              strokeOpacity="0.7"
            />
            {/* Nodes */}
            <circle cx="28" cy="60" r="8" fill="#2563EB" fillOpacity="0.22" />
            <circle cx="28" cy="60" r="4" fill="#60A5FA" />

            <circle cx="166" cy="36" r="10" fill="#7C3AED" fillOpacity="0.25" />
            <circle cx="166" cy="36" r="4.5" fill="#A78BFA" />

            <circle cx="254" cy="24" r="9" fill="#2563EB" fillOpacity="0.25" />
            <circle
              cx="254"
              cy="24"
              r="4.5"
              fill="#FFFFFF"
              stroke="#3B82F6"
              strokeWidth="2"
            />
          </svg>

          <div className="grid grid-cols-3 gap-2">
            {["Origin Hub", "Transit Sync", "Dispatch"].map((node, i) => (
              <div
                key={node}
                className="rounded-md border border-white/10 bg-[#0b1530]/90 px-2 py-1.5 text-center"
              >
                <span
                  className={cn(
                    "block font-mono text-[9px] font-medium",
                    i === 1 ? "text-violet-300" : "text-slate-300"
                  )}
                >
                  {node}
                </span>
              </div>
            ))}
          </div>
        </div>
      );

    case "saas-enterprise":
      return (
        <div
          aria-hidden="true"
          className="relative flex h-full min-h-[188px] w-full overflow-hidden rounded-xl border border-white/80 bg-white text-slate-900 shadow-lg transition-transform duration-500 ease-out group-hover:scale-[1.015]"
        >
          {/* Left Deep Navy Micro-Sidebar */}
          <div className="flex w-14 shrink-0 flex-col justify-between bg-[#070d1d] p-2.5">
            <div className="space-y-2.5">
              <div className="size-4 rounded-md bg-gradient-to-br from-brand-blue to-brand-violet" />
              <div className="space-y-1.5 pt-2">
                <div className="h-1.5 w-full rounded-full bg-brand-blue" />
                <div className="h-1.5 w-4/5 rounded-full bg-white/25" />
                <div className="h-1.5 w-3/4 rounded-full bg-white/20" />
                <div className="h-1.5 w-4/5 rounded-full bg-white/20" />
              </div>
            </div>
            <div className="size-4 rounded-full border border-white/20 bg-white/10" />
          </div>

          {/* Right White Multi-Tenant Workspace */}
          <div className="flex flex-1 flex-col justify-between p-3.5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-700">
                Tenant Workspace
              </span>
              <span className="h-3.5 w-12 rounded-md bg-brand-blue" />
            </div>

            <div className="my-2 grid grid-cols-2 gap-2">
              <div className="space-y-2 rounded-lg border border-slate-200/80 bg-slate-50 p-2">
                <div className="flex items-end gap-1 h-10 pt-1">
                  <span className="w-1/4 h-4 rounded-t bg-brand-blue/40" />
                  <span className="w-1/4 h-6 rounded-t bg-brand-blue/65" />
                  <span className="w-1/4 h-5 rounded-t bg-brand-violet/70" />
                  <span className="w-1/4 h-9 rounded-t bg-brand-blue" />
                </div>
                <div className="h-1.5 w-3/4 rounded-full bg-slate-300" />
              </div>

              <div className="flex flex-col justify-between rounded-lg border border-slate-200/80 bg-slate-50 p-2">
                <div className="grid grid-cols-3 gap-1">
                  {[true, true, false, true, false, true].map((on, idx) => (
                    <span
                      key={idx}
                      className={cn(
                        "h-3 rounded-xs",
                        on ? "bg-brand-violet/80" : "bg-slate-200"
                      )}
                    />
                  ))}
                </div>
                <div className="h-1.5 w-4/5 rounded-full bg-slate-800/75" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="h-1.5 w-1/2 rounded-full bg-slate-200" />
              <span className="h-1.5 w-1/4 rounded-full bg-brand-violet/60" />
            </div>
          </div>
        </div>
      );
  }
}

interface IndustryShowcaseRowProps {
  industry: IndustryItem;
  index: number;
  isActive: boolean;
  onActivate: (id: IndustryItem["id"]) => void;
}

function IndustryShowcaseRow({
  industry,
  index,
  isActive,
  onActivate,
}: IndustryShowcaseRowProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      id={`industry-${industry.id}`}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_CONFIG}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.45,
        delay: prefersReducedMotion ? 0 : Math.min(index * 0.05, 0.25),
        ease: EASE_CURVE,
      }}
      whileHover={prefersReducedMotion ? undefined : { y: -2 }}
      onMouseEnter={() => onActivate(industry.id)}
      onFocus={() => onActivate(industry.id)}
      className={cn(
        "group scroll-mt-28 overflow-hidden rounded-2xl border bg-brand-navy-elevated/85 transition-[border-color,background-color,box-shadow] duration-300",
        isActive
          ? "border-blue-400/40 bg-brand-navy-elevated shadow-xl shadow-black/35"
          : "border-white/12 hover:border-blue-400/35 hover:bg-brand-navy-elevated"
      )}
    >
      <div className="grid grid-cols-1 items-stretch md:grid-cols-12">
        {/* Copy Column */}
        <div className="flex flex-col justify-between p-5 sm:p-6 md:col-span-6 lg:p-7">
          <div>
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-xs font-semibold tracking-widest text-blue-300/80">
                {industry.number}
              </span>
              <span className="inline-flex size-9 items-center justify-center rounded-xl border border-white/12 bg-white/[0.05] text-blue-300 transition-transform duration-300 group-hover:scale-105 group-hover:border-blue-400/35 group-hover:text-white">
                <IndustryIcon id={industry.id} className="size-4" />
              </span>
            </div>

            <h3 className="mt-4 text-lg font-bold tracking-tight text-white transition-colors group-hover:text-blue-200 sm:text-xl">
              {industry.title}
            </h3>

            <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
              {industry.description}
            </p>
          </div>

          <p className="mt-5 border-t border-white/10 pt-3.5 text-xs font-medium tracking-wide text-blue-300/85">
            {industry.focusAreas}
          </p>
        </div>

        {/* Distinct Visual Identity Preview */}
        <div className="flex items-stretch p-3 pt-0 sm:p-4 sm:pt-0 md:col-span-6 md:pt-3 lg:p-4">
          <IndustryVisualScene id={industry.id} />
        </div>
      </div>
    </motion.article>
  );
}

export function IndustriesSection() {
  const [activeId, setActiveId] = useState<IndustryItem["id"]>(
    INDUSTRIES_WE_SERVE[0].id
  );
  const prefersReducedMotion = useReducedMotion();

  const handleSelectSector = (id: IndustryItem["id"]) => {
    setActiveId(id);
    const target = document.getElementById(`industry-${id}`);
    if (target) {
      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "center",
      });
    }
  };

  return (
    <section
      id="industries"
      data-surface="navy"
      className="relative scroll-mt-20 overflow-x-clip border-t border-white/10 py-16 sm:py-20 lg:py-28"
    >
      {/* Ambient Deep Navy Architectural Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/4 -z-10 size-96 rounded-full bg-brand-blue/12 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/5 bottom-0 -z-10 size-96 rounded-full bg-brand-violet/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:pl-14 md:pr-8 lg:pl-16 lg:pr-10 min-[1400px]:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
          {/* Sticky Editorial Left Rail */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              surface="navy"
              badge="INDUSTRIES WE SERVE"
              title="Software engineered for distinct industry realities."
              description="We adapt architecture, security patterns, and user workflows to the operational demands of high-growth and regulated sectors."
            />

            {/* Desktop Interactive Sector Directory */}
            <Reveal delay={0.1} className="mt-8 hidden lg:block">
              <nav
                aria-label="Industries directory"
                className="divide-y divide-white/10 border-y border-white/10"
              >
                {INDUSTRIES_WE_SERVE.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelectSector(item.id)}
                      className={cn(
                        "group flex w-full cursor-pointer items-center justify-between py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/60",
                        isActive
                          ? "text-white"
                          : "text-slate-400 hover:text-slate-200"
                      )}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={cn(
                            "font-mono text-[11px] font-semibold transition-colors",
                            isActive ? "text-blue-400" : "text-slate-500"
                          )}
                        >
                          {item.number}
                        </span>
                        <span className="text-sm font-medium tracking-tight">
                          {item.title}
                        </span>
                      </span>

                      <motion.span
                        animate={{
                          x: prefersReducedMotion || isActive ? 0 : -4,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={
                          prefersReducedMotion
                            ? { duration: 0 }
                            : SPRINGS.tactile
                        }
                        className="text-blue-400"
                      >
                        <ArrowRight className="size-3.5" />
                      </motion.span>
                    </button>
                  );
                })}
              </nav>
            </Reveal>
          </div>

          {/* Right Editorial Split Showcase Stream */}
          <div className="space-y-5 lg:col-span-8">
            {INDUSTRIES_WE_SERVE.map((industry, idx) => (
              <IndustryShowcaseRow
                key={industry.id}
                industry={industry}
                index={idx}
                isActive={activeId === industry.id}
                onActivate={setActiveId}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
