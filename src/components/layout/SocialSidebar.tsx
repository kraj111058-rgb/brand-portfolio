import { motion } from "framer-motion";

import { SocialIcon } from "@/components/shared/BrandIcons";
import { SOCIAL_LINKS } from "@/data/brand";
import { EASE_CURVE } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function SocialSidebar() {
  return (
    <aside
      aria-label="Social media links"
      className="fixed top-1/2 left-0 z-30 hidden -translate-y-1/2 flex-col items-start gap-2.5 md:flex"
    >
      {SOCIAL_LINKS.map((item, idx) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.45,
            delay: 0.2 + idx * 0.06,
            ease: EASE_CURVE,
          }}
        >
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className={cn(
              "group inline-flex h-10 items-center rounded-r-full border border-l-0 border-border/80 bg-card/95 pl-3 pr-3.5 text-foreground shadow-md shadow-black/8 backdrop-blur-md transition-[background-color,border-color,color,box-shadow,padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:pr-4 hover:shadow-lg active:pr-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:shadow-black/40",
              item.hoverColorClass
            )}
          >
            <SocialIcon
              id={item.id}
              className="size-[17px] shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
            />
            <span className="grid grid-cols-[0fr] transition-[grid-template-columns] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:grid-cols-[1fr] group-active:grid-cols-[1fr] group-focus-visible:grid-cols-[1fr]">
              <span className="min-w-0 overflow-hidden">
                <span className="block -translate-x-2.5 whitespace-nowrap pl-2.5 text-xs font-bold tracking-tight opacity-0 transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:opacity-100 group-active:translate-x-0 group-active:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
                  {item.label}
                </span>
              </span>
            </span>
          </a>
        </motion.div>
      ))}
    </aside>
  );
}
