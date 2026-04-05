import { bodyLead, displayHeading, hairline, uiEyebrow } from "@/lib/sectionTheme";
import { cn } from "@/utils/cn";

/**
 * Static page intro (no Framer Motion) so titles and leads always render after navigation.
 */
export function PageIntro({
  title,
  description,
  eyebrow,
  className,
}: {
  title: string;
  description: string;
  eyebrow?: string;
  className?: string;
}) {
  return (
    <header className={cn("max-w-3xl pt-1 md:pt-2", className)}>
      <div className={cn(hairline, "mb-6")} aria-hidden />
      {eyebrow ? <p className={cn(uiEyebrow, "mb-1")}>{eyebrow}</p> : null}
      <h1
        className={cn(
          displayHeading,
          "text-[2.125rem] md:text-[2.5rem] lg:text-[2.75rem]",
          eyebrow ? "mt-2" : "mt-0"
        )}
      >
        {title}
      </h1>
      <p className={cn("mt-6 max-w-2xl text-pretty", bodyLead)}>{description}</p>
    </header>
  );
}
