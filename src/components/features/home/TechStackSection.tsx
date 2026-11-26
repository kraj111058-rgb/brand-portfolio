import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Reveal } from "@/components/shared/MotionPrimitives";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TECH_CATEGORIES } from "@/data/services";
import { EASE_CURVE } from "@/lib/motion";

export function TechStackSection() {
  const [activeTech, setActiveTech] = useState<string>(TECH_CATEGORIES[0].id);

  return (
    <section
      id="tech-stack"
      className="scroll-mt-16 pt-14 pb-10 sm:pt-20 sm:pb-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Engineering Stack"
          title="Proven, modern technologies across every layer"
          description="We choose reliable, widely supported tools that keep performance high, onboarding simple, and infrastructure costs predictable."
        />

        <Tabs
          value={activeTech}
          onValueChange={(val) => {
            if (typeof val === "string") setActiveTech(val);
          }}
          className="mt-7 sm:mt-8"
        >
          <TabsList className="w-fit">
            {TECH_CATEGORIES.map((category) => {
              const isActive = activeTech === category.id;
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="relative z-0 data-[active]:border-transparent data-[active]:bg-transparent data-[active]:shadow-none"
                >
                  {isActive && (
                    <motion.span
                      layoutId="tech-tab-pill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute inset-0 -z-10 rounded-lg border border-border/60 bg-background shadow-xs"
                    />
                  )}
                  <span>{category.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-border/80 bg-card p-5 text-left shadow-sm sm:p-8">
              <TabsContent value={activeTech}>
                <AnimatePresence mode="wait">
                  {TECH_CATEGORIES.filter((c) => c.id === activeTech).map(
                    (category) => (
                      <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.24, ease: EASE_CURVE }}
                      >
                        <p className="mb-5 text-sm text-muted-foreground sm:mb-6">
                          {category.description}
                        </p>
                        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                          {category.items.map((tech, idx) => (
                            <motion.div
                              key={tech.name}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.25,
                                delay: idx * 0.04,
                                ease: EASE_CURVE,
                              }}
                              whileHover={{ y: -3 }}
                              className="group/tech flex min-w-0 flex-col justify-between rounded-2xl border border-border/70 bg-muted/30 p-4 transition-all duration-200 hover:border-indigo-500/40 hover:bg-muted/60 hover:shadow-lg hover:shadow-indigo-950/5 dark:hover:shadow-black/30"
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div>
                                  <h3 className="text-base font-bold text-foreground transition-colors group-hover/tech:text-indigo-600 dark:group-hover/tech:text-indigo-400">
                                    {tech.name}
                                  </h3>
                                  <span className="text-xs font-semibold text-indigo-600/90 dark:text-indigo-400">
                                    {tech.role}
                                  </span>
                                </div>
                                <span className="mt-1.5 size-2 rounded-full bg-border transition-all duration-300 group-hover/tech:scale-125 group-hover/tech:bg-indigo-500" />
                              </div>
                              <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                                {tech.note}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )
                  )}
                </AnimatePresence>
              </TabsContent>
            </div>
          </Reveal>
        </Tabs>
      </div>
    </section>
  );
}
