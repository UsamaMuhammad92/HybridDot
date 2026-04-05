"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { heroRevealItem, heroStaggerContainer, scrollViewport } from "@/animations";
import { useRevealFallback } from "@/hooks/useRevealFallback";
import { cn } from "@/utils/cn";

export function HeroMotion({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef(null);
  useRevealFallback(ref, 900);
  const isInView = useInView(ref, { ...scrollViewport, initial: true });

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={heroStaggerContainer}
      initial="hidden"
      animate={isInView ? ("visible" as const) : ("hidden" as const)}
    >
      {children}
    </motion.div>
  );
}

export function HeroMotionItem({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <motion.div className={cn(className)} variants={heroRevealItem}>
      {children}
    </motion.div>
  );
}
