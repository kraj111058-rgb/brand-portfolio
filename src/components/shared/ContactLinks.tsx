import { Mail, Phone } from "lucide-react";

import { BRAND_INFO } from "@/data/brand";
import { cn } from "@/lib/utils";

interface ContactLinksProps {
  className?: string;
  linkClassName?: string;
}

export function ContactLinks({ className, linkClassName }: ContactLinksProps) {
  return (
    <div className={cn("space-y-2.5 text-sm text-muted-foreground", className)}>
      <a
        href={`mailto:${BRAND_INFO.email}`}
        className={cn(
          "group flex items-center gap-2.5 break-all transition-all hover:translate-x-1 hover:text-foreground",
          linkClassName
        )}
      >
        <Mail className="size-4 shrink-0 text-indigo-600 transition-transform group-hover:scale-110 dark:text-indigo-400" />
        <span>{BRAND_INFO.email}</span>
      </a>
      <a
        href={`tel:${BRAND_INFO.phone.replace(/[^\d+]/g, "")}`}
        className={cn(
          "group flex items-center gap-2.5 transition-all hover:translate-x-1 hover:text-foreground",
          linkClassName
        )}
      >
        <Phone className="size-4 shrink-0 text-indigo-600 transition-transform group-hover:scale-110 dark:text-indigo-400" />
        <span>{BRAND_INFO.phone}</span>
      </a>
    </div>
  );
}
