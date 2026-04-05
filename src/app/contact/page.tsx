import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/PageIntro";
import { Button } from "@/components/ui/Button";
import { COMPANY_CONTACT_EMAIL, COMPANY_FACTS } from "@/lib/company";
import { sectionPage, surface } from "@/lib/sectionTheme";
import { cn } from "@/utils/cn";

export const metadata = {
  title: "Contact",
  description:
    "Contact HybridDot in Lahore, Pakistan—creative, marketing & technology solutions with local and international reach.",
};

export default function ContactPage() {
  const mailto = `mailto:${COMPANY_CONTACT_EMAIL}?subject=${encodeURIComponent("Project inquiry — HybridDot")}`;

  return (
    <section className={cn(sectionPage, surface.warm)}>
      <Container size="lg" className="max-w-3xl">
        <PageIntro
          eyebrow="Contact"
          title="Let's talk"
          description={`Tell us about your goals, timeline, and market—we will respond with next steps. Studio: ${COMPANY_FACTS.addressLine1}, ${COMPANY_FACTS.addressLine2}.`}
        />

        <div className="mt-12 max-w-xl space-y-8">
          <div>
            <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Email
            </p>
            <a
              href={mailto}
              className="mt-2 inline-block text-lg font-medium text-neutral-950 underline-offset-4 transition-colors hover:text-[#C1121F] hover:underline"
            >
              {COMPANY_CONTACT_EMAIL}
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button href={mailto} variant="primary" size="lg">
              Start by email
            </Button>
            <Button href="/services" variant="outline" size="lg">
              View services
            </Button>
          </div>

          <p className="text-sm leading-relaxed text-neutral-500">
            Prefer a call or meeting? Mention it in your message and we will coordinate from there. For careers, see{" "}
            <Link
              href="/careers"
              className="font-medium text-neutral-700 underline-offset-4 hover:text-[#C1121F] hover:underline"
            >
              Careers
            </Link>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
