import { useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";

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
            className="rounded-xl lg:hidden cursor-pointer"
          >
            <Menu className="size-4" />
          </Button>
        }
      />
      <DrawerContent>
        <div className="pr-10">
          <DrawerTitle>{BRAND_INFO.name}</DrawerTitle>
          <DrawerDescription className="mt-1">
            Software Engineering &amp; Product Design
          </DrawerDescription>
        </div>

        <Separator className="my-5" />

        <nav className="flex flex-col gap-1">
          {MOBILE_NAV_LINKS.map((link) => (
            <DrawerClose
              key={link.href}
              render={
                <a
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-foreground transition-all hover:translate-x-1 hover:bg-muted"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-indigo-500" />
                </a>
              }
            />
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-2.5 pt-6">
          <Button
            type="button"
            variant="outline"
            className="h-11 w-full rounded-xl font-semibold cursor-pointer"
            onClick={() => handleAction("Hire Dedicated Engineers")}
          >
            Hire Dedicated Engineers
          </Button>
          <Button
            type="button"
            className="h-11 w-full rounded-xl bg-indigo-600 font-semibold text-white hover:bg-indigo-700 cursor-pointer"
            onClick={() => handleAction("Web & SaaS Product")}
          >
            Start a Project
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
