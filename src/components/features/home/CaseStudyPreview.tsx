import {
  Activity,
  Bot,
  CalendarClock,
  CheckCircle2,
  Compass,
  CreditCard,
  Layers,
  Lock,
  PackageCheck,
  ShieldAlert,
  Sparkles,
  Video,
} from "lucide-react";

import type { CaseStudy } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface CaseStudyPreviewProps {
  study: CaseStudy;
  featured?: boolean;
  className?: string;
}

function PreviewScene({ study }: { study: CaseStudy }) {
  switch (study.id) {
    case "finpulse-pay":
      return (
        <div className="grid w-full grid-cols-12 items-center gap-3">
          <div className="col-span-7 space-y-2.5 rounded-xl border border-white/12 bg-[#0b1530]/95 p-3 shadow-lg">
            <div className="flex items-center justify-between text-[10px] font-medium text-slate-300">
              <span className="inline-flex items-center gap-1.5">
                <CreditCard className="size-3 text-blue-400" />
                <span>Multi-Currency Wallet</span>
              </span>
              <span className="rounded-full bg-blue-500/20 px-2 py-0.5 font-mono text-[9px] text-blue-200">
                14 FX
              </span>
            </div>
            <div className="space-y-1.5">
              <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet opacity-90" />
              <div className="grid grid-cols-3 gap-1.5 pt-1">
                <div className="h-7 rounded-lg border border-white/10 bg-white/5" />
                <div className="h-7 rounded-lg border border-blue-400/30 bg-brand-blue/20" />
                <div className="h-7 rounded-lg border border-white/10 bg-white/5" />
              </div>
            </div>
          </div>

          <div className="col-span-5 space-y-2 rounded-xl border border-white/12 bg-[#070f24]/95 p-3">
            <div className="flex items-center gap-1.5 text-[10px] font-medium text-blue-200">
              <Lock className="size-3 text-violet-300" />
              <span>Biometric KYC</span>
            </div>
            <div className="space-y-1.5 pt-0.5">
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-blue-400" />
                <span className="h-1.5 flex-1 rounded-full bg-white/20" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-violet-400" />
                <span className="h-1.5 w-4/5 rounded-full bg-white/20" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-blue-400" />
                <span className="h-1.5 w-3/5 rounded-full bg-white/15" />
              </div>
            </div>
          </div>
        </div>
      );

    case "medsync-care":
      return (
        <div className="w-full space-y-2.5 rounded-xl border border-white/12 bg-[#0a142d]/95 p-3 shadow-lg">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px] text-slate-300">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <CalendarClock className="size-3 text-blue-400" />
              <span>Clinician Triage Workspace</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-violet-500/20 px-2 py-0.5 font-mono text-[9px] text-violet-200">
              <Video className="size-2.5" />
              HL7 / FHIR
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2 space-y-1.5 rounded-lg border border-white/10 bg-white/[0.04] p-2">
              <div className="h-2 w-2/3 rounded-full bg-blue-400/60" />
              <div className="h-1.5 w-full rounded-full bg-white/15" />
              <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
            </div>
            <div className="flex flex-col justify-between rounded-lg border border-blue-400/25 bg-brand-blue/15 p-2">
              <span className="size-4 rounded-md bg-blue-400/30" />
              <span className="h-1.5 w-full rounded-full bg-blue-300/60" />
            </div>
          </div>
        </div>
      );

    case "voyage-os":
      return (
        <div className="w-full space-y-2 rounded-xl border border-white/12 bg-[#0a142d]/95 p-3 shadow-lg">
          <div className="flex items-center justify-between text-[10px] text-slate-300">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <Compass className="size-3 text-violet-300" />
              <span>Multi-Leg Trip Builder</span>
            </span>
            <span className="font-mono text-[9px] text-blue-300">
              Offline Ready
            </span>
          </div>
          <div className="flex items-center gap-2 pt-1">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className="flex-1 space-y-1.5 rounded-lg border border-white/10 bg-white/[0.04] p-2"
              >
                <div className="flex items-center justify-between">
                  <span className="size-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet" />
                  <span className="font-mono text-[9px] text-slate-400">
                    0{step}
                  </span>
                </div>
                <div className="h-1.5 w-4/5 rounded-full bg-white/20" />
                <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      );

    case "scaleops-ai":
      return (
        <div className="w-full space-y-2.5 rounded-xl border border-white/12 bg-[#0a142d]/95 p-3 shadow-lg">
          <div className="flex items-center justify-between text-[10px] text-slate-300">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <Bot className="size-3 text-violet-300" />
              <span>Hybrid RAG Copilot</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/20 px-2 py-0.5 font-mono text-[9px] text-blue-200">
              <Sparkles className="size-2.5" />
              Citations
            </span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5">
              <span className="size-2 rounded-full bg-blue-400" />
              <span className="h-1.5 flex-1 rounded-full bg-white/25" />
              <span className="font-mono text-[9px] text-slate-400">Docs</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-violet-400/25 bg-brand-violet/15 px-2.5 py-1.5">
              <CheckCircle2 className="size-3 text-violet-300" />
              <span className="h-1.5 flex-1 rounded-full bg-violet-200/50" />
              <span className="font-mono text-[9px] text-violet-200">
                Policy
              </span>
            </div>
          </div>
        </div>
      );

    case "cartflow-commerce":
      return (
        <div className="w-full space-y-2 rounded-xl border border-white/12 bg-[#0a142d]/95 p-3 shadow-lg">
          <div className="flex items-center justify-between text-[10px] text-slate-300">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <PackageCheck className="size-3 text-blue-400" />
              <span>Wholesale SKU Matrix</span>
            </span>
            <span className="font-mono text-[9px] text-blue-300">ERP Sync</span>
          </div>
          <div className="space-y-1.5 pt-0.5">
            {[85, 65, 92].map((w, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 rounded-md border border-white/8 bg-white/[0.03] px-2 py-1"
              >
                <Layers className="size-2.5 text-slate-400" />
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    style={{ width: `${w}%` }}
                    className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-violet"
                  />
                </div>
                <span className="h-2 w-6 rounded bg-white/15" />
              </div>
            ))}
          </div>
        </div>
      );

    case "vaultguard-ledger":
    default:
      return (
        <div className="w-full space-y-2.5 rounded-xl border border-white/12 bg-[#0a142d]/95 p-3 shadow-lg">
          <div className="flex items-center justify-between text-[10px] text-slate-300">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <ShieldAlert className="size-3 text-blue-400" />
              <span>Streaming Risk Engine</span>
            </span>
            <span className="inline-flex items-center gap-1 font-mono text-[9px] text-violet-200">
              <Activity className="size-2.5" />
              SOC 2 Audit
            </span>
          </div>
          <div className="grid h-12 grid-cols-8 items-end gap-1.5 pt-1">
            {[42, 68, 54, 90, 62, 76, 48, 86].map((pct, idx) => (
              <div
                key={idx}
                style={{ height: `${pct}%` }}
                className="rounded-t-sm bg-gradient-to-t from-brand-blue to-brand-violet opacity-85"
              />
            ))}
          </div>
        </div>
      );
  }
}

