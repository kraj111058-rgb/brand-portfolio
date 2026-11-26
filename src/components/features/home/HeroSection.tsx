import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

import { HeroSnapshotCard } from "@/components/features/home/HeroSnapshotCard";
import { MagneticWrap, Reveal } from "@/components/shared/MotionPrimitives";
import { Button } from "@/components/ui/button";
import { useAppShell } from "@/context/useAppShell";
import { BRAND_INFO, CLIENT_LOGOS, HERO_METRICS } from "@/data/brand";
import { EASE_CURVE, SPRINGS } from "@/lib/motion";

const NUMBER_FORMATTER = new Intl.NumberFormat("en-US");

function parseMetricValue(rawValue: string): {
  target: number;
  suffix: string;
} {
  const match = rawValue.trim().match(/^([\d,]+)(.*)$/);
  if (!match) return { target: 0, suffix: rawValue };
  const parsed = Number.parseInt(match[1].replace(/,/g, ""), 10);
  return {
    target: Number.isNaN(parsed) ? 0 : parsed,
    suffix: match[2],
  };
}

interface TrustMetricCounterProps {
  value: string;
  className?: string;
}

function TrustMetricCounter({ value, className }: TrustMetricCounterProps) {
  const { target, suffix } = parseMetricValue(value);
  const ref = useRef<HTMLSpanElement>(null);
  const completedRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  const count = useMotionValue(prefersReducedMotion ? target : 0);
  const formatted = useTransform(
    count,
    (latest) => `${NUMBER_FORMATTER.format(Math.round(latest))}${suffix}`
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      completedRef.current = true;
      count.set(target);
      return;
    }

    if (!isInView || completedRef.current) {
      return;
    }

    count.set(0);
    const controls = animate(count, target, {
      duration: 2,
      ease: EASE_CURVE,
      onComplete: () => {
        completedRef.current = true;
      },
    });

    return () => {
      controls.stop();
    };
  }, [count, isInView, prefersReducedMotion, target]);

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{value}</span>
      <motion.span aria-hidden="true" className="tabular-nums">
        {formatted}
      </motion.span>
    </span>
  );
}

