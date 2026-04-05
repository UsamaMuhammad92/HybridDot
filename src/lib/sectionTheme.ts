/** Shared layout + surface tokens for premium sections across the site.
 *  Keep class strings here as static literals so Tailwind can scan this file (see tailwind.config content).
 */
export const sectionY = "py-[clamp(3.5rem,8vw,5.5rem)]";

/** Inner routes: explicit top/bottom padding (avoid stacking `py` + `pb` utilities). */
export const sectionPage =
  "pt-[clamp(3.5rem,8vw,5.5rem)] pb-[clamp(3.5rem,10vw,6rem)]";

export const surface = {
  warm: "bg-[#F3F1EE]",
  subtle: "bg-[#FAFAF8]",
  paper: "bg-[#EEEBE7]",
  white: "bg-white",
} as const;

export const displayHeading =
  "font-display text-[1.875rem] font-normal tracking-[-0.02em] text-neutral-950 md:text-[2.125rem] lg:text-[2.25rem]";

export const uiEyebrow =
  "font-heading text-[10px] font-semibold uppercase tracking-[0.28em] text-neutral-500";

export const bodyLead = "text-base leading-relaxed text-neutral-600 md:text-lg md:leading-relaxed";

export const cardPremium =
  "rounded-2xl border border-neutral-900/[0.08] bg-white p-8 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_16px_48px_-20px_rgba(0,0,0,0.12)] ring-1 ring-neutral-900/[0.04] backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-1 hover:border-neutral-900/[0.12] hover:shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_24px_56px_-24px_rgba(0,0,0,0.16)]";

export const hairline =
  "h-px w-12 bg-gradient-to-r from-neutral-900/20 via-neutral-900/10 to-transparent";
