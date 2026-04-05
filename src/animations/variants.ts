import type { Variants } from "framer-motion";

/** Smooth “agency” easing — avoids bouncy or harsh motion */
export const easeSmooth = [0.22, 1, 0.36, 1] as const;

const hiddenTransition = { duration: 0.4, ease: easeSmooth };

/** For `useInView` / `whileInView` on inner blocks (not `SectionWrapper`). */
export const scrollViewport = {
  once: false as const,
  margin: "0px" as const,
  amount: "some" as const,
};

/**
 * One reveal per mount; does not revert to `hidden` when scrolled past.
 * Used by `SectionWrapper` (`whileInView`) and `PageIntro` / `ScrollReveal` (`useInView`).
 */
export const scrollViewportOneShot = {
  once: true as const,
  margin: "0px" as const,
  amount: "some" as const,
};

/** Full-width section shells (`SectionWrapper`): generous margin + replay when re-entering view. */
export const scrollViewportSection = {
  once: false as const,
  margin: "12% 0px 28% 0px" as const,
  amount: 0.12 as const,
};

/** Staggered grids: slightly generous bottom margin for earlier card reveals. */
export const scrollViewportStagger = {
  once: true as const,
  margin: "0px 0px 20% 0px" as const,
  amount: 0.18 as const,
};

export const fadeIn: Variants = {
  hidden: { opacity: 0, transition: hiddenTransition },
  visible: { opacity: 1, transition: { duration: 0.5, ease: easeSmooth } },
  exit: { opacity: 0 },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20, transition: hiddenTransition },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeSmooth },
  },
  exit: { opacity: 0, y: -12 },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20, transition: hiddenTransition },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeSmooth } },
  exit: { opacity: 0, y: 12 },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0, transition: hiddenTransition },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18, transition: hiddenTransition },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeSmooth } },
};

/** Section intro: stagger title then subtitle */
export const scrollIntroContainer: Variants = {
  hidden: { opacity: 0, transition: hiddenTransition },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

/** Single line fade + slight lift (headers, CTAs) */
export const scrollRevealItem: Variants = {
  hidden: { opacity: 0, y: 22, transition: hiddenTransition },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: easeSmooth },
  },
};

/** Hero column: headline → body → actions */
export const heroStaggerContainer: Variants = {
  hidden: { opacity: 0, transition: hiddenTransition },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.05 },
  },
};

export const heroRevealItem: Variants = {
  hidden: { opacity: 0, y: 24, transition: hiddenTransition },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: easeSmooth },
  },
};

/** Grids of cards (services, work, stats, testimonials) */
export const scrollStaggerGrid: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      ...hiddenTransition,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
};

export const scrollStaggerGridLoose: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      ...hiddenTransition,
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const scrollCardItem: Variants = {
  hidden: { opacity: 0, y: 22, transition: hiddenTransition },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: easeSmooth },
  },
};
