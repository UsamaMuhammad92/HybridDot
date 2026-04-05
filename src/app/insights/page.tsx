import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PageIntro } from "@/components/PageIntro";
import { sectionPage, surface } from "@/lib/sectionTheme";
import { cn } from "@/utils/cn";

export const metadata = {
  title: "Insights",
  description: "Articles on strategy, marketing, and technology from HybridDot.",
};

export default function InsightsPage() {
  return (
    <section className={cn(sectionPage, surface.warm)}>
      <Container size="lg" className="max-w-3xl">
        <PageIntro
          eyebrow="Insights"
          title="Insights"
          description="Perspective on brand, campaigns, product, and technology—written for teams who want practical ideas, not jargon. New pieces will be published here on a regular cadence."
        />
        <ScrollReveal className="mt-10 text-sm leading-relaxed text-neutral-600">
          <p>
            Have a topic you would like us to cover?{" "}
            <Link
              href="/contact"
              className="font-medium text-neutral-950 underline-offset-4 hover:text-[#C1121F] hover:underline"
            >
              Send a note
            </Link>
            .
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
