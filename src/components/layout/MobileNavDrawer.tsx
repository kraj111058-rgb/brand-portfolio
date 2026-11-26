import { useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";

import { BrandLogo } from "@/components/shared/BrandLogo";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { useAppShell } from "@/context/useAppShell";
import { BRAND_INFO, MOBILE_NAV_LINKS } from "@/data/brand";

export function MobileNavDrawer() {
  const { openInquiryModal } = useAppShell();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleAction = (topic: string) => {
    setDrawerOpen(false);
    openInquiryModal(topic);
  };

  return (
    <Drawer
      open={drawerOpen}
      onOpenChange={setDrawerOpen}
      swipeDirection="right"
    >
      <DrawerTrigger
        render={
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Open navigation menu"
            className="size-9 rounded-xl border-border/80 lg:hidden cursor-pointer"
          >
            <Menu className="size-4" />
          </Button>
        }
      />

      <DrawerContent className="p-5 sm:p-6">
        <div className="pr-10">
          <DrawerTitle className="sr-only">{BRAND_INFO.name}</DrawerTitle>
          <BrandLogo />
          <DrawerDescription className="mt-2 text-xs">
            Software Engineering &amp; Product Design Studio
          </DrawerDescription>
        </div>

        <Separator className="my-5" />

        <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
          {MOBILE_NAV_LINKS.map((link, index) => (
            <DrawerClose
              key={link.href}
              render={
                <a
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-muted/80"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-[11px] font-semibold text-muted-foreground group-hover:text-brand-blue">
                      0{index + 1}
                    </span>
                    <span className="transition-colors group-hover:text-brand-blue">
                      {link.label}
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-blue" />
                </a>
              }
            />
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-2.5 pt-6">
          <Button
            type="button"
            variant="outline"
            className="h-11 w-full rounded-xl border-border/80 font-semibold hover:border-brand-blue/40 cursor-pointer"
            onClick={() => handleAction("Hire Dedicated Engineers")}
          >
            Hire Dedicated Engineers
          </Button>
          <Button
            type="button"
            className="h-11 w-full rounded-xl bg-brand-blue font-semibold text-white shadow-sm shadow-brand-blue/25 hover:bg-brand-blue-hover cursor-pointer"
            onClick={() => handleAction("Web & SaaS Product")}
          >
            <span>Start a Project</span>
            <ArrowUpRight className="size-4" />
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
