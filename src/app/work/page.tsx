import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PageIntro } from "@/components/PageIntro";
import { sectionPage, surface } from "@/lib/sectionTheme";
import { cn } from "@/utils/cn";

export const metadata = {
  title: "Work",
  description: "Selected projects and engagements from HybridDot.",
};

export default function WorkPage() {
  return (
    <section className={cn(sectionPage, surface.warm)}>
      <Container size="lg" className="max-w-3xl">
        <PageIntro
          eyebrow="Work"
          title="Selected work"
          description="We are preparing case studies that show how we combine creative, marketing, and technology for measurable outcomes. In the meantime, our Services page outlines what we deliver end to end—and we are happy to walk through relevant experience on a call."
        />
        <ScrollReveal className="mt-10 text-sm leading-relaxed text-neutral-600">
          <p>
            <Link
              href="/services"
              className="font-medium text-neutral-950 underline-offset-4 hover:text-[#C1121F] hover:underline"
            >
              Explore services
            </Link>
            <span className="text-neutral-400"> · </span>
            <Link
              href="/contact"
              className="font-medium text-neutral-950 underline-offset-4 hover:text-[#C1121F] hover:underline"
            >
              Discuss your brief
            </Link>
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
