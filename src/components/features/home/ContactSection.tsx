import { motion } from "framer-motion";
import { CheckCircle2, MapPin } from "lucide-react";

import { ContactLinks } from "@/components/shared/ContactLinks";
import { InquiryForm } from "@/components/shared/InquiryForm";
import { Reveal } from "@/components/shared/MotionPrimitives";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-16 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card p-5 shadow-xl transition-colors duration-300 hover:border-indigo-500/30 sm:p-8 lg:p-12">
            <motion.div
              aria-hidden="true"
              animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.85, 0.5] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-indigo-500/15 blur-3xl"
            />
            <motion.div
              aria-hidden="true"
              animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-teal-500/15 blur-3xl"
            />

            <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="flex min-w-0 flex-col justify-between space-y-6 text-left lg:col-span-5">
                <div className="space-y-4">
                  <SectionHeading
                    badge="Start Your Build"
                    title="Ready to build your next product with confidence?"
                    description="Share what you are building. Within 24 business hours, you will receive an architecture overview, recommended team structure, and realistic timeline."
                  />

                  <ul className="space-y-2.5 pt-2 text-sm">
                    {[
                      "24-hour response from a senior solution architect",
                      "100% source code and IP ownership from day one",
                      "No-obligation discovery call with transparent pricing",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal-600 dark:text-teal-400" />
                        <span className="font-medium text-foreground/90">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 rounded-2xl border border-border/70 bg-muted/40 p-4 sm:p-5">
                  <ContactLinks linkClassName="font-semibold text-foreground" />
                  <div className="flex items-start gap-2.5 pt-1 text-xs text-muted-foreground">
                    <MapPin className="mt-0.5 size-4 shrink-0" />
                    <span>
                      Engineering and strategy hubs in Surat, Austin, and London
                      serving US, UK, European, and APAC time zones.
                    </span>
                  </div>
                </div>
              </div>

              <div className="min-w-0 rounded-2xl border border-border/80 bg-background/85 p-4 shadow-sm backdrop-blur-sm transition-colors hover:border-indigo-500/30 sm:p-7 lg:col-span-7">
                <InquiryForm />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
