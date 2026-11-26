import { Reveal } from "@/components/shared/MotionPrimitives";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge: string;
  title: string;
  description?: string;
  className?: string;
  index?: string;
  align?: "left" | "center";
  surface?: "light" | "navy";
}

export function SectionHeading({
  badge,
  title,
  description,
  className,
  index,
  align = "left",
  surface = "light",
}: SectionHeadingProps) {
  const isCentered = align === "center";
  const isNavy = surface === "navy";

  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        isCentered ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <div
        className={cn(
          "mb-3.5 inline-flex items-center gap-2.5",
          isCentered && "justify-center"
        )}
      >
        <span
          aria-hidden="true"
          className="h-[2px] w-6 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet"
        />
        {index && (
          <span
            className={cn(
              "font-mono text-[11px] font-semibold tracking-wider",
              isNavy ? "text-violet-300" : "text-brand-violet dark:text-violet-400"
            )}
          >
            {index}
          </span>
        )}
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.14em]",
            isNavy ? "text-blue-300" : "text-brand-blue dark:text-blue-400"
          )}
        >
          {badge}
        </span>
        {isCentered && (
          <span
            aria-hidden="true"
            className="h-[2px] w-6 rounded-full bg-gradient-to-l from-brand-blue to-brand-violet"
          />
        )}
      </div>

      <h2
        className={cn(
          "text-2xl font-bold tracking-[-0.03em] sm:text-3xl lg:text-[2.5rem] lg:leading-[1.12]",
          isCentered && "lg:text-[2.85rem] lg:leading-[1.09]",
          isNavy ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-3.5 max-w-[58ch] text-sm leading-relaxed sm:text-base",
            isCentered && "mx-auto",
            isNavy ? "text-slate-300" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
