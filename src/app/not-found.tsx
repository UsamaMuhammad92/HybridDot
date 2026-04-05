import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { sectionPage, surface } from "@/lib/sectionTheme";
import { cn } from "@/utils/cn";

export default function NotFound() {
  return (
    <section className={cn(sectionPage, surface.warm, "min-h-[50vh]")}>
      <Container size="lg" className="max-w-xl">
        <ScrollReveal assumeInitiallyInView>
          <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.28em] text-neutral-500">
            404
          </p>
          <h1 className="mt-3 font-display text-[2rem] font-normal tracking-[-0.02em] text-neutral-950 md:text-[2.25rem]">
            Page not found
          </h1>
          <p className="mt-5 text-base leading-relaxed text-neutral-600">
            That link may be outdated, or the page has moved. Try the home page or contact us and we will point you in the right direction.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-[#C1121F] px-6 py-3 text-sm font-medium text-white shadow-[0_4px_16px_-2px_rgba(193,18,31,0.35)] transition-colors hover:bg-[#9e0f1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-offset-2"
            >
              Back to home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-900/15 bg-white/70 px-6 py-3 text-sm font-medium text-neutral-900 backdrop-blur-sm transition-colors hover:border-neutral-900/22 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-offset-2"
            >
              Contact
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
