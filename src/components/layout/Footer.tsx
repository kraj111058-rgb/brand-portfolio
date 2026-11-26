import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Mail, MapPin, Phone } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useAppShell } from "@/context/useAppShell";
import { BRAND_INFO } from "@/data/agencyData";

const FOOTER_CAPABILITIES = [
  { label: "Web & SaaS", href: "#services" },
  { label: "Mobile Apps", href: "#services" },
  { label: "Product UI/UX", href: "#services" },
  { label: "AI & Automation", href: "#services" },
  { label: "Cloud & DevOps", href: "#tech-stack" },
];

const FOOTER_ENGAGEMENT = [
  { label: "Case Studies", href: "#work" },
  { label: "Dedicated Squads", href: "#engagement" },
  { label: "Hire Developers", href: "#engagement" },
  { label: "Delivery Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

const Footer = () => {
  const { openInquiryModal } = useAppShell();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-4 text-left sm:col-span-2 lg:col-span-4">
            <a href="#" className="group inline-flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-teal-500 text-xs font-extrabold text-white transition-transform duration-200 group-hover:scale-105 group-hover:-rotate-3">
                {BRAND_INFO.shortMark}
              </span>
              <span className="text-base font-extrabold tracking-tight text-foreground transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                {BRAND_INFO.name}
              </span>
            </a>

            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Full-cycle product design, custom web &amp; mobile engineering, and
              AI workflow automation for high-growth startups and enterprises.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="rounded-full px-3 py-1">
                Clutch {BRAND_INFO.rating}
              </Badge>
              <Badge variant="secondary" className="rounded-full px-3 py-1">
                ISO-Aligned Security
              </Badge>
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
                <span>Schedule Discovery Call</span>
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
            <div className="space-y-2.5 text-sm text-muted-foreground">
              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="flex items-center gap-2 transition-all hover:translate-x-1 hover:text-foreground"
              >
                <Mail className="size-4 shrink-0 text-indigo-600 dark:text-indigo-400" />
                <span>{BRAND_INFO.email}</span>
              </a>
              <a
                href={`tel:${BRAND_INFO.phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-2 transition-all hover:translate-x-1 hover:text-foreground"
              >
                <Phone className="size-4 shrink-0 text-indigo-600 dark:text-indigo-400" />
                <span>{BRAND_INFO.phone}</span>
              </a>
            </div>

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
              Privacy &amp; NDA
            </a>
            <a href="#faq" className="transition-colors hover:text-foreground">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
