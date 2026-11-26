import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, MapPin } from "lucide-react";

import { ContactLinks } from "@/components/shared/ContactLinks";
import { InquiryForm } from "@/components/shared/InquiryForm";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { EASE_CURVE, VIEWPORT_CONFIG } from "@/lib/motion";

const CONTACT_HIGHLIGHTS = [
  "24-hour response from a senior solution architect",
  "100% source code and IP ownership from day one",
  "No-obligation discovery call with transparent pricing",
] as const;

export function ContactSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-x-clip bg-background py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:pl-14 md:pr-8 lg:pl-16 lg:pr-10 min-[1400px]:px-8">
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          {/* ── Left Closing CTA Anchor (Deep Navy Surface) ── */}
          <motion.div
            data-surface="navy"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.48,
              ease: EASE_CURVE,
            }}
            className="relative flex min-w-0 flex-col justify-between overflow-hidden rounded-3xl border border-white/12 p-6 text-white shadow-lg sm:p-8 lg:col-span-5 lg:p-10"
          >
            {/* Subtle Architectural Light Depth */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-brand-blue/16 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-20 size-64 rounded-full bg-brand-violet/12 blur-3xl"
            />

            <div className="relative z-10 space-y-6">
              <SectionHeading
                surface="navy"
                badge="Start Your Build"
                title="Ready to build your next product with confidence?"
                description="Share what you are building. Within 24 business hours, you will receive an architecture overview, recommended team structure, and realistic timeline."
              />

              <ul className="space-y-3 pt-1 text-sm">
                {CONTACT_HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-blue-400"
                    />
                    <span className="leading-snug font-medium text-slate-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 mt-8 space-y-4 border-t border-white/12 pt-6">
              <ContactLinks linkClassName="font-semibold text-white hover:text-blue-300 [&_svg]:text-blue-400 dark:[&_svg]:text-blue-400" />

              <div className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-300">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-violet-300"
                />
                <span>
                  Engineering and strategy hubs in Surat, Austin, and London
                  serving US, UK, European, and APAC time zones.
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── Right Inquiry Form Surface ── */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.48,
              delay: prefersReducedMotion ? 0 : 0.08,
              ease: EASE_CURVE,
            }}
            className="min-w-0 rounded-3xl border border-border/80 bg-card p-6 shadow-xs sm:p-8 lg:col-span-7 lg:p-10"
          >
            <div className="mb-6 border-b border-border/75 pb-4">
              <h3 className="text-lg font-bold tracking-tight text-foreground">
                Share Your Project Brief
              </h3>
            </div>

            <InquiryForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
