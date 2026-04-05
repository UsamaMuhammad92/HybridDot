import { HomeScrollReveal, StaggerInViewGrid, StaggerInViewItem } from "@/components/home";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { cardPremium, surface } from "@/lib/sectionTheme";
import { cn } from "@/utils/cn";

const STATS_DATA = [
  { id: "founded", value: "2024", label: "Founded" },
  { id: "hq", value: "Lahore", label: "Headquarters, Pakistan" },
  { id: "reach", value: "Global", label: "Local & international clients" },
] as const;

const SECTION_HEADING = {
  eyebrow: "At a glance",
  title: "Who we are",
  subtitle: "Founded in Lahore, delivering creative, marketing, and technology work across borders.",
};

export function Stats() {
  return (
    <SectionWrapper id="stats" aria-labelledby="stats-heading" className={surface.warm}>
      <Container size="lg">
        <HomeScrollReveal>
          <SectionHeading
            id="stats-heading"
            eyebrow={SECTION_HEADING.eyebrow}
            title={SECTION_HEADING.title}
            subtitle={SECTION_HEADING.subtitle}
            align="left"
          />
        </HomeScrollReveal>

        <StaggerInViewGrid className="mt-10 grid gap-6 sm:mt-11 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {STATS_DATA.map((stat) => (
            <StaggerInViewItem key={stat.id}>
              <article className={cn(cardPremium, "flex h-full flex-col items-start text-left text-pretty")}>
                <p className="font-display text-4xl font-normal tracking-[-0.03em] text-neutral-950 md:text-[2.75rem]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 md:text-[0.9375rem]">{stat.label}</p>
              </article>
            </StaggerInViewItem>
          ))}
        </StaggerInViewGrid>
      </Container>
    </SectionWrapper>
  );
}
