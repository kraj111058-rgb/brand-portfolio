import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Clock3, Layers3 } from "lucide-react";

import { SpotlightCard } from "@/components/shared/MotionPrimitives";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppShell } from "@/context/useAppShell";
import { CASE_STUDIES, type CaseStudy } from "@/data/agencyData";
import { EASE_CURVE } from "@/lib/motion";
import { cn } from "@/lib/utils";

const CATEGORIES: Array<"All" | CaseStudy["category"]> = [
  "All",
  "Web & SaaS",
  "Mobile Apps",
  "AI & FinTech",
];

function CaseStudyVisual({ study }: { study: CaseStudy }) {
  return (
    <div
      className={cn(
        "relative flex h-44 w-full flex-col justify-between overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br p-3.5 sm:p-4",
        study.accentGradient
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.35),transparent_50%)] dark:bg-[radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.08),transparent_50%)] transition-transform duration-500 group-hover:scale-110"
      />

      <div className="relative flex flex-wrap items-center justify-between gap-2">
        <Badge className="rounded-full border-border/60 bg-background/85 text-foreground backdrop-blur-xs">
          {study.industry}
        </Badge>
        <span className="rounded-full bg-background/80 px-2.5 py-0.5 text-[11px] font-semibold text-foreground transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white">
          {study.duration}
        </span>
      </div>

      <div className="relative rounded-xl border border-border/70 bg-background/90 p-3 shadow-sm backdrop-blur-md transition-transform duration-300 group-hover:scale-[1.02]">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <span className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
            {study.metricValue}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
            <span>Production Metric</span>
          </span>
        </div>
        <p className="mt-0.5 text-xs text-muted-foreground">
          {study.metricLabel}
        </p>
      </div>
    </div>
  );
}

export function PortfolioSection() {
  const { openInquiryModal } = useAppShell();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const filteredStudies =
    activeCategory === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((item) => item.category === activeCategory);

  return (
    <section
      id="work"
      className="scroll-mt-16 border-y border-border/60 bg-muted/25 py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Selected Case Studies"
          title="Products shipped with measurable impact"
          description="Filter by platform or open any case study to inspect the technical challenge, system architecture, and business results."
        />

        <Tabs
          value={activeCategory}
          onValueChange={(value) => {
            if (typeof value === "string") setActiveCategory(value);
          }}
          className="mt-7 sm:mt-8"
        >
          <TabsList className="w-fit">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="relative z-0 data-[active]:border-transparent data-[active]:bg-transparent data-[active]:shadow-none"
                >
                  {isActive && (
                    <motion.span
                      layoutId="portfolio-tab-pill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute inset-0 -z-10 rounded-lg border border-border/60 bg-background shadow-xs"
                    />
                  )}
                  <span>{category}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          <TabsContent value={activeCategory}>
            <motion.div
              layout
              className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredStudies.map((study) => (
                  <motion.div
                    key={study.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 8 }}
                    transition={{ duration: 0.28, ease: EASE_CURVE }}
                    className="min-w-0"
                  >
                    <SpotlightCard className="h-full p-4 text-left sm:p-5">
                      <div className="space-y-4">
                        <CaseStudyVisual study={study} />

                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-semibold text-muted-foreground">
                              {study.client}
                            </span>
                            <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                              {study.category}
                            </span>
                          </div>
                          <h3 className="mt-1 text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400 sm:text-xl">
                            {study.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {study.summary}
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 space-y-4 border-t border-border/60 pt-4">
                        <div className="flex flex-wrap gap-1.5">
                          {study.stack.slice(0, 4).map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="rounded-md border border-transparent px-2 py-0.5 text-[11px] transition-colors group-hover:border-border/80"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <Button
                          type="button"
                          variant="outline"
                          className="w-full justify-between rounded-xl font-semibold transition-all duration-200 group-hover:border-indigo-600 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:border-indigo-500 dark:group-hover:bg-indigo-500 cursor-pointer"
                          onClick={() => setSelectedStudy(study)}
                        >
                          <span>Inspect Case Study</span>
                          <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Button>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog
        open={Boolean(selectedStudy)}
        onOpenChange={(open) => {
          if (!open) setSelectedStudy(null);
        }}
      >
        <DialogContent className="max-w-2xl">
          {selectedStudy && (
            <>
              <DialogHeader>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="rounded-full">
                    {selectedStudy.category}
                  </Badge>
                  <Badge variant="outline" className="rounded-full">
                    {selectedStudy.industry}
                  </Badge>
                </div>
                <DialogTitle className="mt-2 text-xl sm:text-2xl">
                  {selectedStudy.title} — {selectedStudy.client}
                </DialogTitle>
                <DialogDescription>{selectedStudy.summary}</DialogDescription>
              </DialogHeader>

              <div className="mt-5 grid grid-cols-1 gap-3 rounded-2xl border border-border/80 bg-muted/40 p-4 sm:grid-cols-3">
                <div>
                  <span className="text-xs text-muted-foreground">
                    Primary Impact
                  </span>
                  <p className="mt-0.5 text-xl font-extrabold text-foreground">
                    {selectedStudy.metricValue}
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    {selectedStudy.metricLabel}
                  </p>
                </div>
                <div>
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock3 className="size-3.5" />
                    Delivery Window
                  </span>
                  <p className="mt-1 text-sm font-bold text-foreground">
                    {selectedStudy.duration}
                  </p>
                </div>
                <div>
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <Layers3 className="size-3.5" />
                    Core Stack
                  </span>
                  <p className="mt-1 text-xs font-semibold leading-relaxed text-foreground">
                    {selectedStudy.stack.join(" · ")}
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-4 text-left text-sm">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    The Challenge
                  </h4>
                  <p className="mt-1.5 leading-relaxed text-foreground/90">
                    {selectedStudy.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Architecture &amp; Execution
                  </h4>
                  <p className="mt-1.5 leading-relaxed text-foreground/90">
                    {selectedStudy.solution}
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Measured Outcomes
                  </h4>
                  <ul className="mt-2.5 space-y-2">
                    {selectedStudy.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2 text-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal-600 dark:text-teal-400" />
                        <span className="font-medium">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-col-reverse gap-2.5 border-t border-border/70 pt-4 sm:flex-row sm:items-center sm:justify-end">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full rounded-xl sm:w-auto cursor-pointer"
                  onClick={() => setSelectedStudy(null)}
                >
                  Close
                </Button>
                <Button
                  type="button"
                  className="w-full rounded-xl bg-indigo-600 font-semibold text-white hover:bg-indigo-700 sm:w-auto cursor-pointer"
                  onClick={() => {
                    const topic = selectedStudy.category;
                    setSelectedStudy(null);
                    openInquiryModal(
                      topic === "Mobile Apps"
                        ? "Mobile App (iOS / Android / Flutter)"
                        : topic === "AI & FinTech"
                          ? "AI Agents & Automation"
                          : "Web & SaaS Product"
                    );
                  }}
                >
                  <span>Build a Similar Product</span>
                  <ArrowUpRight className="size-4" />
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
