"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { fadeInUp, scrollViewportOneShot } from "@/animations";
import { cn } from "@/utils/cn";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  /**
   * When true, `useInView` starts as in-view until the observer corrects—use for blocks that are
   * usually above the fold right after the page intro (avoids a one-frame hidden state).
   */
  assumeInitiallyInView?: boolean;
};

export function ScrollReveal({
  children,
  className,
  variants = fadeInUp,
  assumeInitiallyInView = false,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    ...scrollViewportOneShot,
    ...(assumeInitiallyInView ? { initial: true as const } : {}),
  });

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? ("visible" as const) : ("hidden" as const)}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
