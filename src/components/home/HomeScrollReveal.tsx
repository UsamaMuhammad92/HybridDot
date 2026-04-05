"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { easeSmooth } from "@/animations";
import { useRevealFallback } from "@/hooks/useRevealFallback";
import { cn } from "@/utils/cn";

type HomeScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Extra delay (s) after in-view trigger — useful when chained after a parent stagger. */
  delay?: number;
};

/**
 * Fade + lift when the block enters the viewport (homepage headings, footnotes, panels).
 */
export function HomeScrollReveal({ children, className, delay = 0 }: HomeScrollRevealProps) {
  const ref = useRef(null);
  useRevealFallback(ref, 800);
  const isInView = useInView(ref, { once: true, margin: "0px 0px 16% 0px", amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.58, delay, ease: easeSmooth }}
    >
      {children}
    </motion.div>
  );
}
