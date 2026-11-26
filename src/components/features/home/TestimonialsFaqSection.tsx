import { ArrowUpRight, Quote, Star } from "lucide-react";

import { Reveal, SpotlightCard } from "@/components/shared/MotionPrimitives";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAppShell } from "@/context/useAppShell";
import { FAQS, TESTIMONIALS } from "@/data/testimonials";

export function TestimonialsFaqSection() {
  const { openInquiryModal } = useAppShell();

  return (
    <section
      id="faq"
      className="scroll-mt-16 border-y border-border/60 bg-muted/25 py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl space-y-16 px-4 sm:space-y-20 sm:px-6 lg:px-8">
        <div className="text-left">
          <SectionHeading
            badge="Client Voices"
            title="Trusted by product leaders for mission-critical launches"
          />

          <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {TESTIMONIALS.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.08} className="min-w-0">
                <SpotlightCard className="h-full p-5 sm:p-7">
                  <blockquote className="flex h-full flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-0.5 text-amber-400">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className="size-4 fill-amber-400 transition-transform duration-200 group-hover:scale-105"
                            />
                          ))}
                        </div>
                        <Quote className="size-5 text-muted-foreground/40 transition-colors duration-300 group-hover:text-indigo-500/60" />
                      </div>

                      <p className="text-sm leading-relaxed text-foreground/90">
                        “{item.quote}”
                      </p>
                    </div>

                    <div className="mt-6 space-y-3 border-t border-border/60 pt-4">
                      <Badge
                        variant="secondary"
                        className="rounded-full text-[11px] font-semibold text-teal-700 transition-colors group-hover:bg-teal-500/15 dark:text-teal-300"
                      >
                        {item.impact}
                      </Badge>
                      <div>
                        <p className="text-sm font-bold text-foreground">
                          {item.author}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.role}, {item.company} · {item.location}
                        </p>
                      </div>
                    </div>
                  </blockquote>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 space-y-4 text-left lg:col-span-5">
            <SectionHeading
              badge="FAQ"
              title="Frequently asked questions"
              description="Clear answers on intellectual property, onboarding speed, time zones, and ongoing support."
            />
            <Reveal delay={0.1} className="pt-1">
              <Button
                type="button"
                variant="outline"
                className="group rounded-xl font-semibold transition-all hover:-translate-y-0.5 hover:border-indigo-500/40 cursor-pointer"
                onClick={() => openInquiryModal("Web & SaaS Product")}
              >
                <span>Ask a Technical Lead</span>
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </Reveal>
          </div>

          <Reveal
            delay={0.12}
            className="min-w-0 rounded-3xl border border-border/80 bg-card px-5 py-1 shadow-sm sm:px-6 sm:py-2 lg:col-span-7"
          >
            <Accordion defaultValue={[FAQS[0].id]}>
              {FAQS.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="px-2 -mx-2 hover:bg-muted/40">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
