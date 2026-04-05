"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { easeSmooth } from "@/animations";
import { useRevealFallback } from "@/hooks/useRevealFallback";
import { cn } from "@/utils/cn";

const aboutPanelViewport = { once: true as const, amount: 0.18 as const, margin: "0px 0px 22% 0px" as const };

export function AboutPanelMotion({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useRevealFallback(ref, 800);
  const isInView = useInView(ref, aboutPanelViewport);

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: 40, scale: 0.985 }}
      animate={
        isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.985 }
      }
      transition={{ duration: 0.72, ease: easeSmooth }}
    >
      {children}
    </motion.div>
  );
}
