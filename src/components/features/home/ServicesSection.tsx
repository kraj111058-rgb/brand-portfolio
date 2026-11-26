import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Check,
  CloudCog,
  Code2,
  Database,
  Globe,
  Layers,
  Palette,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import { Reveal, SpotlightCard } from "@/components/shared/MotionPrimitives";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAppShell } from "@/context/useAppShell";
import { SERVICES, type ServiceItem } from "@/data/services";
import { EASE_CURVE } from "@/lib/motion";
import { cn } from "@/lib/utils";

function ServiceIcon({ id, className }: { id: string; className?: string }) {
  switch (id) {
    case "mobile-apps":
      return <Smartphone className={className} />;
    case "ui-ux":
      return <Palette className={className} />;
    case "ai-automation":
      return <Bot className={className} />;
    case "cloud-erp":
      return <CloudCog className={className} />;
    case "dedicated-qa":
      return <ShieldCheck className={className} />;
    case "web-saas":
    default:
      return <Code2 className={className} />;
  }
}

const SAAS_ARCHITECTURE_LAYERS = [
  {
    layer: "Experience & Edge UI",
    detail: "Modular React, TypeScript & Next.js storefronts",
    icon: Globe,
  },
  {
    layer: "Core Application & APIs",
    detail: "Multi-tenant domain services & GraphQL / REST APIs",
    icon: Layers,
  },
  {
    layer: "Cloud Data & Reliability",
    detail: "PostgreSQL, Redis caching & zero-downtime CI/CD",
    icon: Database,
  },
];

interface FeaturedServiceCardProps {
  service: ServiceItem;
  onDiscussScope: (topic: string) => void;
}

