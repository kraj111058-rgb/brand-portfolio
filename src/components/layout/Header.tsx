import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Moon, Sun } from "lucide-react";

import { HeaderSubmenu } from "@/components/layout/HeaderSubmenu";
import { MobileNavDrawer } from "@/components/layout/MobileNavDrawer";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { MagneticWrap } from "@/components/shared/MotionPrimitives";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useAppShell } from "@/context/useAppShell";
import {
  HEADER_ANCHOR_LINKS,
  SERVICES_MENU,
  SOLUTIONS_MENU,
} from "@/data/brand";

const Header = () => {
  const { theme, toggleTheme, openInquiryModal } = useAppShell();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/75 bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-[72px] sm:px-6 lg:px-8">
        <BrandLogo showSubtitle />

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-0.5">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-[13px] font-medium tracking-[-0.01em]">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <HeaderSubmenu group={SERVICES_MENU} />
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-[13px] font-medium tracking-[-0.01em]">
                Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <HeaderSubmenu group={SOLUTIONS_MENU} />
              </NavigationMenuContent>
            </NavigationMenuItem>

            {HEADER_ANCHOR_LINKS.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink
                  href={link.href}
                  className="text-[13px] font-medium tracking-[-0.01em]"
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2 sm:gap-2.5">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            onClick={toggleTheme}
            className="size-9 rounded-xl border border-transparent text-muted-foreground transition-all hover:border-border/80 hover:bg-muted/80 hover:text-foreground cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun className="size-4 text-amber-300" />
            ) : (
              <Moon className="size-4 text-foreground" />
            )}
          </Button>

          <Button
            type="button"
            variant="outline"
            size="sm"
            className="hidden h-9 rounded-xl border-border/80 px-3.5 text-[13px] font-semibold transition-all hover:border-brand-blue/40 hover:bg-muted/70 xl:inline-flex cursor-pointer"
            onClick={() => openInquiryModal("Hire Dedicated Engineers")}
          >
            Hire Developers
          </Button>

          <MagneticWrap strength={0.18} className="hidden sm:inline-flex">
            <Button
              type="button"
              size="sm"
              className="group relative h-9 overflow-hidden rounded-xl bg-brand-blue px-4 text-[13px] font-semibold text-white shadow-sm shadow-brand-blue/25 transition-all duration-200 hover:bg-brand-blue-hover hover:shadow-md hover:shadow-brand-blue/30 cursor-pointer"
              onClick={() => openInquiryModal("Web & SaaS Product")}
            >
              <span>Start a Project</span>
              <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </MagneticWrap>

          <MobileNavDrawer />
        </div>
      </div>

      <motion.div
        aria-hidden="true"
        style={{ scaleX }}
        className="h-[2px] w-full origin-left bg-gradient-to-r from-brand-blue via-blue-500 to-brand-violet"
      />
    </header>
  );
};

export default Header;
