"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { bodyLead, displayHeading, hairline, uiEyebrow } from "@/lib/sectionTheme";
import { scrollIntroContainer, scrollRevealItem, scrollViewportOneShot } from "@/animations";
import { cn } from "@/utils/cn";

export function PageIntro({
  title,
  description,
  eyebrow,
  className,
}: {
  title: string;
  description: string;
  eyebrow?: string;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { ...scrollViewportOneShot, initial: true });

  return (
    <motion.header
      ref={ref}
      className={cn("max-w-3xl pt-1 md:pt-2", className)}
      initial="hidden"
      animate={isInView ? ("visible" as const) : ("hidden" as const)}
      variants={scrollIntroContainer}
    >
      <motion.div className={cn(hairline, "mb-6")} variants={scrollRevealItem} aria-hidden />
      {eyebrow ? (
        <motion.p className={cn(uiEyebrow, "mb-1")} variants={scrollRevealItem}>
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h1
        className={cn(
          displayHeading,
          "text-[2.125rem] md:text-[2.5rem] lg:text-[2.75rem]",
          eyebrow ? "mt-2" : "mt-0"
        )}
        variants={scrollRevealItem}
      >
        {title}
      </motion.h1>
      <motion.p className={cn("mt-6 max-w-2xl text-pretty", bodyLead)} variants={scrollRevealItem}>
        {description}
      </motion.p>
    </motion.header>
  );
}
