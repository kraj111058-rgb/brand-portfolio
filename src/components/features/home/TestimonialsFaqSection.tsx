import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";

import aaravPatelPortrait from "@/assets/testimonials/aarav-patel.jpg";
import danielOkaforPortrait from "@/assets/testimonials/daniel-okafor.jpg";
import elenaRostovaPortrait from "@/assets/testimonials/elena-rostova.jpg";
import hannahParkPortrait from "@/assets/testimonials/hannah-park.jpg";
import marcusVancePortrait from "@/assets/testimonials/marcus-vance.jpg";
import sophiaLindqvistPortrait from "@/assets/testimonials/sophia-lindqvist.jpg";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useAppShell } from "@/context/useAppShell";
import { FAQS, TESTIMONIALS } from "@/data/testimonials";
import { EASE_CURVE, VIEWPORT_CONFIG } from "@/lib/motion";
import { cn } from "@/lib/utils";

const CLIENT_PORTRAITS: Record<string, string> = {
  t1: marcusVancePortrait,
  t2: elenaRostovaPortrait,
  t3: aaravPatelPortrait,
  t4: sophiaLindqvistPortrait,
  t5: danielOkaforPortrait,
  t6: hannahParkPortrait,
};

const AUTOPLAY_INTERVAL_MS = 4000;

