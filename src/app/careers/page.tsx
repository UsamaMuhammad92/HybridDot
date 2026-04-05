import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/PageIntro";
import { COMPANY_CONTACT_EMAIL } from "@/lib/company";
import { sectionPage, surface } from "@/lib/sectionTheme";
import { cn } from "@/utils/cn";

export const metadata = {
  title: "Careers",
  description: "Careers at HybridDot in Lahore—creative, marketing, and technology roles.",
};

export default function CareersPage() {
  const mailto = `mailto:${COMPANY_CONTACT_EMAIL}?subject=${encodeURIComponent("Careers — HybridDot")}`;

  return (
    <section className={cn(sectionPage, surface.warm)}>
      <Container size="lg" className="max-w-3xl">
        <PageIntro
          eyebrow="Careers"
          title="Careers"
          description="When we have open roles, we list them on this page. We also welcome speculative applications from strategists, designers, marketers, and engineers who want to build with a Lahore-based team that works globally."
        />
        <p className="mt-10 text-sm leading-relaxed text-neutral-600">
          To introduce yourself, email{" "}
          <a
            href={mailto}
            className="font-medium text-neutral-950 underline-offset-4 hover:text-[#C1121F] hover:underline"
          >
            {COMPANY_CONTACT_EMAIL}
          </a>{" "}
          with your portfolio or CV and the kind of role you are looking for. Learn more on our{" "}
          <Link
            href="/about"
            className="font-medium text-neutral-950 underline-offset-4 hover:text-[#C1121F] hover:underline"
          >
            About
          </Link>{" "}
          page.
        </p>
      </Container>
    </section>
  );
}
