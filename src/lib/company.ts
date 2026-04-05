/** Company facts and narrative — single source for marketing copy */

export const COMPANY_CONTACT_EMAIL = "info@hybriddot.com" as const;

export const COMPANY_TAGLINE =
  "Building the future with creative, marketing & technology solutions.";

/** Shorter line for compact UI (footer, cards). */
export const COMPANY_TAGLINE_SHORT =
  "Creative, marketing & technology—from Lahore to global markets.";

export const COMPANY_INTRO =
  "HybridDot is a Pakistan-based, globally operating creative, marketing, and technology solutions group built to disrupt industries and scale brands locally and internationally. We help businesses grow smarter through strategy-led creativity, performance-driven marketing, and cutting-edge tech solutions.";

export const COMPANY_AUDIENCE =
  "From startups to enterprise brands, HybridDot partners with businesses looking for innovative digital solutions, measurable growth, and long-term impact.";

/** Single hero paragraph (avoids repeating the same idea twice above the fold). */
export const HERO_BODY =
  "Pakistan-based with global reach—we combine strategy-led creative, performance marketing, and scalable technology for businesses that want measurable growth and long-term impact.";

export const WHAT_WE_DO_SUMMARY =
  "We connect creative, marketing, and technology to deliver end-to-end solutions that drive visibility, engagement, and revenue.";

/** Short line for section intros (homepage services, etc.). */
export const SERVICES_SECTION_LEAD =
  "Three pillars—creative, marketing, and technology—with full detail on our Services page.";

export const COMPANY_FACTS = {
  industry: "Business consulting and services",
  size: "11–50 employees",
  hq: "Lahore, Pakistan",
  founded: "2024",
  addressLine1: "Building no. 93 DHA Raya, Phase-6",
  addressLine2: "Lahore, Pakistan 54000",
} as const;

/** ~155 chars for default meta description */
export const SITE_META_DESCRIPTION =
  "HybridDot is a Pakistan-based, globally operating creative, marketing & technology group. Strategy-led creativity, performance marketing, and scalable tech—from Lahore to international markets.";

export const ABOUT_META_DESCRIPTION =
  "About HybridDot: Lahore headquarters, founded 2024, creative marketing and technology for local and global brands.";

export const SERVICES_META_DESCRIPTION =
  "Creative services, marketing (local & international), and technology solutions—brand, campaigns, web, apps, AI, e-commerce, and cloud—from HybridDot.";

export const KEYWORDS = [
  "HybridDot",
  "Lahore",
  "Pakistan",
  "creative agency",
  "digital marketing",
  "technology solutions",
  "brand strategy",
  "UI UX",
  "performance marketing",
  "Next.js",
  "SaaS",
  "e-commerce",
  "SEO",
  "AI automation",
] as const;

export const SERVICE_PILLARS = {
  creative: {
    title: "Creative services",
    description:
      "Brand identities and content that cut through noise and build real connections.",
    items: [
      "Brand strategy & positioning",
      "Visual identity & logo design",
      "UI/UX design (web & mobile)",
      "Social media content & creatives",
      "Motion graphics & video production",
      "Copywriting & brand messaging",
    ],
  },
  marketing: {
    title: "Marketing solutions (local & international)",
    description:
      "Data-driven, ROI-focused, and built to scale across borders.",
    items: [
      "Digital marketing strategy",
      "Social media marketing & management",
      "Performance marketing (Meta, Google, TikTok ads)",
      "Search engine optimization (SEO)",
      "Influencer & community marketing",
      "Funnel & conversion optimization",
      "Email & automation marketing",
    ],
  },
  technology: {
    title: "Technology solutions",
    description:
      "Future-ready tech that supports growth, automation, and scalability.",
    items: [
      "Custom website development (React, Next.js, WordPress)",
      "Mobile app development (iOS, Android, Flutter)",
      "Web & SaaS application development",
      "AI-powered solutions & automation",
      "E-commerce development (Shopify, custom stores)",
      "CRM & ERP systems",
      "Cloud solutions & API integrations",
      "Cybersecurity & performance optimization",
    ],
  },
} as const;
