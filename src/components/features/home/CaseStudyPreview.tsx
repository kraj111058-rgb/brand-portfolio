import cartflowCommerceImg from "@/assets/portfolio/cartflow-commerce.jpg";
import finpulsePayImg from "@/assets/portfolio/finpulse-pay.jpg";
import medsyncCareImg from "@/assets/portfolio/medsync-care.jpg";
import scaleopsAiImg from "@/assets/portfolio/scaleops-ai.jpg";
import vaultguardLedgerImg from "@/assets/portfolio/vaultguard-ledger.jpg";
import voyageOsImg from "@/assets/portfolio/voyage-os.jpg";
import type { CaseStudy } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const CASE_STUDY_IMAGES: Record<string, string> = {
  "finpulse-pay": finpulsePayImg,
  "medsync-care": medsyncCareImg,
  "voyage-os": voyageOsImg,
  "scaleops-ai": scaleopsAiImg,
  "cartflow-commerce": cartflowCommerceImg,
  "vaultguard-ledger": vaultguardLedgerImg,
};

interface CaseStudyPreviewProps {
  study: CaseStudy;
  featured?: boolean;
  className?: string;
}

export function CaseStudyPreview({
  study,
  featured = false,
  className,
}: CaseStudyPreviewProps) {
  const imageSrc = CASE_STUDY_IMAGES[study.id] ?? finpulsePayImg;

  return (
    <div
      data-surface="navy"
      className={cn(
        "relative w-full overflow-hidden rounded-xl border border-white/12 bg-brand-navy text-left",
        featured
          ? "aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[380px]"
          : "aspect-[16/10]",
        className
      )}
    >
      <img
        src={imageSrc}
        alt={`${study.title} — ${study.industry} showcase for ${study.client}`}
        decoding="async"
        className="size-full object-cover object-center transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]"
      />

      {/* Subtle Bottom Scrim for Key Outcome Readout */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5 bg-gradient-to-t from-[#050a18]/92 via-[#050a18]/65 to-transparent px-4 pt-9 pb-3">
        <span className="font-mono text-base font-bold tracking-tight text-white sm:text-lg">
          {study.metricValue}
        </span>
        <span className="text-[11px] font-medium text-slate-200/90">
          {study.metricLabel}
        </span>
      </div>
    </div>
  );
}
