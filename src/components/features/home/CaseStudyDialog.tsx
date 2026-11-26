import { ArrowUpRight, CheckCircle2, Clock3, Layers3 } from "lucide-react";

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

interface CaseStudyDialogProps {
  study: CaseStudy | null;
  onClose: () => void;
}

export function CaseStudyDialog({ study, onClose }: CaseStudyDialogProps) {
  const { openInquiryModal } = useAppShell();

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
      <DialogContent className="max-w-2xl">
        {study && (
          <>
            <DialogHeader>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="rounded-full">
                  {study.category}
                </Badge>
                <Badge variant="outline" className="rounded-full">
                  {study.industry}
                </Badge>
              </div>
              <DialogTitle className="mt-2 text-xl sm:text-2xl">
                {study.title} — {study.client}
              </DialogTitle>
              <DialogDescription>{study.summary}</DialogDescription>
            </DialogHeader>

            <div className="mt-5 grid grid-cols-1 gap-3 rounded-2xl border border-border/80 bg-muted/40 p-4 sm:grid-cols-3">
              <div>
                <span className="text-xs text-muted-foreground">
                  Primary Impact
                </span>
                <p className="mt-0.5 text-xl font-extrabold text-foreground">
                  {study.metricValue}
                </p>
                <p className="text-[11px] text-muted-foreground">
                  {study.metricLabel}
                </p>
              </div>
              <div>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock3 className="size-3.5" />
                  Delivery Window
                </span>
                <p className="mt-1 text-sm font-bold text-foreground">
                  {study.duration}
                </p>
              </div>
              <div>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Layers3 className="size-3.5" />
                  Core Stack
                </span>
                <p className="mt-1 text-xs font-semibold leading-relaxed text-foreground">
                  {study.stack.join(" · ")}
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-4 text-left text-sm">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  The Challenge
                </h4>
                <p className="mt-1.5 leading-relaxed text-foreground/90">
                  {study.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Architecture &amp; Execution
                </h4>
                <p className="mt-1.5 leading-relaxed text-foreground/90">
                  {study.solution}
                </p>
              </div>

              <Separator />

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Measured Outcomes
                </h4>
                <ul className="mt-2.5 space-y-2">
                  {study.outcomes.map((outcome) => (
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
                onClick={onClose}
              >
                Close
              </Button>
              <Button
                type="button"
                className="w-full rounded-xl bg-indigo-600 font-semibold text-white hover:bg-indigo-700 sm:w-auto cursor-pointer"
                onClick={handleBuildSimilar}
              >
                <span>Build a Similar Product</span>
                <ArrowUpRight className="size-4" />
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
