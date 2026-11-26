import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Clock3, Layers3 } from "lucide-react";

import { CaseStudyPreview } from "@/components/features/home/CaseStudyPreview";
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
import { useAppShell } from "@/context/useAppShell";
import type { CaseStudy } from "@/data/portfolio";
import { EASE_CURVE } from "@/lib/motion";

interface CaseStudyDialogProps {
  study: CaseStudy | null;
  onClose: () => void;
}

export function CaseStudyDialog({ study, onClose }: CaseStudyDialogProps) {
  const { openInquiryModal } = useAppShell();
  const prefersReducedMotion = useReducedMotion();

  const handleBuildSimilar = () => {
    if (!study) return;
    const topic = study.category;
    onClose();
    openInquiryModal(
      topic === "Mobile Apps"
        ? "Mobile App (iOS / Android / Flutter)"
        : topic === "AI & FinTech"
          ? "AI Agents & Automation"
          : "Web & SaaS Product"
    );
  };

  return (
    <Dialog
      open={Boolean(study)}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="max-w-4xl rounded-2xl border-border/80 bg-background p-5 sm:p-6 lg:p-7">
        {study && (
          <motion.div
            key={study.id}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: EASE_CURVE }}
          >
            <DialogHeader className="pr-10">
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant="secondary"
                  className="rounded-full px-3 py-0.5 text-[11px] font-semibold text-brand-violet dark:text-violet-300"
                >
                  {study.category}
                </Badge>
                <Badge
                  variant="outline"
                  className="rounded-full border-border/80 px-3 py-0.5 text-[11px] font-medium"
                >
                  {study.industry}
                </Badge>
                <span className="text-xs font-medium text-muted-foreground">
                  · {study.client}
                </span>
              </div>

              <DialogTitle className="mt-1.5 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                {study.title}
              </DialogTitle>
              <DialogDescription className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {study.summary}
              </DialogDescription>
            </DialogHeader>

            {/* Balanced 2-column body so the dialog fits comfortably without overflowing */}
            <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-start lg:gap-6">
              {/* Left Column: Prominent Product Preview + Metadata */}
              <div className="min-w-0 space-y-3.5 lg:col-span-6">
                <CaseStudyPreview study={study} />

                <div className="grid grid-cols-2 gap-3 rounded-xl border border-border/80 bg-surface-subtle/80 p-3.5">
                  <div className="min-w-0">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      Primary Impact
                    </span>
                    <p className="mt-0.5 font-mono text-lg font-bold tracking-tight text-foreground sm:text-xl">
                      {study.metricValue}
                    </p>
                    <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
                      {study.metricLabel}
                    </p>
                  </div>

                  <div className="min-w-0 border-l border-border/70 pl-3">
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      <Clock3 className="size-3 text-brand-blue" />
                      Delivery
                    </span>
                    <p className="mt-1 font-mono text-sm font-bold text-foreground">
                      {study.duration}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      <Layers3 className="size-3 text-brand-violet" />
                      Core Stack
                    </span>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {study.stack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="rounded px-1.5 py-0 text-[10px] font-medium"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative & Outcomes */}
              <div className="min-w-0 space-y-4 text-left text-xs sm:text-sm lg:col-span-6">
                <div>
                  <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-violet dark:text-violet-300">
                    The Challenge
                  </h4>
                  <p className="mt-1.5 leading-relaxed text-foreground/90">
                    {study.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-blue dark:text-blue-400">
                    Architecture &amp; Execution
                  </h4>
                  <p className="mt-1.5 leading-relaxed text-foreground/90">
                    {study.solution}
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Measured Outcomes
                  </h4>
                  <ul className="mt-2 space-y-1.5">
                    {study.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2 text-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-brand-blue dark:text-blue-400 sm:size-4" />
                        <span className="font-medium leading-snug">
                          {outcome}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-col-reverse gap-2.5 border-t border-border/75 pt-4 sm:flex-row sm:items-center sm:justify-end">
              <Button
                type="button"
                variant="outline"
                className="h-10 w-full rounded-xl border-border/80 sm:w-auto cursor-pointer"
                onClick={onClose}
              >
                Close
              </Button>
              <Button
                type="button"
                className="group h-10 w-full rounded-xl bg-brand-blue px-5 font-semibold text-white shadow-sm shadow-brand-blue/25 transition-all hover:bg-brand-blue-hover sm:w-auto cursor-pointer"
                onClick={handleBuildSimilar}
              >
                <span>Build a Similar Product</span>
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </div>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
}
