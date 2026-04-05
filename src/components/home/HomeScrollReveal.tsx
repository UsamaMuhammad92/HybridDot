"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { easeSmooth, scrollViewportOneShot } from "@/animations";
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
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ ...scrollViewportOneShot, margin: "0px 0px 16% 0px", amount: 0.2 }}
      transition={{ duration: 0.58, delay, ease: easeSmooth }}
    >
      {children}
    </motion.div>
  );
}
