import Link from "next/link";
import type { ReactNode } from "react";
import { Linkedin, Twitter } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import {
  COMPANY_CONTACT_EMAIL,
  COMPANY_FACTS,
  COMPANY_TAGLINE_SHORT,
} from "@/lib/company";
import { cn } from "@/utils/cn";

/** Update all footer copy, routes, and external URLs here. */
export const FOOTER_CONTENT = {
  brand: {
    name: "HybridDot",
    description: COMPANY_TAGLINE_SHORT,
  },
  navigation: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/insights", label: "Insights" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ] as const,
  services: [{ href: "/services", label: "Creative, marketing & technology" }] as const,
  contact: {
    email: COMPANY_CONTACT_EMAIL,
    addressLine1: COMPANY_FACTS.addressLine1,
    addressLine2: COMPANY_FACTS.addressLine2,
  },
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/hybriddot", icon: "linkedin" as const },
    { label: "X", href: "https://x.com/hybriddot", icon: "twitter" as const },
  ] as const,
  legal: "© 2026 HybridDot. All rights reserved.",
} as const;

const linkClass =
  "text-[12px] font-medium text-stone-400 transition-colors hover:text-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0E] rounded-sm";

/** Matches the cream / bone tone of `hybriddot-logo-footer.png` on the dark footer. */
const footerColumnHeadingClass =
  "mb-2.5 font-heading text-[8px] font-semibold uppercase tracking-[0.22em] text-[#F1ECE4]";

function FooterLinkList({
  links,
}: {
  links: readonly { href: string; label: string }[];
}) {
  return (
    <ul className="flex flex-col gap-2" role="list">
      {links.map((item) => (
        <li key={`${item.href}-${item.label}`}>
          <Link href={item.href} className={linkClass}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Col({
  title,
  children,
  className,
  titleClassName,
}: {
  title: string;
  children: ReactNode;
  className?: string;
  /** Defaults to logo-matched cream (`footerColumnHeadingClass`). */
  titleClassName?: string;
}) {
  return (
    <div className={cn("min-w-0", className)}>
      <p className={titleClassName ?? footerColumnHeadingClass}>{title}</p>
      {children}
    </div>
  );
}

const socialIconMap = {
  linkedin: Linkedin,
  twitter: Twitter,
} as const;

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#0C0C0E] px-5 py-8 text-stone-400 sm:px-6 md:py-9 lg:py-8"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_100%_110%,rgba(193,18,31,0.22),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_0%_0%,rgba(193,18,31,0.08),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,transparent_35%,rgba(0,0,0,0.4)_100%)]"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center" aria-hidden>
        <div className="h-px w-[min(100%,28rem)] bg-gradient-to-r from-transparent via-[#C1121F]/70 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 lg:grid-cols-[minmax(12rem,1.35fr)_minmax(5rem,0.75fr)_minmax(6rem,0.9fr)_minmax(8rem,1fr)] lg:gap-x-8 lg:gap-y-0">
          <div className="col-span-2 min-w-0 lg:col-span-1">
            <BrandLogo variant="footer" />
            <p className="mt-3 max-w-[16rem] text-[11px] leading-relaxed text-stone-500">
              {FOOTER_CONTENT.brand.description}
            </p>
          </div>

          <div>
            <Col title="Navigate">
              <FooterLinkList links={FOOTER_CONTENT.navigation} />
            </Col>
          </div>

          <div>
            <Col title="Services">
              <FooterLinkList links={FOOTER_CONTENT.services} />
            </Col>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <Col title="Contact">
              <a
                href={`mailto:${FOOTER_CONTENT.contact.email}`}
                className="block text-[12px] font-medium text-stone-200 transition-colors hover:text-white"
              >
                {FOOTER_CONTENT.contact.email}
              </a>
              <p className="mt-1.5 text-[12px] leading-relaxed text-stone-500">
                {FOOTER_CONTENT.contact.addressLine1}
                <br />
                {FOOTER_CONTENT.contact.addressLine2}
              </p>
              <ul className="mt-3 flex gap-2" role="list">
                {FOOTER_CONTENT.social.map((s) => {
                  const Icon = socialIconMap[s.icon];
                  return (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-8 w-8 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.04] text-stone-400 transition-colors hover:border-[#C1121F]/40 hover:bg-[#C1121F]/10 hover:text-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F]/45"
                        aria-label={s.label}
                      >
                        <Icon className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Col>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 text-[11px] text-stone-600 sm:mt-7 sm:flex-row sm:pt-5">
          <p>{FOOTER_CONTENT.legal}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:justify-end">
            <Link
              href="/contact"
              className="font-medium text-stone-400 transition-colors hover:text-[#C1121F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0E] rounded-sm"
            >
              Start a project
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
