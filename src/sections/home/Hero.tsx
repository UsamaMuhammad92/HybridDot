import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/HeroVisual";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { COMPANY_TAGLINE, HERO_BODY } from "@/lib/company";
import { cn } from "@/utils/cn";

/**
 * Server-rendered hero — no Framer Motion here. Motion `initial={{ opacity: 0 }}` has been
 * intermittently sticking at 0 after hydration (blank page with only the hero tint visible).
 */
export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative w-full overflow-hidden bg-[#F3F1EE] pb-[clamp(3.5rem,8vw,5.5rem)] pt-6 md:pt-8 lg:pt-10"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.35)_28%,transparent_55%)] opacity-90"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_92%_38%,rgba(225,214,204,0.5),transparent_60%)]"
        aria-hidden
      />
      <NoiseOverlay />
      <Container size="lg" className="relative z-10">
        <div
          className={cn(
            "home-hero-grid grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-12 xl:gap-16"
          )}
        >
          <div className="flex max-w-2xl flex-col justify-center">
            <div
              className="mb-5 h-px w-14 bg-gradient-to-r from-neutral-900/20 via-neutral-900/12 to-transparent"
              aria-hidden
            />
            <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.32em] text-neutral-500">
              HybridDot · Lahore, Pakistan · Global
            </p>
            <h1
              id="hero-heading"
              className="mt-5 max-w-3xl text-balance font-display text-[2.25rem] font-normal leading-[1.06] tracking-[-0.02em] text-neutral-950 sm:text-[2.625rem] md:text-[3rem] md:leading-[1.05] lg:text-[3.25rem]"
            >
              {COMPANY_TAGLINE}
            </h1>

            <p className="mt-9 max-w-2xl text-[0.9375rem] leading-[1.75] text-neutral-600 md:text-base md:leading-[1.7]">
              {HERO_BODY}
            </p>

            <div className="mt-11 flex flex-wrap items-center gap-3 sm:mt-12 sm:gap-4">
              <Button
                href="/contact"
                size="lg"
                className="relative overflow-hidden rounded-xl border-0 bg-[#C1121F] px-9 py-4 text-sm font-medium text-white shadow-[0_4px_20px_-2px_rgba(193,18,31,0.4)] before:pointer-events-none before:absolute before:inset-0 before:rounded-xl before:shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] before:content-[''] transition-[background-color,box-shadow,transform] duration-200 hover:!scale-100 hover:bg-[#9e0f1a] hover:shadow-[0_12px_40px_-8px_rgba(193,18,31,0.45)] focus-visible:ring-[#C1121F] active:translate-y-px"
              >
                Start a Project
              </Button>
              <Button
                href="/work"
                variant="outline"
                size="lg"
                className="rounded-xl border border-neutral-900/12 bg-white/55 px-9 py-4 text-sm font-medium text-neutral-900 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)] backdrop-blur-md transition-[background-color,border-color,box-shadow,transform] duration-200 hover:!scale-100 hover:border-neutral-900/18 hover:bg-white/85 hover:shadow-[0_8px_28px_-6px_rgba(0,0,0,0.1)] hover:!text-neutral-900 active:translate-y-px"
              >
                View Our Work
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
