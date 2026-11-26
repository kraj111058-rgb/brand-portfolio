import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { CaseStudyDialog } from "@/components/features/home/CaseStudyDialog";
import { CaseStudyPreview } from "@/components/features/home/CaseStudyPreview";
import { Reveal } from "@/components/shared/MotionPrimitives";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CASE_STUDIES, PORTFOLIO_CATEGORIES, type CaseStudy } from "@/data/portfolio";
import { EASE_CURVE, SPRINGS, TRANSITIONS, VIEWPORT_CONFIG } from "@/lib/motion";
import { cn } from "@/lib/utils";

function getCardSpanClass(index: number, total: number): string {
  if (index === 0) {
    return "md:col-span-2 lg:col-span-12";
  }
  if (total === 2) {
    return "md:col-span-2 lg:col-span-12";
  }
  if (total >= 5) {
    if (index === 1) return "md:col-span-1 lg:col-span-7";
    if (index === 2) return "md:col-span-1 lg:col-span-5";
    if (index === total - 1 && (total - 3) % 2 === 1) {
      return "md:col-span-2 lg:col-span-4";
    }
    return "md:col-span-1 lg:col-span-4";
  }
  return "md:col-span-1 lg:col-span-6";
}

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
  isFeatured: boolean;
  spanClass: string;
  onSelect: (study: CaseStudy) => void;
}

