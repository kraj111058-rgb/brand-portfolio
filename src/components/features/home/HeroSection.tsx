import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

import { HeroSnapshotCard } from "@/components/features/home/HeroSnapshotCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAppShell } from "@/context/useAppShell";
import { BRAND_INFO, CLIENT_LOGOS, HERO_METRICS } from "@/data/brand";
import { EASE_CURVE } from "@/lib/motion";

export function HeroSection() {
  const { openInquiryModal } = useAppShell();

  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.85, 0.6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_75%_50%_at_50%_-10%,rgba(79,70,229,0.16),transparent)] dark:bg-[radial-gradient(ellipse_75%_50%_at_50%_-10%,rgba(99,102,241,0.24),transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(128,128,128,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.06)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_15%,#000_55%,transparent_100%)]"
      />

      <div className="mx-auto max-w-7xl px-4 pt-10 pb-14 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="flex min-w-0 flex-col items-start text-left lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE_CURVE }}
            >
              <Badge
                variant="outline"
                className="mb-5 gap-2 rounded-full border-indigo-500/30 bg-indigo-500/8 px-3 py-1.5 text-[11px] font-semibold text-indigo-700 transition-colors hover:border-indigo-500/60 hover:bg-indigo-500/15 dark:text-indigo-300 sm:text-xs"
              >
                <Star className="size-3.5 shrink-0 fill-amber-400 text-amber-400" />
                <span>
                  {BRAND_INFO.rating} {BRAND_INFO.reviewSource}
                </span>
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: EASE_CURVE }}
              className="text-[1.9rem] font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-5xl sm:leading-[1.1] lg:text-[3.35rem] lg:leading-[1.08]"
            >
              We engineer{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-500 bg-clip-text text-transparent dark:from-indigo-400 dark:via-sky-400 dark:to-teal-300">
                scalable software
              </span>{" "}
              &amp; digital products that drive measurable growth.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16, ease: EASE_CURVE }}
              className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base lg:text-lg"
            >
              From custom SaaS platforms and high-performance mobile apps to AI
              automation and dedicated engineering teams, we partner with
              ambitious companies from initial strategy through global launch.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24, ease: EASE_CURVE }}
              className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center"
            >
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Button
                  type="button"
                  size="lg"
                  className="group h-12 w-full justify-center rounded-xl bg-indigo-600 px-6 text-sm font-bold text-white shadow-lg shadow-indigo-600/25 transition-all hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-600/30 dark:bg-indigo-500 dark:hover:bg-indigo-400 sm:w-auto cursor-pointer"
                  onClick={() => openInquiryModal("Web & SaaS Product")}
                >
                  <span>Start a Project</span>
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  nativeButton={false}
                  render={<a href="#work" />}
                  className="h-12 w-full justify-center rounded-xl px-6 text-sm font-semibold transition-all hover:border-indigo-500/40 hover:bg-muted/80 sm:w-auto"
                >
                  Explore Case Studies
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32, ease: EASE_CURVE }}
              className="mt-9 grid w-full grid-cols-2 gap-3 border-t border-border/80 pt-7 sm:mt-10 sm:grid-cols-4 sm:gap-4 sm:pt-8"
            >
              {HERO_METRICS.map((metric) => (
                <motion.div
                  key={metric.label}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 360, damping: 24 }}
                  className="rounded-2xl border border-transparent p-2.5 transition-colors hover:border-indigo-500/25 hover:bg-muted/50 sm:p-3"
                >
                  <span className="block text-xl font-extrabold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
                    {metric.value}
                  </span>
                  <span className="mt-0.5 block text-[11px] font-medium text-muted-foreground sm:text-xs">
                    {metric.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE_CURVE }}
            className="min-w-0 lg:col-span-5"
          >
            <HeroSnapshotCard />
          </motion.div>
        </div>

        <div className="mt-12 border-t border-border/60 pt-7 sm:mt-14 sm:pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="shrink-0 text-[11px] font-bold uppercase tracking-widest text-muted-foreground sm:text-xs">
              Trusted by high-growth teams worldwide
            </span>
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] sm:max-w-2xl lg:max-w-3xl">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="flex w-max items-center gap-10 whitespace-nowrap py-1"
              >
                {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, index) => (
                  <span
                    key={`${logo}-${index}`}
                    className="text-xs font-bold tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground sm:text-sm"
                  >
                    {logo}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
