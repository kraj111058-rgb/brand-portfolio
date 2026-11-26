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
    <div className="grid w-[min(640px,calc(100vw-2rem))] grid-cols-12 gap-4">
      <div className="col-span-7 flex flex-col">
        <p className="px-2.5 pb-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
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
                className="group flex h-auto w-full items-start gap-3 rounded-xl border border-transparent p-2.5 text-left whitespace-normal transition-all duration-200 hover:translate-x-0.5 hover:border-brand-blue/25 hover:bg-muted/75"
              >
                <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue transition-all duration-200 group-hover:bg-brand-blue group-hover:text-white group-hover:shadow-sm group-hover:shadow-brand-blue/25">
                  <Icon className="size-4" />
                </span>

                <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="flex items-center gap-2">
                    <span className="text-[13px] font-semibold tracking-tight text-foreground transition-colors group-hover:text-brand-blue">
                      {item.title}
                    </span>
                    {item.tag && (
                      <Badge
                        variant="secondary"
                        className="rounded-md px-1.5 py-0 text-[10px] font-semibold text-brand-violet dark:text-violet-300"
                      >
                        {item.tag}
                      </Badge>
                    )}
                  </span>
                  <span className="text-xs leading-snug text-muted-foreground">
                    {item.description}
                  </span>
                </span>

                <ArrowUpRight className="mt-1 size-3.5 shrink-0 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-blue group-hover:opacity-100" />
              </NavigationMenuLink>
            );
          })}
        </div>
      </div>

      <div
        data-surface="navy"
        className="relative col-span-5 flex flex-col justify-between overflow-hidden rounded-xl border border-white/12 bg-gradient-to-br from-brand-navy to-brand-navy-elevated p-4 text-left"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-12 -right-12 size-40 rounded-full bg-brand-violet/25 blur-2xl"
        />

        <div className="relative space-y-2.5">
          <span className="inline-flex items-center rounded-full border border-blue-400/25 bg-blue-500/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-blue-200">
            {group.spotlightBadge}
          </span>
          <h4 className="text-sm font-bold leading-snug tracking-tight text-white">
            {group.spotlightTitle}
          </h4>
          <p className="text-xs leading-relaxed text-slate-300">
            {group.spotlightDescription}
          </p>
        </div>

        <div className="relative mt-4 space-y-2.5 border-t border-white/10 pt-3">
          <Button
            type="button"
            size="sm"
            className="group/btn h-9 w-full justify-between rounded-lg bg-brand-blue px-3 text-xs font-semibold text-white shadow-sm shadow-blue-600/25 transition-all hover:bg-blue-500 cursor-pointer"
            onClick={() => openInquiryModal(group.spotlightTopic)}
          >
            <span>{group.spotlightCtaLabel}</span>
            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
          </Button>

          <NavigationMenuLink
            href={group.footerHref}
            closeOnClick
            className="group/link flex w-full items-center justify-between px-1 py-1 text-xs font-semibold text-blue-300 hover:bg-transparent hover:text-white"
          >
            <span>{group.footerLabel}</span>
            <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </NavigationMenuLink>
        </div>
      </div>
    </div>
  );
}
