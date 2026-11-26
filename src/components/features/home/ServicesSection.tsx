import {
  ArrowUpRight,
  Bot,
  Check,
  CloudCog,
  Code2,
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
import { cn } from "@/lib/utils";

const ACCENT_MAP: Record<
  ServiceItem["accent"],
  {
    iconBg: string;
    iconText: string;
    spotlight: string;
    topLine: string;
    icon: typeof Code2;
  }
> = {
  indigo: {
    iconBg: "bg-indigo-500/12 dark:bg-indigo-500/20",
    iconText: "text-indigo-600 dark:text-indigo-400",
    spotlight: "rgba(99, 102, 241, 0.14)",
    topLine: "from-indigo-500 via-blue-500 to-cyan-400",
    icon: Code2,
  },
  teal: {
    iconBg: "bg-teal-500/12 dark:bg-teal-500/20",
    iconText: "text-teal-600 dark:text-teal-400",
    spotlight: "rgba(20, 184, 166, 0.14)",
    topLine: "from-teal-500 via-emerald-500 to-sky-400",
    icon: Smartphone,
  },
  violet: {
    iconBg: "bg-violet-500/12 dark:bg-violet-500/20",
    iconText: "text-violet-600 dark:text-violet-400",
    spotlight: "rgba(139, 92, 246, 0.14)",
    topLine: "from-violet-500 via-purple-500 to-indigo-400",
    icon: Palette,
  },
  amber: {
    iconBg: "bg-amber-500/12 dark:bg-amber-500/20",
    iconText: "text-amber-600 dark:text-amber-400",
    spotlight: "rgba(245, 158, 11, 0.14)",
    topLine: "from-amber-500 via-orange-500 to-rose-400",
    icon: Bot,
  },
  sky: {
    iconBg: "bg-sky-500/12 dark:bg-sky-500/20",
    iconText: "text-sky-600 dark:text-sky-400",
    spotlight: "rgba(14, 165, 233, 0.14)",
    topLine: "from-sky-500 via-blue-500 to-indigo-400",
    icon: CloudCog,
  },
  rose: {
    iconBg: "bg-rose-500/12 dark:bg-rose-500/20",
    iconText: "text-rose-600 dark:text-rose-400",
    spotlight: "rgba(244, 63, 94, 0.14)",
    topLine: "from-rose-500 via-pink-500 to-indigo-500",
    icon: ShieldCheck,
  },
};

function getGridSpanClass(index: number) {
  if (index === 0) return "lg:col-span-7";
  if (index === 1) return "lg:col-span-5";
  if (index === 5) return "lg:col-span-12";
  return "lg:col-span-4";
}

export function ServicesSection() {
  const { openInquiryModal } = useAppShell();

  return (
    <section id="services" className="scroll-mt-16 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
          <SectionHeading
            badge="Capabilities & Services"
            title="End-to-end engineering focused on measurable outcomes"
            description="Everything modern product teams need under one roof—intuitive interfaces, resilient cloud systems, and practical AI integration."
          />

          <Button
            variant="outline"
            nativeButton={false}
            render={<a href="#engagement" />}
            className="group shrink-0 rounded-xl font-semibold transition-all hover:-translate-y-0.5 hover:border-indigo-500/40"
          >
            <span>Compare Engagement Models</span>
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 lg:grid-cols-12">
          {SERVICES.map((service, index) => {
            const accent = ACCENT_MAP[service.accent];
            const Icon = accent.icon;
            const isBanner = index === 5;

            return (
              <Reveal
                key={service.id}
                delay={index * 0.05}
                className={cn("min-w-0", getGridSpanClass(index))}
              >
                <SpotlightCard
                  spotlightColor={accent.spotlight}
                  className="h-full p-5 text-left sm:p-7"
                >
                  <div
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute top-0 right-6 left-6 h-[2px] rounded-full bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                      accent.topLine
                    )}
                  />

                  <div
                    className={cn(
                      "flex h-full flex-col justify-between",
                      isBanner && "lg:flex-row lg:items-center lg:gap-10"
                    )}
                  >
                    <div
                      className={cn(
                        "min-w-0 space-y-4",
                        isBanner && "lg:flex-1"
                      )}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div
                          className={cn(
                            "inline-flex size-11 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 sm:size-12",
                            accent.iconBg,
                            accent.iconText
                          )}
                        >
                          <Icon className="size-5 sm:size-6" />
                        </div>
                        {service.featured && (
                          <Badge
                            variant="outline"
                            className="rounded-full text-[11px] font-semibold transition-colors group-hover:border-indigo-500/40"
                          >
                            Flagship Practice
                          </Badge>
                        )}
                      </div>

                      <div>
                        <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400 sm:text-xl">
                          {service.title}
                        </h3>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                          {service.tagline}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {service.description}
                        </p>
                      </div>

                      <ul
                        className={cn(
                          "grid gap-2 pt-1 text-sm text-foreground/90",
                          isBanner ? "sm:grid-cols-3" : "grid-cols-1"
                        )}
                      >
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <Check className="size-4 shrink-0 text-teal-600 transition-transform duration-200 group-hover:scale-110 dark:text-teal-400" />
                            <span className="font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className={cn(
                        "mt-6 flex w-full flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-4 sm:pt-5",
                        isBanner &&
                          "lg:mt-0 lg:w-72 lg:shrink-0 lg:flex-col lg:items-start lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8"
                      )}
                    >
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
                        onClick={() => openInquiryModal(service.inquiryTopic)}
                        className="group/btn h-8 px-2.5 text-xs font-bold text-indigo-600 hover:bg-indigo-500/10 hover:text-indigo-700 dark:text-indigo-400 cursor-pointer"
                      >
                        <span>Discuss Scope</span>
                        <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </Button>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
