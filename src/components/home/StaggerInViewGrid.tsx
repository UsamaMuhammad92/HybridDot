"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { scrollCardItem, scrollStaggerGrid, scrollViewportStagger } from "@/animations";
import { useRevealFallback } from "@/hooks/useRevealFallback";
import { cn } from "@/utils/cn";

const MotionUl = motion.ul;
const MotionLi = motion.li;

type StaggerInViewGridProps = {
  className?: string;
  children: ReactNode;
};

export function StaggerInViewGrid({ className, children }: StaggerInViewGridProps) {
  const ref = useRef<HTMLUListElement>(null);
  useRevealFallback(ref, 800);
  const isInView = useInView(ref, scrollViewportStagger);

  return (
    <MotionUl
      ref={ref}
      className={cn(className)}
      role="list"
      variants={scrollStaggerGrid}
      initial="hidden"
      animate={isInView ? ("visible" as const) : ("hidden" as const)}
    >
      {children}
    </MotionUl>
  );
}

type StaggerInViewItemProps = {
  className?: string;
  children: ReactNode;
};

export function StaggerInViewItem({ className, children }: StaggerInViewItemProps) {
  return (
    <MotionLi className={cn(className)} variants={scrollCardItem}>
      {children}
    </MotionLi>
  );
}
