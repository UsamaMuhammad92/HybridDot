import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PageIntro } from "@/components/PageIntro";
import {
  ABOUT_META_DESCRIPTION,
  COMPANY_AUDIENCE,
  COMPANY_FACTS,
  COMPANY_INTRO,
  WHAT_WE_DO_SUMMARY,
} from "@/lib/company";
import { sectionPage, surface } from "@/lib/sectionTheme";
import { cn } from "@/utils/cn";

export const metadata = {
  title: "About",
  description: ABOUT_META_DESCRIPTION,
};

export default function AboutPage() {
  return (
    <section className={cn(sectionPage, surface.warm)}>
      <Container size="lg" className="max-w-3xl">
        <PageIntro
          eyebrow="About"
          title="About HybridDot"
          description={`${COMPANY_INTRO} ${COMPANY_AUDIENCE}`}
        />

        <ScrollReveal className="mt-10 max-w-2xl text-sm leading-relaxed text-neutral-600">
          <p>
            <span className="font-medium text-neutral-800">Studio · </span>
            {COMPANY_FACTS.addressLine1}, {COMPANY_FACTS.addressLine2}
            <span className="text-neutral-400"> · </span>
            Founded {COMPANY_FACTS.founded}
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-14 max-w-2xl space-y-4 text-[0.9375rem] leading-relaxed text-neutral-600 md:text-base">
          <h2 className="font-heading text-lg font-semibold text-neutral-950">What we do</h2>
          <p className="text-pretty">{WHAT_WE_DO_SUMMARY}</p>
          <p className="text-sm text-neutral-500">
            Full capability lists:{" "}
            <Link
              href="/services"
              className="font-medium text-neutral-950 underline-offset-4 hover:text-[#C1121F] hover:underline"
            >
              Services
            </Link>
            .
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
