import { Reveal } from "@/components/shared/MotionPrimitives";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-2xl text-left", className)}>
      <Badge variant="secondary" className="mb-3 rounded-full px-3 py-1">
        {badge}
      </Badge>
      <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      )}
    </Reveal>
  );
}
