import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/PageIntro";
import { sectionPage, surface } from "@/lib/sectionTheme";
import { cn } from "@/utils/cn";

/** No published case-study URLs yet — any `/work/...` path 404s until slugs are listed here. */
export const dynamicParams = false;

export function generateStaticParams() {
  return [] as { slug: string }[];
}

function slugToTitle(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const title = slugToTitle(params.slug);
  return {
    title,
    description: `Case study: ${title} — creative, marketing, and technology work by HybridDot.`,
  };
}

export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  const title = slugToTitle(params.slug);

  return (
    <section className={cn(sectionPage, surface.warm, "min-h-[40vh]")}>
      <Container size="lg" className="max-w-3xl">
        <PageIntro
          eyebrow="Work"
          title={title}
          description="How we partnered on strategy, execution, and outcomes—creative, marketing, and technology in one engagement. Explore Services for our full capabilities, or contact us to talk about a similar project."
        />
      </Container>
    </section>
  );
}
