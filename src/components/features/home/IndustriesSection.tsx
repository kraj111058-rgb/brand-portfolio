import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  HeartPulse,
  Landmark,
  Layers2,
  ShoppingBag,
  Truck,
} from "lucide-react";

import ecommerceImg from "@/assets/industries/ecommerce-retail.jpg";
import educationImg from "@/assets/industries/education-edtech.jpg";
import fintechImg from "@/assets/industries/fintech-banking.jpg";
import healthcareImg from "@/assets/industries/healthcare.jpg";
import logisticsImg from "@/assets/industries/logistics-supply-chain.jpg";
import saasImg from "@/assets/industries/saas-enterprise.jpg";
import { Reveal } from "@/components/shared/MotionPrimitives";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { INDUSTRIES_WE_SERVE, type IndustryItem } from "@/data/industries";
import { EASE_CURVE, SPRINGS, VIEWPORT_CONFIG } from "@/lib/motion";
import { cn } from "@/lib/utils";

const INDUSTRY_IMAGES: Record<IndustryItem["id"], string> = {
  "fintech-banking": fintechImg,
  healthcare: healthcareImg,
  "ecommerce-retail": ecommerceImg,
  "education-edtech": educationImg,
  "logistics-supply-chain": logisticsImg,
  "saas-enterprise": saasImg,
};

function IndustryIcon({
  id,
  className,
}: {
  id: IndustryItem["id"];
  className?: string;
}) {
  switch (id) {
    case "fintech-banking":
      return <Landmark className={className} />;
    case "healthcare":
      return <HeartPulse className={className} />;
    case "ecommerce-retail":
      return <ShoppingBag className={className} />;
    case "education-edtech":
      return <GraduationCap className={className} />;
    case "logistics-supply-chain":
      return <Truck className={className} />;
    case "saas-enterprise":
      return <Layers2 className={className} />;
  }
}

function IndustryVisualScene({
  id,
  title,
}: {
  id: IndustryItem["id"];
  title: string;
}) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/12 bg-[#060c1b] shadow-inner md:aspect-auto md:h-full md:min-h-[240px]">
      <img
        src={INDUSTRY_IMAGES[id]}
        alt={`${title} digital product engineering showcase`}
        loading="lazy"
        decoding="async"
        className="size-full object-cover object-center transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070d1d]/40 via-transparent to-[#070d1d]/10 ring-1 ring-inset ring-white/10"
      />
    </div>
  );
}

interface IndustryShowcaseRowProps {
  industry: IndustryItem;
  index: number;
  isActive: boolean;
  onActivate: (id: IndustryItem["id"]) => void;
}

function IndustryShowcaseRow({
  industry,
  index,
  isActive,
  onActivate,
}: IndustryShowcaseRowProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      id={`industry-${industry.id}`}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_CONFIG}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.45,
        delay: prefersReducedMotion ? 0 : Math.min(index * 0.05, 0.25),
        ease: EASE_CURVE,
      }}
      whileHover={prefersReducedMotion ? undefined : { y: -2 }}
      onMouseEnter={() => onActivate(industry.id)}
      onFocus={() => onActivate(industry.id)}
      className={cn(
        "group scroll-mt-28 overflow-hidden rounded-2xl border bg-brand-navy-elevated/85 transition-[border-color,background-color,box-shadow] duration-300",
        isActive
          ? "border-blue-400/40 bg-brand-navy-elevated shadow-xl shadow-black/35"
          : "border-white/12 hover:border-blue-400/35 hover:bg-brand-navy-elevated"
      )}
    >
      <div className="grid grid-cols-1 items-stretch md:grid-cols-12">
        {/* Copy Column */}
        <div className="flex flex-col justify-between p-5 sm:p-6 md:col-span-6 lg:p-7">
          <div>
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-xs font-semibold tracking-widest text-blue-300/80">
                {industry.number}
              </span>
              <span className="inline-flex size-9 items-center justify-center rounded-xl border border-white/12 bg-white/[0.05] text-blue-300 transition-transform duration-300 group-hover:scale-105 group-hover:border-blue-400/35 group-hover:text-white">
                <IndustryIcon id={industry.id} className="size-4" />
              </span>
            </div>

            <h3 className="mt-4 text-lg font-bold tracking-tight text-white transition-colors group-hover:text-blue-200 sm:text-xl">
              {industry.title}
            </h3>

            <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
              {industry.description}
            </p>
          </div>

          <p className="mt-5 border-t border-white/10 pt-3.5 text-xs font-medium tracking-wide text-blue-300/85">
            {industry.focusAreas}
          </p>
        </div>

        {/* Distinct Visual Identity Preview */}
        <div className="flex items-stretch p-3 pt-0 sm:p-4 sm:pt-0 md:col-span-6 md:pt-3 lg:p-4">
          <IndustryVisualScene id={industry.id} title={industry.title} />
        </div>
      </div>
    </motion.article>
  );
}

export function IndustriesSection() {
  const [activeId, setActiveId] = useState<IndustryItem["id"]>(
    INDUSTRIES_WE_SERVE[0].id
  );
  const prefersReducedMotion = useReducedMotion();

  const handleSelectSector = (id: IndustryItem["id"]) => {
    setActiveId(id);
    const target = document.getElementById(`industry-${id}`);
    if (target) {
      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "center",
      });
    }
  };

  return (
    <section
      id="industries"
      data-surface="navy"
      className="relative scroll-mt-20 overflow-x-clip border-t border-white/10 py-16 sm:py-20 lg:py-28"
    >
      {/* Ambient Deep Navy Architectural Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/4 -z-10 size-96 rounded-full bg-brand-blue/12 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/5 bottom-0 -z-10 size-96 rounded-full bg-brand-violet/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:pl-14 md:pr-8 lg:pl-16 lg:pr-10 min-[1400px]:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
          {/* Sticky Editorial Left Rail */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              surface="navy"
              badge="INDUSTRIES WE SERVE"
              title="Software engineered for distinct industry realities."
              description="We adapt architecture, security patterns, and user workflows to the operational demands of high-growth and regulated sectors."
            />

            {/* Desktop Interactive Sector Directory */}
            <Reveal delay={0.1} className="mt-8 hidden lg:block">
              <nav
                aria-label="Industries directory"
                className="divide-y divide-white/10 border-y border-white/10"
              >
                {INDUSTRIES_WE_SERVE.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelectSector(item.id)}
                      className={cn(
                        "group flex w-full cursor-pointer items-center justify-between py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/60",
                        isActive
                          ? "text-white"
                          : "text-slate-400 hover:text-slate-200"
                      )}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={cn(
                            "font-mono text-[11px] font-semibold transition-colors",
                            isActive ? "text-blue-400" : "text-slate-500"
                          )}
                        >
                          {item.number}
                        </span>
                        <span className="text-sm font-medium tracking-tight">
                          {item.title}
                        </span>
                      </span>

                      <motion.span
                        animate={{
                          x: prefersReducedMotion || isActive ? 0 : -4,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={
                          prefersReducedMotion
                            ? { duration: 0 }
                            : SPRINGS.tactile
                        }
                        className="text-blue-400"
                      >
                        <ArrowRight className="size-3.5" />
                      </motion.span>
                    </button>
                  );
                })}
              </nav>
            </Reveal>
          </div>

          {/* Right Editorial Split Showcase Stream */}
          <div className="space-y-5 lg:col-span-8">
            {INDUSTRIES_WE_SERVE.map((industry, idx) => (
              <IndustryShowcaseRow
                key={industry.id}
                industry={industry}
                index={idx}
                isActive={activeId === industry.id}
                onActivate={setActiveId}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
