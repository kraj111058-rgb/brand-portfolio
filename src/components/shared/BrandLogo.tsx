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
      <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-teal-500 text-xs font-extrabold tracking-tight text-white shadow-sm transition-transform duration-200 group-hover:scale-105 group-hover:-rotate-3">
        {BRAND_INFO.shortMark}
      </span>
      <div className="flex flex-col">
        <span className="text-sm font-extrabold leading-none tracking-tight text-foreground transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
          {BRAND_INFO.name}
        </span>
        {showSubtitle && (
          <span className="mt-0.5 hidden text-[10px] font-semibold tracking-wider text-muted-foreground sm:inline">
            ENGINEERING STUDIO
          </span>
        )}
      </div>
    </a>
  );
}
