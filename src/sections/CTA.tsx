import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CTAPanelMotion, HomeScrollReveal } from "@/components/home";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const CTA_CONTENT = {
  headline: "Ready to scale with strategy, marketing & tech?",
  subtext:
    "Partner with HybridDot for measurable growth—innovative digital solutions and long-term impact, locally and internationally.",
  primaryLabel: "Start a Project",
  primaryHref: "/contact",
} as const;

export function CTA() {
  return (
    <SectionWrapper
      id="cta"
      aria-labelledby="cta-heading"
      sectionPadding={false}
      className="relative isolate overflow-hidden bg-[#F2F0EC] pb-[clamp(3.75rem,10vw,6.5rem)] pt-[clamp(3.75rem,9vw,6.25rem)]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(255,255,255,0.9),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_100%_40%,rgba(232,210,198,0.35),transparent_60%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-[#EBE8E2]/80"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35]">
        <NoiseOverlay />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="relative mx-auto max-w-3xl">
          <div
            className="pointer-events-none absolute -left-3 -top-3 h-10 w-10 border-l border-t border-neutral-900/[0.08] sm:-left-4 sm:-top-4 sm:h-12 sm:w-12"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-3 -right-3 h-10 w-10 border-b border-r border-neutral-900/[0.08] sm:-bottom-4 sm:-right-4 sm:h-12 sm:w-12"
            aria-hidden
          />

          <CTAPanelMotion className="rounded-[1.75rem] border border-white/80 bg-white/45 px-8 py-10 shadow-[0_32px_80px_-32px_rgba(0,0,0,0.12),0_0_0_1px_rgba(255,255,255,0.6)_inset,0_1px_0_rgba(255,255,255,0.9)_inset] backdrop-blur-2xl backdrop-saturate-150 sm:px-12 sm:py-12 md:rounded-[2rem] md:py-14">
            <h2
              id="cta-heading"
              className="text-center font-display text-[2rem] font-normal leading-[1.1] tracking-[-0.02em] text-neutral-950 sm:text-[2.375rem] md:text-[2.75rem] lg:text-[3rem]"
            >
              {CTA_CONTENT.headline}
            </h2>

            <p className="mt-6 text-center text-base leading-relaxed text-neutral-600 md:text-lg">
              {CTA_CONTENT.subtext}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-11 sm:flex-row sm:gap-5">
              <Link
                href={CTA_CONTENT.primaryHref}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#C1121F] px-9 py-3.5 text-sm font-medium text-white shadow-[0_8px_28px_-6px_rgba(193,18,31,0.45)] before:pointer-events-none before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 before:content-[''] after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] after:content-[''] transition-[background-color,box-shadow,transform] duration-200 hover:bg-[#9e0f1a] hover:shadow-[0_14px_36px_-8px_rgba(193,18,31,0.5)] active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-offset-2 focus-visible:ring-offset-white/80"
              >
                {CTA_CONTENT.primaryLabel}
                <ArrowUpRight className="relative h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <span className="hidden text-xs text-neutral-300 sm:inline" aria-hidden>
                ·
              </span>
              <Link
                href="/work"
                className="text-sm font-medium text-neutral-600 underline-offset-4 transition-colors hover:text-neutral-950 hover:underline"
              >
                See selected work
              </Link>
            </div>
          </CTAPanelMotion>
        </div>

        <HomeScrollReveal className="mx-auto mt-14 max-w-md md:mt-16">
          <div
            className="h-px w-full bg-gradient-to-r from-transparent via-neutral-900/10 to-transparent"
            aria-hidden
          />
        </HomeScrollReveal>
      </div>
    </SectionWrapper>
  );
}
