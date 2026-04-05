"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { easeSmooth } from "@/animations";
import { useRevealFallback } from "@/hooks/useRevealFallback";
import { cn } from "@/utils/cn";

export function AboutPanelMotion({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useRevealFallback(ref, 800);

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: 40, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px 22% 0px" }}
      transition={{ duration: 0.72, ease: easeSmooth }}
    >
      {children}
    </motion.div>
  );
}
