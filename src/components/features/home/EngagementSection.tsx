import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

import { Reveal, SpotlightCard } from "@/components/shared/MotionPrimitives";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useAppShell } from "@/context/useAppShell";
import { ENGAGEMENT_MODELS, PROCESS_STEPS } from "@/data/services";

export function EngagementSection() {
  const { openInquiryModal } = useAppShell();

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-16 px-4 sm:space-y-20 sm:px-6 lg:px-8">
        <div id="engagement" className="scroll-mt-20 text-left">
          <SectionHeading
            badge="Engagement & Hiring Models"
            title="Flexible ways to build or expand your engineering team"
            description="Choose a full cross-functional squad, a fixed-scope MVP release, or vetted senior specialists integrated directly into your workflow."
          />

          <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {ENGAGEMENT_MODELS.map((model, idx) => {
              const isFeatured = idx === 0;
              return (
                <Reveal key={model.id} delay={idx * 0.08} className="min-w-0">
                  <SpotlightCard
                    className={
                      isFeatured
                        ? "h-full border-2 border-indigo-600/60 p-5 shadow-xl shadow-indigo-600/8 sm:p-7"
                        : "h-full p-5 sm:p-7"
                    }
                  >
                    <div className="space-y-4">
                      <Badge
                        variant={isFeatured ? "default" : "secondary"}
                        className={
                          isFeatured
                            ? "rounded-full bg-indigo-600 text-white"
                            : "rounded-full"
                        }
                      >
                        {model.badge}
                      </Badge>

                      <div>
                        <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400 sm:text-xl">
                          {model.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {model.description}
                        </p>
                      </div>

                      <div className="rounded-xl border border-border/70 bg-muted/40 px-3.5 py-2.5 text-xs transition-colors group-hover:border-indigo-500/30">
                        <span className="font-semibold text-muted-foreground">
                          Best for:{" "}
                        </span>
                        <span className="font-semibold text-foreground">
                          {model.bestFor}
                        </span>
                      </div>

                      <ul className="space-y-2.5 pt-1 text-sm">
                        {model.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <Check className="mt-0.5 size-4 shrink-0 text-teal-600 transition-transform duration-200 group-hover:scale-110 dark:text-teal-400" />
                            <span className="text-foreground/90">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 border-t border-border/60 pt-4 sm:mt-7">
                      <Button
                        type="button"
                        variant={isFeatured ? "default" : "outline"}
                        className={
                          isFeatured
                            ? "group/btn h-11 w-full rounded-xl bg-indigo-600 font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/20 cursor-pointer"
                            : "group/btn h-11 w-full rounded-xl font-semibold transition-all hover:border-indigo-600 hover:bg-indigo-600 hover:text-white cursor-pointer"
                        }
                        onClick={() => openInquiryModal(model.inquiryTopic)}
                      >
                        <span>{model.ctaLabel}</span>
                        <ArrowUpRight className="size-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </Button>
                    </div>
                  </SpotlightCard>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div id="process" className="scroll-mt-20 text-left">
          <SectionHeading
            badge="Delivery Process"
            title="From initial concept to production scale in four clear phases"
          />

          <div className="relative mt-8 sm:mt-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-11 right-12 left-12 hidden h-[2px] bg-gradient-to-r from-indigo-500/25 via-blue-500/40 to-teal-500/25 lg:block"
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
              {PROCESS_STEPS.map((item, idx) => (
                <Reveal key={item.step} delay={idx * 0.08} className="min-w-0">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 320, damping: 24 }}
                    className="group relative flex h-full min-w-0 flex-col justify-between rounded-3xl border border-border/80 bg-card p-5 transition-colors duration-200 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-950/6 dark:hover:shadow-black/35 sm:p-6"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex size-10 items-center justify-center rounded-xl bg-indigo-500/10 text-base font-extrabold tracking-tight text-indigo-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-indigo-600 group-hover:text-white dark:bg-indigo-500/20 dark:text-indigo-400">
                          {item.step}
                        </span>
                        <Badge
                          variant="outline"
                          className="rounded-full text-xs transition-colors group-hover:border-indigo-500/40"
                        >
                          {item.duration}
                        </Badge>
                      </div>
                      <h3 className="text-base font-bold text-foreground transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400 sm:text-lg">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-5">
                      <Separator className="mb-3" />
                      <p className="text-xs font-semibold text-foreground">
                        Deliverable:{" "}
                        <span className="font-normal text-muted-foreground">
                          {item.artifact}
                        </span>
                      </p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
