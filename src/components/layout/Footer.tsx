import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Globe, MapPin } from "lucide-react";

import { SocialIcon } from "@/components/shared/BrandIcons";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { ContactLinks } from "@/components/shared/ContactLinks";
import { Button } from "@/components/ui/button";
import { useAppShell } from "@/context/useAppShell";
import {
  BRAND_INFO,
  FOOTER_CAPABILITIES,
  FOOTER_ENGAGEMENT,
  SOCIAL_LINKS,
} from "@/data/brand";
import { EASE_CURVE, VIEWPORT_CONFIG } from "@/lib/motion";
import { cn } from "@/lib/utils";

const Footer = () => {
  const { openInquiryModal } = useAppShell();
  const prefersReducedMotion = useReducedMotion();

  return (
    <footer
      data-surface="navy"
      className="relative overflow-hidden border-t border-white/10 bg-brand-navy text-white"
    >
      {/* Subtle static architectural glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 left-1/4 size-96 rounded-full bg-brand-blue/12 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/5 -bottom-24 size-80 rounded-full bg-brand-violet/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-14 pb-16 sm:px-6 sm:pt-16 sm:pb-16 md:pl-14 md:pr-8 lg:pl-16 lg:pr-10 lg:pt-20 lg:pb-14 min-[1400px]:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.45,
            ease: EASE_CURVE,
          }}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 xl:gap-12"
        >
          {/* ── Brand Column ──────────────────────────────────────── */}
          <div className="space-y-5 text-left sm:col-span-2 lg:col-span-4">
            <BrandLogo showSubtitle />

            <p className="max-w-sm text-sm leading-relaxed text-slate-300">
              Full-cycle product design, custom web and mobile engineering, and
              AI workflow automation for growing startups and global
              enterprises.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className={cn(
                    "inline-flex size-9 items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] text-slate-300 transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy",
                    item.hoverColorClass
                  )}
                >
                  <SocialIcon id={item.id} className="size-4" />
                </a>
              ))}
            </div>

            <div className="pt-1">
              <Button
                type="button"
                size="sm"
                className="group h-10 cursor-pointer rounded-xl bg-brand-blue px-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-blue-hover motion-reduce:transition-none"
                onClick={() => openInquiryModal("Web & SaaS Product")}
              >
                <span>Book a Discovery Call</span>
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
              </Button>
            </div>
          </div>

          {/* ── Capabilities Navigation ───────────────────────────── */}
          <nav
            aria-label="Capabilities navigation"
            className="space-y-4 text-left lg:col-span-2"
          >
            <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-300">
              Capabilities
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {FOOTER_CAPABILITIES.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="inline-block rounded-sm transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue motion-reduce:transition-none"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Engagement Navigation ─────────────────────────────── */}
          <nav
            aria-label="Engagement navigation"
            className="space-y-4 text-left lg:col-span-2"
          >
            <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-violet-300">
              Engagement
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {FOOTER_ENGAGEMENT.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="inline-block rounded-sm transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue motion-reduce:transition-none"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Global Delivery & Contact ─────────────────────────── */}
          <div className="space-y-4 text-left sm:col-span-2 lg:col-span-4">
            <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-300">
              Global Delivery &amp; Contact
            </h3>

            <ContactLinks
              className="space-y-2.5 text-sm"
              linkClassName="font-medium text-slate-200 hover:translate-x-0 hover:text-white [&_svg]:text-blue-400 dark:[&_svg]:text-blue-400 group-hover:[&_svg]:scale-100 motion-reduce:transition-none"
            />

            <div className="grid grid-cols-1 gap-2.5 border-t border-white/10 pt-4 sm:grid-cols-3 lg:grid-cols-1">
              {BRAND_INFO.offices.map((office) => (
                <div
                  key={office.city}
                  className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-300"
                >
                  <MapPin
                    aria-hidden="true"
                    className="mt-0.5 size-3.5 shrink-0 text-violet-300"
                  />
                  <span>
                    <strong className="font-semibold text-white">
                      {office.city}
                    </strong>{" "}
                    — {office.region}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div
          aria-hidden="true"
          className="my-10 border-t border-white/10"
        />

        {/* ── Legal & Copyright Bar ───────────────────────────────── */}
        <div className="flex flex-col items-start justify-between gap-4 pr-16 text-xs text-slate-400 sm:flex-row sm:items-center sm:pr-20 min-[1440px]:pr-0">
          <p>
            © {new Date().getFullYear()} {BRAND_INFO.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <Globe aria-hidden="true" className="size-3.5 text-blue-400" />
              <span>US · UK · India Delivery</span>
            </span>
            <a
              href="#contact"
              className="rounded-sm transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue motion-reduce:transition-none"
            >
              Privacy Policy
            </a>
            <a
              href="#faq"
              className="rounded-sm transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue motion-reduce:transition-none"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
