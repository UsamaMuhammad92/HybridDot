import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PageIntro } from "@/components/PageIntro";
import { SERVICE_PILLARS, SERVICES_META_DESCRIPTION, WHAT_WE_DO_SUMMARY } from "@/lib/company";
import { sectionPage, surface } from "@/lib/sectionTheme";
import { cn } from "@/utils/cn";

export const metadata = {
  title: "Services",
  description: SERVICES_META_DESCRIPTION,
};

const pillars = [SERVICE_PILLARS.creative, SERVICE_PILLARS.marketing, SERVICE_PILLARS.technology] as const;

export default function ServicesPage() {
  return (
    <section className={cn(sectionPage, surface.warm)}>
      <Container size="lg" className="max-w-6xl">
        <PageIntro
          eyebrow="Services"
          title="Services"
          description={WHAT_WE_DO_SUMMARY}
        />

        <ScrollReveal className="mt-12">
          <ul className="grid list-none gap-8 lg:grid-cols-3 lg:gap-10" role="list">
          {pillars.map((pillar) => (
            <li key={pillar.title}>
              <article className="h-full rounded-2xl border border-neutral-900/[0.06] bg-white/60 p-6 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] backdrop-blur-sm md:p-7">
                <h2 className="text-balance font-heading text-lg font-semibold tracking-tight text-neutral-950">
                  {pillar.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-[0.9375rem]">
                  {pillar.description}
                </p>
                <ul className="mt-5 list-outside list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-600 md:text-[0.9375rem]">
                  {pillar.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
          </ul>
        </ScrollReveal>
      </Container>
    </section>
  );
}