function CaseStudyCard({
  study,
  index,
  isFeatured,
  spanClass,
  onSelect,
}: CaseStudyCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_CONFIG}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.44,
        delay: prefersReducedMotion ? 0 : index * 0.06,
        ease: EASE_CURVE,
      }}
      className={cn("min-w-0", spanClass)}
    >
      <motion.article
        data-cursor="view"
        whileHover={prefersReducedMotion ? undefined : { y: -3 }}
        transition={SPRINGS.tactile}
        className={cn(
          "group relative h-full overflow-hidden rounded-2xl border border-border/80 bg-card text-left transition-[box-shadow,background-color] duration-300 focus-within:ring-2 focus-within:ring-brand-blue/40 hover:shadow-xl hover:shadow-brand-navy/6 dark:hover:shadow-black/40",
          isFeatured ? "p-5 sm:p-7 lg:p-8" : "flex flex-col justify-between p-5 sm:p-6"
        )}
      >
        {isFeatured ? (
          <div className="grid h-full grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="min-w-0 lg:col-span-7 lg:h-full">
              <CaseStudyPreview study={study} featured />
            </div>

            <div className="flex min-w-0 flex-col justify-between space-y-6 lg:col-span-5">
              <div className="space-y-3.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-brand-violet dark:text-violet-300">
                    Featured Case Study
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground">
                    {study.client}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-brand-blue sm:text-2xl lg:text-[1.7rem]">
                  <button
                    type="button"
                    onClick={() => onSelect(study)}
                    className="text-left focus-visible:outline-none after:absolute after:inset-0 after:content-[''] cursor-pointer"
                  >
                    {study.title}
                    <span className="sr-only">
                      {" "}
                      — View case study for {study.client}
                    </span>
                  </button>
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                  {study.summary}
                </p>

                <div className="rounded-xl border border-border/75 bg-surface-subtle/80 p-3.5">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-mono text-2xl font-bold tracking-tight text-foreground">
                      {study.metricValue}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-blue dark:text-blue-400">
                      {study.category}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {study.metricLabel}
                  </p>
                </div>
              </div>

              <div className="space-y-4 border-t border-border/70 pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {study.stack.slice(0, 5).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-md px-2 py-0.5 text-[11px] font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue dark:text-blue-400">
                  <span>View Case Study</span>
                  <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="space-y-5">
              <CaseStudyPreview study={study} />

              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-medium text-muted-foreground">
                    {study.client}
                  </span>
                  <span className="font-semibold text-brand-violet dark:text-violet-300">
                    {study.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-brand-blue sm:text-xl">
                  <button
                    type="button"
                    onClick={() => onSelect(study)}
                    className="text-left focus-visible:outline-none after:absolute after:inset-0 after:content-[''] cursor-pointer"
                  >
                    {study.title}
                    <span className="sr-only">
                      {" "}
                      — View case study for {study.client}
                    </span>
                  </button>
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {study.summary}
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4 border-t border-border/70 pt-4">
              <div className="flex flex-wrap gap-1.5">
                {study.stack.slice(0, 4).map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="rounded-md px-2 py-0.5 text-[11px] font-medium"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs font-semibold text-brand-blue dark:text-blue-400">
                <span>View Case Study</span>
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </>
        )}
      </motion.article>
    </motion.div>
  );
}

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const filteredStudies =
    activeCategory === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((item) => item.category === activeCategory);

  return (
    <section
      id="work"
      className="relative scroll-mt-20 overflow-hidden border-t border-border/70 bg-background py-16 sm:py-20 lg:py-28"
    >
      {/* Subtle architectural backdrop framing the centered editorial header */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_65%_55%_at_50%_0%,rgba(37,99,235,0.06),rgba(124,58,237,0.04)_45%,transparent_75%)] dark:bg-[radial-gradient(ellipse_65%_55%_at_50%_0%,rgba(59,130,246,0.12),rgba(139,92,246,0.08)_45%,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_75%_85%_at_50%_15%,#000_35%,transparent_100%)] dark:bg-[linear-gradient(to_right,rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.045)_1px,transparent_1px)]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:pl-14 md:pr-8 lg:pl-16 lg:pr-10 min-[1400px]:px-8">
        <Reveal className="grid grid-cols-1 items-center gap-6 xl:grid-cols-12">
          {/* Left Desktop Flank Anchor */}
          <div
            aria-hidden="true"
            className="hidden flex-col items-start border-l border-border/80 pl-4 text-left xl:col-span-2 xl:flex"
          >
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-blue dark:text-blue-400">
              Practices
            </span>
            <span className="mt-2 text-xs font-medium leading-relaxed text-muted-foreground">
              Web &amp; SaaS
              <br />
              Mobile Apps
              <br />
              AI &amp; FinTech
            </span>
          </div>

          {/* Center Editorial Heading */}
          <div className="mx-auto max-w-3xl text-center xl:col-span-8">
            <div className="mb-4 inline-flex items-center justify-center gap-2.5">
              <span
                aria-hidden="true"
                className="h-[2px] w-6 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet"
              />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue dark:text-blue-400">
                SELECTED WORK
              </span>
              <span
                aria-hidden="true"
                className="h-[2px] w-6 rounded-full bg-gradient-to-l from-brand-blue to-brand-violet"
              />
            </div>

            <h2 className="text-2xl font-extrabold tracking-[-0.035em] text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.09]">
              Turning ambitious ideas into{" "}
              <span className="bg-gradient-to-r from-brand-blue via-blue-500 to-brand-violet bg-clip-text text-transparent sm:whitespace-nowrap">
                impactful digital products.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-[58ch] text-sm leading-relaxed text-muted-foreground sm:text-base">
              Explore how we transform complex challenges into meaningful
              digital experiences through strategy, design, and engineering.
            </p>
          </div>

          {/* Right Desktop Flank Anchor */}
          <div
            aria-hidden="true"
            className="hidden flex-col items-end border-r border-border/80 pr-4 text-right xl:col-span-2 xl:flex"
          >
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-violet dark:text-violet-300">
              Focus
            </span>
            <span className="mt-2 text-xs font-medium leading-relaxed text-muted-foreground">
              Product Strategy
              <br />
              Design Systems
              <br />
              Full-Cycle Build
            </span>
          </div>
        </Reveal>

        <Tabs
          value={activeCategory}
          onValueChange={(value) => {
            if (typeof value === "string") setActiveCategory(value);
          }}
          className="mt-9 sm:mt-11"
        >
          <div className="flex items-center justify-center gap-5 lg:gap-7">
            <div
              aria-hidden="true"
              className="hidden flex-1 items-center gap-3 lg:flex"
            >
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground/75">
                Filter Work
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-border/90 to-border/30" />
            </div>

            <TabsList className="mx-auto w-fit justify-center rounded-full border border-border/80 bg-surface-subtle p-1 shadow-2xs">
              {PORTFOLIO_CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="relative z-0 rounded-full px-4 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground data-[active]:border-transparent data-[active]:bg-transparent data-[active]:text-white data-[active]:shadow-none sm:text-[13px]"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="portfolio-tab-pill"
                        transition={SPRINGS.tactile}
                        className="absolute inset-0 -z-10 rounded-full bg-brand-blue shadow-sm shadow-brand-blue/25"
                      />
                    )}
                    <span className="relative z-10">{category}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            <div
              aria-hidden="true"
              className="hidden flex-1 items-center justify-end gap-3 lg:flex"
            >
              <span className="h-px flex-1 bg-gradient-to-l from-border/90 to-border/30" />
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground/75">
                Web · Mobile · AI
              </span>
            </div>
          </div>

          <TabsContent value={activeCategory} className="mt-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={TRANSITIONS.tabSwitch}
                className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-7"
              >
                {filteredStudies.map((study, index) => (
                  <CaseStudyCard
                    key={study.id}
                    study={study}
                    index={index}
                    isFeatured={index === 0 || filteredStudies.length === 2}
                    spanClass={getCardSpanClass(index, filteredStudies.length)}
                    onSelect={setSelectedStudy}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </TabsContent>
        </Tabs>
      </div>

      <CaseStudyDialog
        study={selectedStudy}
        onClose={() => setSelectedStudy(null)}
      />
    </section>
  );
}
