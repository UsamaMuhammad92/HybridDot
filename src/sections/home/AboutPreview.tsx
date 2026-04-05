import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { hairline, sectionY, uiEyebrow } from "@/lib/sectionTheme";
import { cn } from "@/utils/cn";
import { WHAT_WE_DO_SUMMARY } from "@/lib/company";

export function AboutPreview() {
  return (
    <section
      id="about"
      aria-labelledby="about-preview-heading"
      className={cn(sectionY, "bg-[#FAFAF8]")}
    >
      <Container size="lg">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a0a0a] p-8 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)] md:p-12 lg:p-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            aria-hidden
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative">
            <div className={cn(hairline, "mb-6 from-white/30 via-white/15")} aria-hidden />
            <p className={cn(uiEyebrow, "text-white/45")}>About HybridDot</p>
            <h2
              id="about-preview-heading"
              className="mt-4 max-w-xl font-display text-[1.75rem] font-normal leading-[1.12] tracking-[-0.02em] text-white md:text-[2rem] lg:text-[2.25rem]"
            >
              Pakistan-based. Globally operating.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/70 md:text-base md:leading-relaxed">
              {WHAT_WE_DO_SUMMARY}
            </p>
            <div className="mt-10 md:mt-12">
              <Button
                href="/about"
                variant="secondary"
                className="rounded-xl border border-white/20 bg-white px-8 py-3.5 text-sm font-medium text-neutral-950 shadow-none hover:!scale-100 hover:bg-white/95 hover:shadow-[0_12px_40px_-12px_rgba(255,255,255,0.25)]"
              >
                Learn about us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
