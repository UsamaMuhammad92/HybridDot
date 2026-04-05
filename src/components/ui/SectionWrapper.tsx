"use client";

import type { ComponentProps, ReactNode } from "react";
import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { easeSmooth, scrollViewportSection } from "@/animations";
import { useRevealFallback } from "@/hooks/useRevealFallback";
import { cn } from "@/utils/cn";
import { sectionY } from "@/lib/sectionTheme";

export interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
  /** When false or when user prefers reduced motion, renders a plain section (no scroll animation). */
  withAnimation?: boolean;
  /** Optional semantic label for accessibility */
  ariaLabel?: string;
  /** e.g. section heading `id` for `aria-labelledby` */
  "aria-labelledby"?: string;
  /**
   * When false, skips `sectionY` padding so you can set full vertical rhythm in `className` (e.g. CTA).
   * @default true
   */
  sectionPadding?: boolean;
}

const MotionSection = motion.section;
const MotionDiv = motion.div;

type AnimatedShellProps = {
  id?: string;
  className: string;
  ariaLabel?: string;
  ariaLabelledby?: string;
  children: ReactNode;
  as: "section" | "div";
};

function AnimatedSectionShell({
  id,
  className,
  ariaLabel,
  ariaLabelledby,
  children,
  as,
}: AnimatedShellProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const divRef = useRef<HTMLElement>(null);
  useRevealFallback(as === "section" ? sectionRef : divRef, 750);

  const motionProps = {
    id,
    className,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    initial: { opacity: 0, y: 44 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.68, ease: easeSmooth },
    viewport: scrollViewportSection,
  };

  if (as === "section") {
    return (
      <MotionSection
        ref={sectionRef as unknown as ComponentProps<typeof MotionSection>["ref"]}
        {...motionProps}
      >
        {children}
      </MotionSection>
    );
  }
  return (
    <MotionDiv ref={divRef as unknown as ComponentProps<typeof MotionDiv>["ref"]} {...motionProps}>
      {children}
    </MotionDiv>
  );
}

/**
 * Full-section fade + rise on scroll. Uses a generous viewport margin so `whileInView` fires reliably,
 * plus {@link useRevealFallback} so we never stay stuck at `opacity: 0`.
 */
export function SectionWrapper({
  children,
  className,
  id,
  as: Component = "section",
  withAnimation = true,
  ariaLabel,
  "aria-labelledby": ariaLabelledby,
  sectionPadding = true,
}: SectionWrapperProps) {
  const prefersReducedMotion = useReducedMotion();
  const wrapperClassName = cn(sectionPadding && sectionY, className);

  if (!withAnimation || prefersReducedMotion) {
    if (Component === "section") {
      return (
        <section
          id={id}
          className={wrapperClassName}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby}
        >
          {children}
        </section>
      );
    }
    return (
      <div id={id} className={wrapperClassName} aria-label={ariaLabel} aria-labelledby={ariaLabelledby}>
        {children}
      </div>
    );
  }

  return (
    <AnimatedSectionShell
      as={Component}
      id={id}
      className={wrapperClassName}
      ariaLabel={ariaLabel}
      ariaLabelledby={ariaLabelledby}
    >
      {children}
    </AnimatedSectionShell>
  );
}
