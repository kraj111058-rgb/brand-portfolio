import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Briefcase,
  Code2,
  Layers,
  Palette,
  Rocket,
  Smartphone,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { useAppShell } from "@/context/useAppShell";
import type { NavMenuGroup, NavMenuItemData } from "@/data/brand";

const MENU_ICON_MAP: Record<NavMenuItemData["icon"], typeof Code2> = {
  code: Code2,
  smartphone: Smartphone,
  palette: Palette,
  bot: Bot,
  users: Users,
  rocket: Rocket,
  layers: Layers,
  briefcase: Briefcase,
};

export function HeaderSubmenu({ group }: { group: NavMenuGroup }) {
  const { openInquiryModal } = useAppShell();

  return (
    <div className="grid w-[min(620px,calc(100vw-2rem))] grid-cols-12 gap-4">
      <div className="col-span-7 flex flex-col">
        <p className="px-2.5 pb-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
          {group.heading}
        </p>

        <div className="flex flex-col gap-1">
          {group.items.map((item) => {
            const Icon = MENU_ICON_MAP[item.icon];
            return (
              <NavigationMenuLink
                key={item.title}
                href={item.href}
                closeOnClick
                className="group flex h-auto w-full items-start gap-3 rounded-xl border border-transparent p-2.5 text-left whitespace-normal transition-all duration-200 hover:translate-x-1 hover:border-indigo-500/25 hover:bg-muted/80"
              >
                <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 transition-all duration-200 group-hover:scale-105 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-indigo-600/20 dark:bg-indigo-500/20 dark:text-indigo-400">
                  <Icon className="size-4" />
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="flex items-center gap-2">
                    <span className="text-xs font-bold text-foreground transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      {item.title}
                    </span>
                    {item.tag && (
                      <Badge
                        variant="secondary"
                        className="px-1.5 py-0 text-[10px] font-semibold"
                      >
                        {item.tag}
                      </Badge>
                    )}
                  </span>
                  <span className="text-xs leading-snug text-muted-foreground">
                    {item.description}
                  </span>
                </span>
                <ArrowUpRight className="mt-1 size-3.5 shrink-0 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-indigo-600 group-hover:opacity-100 dark:group-hover:text-indigo-400" />
              </NavigationMenuLink>
            );
          })}
        </div>
      </div>

      <div className="col-span-5 flex flex-col justify-between rounded-xl border border-border/70 bg-gradient-to-br from-muted/70 via-muted/40 to-indigo-500/5 p-4 text-left transition-colors hover:border-indigo-500/30">
        <div className="space-y-2.5">
          <Badge
            variant="outline"
            className="rounded-full border-indigo-500/30 bg-indigo-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-indigo-700 dark:text-indigo-300"
          >
            {group.spotlightBadge}
          </Badge>
          <h4 className="text-sm font-bold leading-snug text-foreground">
            {group.spotlightTitle}
          </h4>
          <p className="text-xs leading-relaxed text-muted-foreground">
            {group.spotlightDescription}
          </p>
        </div>

        <div className="mt-4 space-y-2.5 border-t border-border/60 pt-3">
          <Button
            type="button"
            size="sm"
            className="group/btn h-9 w-full justify-between rounded-lg bg-indigo-600 px-3 text-xs font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 hover:shadow-md hover:shadow-indigo-600/20 dark:bg-indigo-500 dark:hover:bg-indigo-400 cursor-pointer"
            onClick={() => openInquiryModal(group.spotlightTopic)}
          >
            <span>{group.spotlightCtaLabel}</span>
            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
          </Button>

          <NavigationMenuLink
            href={group.footerHref}
            closeOnClick
            className="group/link flex w-full items-center justify-between px-1 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-transparent"
          >
            <span>{group.footerLabel}</span>
            <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </NavigationMenuLink>
        </div>
      </div>
    </div>
  );
}
