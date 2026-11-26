import { motion, useScroll, useSpring } from "framer-motion";
import { Moon, Sparkles, Sun } from "lucide-react";

import { HeaderSubmenu } from "@/components/layout/HeaderSubmenu";
import { MobileNavDrawer } from "@/components/layout/MobileNavDrawer";
import { BrandLogo } from "@/components/shared/BrandLogo";
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
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <BrandLogo showSubtitle />

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <HeaderSubmenu group={SERVICES_MENU} />
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <HeaderSubmenu group={SOLUTIONS_MENU} />
              </NavigationMenuContent>
            </NavigationMenuItem>

            {HEADER_ANCHOR_LINKS.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink href={link.href}>
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
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

          <MobileNavDrawer />
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
