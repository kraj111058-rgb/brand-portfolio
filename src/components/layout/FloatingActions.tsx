import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ArrowUp } from "lucide-react";

import { WhatsAppIcon } from "@/components/shared/BrandIcons";
import { BRAND_INFO } from "@/data/brand";
import { EASE_CURVE } from "@/lib/motion";

export function FloatingActions() {
  const { scrollY } = useScroll();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowScrollTop(latest > 320);
  });

  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(BRAND_INFO.whatsappMessage)}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-4 bottom-4 z-30 flex flex-col items-center gap-3 sm:right-6 sm:bottom-6">
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            initial={{ opacity: 0, scale: 0.84, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.84, y: 14 }}
            whileHover={{ y: -3, scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="group relative inline-flex size-12 items-center justify-center rounded-full border border-border/80 bg-card/95 text-foreground shadow-lg shadow-black/10 backdrop-blur-xl transition-colors duration-300 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white hover:shadow-xl hover:shadow-indigo-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:shadow-black/40 dark:hover:border-indigo-500 dark:hover:bg-indigo-500 cursor-pointer"
          >
            <ArrowUp className="size-4.5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5" />
            <span className="pointer-events-none absolute right-full mr-3 hidden translate-x-2 whitespace-nowrap rounded-xl border border-border/90 bg-popover px-3 py-1.5 text-xs font-semibold text-popover-foreground opacity-0 shadow-lg transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 md:block">
              Back to top
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        initial={{ opacity: 0, scale: 0.85, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.45, ease: EASE_CURVE }}
        whileHover={{ y: -3, scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="group relative inline-flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-600/30 transition-shadow duration-300 hover:shadow-xl hover:shadow-emerald-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      >
        <motion.span
          aria-hidden="true"
          animate={{ scale: [1, 1.24, 1], opacity: [0.35, 0, 0.35] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366]"
        />
        <WhatsAppIcon className="relative z-10 size-6 transition-transform duration-300 ease-out group-hover:scale-105" />
        <span className="pointer-events-none absolute right-full mr-3 hidden translate-x-2 whitespace-nowrap rounded-xl border border-border/90 bg-popover px-3 py-1.5 text-xs font-semibold text-popover-foreground opacity-0 shadow-lg transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 md:block">
          Chat on WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
