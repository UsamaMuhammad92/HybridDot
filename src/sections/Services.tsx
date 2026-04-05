import Link from "next/link";
import { Palette, TrendingUp, Cpu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cardPremium, sectionY, surface } from "@/lib/sectionTheme";
import { SERVICE_PILLARS, SERVICES_SECTION_LEAD } from "@/lib/company";
import { cn } from "@/utils/cn";

const HOME_BULLET_CAP = 4;

const SERVICES_DATA = [
  {
    id: "creative",
    title: SERVICE_PILLARS.creative.title,
    description: SERVICE_PILLARS.creative.description,
    bullets: SERVICE_PILLARS.creative.items.slice(0, HOME_BULLET_CAP),
    Icon: Palette,
  },
  {
    id: "marketing",
    title: SERVICE_PILLARS.marketing.title,
    description: SERVICE_PILLARS.marketing.description,
    bullets: SERVICE_PILLARS.marketing.items.slice(0, HOME_BULLET_CAP),
    Icon: TrendingUp,
  },
  {
    id: "technology",
    title: SERVICE_PILLARS.technology.title,
    description: SERVICE_PILLARS.technology.description,
    bullets: SERVICE_PILLARS.technology.items.slice(0, HOME_BULLET_CAP),
    Icon: Cpu,
  },
] as const;

const SECTION_HEADING = {
  eyebrow: "What we do",
  title: "Creative, marketing & technology",
  subtitle: SERVICES_SECTION_LEAD,
};

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className={cn(sectionY, surface.paper)}
    >
      <Container size="lg">
        <SectionHeading
          id="services-heading"
          eyebrow={SECTION_HEADING.eyebrow}
          title={SECTION_HEADING.title}
          subtitle={SECTION_HEADING.subtitle}
          align="left"
        />

        <ul
          className="mt-10 grid gap-6 sm:grid-cols-2 sm:mt-11 lg:mt-12 lg:grid-cols-3 lg:gap-8"
          role="list"
        >
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </ul>

        <p className="mt-10 text-sm text-neutral-600 sm:mt-11">
          <Link
            href="/services"
            className="font-medium text-neutral-950 underline-offset-4 transition-colors hover:text-[#C1121F] hover:underline"
          >
            View all services
          </Link>
          <span className="text-neutral-500"> — full lists for each pillar.</span>
        </p>
      </Container>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof SERVICES_DATA)[number] }) {
  const { title, description, bullets, Icon } = service;

  return (
    <li>
      <article className={`group flex h-full flex-col ${cardPremium}`}>
        <div
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[#C1121F]/10 bg-[#C1121F]/[0.06] text-[#C1121F] transition-transform duration-300 group-hover:scale-[1.04]"
          aria-hidden
        >
          <Icon className="h-5 w-5" strokeWidth={1.65} />
        </div>

        <h3 className="mt-6 text-balance font-heading text-lg font-semibold tracking-tight text-neutral-950">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-[0.9375rem]">{description}</p>

        <ul
          className="mt-5 list-outside list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-neutral-600"
          role="list"
        >
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </li>
  );
}