export function CaseStudyPreview({
  study,
  featured = false,
  className,
}: CaseStudyPreviewProps) {
  return (
    <div
      role="img"
      aria-label={`${study.title} for ${study.client} — ${study.industry} showcase visual`}
      data-surface="navy"
      className={cn(
        "relative flex w-full flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-brand-navy p-4 text-left sm:p-5",
        featured ? "min-h-[250px] sm:min-h-[320px] lg:h-full" : "aspect-[16/10]",
        className
      )}
    >
      {/* Ambient architectural grid & Blue/Violet glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:32px_32px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-16 size-56 rounded-full bg-brand-violet/25 blur-3xl transition-transform duration-500 motion-safe:group-hover:scale-110"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-16 size-52 rounded-full bg-brand-blue/20 blur-3xl transition-transform duration-500 motion-safe:group-hover:scale-110"
      />

      {/* Header Metadata Row */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/8 px-2.5 py-0.5 text-[11px] font-medium text-slate-200 backdrop-blur-xs">
          {study.industry}
        </span>
        <span className="rounded-full border border-blue-400/25 bg-blue-500/15 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-blue-200">
          {study.duration}
        </span>
      </div>

      {/* Product Interface Visual (subtle zoom on card hover) */}
      <div className="relative z-10 my-auto pt-3 transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]">
        <PreviewScene study={study} />
      </div>

      {/* Measured Metric Footer inside Visual Viewport */}
      <div className="relative z-10 mt-3 flex flex-wrap items-baseline justify-between gap-2 border-t border-white/10 pt-2.5">
        <span className="font-mono text-lg font-bold tracking-tight text-white sm:text-xl">
          {study.metricValue}
        </span>
        <span className="text-[11px] text-slate-300">{study.metricLabel}</span>
      </div>
    </div>
  );
}
