import { bodyLead, displayHeading, uiEyebrow } from "@/lib/sectionTheme";
import { cn } from "@/utils/cn";

/**
 * Static section heading (no Framer Motion) for reliable visibility in all sections.
 */
export function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  className,
  align = "center",
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <header
      className={cn(
        "w-full max-w-2xl pt-1 md:pt-2",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left",
        className
      )}
    >
      {eyebrow ? <p className={cn(uiEyebrow, "mb-4")}>{eyebrow}</p> : null}
      <h2 id={id} className={displayHeading}>
        {title}
      </h2>
      <p className={cn("mt-3 max-w-2xl text-pretty", bodyLead, align === "center" && "mx-auto")}>
        {subtitle}
      </p>
    </header>
  );
}