function FeaturedServiceCard({
  service,
  onDiscussScope,
}: FeaturedServiceCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Reveal delay={0.05}>
      <SpotlightCard
        surface="navy"
        spotlightColor="rgba(255, 255, 255, 0.04)"
        className="p-6 text-left hover:border-white/12 hover:shadow-xl hover:shadow-black/35 sm:p-8 lg:p-10"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 -right-24 size-80 rounded-full bg-brand-violet/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 left-12 size-64 rounded-full bg-brand-blue/15 blur-3xl"
        />

        <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 space-y-5 lg:col-span-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-xl border border-blue-400/30 bg-brand-blue/20 text-blue-300 transition-transform duration-300 group-hover:scale-105">
                  <ServiceIcon id={service.id} className="size-5" />
                </span>
                <span className="font-mono text-xs font-semibold tracking-wider text-blue-300">
                  01 / CORE CAPABILITY
                </span>
              </div>

              {service.featured && (
                <span className="inline-flex items-center rounded-full border border-violet-400/30 bg-violet-500/15 px-3 py-1 text-[11px] font-semibold text-violet-200">
                  Flagship Practice
                </span>
              )}
            </div>

            <div>
              <h3 className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-blue-300 sm:text-2xl lg:text-[1.75rem]">
                {service.title}
              </h3>
              <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-blue-300">
                {service.tagline}
              </p>
              <p className="mt-3.5 max-w-[58ch] text-sm leading-relaxed text-slate-300 sm:text-[15px]">
                {service.description}
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-2.5 pt-1 sm:grid-cols-3">
              {service.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-slate-100"
                >
                  <Check className="size-4 shrink-0 text-blue-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/12 pt-5">
              <div className="flex flex-wrap gap-1.5">
                {service.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/12 bg-white/6 px-2.5 py-1 text-[11px] font-medium text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Button
                type="button"
                size="sm"
                onClick={() => onDiscussScope(service.inquiryTopic)}
                className="group/btn h-9 rounded-xl bg-brand-blue px-4 text-xs font-semibold text-white shadow-sm shadow-blue-600/25 transition-all hover:bg-blue-500 cursor-pointer"
              >
                <span>Discuss Scope</span>
                <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Button>
            </div>
          </div>

          {/* Right Architectural Layer Illustration */}
          <div className="min-w-0 lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-[#050b1b]/80 p-4 sm:p-5">
              <div className="mb-3.5 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                <span>System Blueprint</span>
                <span className="font-mono text-blue-300">Full-Cycle Stack</span>
              </div>

              <div className="space-y-2.5">
                {SAAS_ARCHITECTURE_LAYERS.map((node, index) => {
                  const LayerIcon = node.icon;
                  return (
                    <motion.div
                      key={node.layer}
                      whileHover={prefersReducedMotion ? undefined : { x: 4 }}
                      transition={{ duration: 0.2, ease: EASE_CURVE }}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-colors hover:border-white/18 hover:bg-white/[0.06]"
                    >
                      <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-blue/20 text-blue-300">
                        <LayerIcon className="size-4" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-semibold text-white">
                            {node.layer}
                          </span>
                          <span className="font-mono text-[10px] text-slate-400">
                            0{index + 1}
                          </span>
                        </div>
                        <p className="mt-0.5 text-xs text-slate-400">
                          {node.detail}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </Reveal>
  );
}

interface MediumServiceCardProps {
  service: ServiceItem;
  indexNumber: string;
  variant: "blue" | "violet";
  delay: number;
  onDiscussScope: (topic: string) => void;
}

function MediumServiceCard({
  service,
  indexNumber,
  variant,
  delay,
  onDiscussScope,
}: MediumServiceCardProps) {
  const isViolet = variant === "violet";

  return (
    <Reveal delay={delay} className="min-w-0">
      <SpotlightCard
        spotlightColor={
          isViolet ? "rgba(124, 58, 237, 0.05)" : "rgba(37, 99, 235, 0.05)"
        }
        className={cn(
          "h-full p-6 text-left hover:border-border/80 hover:shadow-lg hover:shadow-brand-navy/5 dark:hover:shadow-black/35 sm:p-7",
          isViolet ? "bg-card" : "bg-surface-subtle/90"
        )}
      >

        <div className="space-y-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "inline-flex size-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105",
                  isViolet
                    ? "bg-brand-violet/10 text-brand-violet group-hover:bg-brand-violet group-hover:text-white dark:bg-violet-500/20 dark:text-violet-300"
                    : "bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white dark:bg-blue-500/20 dark:text-blue-300"
                )}
              >
                <ServiceIcon id={service.id} className="size-5" />
              </span>
              <span className="font-mono text-xs font-semibold text-muted-foreground">
                {indexNumber}
              </span>
            </div>

            {service.featured ? (
              <Badge
                variant="outline"
                className="rounded-full border-brand-blue/30 bg-brand-blue/6 px-2.5 py-0.5 text-[11px] font-semibold text-brand-blue dark:text-blue-300"
              >
                Flagship Practice
              </Badge>
            ) : (
              <Badge
                variant="secondary"
                className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-brand-violet dark:text-violet-300"
              >
                Design Systems
              </Badge>
            )}
          </div>

          <div>
            <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-brand-blue sm:text-xl">
              {service.title}
            </h3>
            <p
              className={cn(
                "mt-1 text-xs font-semibold uppercase tracking-[0.11em]",
                isViolet
                  ? "text-brand-violet dark:text-violet-400"
                  : "text-brand-blue dark:text-blue-400"
              )}
            >
              {service.tagline}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </div>

          <ul className="space-y-2 pt-0.5 text-sm text-foreground/90">
            {service.deliverables.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <Check
                  className={cn(
                    "size-4 shrink-0",
                    isViolet
                      ? "text-brand-violet dark:text-violet-400"
                      : "text-brand-blue dark:text-blue-400"
                  )}
                />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-4">
          <div className="flex flex-wrap gap-1.5">
            {service.stack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="rounded-md border border-transparent px-2 py-0.5 text-[11px] font-medium transition-colors group-hover:border-border/80"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => onDiscussScope(service.inquiryTopic)}
            className="group/btn h-8 px-2.5 text-xs font-semibold text-brand-blue hover:bg-brand-blue/10 hover:text-brand-blue dark:text-blue-400 cursor-pointer"
          >
            <span>Discuss Scope</span>
            <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Button>
        </div>
      </SpotlightCard>
    </Reveal>
  );
}

interface SupportingServiceColumnProps {
  service: ServiceItem;
  indexNumber: string;
  delay: number;
  spanFullOnTablet?: boolean;
  onDiscussScope: (topic: string) => void;
}

function SupportingServiceColumn({
  service,
  indexNumber,
  delay,
  spanFullOnTablet = false,
  onDiscussScope,
}: SupportingServiceColumnProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Reveal
      delay={delay}
      className={cn("min-w-0", spanFullOnTablet && "md:col-span-2 lg:col-span-1")}
    >
      <motion.article
        whileHover={prefersReducedMotion ? undefined : { y: -2 }}
        transition={{ duration: 0.25, ease: EASE_CURVE }}
        className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-transparent p-5 text-left transition-[box-shadow,background-color] duration-300 hover:bg-surface-subtle/70 hover:shadow-lg hover:shadow-brand-navy/5 sm:p-6 dark:hover:shadow-black/35"
      >

        <div className="space-y-4">
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-xs font-semibold tracking-wider text-muted-foreground transition-colors group-hover:text-brand-blue">
              {indexNumber}
            </span>
            <span className="inline-flex size-9 items-center justify-center rounded-xl border border-border/80 bg-background text-brand-blue shadow-2xs transition-all duration-200 group-hover:border-brand-blue/35 group-hover:bg-brand-blue group-hover:text-white">
              <ServiceIcon id={service.id} className="size-4" />
            </span>
          </div>

          <div>
            <h3 className="text-base font-bold tracking-tight text-foreground transition-colors group-hover:text-brand-blue sm:text-lg">
              {service.title}
            </h3>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.11em] text-brand-violet dark:text-violet-400">
              {service.tagline}
            </p>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </div>

          <ul className="space-y-1.5 pt-1 text-xs sm:text-sm text-foreground/90">
            {service.deliverables.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="size-3.5 shrink-0 text-brand-blue dark:text-blue-400" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-4">
          <span className="font-mono text-[11px] text-muted-foreground">
            {service.stack.slice(0, 3).join(" · ")}
          </span>

          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => onDiscussScope(service.inquiryTopic)}
            className="group/btn h-8 px-2 text-xs font-semibold text-brand-blue hover:bg-brand-blue/10 hover:text-brand-blue dark:text-blue-400 cursor-pointer"
          >
            <span>Discuss Scope</span>
            <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Button>
        </div>
      </motion.article>
    </Reveal>
  );
}

export function ServicesSection() {
  const { openInquiryModal } = useAppShell();

  const [featuredService, mobileService, designService, ...supportingServices] =
    SERVICES;

  return (
    <section
      id="services"
      className="scroll-mt-20 bg-background py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:pl-14 md:pr-8 lg:pl-16 lg:pr-10 min-[1400px]:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            badge="WHAT WE DO"
            title="Engineering digital experiences that move businesses forward."
            description="From ambitious ideas to enterprise-ready platforms, we design, build, and scale digital products that solve meaningful business challenges."
          />

          <Button
            variant="outline"
            nativeButton={false}
            render={<a href="#engagement" />}
            className="group h-10 shrink-0 rounded-xl border-border/85 px-4 text-xs font-semibold transition-all hover:-translate-y-0.5 hover:border-brand-blue/40 hover:bg-surface-subtle sm:text-sm"
          >
            <span>Compare Engagement Models</span>
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>

        <div className="mt-12 space-y-6 sm:mt-14 lg:space-y-8">
          {/* Tier 1: Flagship Featured Service (12-column asymmetric split) */}
          {featuredService && (
            <FeaturedServiceCard
              service={featuredService}
              onDiscussScope={openInquiryModal}
            />
          )}

          {/* Tier 2: Two Medium Practice Cards (6 + 6 asymmetric pair) */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
            {mobileService && (
              <MediumServiceCard
                service={mobileService}
                indexNumber="02"
                variant="blue"
                delay={0.08}
                onDiscussScope={openInquiryModal}
              />
            )}
            {designService && (
              <MediumServiceCard
                service={designService}
                indexNumber="03"
                variant="violet"
                delay={0.14}
                onDiscussScope={openInquiryModal}
              />
            )}
          </div>

          {/* Tier 3: Three Supporting Editorial Columns (whitespace + hairline contrast) */}
          <div className="grid grid-cols-1 gap-6 pt-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {supportingServices.map((service, idx) => (
              <SupportingServiceColumn
                key={service.id}
                service={service}
                indexNumber={`0${idx + 4}`}
                delay={0.08 + idx * 0.06}
                spanFullOnTablet={idx === supportingServices.length - 1}
                onDiscussScope={openInquiryModal}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
