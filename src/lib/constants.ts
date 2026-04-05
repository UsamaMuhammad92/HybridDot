import { COMPANY_AUDIENCE, COMPANY_INTRO } from "@/lib/company";

export const SITE_NAME = "HybridDot";
export const SITE_DESCRIPTION = `${COMPANY_INTRO} ${COMPANY_AUDIENCE}`;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
] as const;
