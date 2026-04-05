import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";

/** Nav wordmark — `public/images/hybriddot-logo.png` (427×206). */
export const BRAND_LOGO_PATH = "/images/hybriddot-logo.png";

/** Footer wordmark (light/cream on dark) — `public/images/hybriddot-logo-footer.png` (500×239). */
export const BRAND_LOGO_FOOTER_PATH = "/images/hybriddot-logo-footer.png";

const HEADER_LOGO = { src: BRAND_LOGO_PATH, width: 427, height: 206 } as const;
const FOOTER_LOGO = { src: BRAND_LOGO_FOOTER_PATH, width: 500, height: 239 } as const;

type BrandLogoProps = {
  className?: string;
  /** `header` = nav height; `footer` = slightly larger in footer */
  variant?: "header" | "footer";
};

export function BrandLogo({ className, variant = "header" }: BrandLogoProps) {
  const isFooter = variant === "footer";
  const asset = isFooter ? FOOTER_LOGO : HEADER_LOGO;

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-offset-2",
        isFooter
          ? "focus-visible:ring-[#C1121F]/60 focus-visible:ring-offset-[#0C0C0E]"
          : "focus-visible:ring-offset-white",
        className
      )}
    >
      <Image
        src={asset.src}
        alt="HybridDot"
        width={asset.width}
        height={asset.height}
        className={cn(
          "h-auto w-auto object-contain object-left",
          isFooter
            ? "max-h-11 max-w-[min(100%,280px)] sm:max-h-[3.25rem] sm:max-w-[min(100%,300px)]"
            : "max-h-8 max-w-[min(100%,160px)] sm:max-h-9 sm:max-w-[min(100%,200px)]"
        )}
        sizes={isFooter ? "(max-width: 640px) 260px, 300px" : "(max-width: 640px) 160px, 200px"}
        priority={!isFooter}
      />
    </Link>
  );
}