export function TestimonialsFaqSection() {
  const { openInquiryModal } = useAppShell();
  const prefersReducedMotion = useReducedMotion();
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isHoverOrFocusPaused, setIsHoverOrFocusPaused] = useState(false);
  const [isPointerDown, setIsPointerDown] = useState(false);

  const handleSetApi = useCallback((api: CarouselApi) => {
    setCarouselApi(api);
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
    setScrollSnaps(api.scrollSnapList());
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    const syncSnaps = () => {
      setSelectedIndex(carouselApi.selectedScrollSnap());
      setScrollSnaps(carouselApi.scrollSnapList());
    };

    const handlePointerDown = () => setIsPointerDown(true);
    const handlePointerUp = () => setIsPointerDown(false);

    carouselApi.on("select", syncSnaps);
    carouselApi.on("reInit", syncSnaps);
    carouselApi.on("pointerDown", handlePointerDown);
    carouselApi.on("pointerUp", handlePointerUp);

    return () => {
      carouselApi.off("select", syncSnaps);
      carouselApi.off("reInit", syncSnaps);
      carouselApi.off("pointerDown", handlePointerDown);
      carouselApi.off("pointerUp", handlePointerUp);
    };
  }, [carouselApi]);

  const isAutoplayPaused = isHoverOrFocusPaused || isPointerDown;

  useEffect(() => {
    if (
      !carouselApi ||
      prefersReducedMotion ||
      isAutoplayPaused ||
      scrollSnaps.length <= 1
    ) {
      return;
    }

    const timerId = window.setInterval(() => {
      if (document.hidden) return;
      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext();
      } else {
        carouselApi.scrollTo(0);
      }
    }, AUTOPLAY_INTERVAL_MS);

    return () => {
      window.clearInterval(timerId);
    };
  }, [
    carouselApi,
    isAutoplayPaused,
    prefersReducedMotion,
    scrollSnaps.length,
    selectedIndex,
  ]);

  return (
    <section
      id="testimonials"
      aria-label="Client Voices and Frequently Asked Questions"
      className="relative scroll-mt-16 overflow-x-clip border-y border-border/60 bg-surface-subtle/60 py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl space-y-16 px-4 sm:space-y-20 sm:px-6 md:pl-14 md:pr-8 lg:pl-16 lg:pr-10 min-[1400px]:px-8">
        {/* ─── Client Voices Carousel ─────────────────────────────── */}
        <div className="text-left">
          <SectionHeading
            badge="Client Voices"
            title="Trusted by product leaders for mission-critical launches"
          />

          <Carousel
            setApi={handleSetApi}
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
              duration: prefersReducedMotion ? 0 : 28,
            }}
            onMouseEnter={() => setIsHoverOrFocusPaused(true)}
            onMouseLeave={() => setIsHoverOrFocusPaused(false)}
            onFocusCapture={() => setIsHoverOrFocusPaused(true)}
            onBlurCapture={(event) => {
              if (
                !event.currentTarget.contains(
                  event.relatedTarget as Node | null
                )
              ) {
                setIsHoverOrFocusPaused(false);
              }
            }}
            aria-label="Client testimonials"
            className="mt-8 w-full sm:mt-10"
          >
            {/* 3-Column Desktop / 2-Column Tablet / 1-Column Mobile Carousel */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.45,
                delay: prefersReducedMotion ? 0 : 0.08,
                ease: EASE_CURVE,
              }}
            >
              <CarouselContent className="-ml-4 cursor-grab py-1.5 active:cursor-grabbing sm:-ml-6">
                {TESTIMONIALS.map((item) => {
                  const portrait = CLIENT_PORTRAITS[item.id];
                  return (
                    <CarouselItem
                      key={item.id}
                      className="basis-full pl-4 sm:pl-6 md:basis-1/2 lg:basis-1/3"
                    >
                      <article
                        className={cn(
                          "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/85 bg-card p-6 shadow-xs transition-all duration-300 motion-reduce:transition-none sm:p-7",
                          "hover:shadow-md hover:shadow-brand-navy/6 dark:bg-brand-navy-elevated/90 dark:hover:shadow-black/35"
                        )}
                      >
                        <div>
                          {/* Verified Impact Metric + Editorial Quote Mark */}
                          <div className="flex items-center justify-between gap-3">
                            <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/6 px-3 py-1 dark:border-blue-400/25 dark:bg-blue-400/10">
                              <span
                                aria-hidden="true"
                                className="size-1.5 shrink-0 rounded-full bg-brand-blue dark:bg-blue-400"
                              />
                              <span className="font-mono text-[11px] font-semibold tracking-tight text-brand-blue dark:text-blue-300">
                                {item.impact}
                              </span>
                            </div>

                            <Quote
                              aria-hidden="true"
                              className="size-5 shrink-0 text-muted-foreground/35 transition-colors duration-300 group-hover:text-brand-violet/70 motion-reduce:transition-none dark:group-hover:text-violet-400/75"
                            />
                          </div>

                          {/* Testimonial Quote */}
                          <blockquote className="mt-5">
                            <p className="text-sm font-medium leading-relaxed text-foreground/95 sm:text-[0.9375rem]">
                              “{item.quote}”
                            </p>
                          </blockquote>
                        </div>

                        {/* Client Portrait & Attribution */}
                        <footer className="mt-6 flex items-center gap-3.5 border-t border-border/70 pt-4">
                          {portrait && (
                            <img
                              src={portrait}
                              alt={`${item.author}, ${item.role} at ${item.company}`}
                              decoding="async"
                              className="size-11 shrink-0 rounded-full object-cover object-top ring-1 ring-border/80 transition-all duration-300 group-hover:ring-brand-blue/45 motion-reduce:transition-none dark:group-hover:ring-blue-400/45"
                            />
                          )}

                          <div className="min-w-0">
                            <p className="text-sm font-bold tracking-tight text-foreground">
                              {item.author}
                            </p>
                            <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
                              {item.role}, {item.company} · {item.location}
                            </p>
                          </div>
                        </footer>
                      </article>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </motion.div>

            {/* Centered Accessible Pagination Dots */}
            <div
              role="group"
              aria-label="Testimonial slides"
              className="mt-5 flex min-h-6 items-center justify-center gap-1.5"
            >
              {(scrollSnaps.length > 0 ? scrollSnaps : [0]).map((_, idx) => {
                const isCurrent = selectedIndex === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    aria-current={isCurrent ? "true" : undefined}
                    aria-label={`Go to testimonial slide ${idx + 1}`}
                    onClick={() => carouselApi?.scrollTo(idx)}
                    className="group/dot cursor-pointer rounded-full px-1 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
                  >
                    <span
                      className={cn(
                        "block h-2 rounded-full transition-all duration-300 motion-reduce:transition-none",
                        isCurrent
                          ? "w-7 bg-gradient-to-r from-brand-blue to-brand-violet"
                          : "w-2 bg-border group-hover/dot:bg-brand-blue/45 dark:bg-slate-700"
                      )}
                    />
                  </button>
                );
              })}
            </div>
          </Carousel>
        </div>

        {/* ─── Editorial FAQ Section ─────────────────────────────── */}
        <div
          id="faq"
          className="scroll-mt-24 border-t border-border/75 pt-16 sm:pt-20 lg:pt-24"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            {/* Left Column: Heading, Description, Subtle Accent & Direct Inquiry CTA */}
            <div className="min-w-0 text-left lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
              <SectionHeading
                badge="FAQ"
                title="Frequently Asked Questions"
                description="Clear answers on onboarding speed, intellectual property ownership, team integration, pricing structures, and ongoing support."
              />

              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.4,
                  delay: prefersReducedMotion ? 0 : 0.08,
                  ease: EASE_CURVE,
                }}
                className="mt-8 border-l-2 border-brand-blue/35 pl-4 dark:border-blue-400/35"
              >
                <p className="max-w-[36ch] text-sm leading-relaxed text-muted-foreground">
                  Have specific scope, timeline, or technical architecture
                  questions? Speak directly with an engineering lead.
                </p>

                <div className="mt-4">
                  <Button
                    type="button"
                    onClick={() => openInquiryModal("Web & SaaS Product")}
                    className="group h-10 cursor-pointer rounded-xl bg-brand-navy px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-blue dark:bg-brand-blue dark:hover:bg-brand-blue-hover"
                  >
                    <span>Ask a Technical Lead</span>
                    <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Clean Editorial Accordion List */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.45,
                delay: prefersReducedMotion ? 0 : 0.1,
                ease: EASE_CURVE,
              }}
              className="min-w-0 lg:col-span-7"
            >
              <Accordion
                multiple={false}
                defaultValue={[FAQS[0].id]}
                className="border-y border-border/80"
              >
                {FAQS.map((faq, idx) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="px-3 transition-colors duration-200 hover:bg-background/75 data-[open]:bg-background motion-reduce:transition-none sm:px-5 dark:hover:bg-brand-navy-elevated/45 dark:data-[open]:bg-brand-navy-elevated/75"
                  >
                    <AccordionTrigger
                      iconVariant="plus"
                      className="py-5 text-left text-[0.9375rem] font-semibold tracking-[-0.015em] text-foreground hover:text-brand-blue data-[panel-open]:text-foreground sm:py-6 sm:text-base dark:hover:text-blue-400 dark:data-[panel-open]:text-foreground"
                    >
                      <span className="flex items-start gap-3 sm:gap-4">
                        <span
                          aria-hidden="true"
                          className="w-6 shrink-0 pt-0.5 font-mono text-xs font-semibold tabular-nums text-muted-foreground transition-colors duration-200 group-hover:text-brand-blue group-data-[panel-open]:text-brand-violet motion-reduce:transition-none dark:group-hover:text-blue-400 dark:group-data-[panel-open]:text-violet-400"
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="leading-snug">{faq.question}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="sm:pl-10 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