function ClientLogoMarquee() {
  const prefersReducedMotion = useReducedMotion();
  const isPausedRef = useRef(false);
  const xPercent = useMotionValue(0);
  const x = useTransform(xPercent, (latest) => `${latest}%`);

  useAnimationFrame((_, delta) => {
    if (prefersReducedMotion || isPausedRef.current) return;
    const clampedDelta = Math.min(delta, 100);
    const speedPerMs = 50 / 26000;
    let next = xPercent.get() - clampedDelta * speedPerMs;
    if (next <= -50) {
      next += 50;
    }
    xPercent.set(next);
  });

  if (prefersReducedMotion) {
    return (
      <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
        {CLIENT_LOGOS.map((logo) => (
          <span
            key={logo}
            className="text-xs font-bold tracking-tight text-muted-foreground/80 sm:text-sm"
          >
            {logo}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => {
        isPausedRef.current = true;
      }}
      onMouseLeave={() => {
        isPausedRef.current = false;
      }}
      onFocus={() => {
        isPausedRef.current = true;
      }}
      onBlur={() => {
        isPausedRef.current = false;
      }}
      className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] sm:max-w-xl lg:max-w-3xl"
    >
      <motion.div
        style={{ x }}
        className="flex w-max items-center gap-10 whitespace-nowrap py-1 will-change-transform"
      >
        {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, index) => (
          <span
            key={`${logo}-${index}`}
            className="inline-flex items-center gap-2.5 text-xs font-bold tracking-tight text-muted-foreground/75 transition-colors hover:text-foreground sm:text-sm"
          >
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-brand-blue/40"
            />
            <span>{logo}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function HeroSection() {
  const { openInquiryModal } = useAppShell();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-border/70 bg-background">
      {/* Subtle architectural background grid & restrained accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_85%_65%_at_50%_10%,#000_45%,transparent_100%)] dark:bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-[780px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.14),transparent_70%)]"
      />

      <div className="mx-auto max-w-7xl px-4 pt-10 pb-14 sm:px-6 sm:pt-14 sm:pb-16 md:pl-14 md:pr-8 lg:pl-16 lg:pr-10 lg:pt-20 lg:pb-20 min-[1400px]:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-14">
          {/* Left Editorial Column */}
          <div className="flex min-w-0 flex-col items-start text-left lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE_CURVE }}
              className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-border/80 bg-surface-subtle/90 px-3.5 py-1.5 text-[11px] font-semibold text-foreground shadow-2xs sm:text-xs"
            >
              <span className="inline-flex items-center gap-1.5">
                <Star className="size-3.5 shrink-0 fill-amber-400 text-amber-400" />
                <span>{BRAND_INFO.rating}</span>
              </span>
              <span aria-hidden="true" className="text-border">
                |
              </span>
              <span className="text-muted-foreground">
                {BRAND_INFO.reviewSource}
              </span>
            </motion.div>

            <h1 className="text-[1.9rem] font-extrabold leading-[1.15] tracking-[-0.035em] text-foreground sm:text-[2.25rem] sm:leading-[1.1] xl:text-[2.7rem] xl:leading-[1.09] 2xl:text-[3.05rem] 2xl:leading-[1.07]">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.06, ease: EASE_CURVE }}
                className="inline sm:block"
              >
                We engineer{" "}
                <span className="bg-gradient-to-r from-brand-blue via-blue-500 to-brand-violet bg-clip-text text-transparent sm:whitespace-nowrap">
                  scalable software
                </span>{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.14, ease: EASE_CURVE }}
                className="inline sm:block"
              >
                &amp; digital products that drive{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.22, ease: EASE_CURVE }}
                className="inline sm:block"
              >
                measurable growth.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28, ease: EASE_CURVE }}
              className="mt-5 max-w-[54ch] text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-[17px]"
            >
              From custom SaaS platforms and high-performance mobile apps to AI
              automation and dedicated engineering teams, we partner with
              ambitious companies from initial strategy through global launch.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34, ease: EASE_CURVE }}
              className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center"
            >
              <MagneticWrap strength={0.16} className="w-full sm:w-auto">
                <motion.div
                  whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                  transition={SPRINGS.tactile}
                  className="w-full sm:w-auto"
                >
                  <Button
                    type="button"
                    size="lg"
                    className="group h-12 w-full justify-center rounded-xl bg-brand-blue px-6 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition-all hover:bg-brand-blue-hover hover:shadow-xl hover:shadow-brand-blue/25 sm:w-auto cursor-pointer"
                    onClick={() => openInquiryModal("Web & SaaS Product")}
                  >
                    <span>Start a Project</span>
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </MagneticWrap>

              <motion.div
                whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                transition={SPRINGS.tactile}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  nativeButton={false}
                  render={<a href="#work" />}
                  className="h-12 w-full justify-center rounded-xl border-border/85 bg-background/80 px-6 text-sm font-semibold text-foreground transition-all hover:border-brand-blue/45 hover:bg-surface-subtle sm:w-auto"
                >
                  Explore Case Studies
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.42, ease: EASE_CURVE }}
              className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground"
            >
              <span className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-brand-blue" />
                24h architecture review
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-brand-violet" />
                100% IP ownership
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-brand-blue" />
                US · UK · India delivery
              </span>
            </motion.div>
          </div>

          {/* Right Dashboard Column with Blue/Violet Radial Glow */}
          <motion.div
            initial={{ opacity: 0, x: 24, y: 8 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.62, delay: 0.18, ease: EASE_CURVE }}
            className="relative min-w-0 lg:col-span-5"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.16),rgba(124,58,237,0.11)_48%,transparent_74%)] blur-2xl dark:bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.22),rgba(139,92,246,0.15)_48%,transparent_74%)]"
            />
            <HeroSnapshotCard />
          </motion.div>
        </div>

        {/* Hairline Trust Metrics Strip */}
        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-border/80 pt-8 sm:mt-16 sm:grid-cols-4 sm:gap-8 lg:mt-18">
          {HERO_METRICS.map((metric, idx) => (
            <Reveal
              key={metric.label}
              delay={idx * 0.06}
              y={14}
              className="group min-w-0 border-l-2 border-border/80 pl-4 text-left transition-colors duration-300 hover:border-brand-blue"
            >
              <TrustMetricCounter
                value={metric.value}
                className="block font-mono text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-brand-blue sm:text-3xl lg:text-[2.15rem]"
              />
              <span className="mt-1 block text-xs font-medium text-muted-foreground sm:text-sm">
                {metric.label}
              </span>
            </Reveal>
          ))}
        </div>

        {/* Client Authority Strip */}
        <Reveal
          delay={0.1}
          y={12}
          className="mt-10 border-t border-border/60 pt-7 sm:mt-12 sm:pt-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Trusted by high-growth teams worldwide
            </span>

            <ClientLogoMarquee />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
