"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { fadeInUp, scrollViewport } from "@/animations";
import { sectionY } from "@/lib/sectionTheme";

export interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
  withAnimation?: boolean;
  /** Optional semantic label for accessibility */
  ariaLabel?: string;
}

const MotionSection = motion.section;
const MotionDiv = motion.div;

export function SectionWrapper({
  children,
  className,
  id,
  as: Component = "section",
  withAnimation = true,
  ariaLabel,
}: SectionWrapperProps) {
  const wrapperClassName = cn(sectionY, "bg-[#FAFAF8]", className);
  const motionProps = {
    id,
    className: wrapperClassName,
    "aria-label": ariaLabel,
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: scrollViewport,
    variants: fadeInUp,
  };

  if (withAnimation) {
    return Component === "section" ? (
      <MotionSection {...motionProps}>{children}</MotionSection>
    ) : (
      <MotionDiv {...motionProps}>{children}</MotionDiv>
    );
  }

  return (
    <Component id={id} className={wrapperClassName} aria-label={ariaLabel}>
      {children}
    </Component>
  );
}
