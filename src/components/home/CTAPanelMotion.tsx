"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { easeSmooth } from "@/animations";
import { useRevealFallback } from "@/hooks/useRevealFallback";
import { cn } from "@/utils/cn";

const ctaPanelViewport = { once: true as const, amount: 0.22 as const, margin: "0px 0px 18% 0px" as const };

export function CTAPanelMotion({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useRevealFallback(ref, 800);
  const isInView = useInView(ref, ctaPanelViewport);

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      transition={{ duration: 0.68, ease: easeSmooth }}
    >
      {children}
    </motion.div>
  );
}
