import { motion } from "framer-motion";
import { ArrowUpRight, Globe, MapPin } from "lucide-react";

import { SocialIcon } from "@/components/shared/BrandIcons";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { ContactLinks } from "@/components/shared/ContactLinks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useAppShell } from "@/context/useAppShell";
import {
  BRAND_INFO,
  FOOTER_CAPABILITIES,
  FOOTER_ENGAGEMENT,
  SOCIAL_LINKS,
} from "@/data/brand";
import { cn } from "@/lib/utils";

const Footer = () => {
  const { openInquiryModal } = useAppShell();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-4 text-left sm:col-span-2 lg:col-span-4">
            <BrandLogo />

            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Full-cycle product design, custom web and mobile engineering, and
              AI workflow automation for growing startups and global
              enterprises.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="rounded-full px-3 py-1">
                Clutch {BRAND_INFO.rating}
              </Badge>
              <Badge variant="secondary" className="rounded-full px-3 py-1">
                Enterprise-Grade Security
              </Badge>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className={cn(
                    "inline-flex size-9 items-center justify-center rounded-xl border border-border/80 bg-background/80 text-muted-foreground transition-all hover:-translate-y-0.5",
                    item.hoverColorClass
                  )}
                >
                  <SocialIcon id={item.id} className="size-4" />
                </a>
              ))}
            </div>

            <motion.div
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="w-fit pt-1"
            >
              <Button
                type="button"
                size="sm"
                className="group h-9 rounded-xl bg-indigo-600 px-4 font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-md hover:shadow-indigo-600/20 dark:bg-indigo-500 dark:hover:bg-indigo-400 cursor-pointer"
                onClick={() => openInquiryModal("Web & SaaS Product")}
              >
                <span>Book a Discovery Call</span>
                <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </motion.div>
          </div>

          <div className="space-y-3 text-left lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {FOOTER_CAPABILITIES.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="inline-block transition-all hover:translate-x-1 hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 text-left lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Engagement
            </h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {FOOTER_ENGAGEMENT.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="inline-block transition-all hover:translate-x-1 hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 text-left sm:col-span-2 lg:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Global Delivery &amp; Contact
            </h3>
            <ContactLinks />

            <div className="grid grid-cols-1 gap-2 pt-2 sm:grid-cols-3 lg:grid-cols-1">
              {BRAND_INFO.offices.map((office) => (
                <div
                  key={office.city}
                  className="flex items-start gap-2 text-xs text-muted-foreground"
                >
                  <MapPin className="mt-0.5 size-3.5 shrink-0 text-muted-foreground/80" />
                  <span>
                    <strong className="font-semibold text-foreground">
                      {office.city}
                    </strong>{" "}
                    — {office.region}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-start justify-between gap-4 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {BRAND_INFO.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <Globe className="size-3.5" />
              <span>US · UK · India Delivery</span>
            </span>
            <a
              href="#contact"
              className="transition-colors hover:text-foreground"
            >
              Privacy Policy
            </a>
            <a href="#faq" className="transition-colors hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
