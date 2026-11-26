import { BRAND_INFO } from "@/data/brand";

interface BrandLogoProps {
  showSubtitle?: boolean;
}

export function BrandLogo({ showSubtitle = false }: BrandLogoProps) {
  return (
    <a
      href="#"
      className="group inline-flex shrink-0 items-center gap-2.5 rounded-lg text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span className="relative flex size-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-blue to-brand-violet text-xs font-extrabold tracking-tight text-white shadow-sm shadow-brand-blue/25 transition-transform duration-200 group-hover:scale-105 group-hover:-rotate-3">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.28),transparent_60%)]"
        />
        <span className="relative">{BRAND_INFO.shortMark}</span>
      </span>

      <div className="flex flex-col">
        <span className="text-[15px] font-bold leading-none tracking-[-0.02em] text-foreground transition-colors group-hover:text-brand-blue dark:group-hover:text-blue-400">
          {BRAND_INFO.name}
        </span>
        {showSubtitle && (
          <span className="mt-1 hidden text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:inline">
            Engineering Studio
          </span>
        )}
      </div>
    </a>
  );
}
