import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Briefcase,
  Code2,
  Layers,
  Menu,
  Moon,
  Palette,
  Rocket,
  Smartphone,
  Sparkles,
  Sun,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { useAppShell } from "@/context/useAppShell";
import {
  BRAND_INFO,
  SERVICES_MENU,
  SOLUTIONS_MENU,
  type NavMenuGroup,
  type NavMenuItemData,
} from "@/data/agencyData";

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

function NavSubmenuPanel({ group }: { group: NavMenuGroup }) {
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

      <div className="group/spotlight col-span-5 flex flex-col justify-between rounded-xl border border-border/70 bg-gradient-to-br from-muted/70 via-muted/40 to-indigo-500/5 p-4 text-left transition-colors hover:border-indigo-500/30">
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

const MOBILE_NAV_LINKS = [
  { label: "Services & Capabilities", href: "#services" },
  { label: "Featured Case Studies", href: "#work" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Engagement & Process", href: "#engagement" },
  { label: "Testimonials & FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const { theme, toggleTheme, openInquiryModal } = useAppShell();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="group flex shrink-0 items-center gap-2.5 rounded-lg text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-teal-500 text-xs font-extrabold tracking-tight text-white shadow-sm transition-transform duration-200 group-hover:scale-105 group-hover:-rotate-3">
            {BRAND_INFO.shortMark}
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-extrabold leading-none tracking-tight text-foreground transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
              {BRAND_INFO.name}
            </span>
            <span className="mt-0.5 hidden text-[10px] font-semibold tracking-wider text-muted-foreground sm:inline">
              ENGINEERING STUDIO
            </span>
          </div>
        </a>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavSubmenuPanel group={SERVICES_MENU} />
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavSubmenuPanel group={SOLUTIONS_MENU} />
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#work">Case Studies</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#tech-stack">
                Tech Stack
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#process">Process</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#faq">FAQ</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            onClick={toggleTheme}
            className="rounded-xl transition-transform hover:scale-105 cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun className="size-4 text-amber-400" />
            ) : (
              <Moon className="size-4 text-slate-700" />
            )}
          </Button>

          <Button
            type="button"
            variant="outline"
            size="sm"
            className="hidden h-9 rounded-xl px-3.5 font-semibold transition-all hover:-translate-y-0.5 hover:border-indigo-500/40 xl:inline-flex cursor-pointer"
            onClick={() => openInquiryModal("Hire Dedicated Engineers")}
          >
            Hire Developers
          </Button>

          <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}>
            <Button
              type="button"
              size="sm"
              className="group hidden h-9 rounded-xl bg-indigo-600 px-3.5 font-semibold text-white shadow-sm shadow-indigo-600/20 transition-all hover:bg-indigo-700 hover:shadow-md hover:shadow-indigo-600/25 dark:bg-indigo-500 dark:hover:bg-indigo-400 sm:inline-flex sm:px-4 cursor-pointer"
              onClick={() => openInquiryModal("Web & SaaS Product")}
            >
              <Sparkles className="size-3.5 transition-transform duration-200 group-hover:rotate-12" />
              <span>Start a Project</span>
            </Button>
          </motion.div>

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
                  onClick={() => {
                    setDrawerOpen(false);
                    openInquiryModal("Hire Dedicated Engineers");
                  }}
                >
                  Hire Dedicated Engineers
                </Button>
                <Button
                  type="button"
                  className="h-11 w-full rounded-xl bg-indigo-600 font-semibold text-white hover:bg-indigo-700 cursor-pointer"
                  onClick={() => {
                    setDrawerOpen(false);
                    openInquiryModal("Web & SaaS Product");
                  }}
                >
                  Start a Project
                </Button>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>

      <motion.div
        aria-hidden="true"
        style={{ scaleX }}
        className="h-[2px] w-full origin-left bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-400"
      />
    </header>
  );
};

export default Header;
