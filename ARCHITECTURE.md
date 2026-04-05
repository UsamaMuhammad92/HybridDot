# HybridDot – Project Architecture

Production-ready structure for the HybridDot agency website (Next.js 14, TypeScript, Tailwind, Framer Motion, React Three Fiber–ready).

---

## Folder structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx           # Root layout (fonts, metadata, Navbar/Footer)
│   ├── page.tsx             # Home
│   ├── globals.css          # Global styles + design tokens
│   ├── services/page.tsx
│   ├── work/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx  # Case study detail
│   ├── about/page.tsx
│   ├── insights/page.tsx
│   ├── careers/page.tsx
│   └── contact/page.tsx
│
├── components/
│   ├── ui/                  # Reusable UI primitives
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   ├── SectionWrapper.tsx
│   │   └── index.ts
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   └── three/               # R3F / 3D
│       ├── SceneCanvas.tsx  # Canvas wrapper (client, dynamic import)
│       └── index.ts
│
├── sections/                # Page-level sections (by route/feature)
│   └── home/
│       ├── Hero.tsx
│       ├── ServicesOverview.tsx
│       ├── CaseStudiesPreview.tsx
│       ├── AboutPreview.tsx
│       ├── Testimonials.tsx
│       ├── CTA.tsx
│       └── index.ts
│
├── animations/              # Framer Motion
│   ├── variants.ts          # fadeIn, fadeInUp, stagger, etc.
│   └── index.ts
│
├── lib/                     # Shared config and data
│   ├── constants.ts         # SITE_NAME, NAV_LINKS, etc.
│   └── index.ts
│
├── hooks/                   # Custom React hooks
│   ├── useMediaQuery.ts
│   └── index.ts
│
├── styles/                  # Extra CSS (e.g. modules, tokens)
│   └── README.md
│
└── utils/                   # Pure helpers
    ├── cn.ts                # className merge (clsx + tailwind-merge)
    └── index.ts

public/
└── assets/                  # Static assets (images, icons, fonts)
    └── README.md
```

---

## Key files

| File | Purpose |
|------|--------|
| **`app/layout.tsx`** | Root layout: Space Grotesk + Inter, metadata, `<Navbar />`, `<main>`, `<Footer />`. |
| **`app/globals.css`** | Tailwind layers; CSS variables for colors; base body/heading fonts. |
| **`tailwind.config.ts`** | Design system: `primary` (#C1121F), `black`, `white`, `gray.light`, `font-heading` (Space Grotesk), `font-body` (Inter). Content paths include `components`, `sections`, `app`. |
| **`components/ui/Container.tsx`** | Max-width + horizontal padding; sizes: `sm`, `md`, `lg`, `full`. |
| **`components/ui/SectionWrapper.tsx`** | Section spacing (`py-16`/`py-24`), optional Framer Motion fade-in-up, `id` / `aria-label`. Client component (`"use client"`). |
| **`components/ui/Button.tsx`** | Variants: primary, secondary, outline, ghost, link. Sizes: sm, md, lg. Supports `href` (renders as Link) or button with motion. |
| **`components/layout/Navbar.tsx`** | Sticky header, desktop nav, mobile menu (Framer Motion), “Get in touch” CTA. |
| **`components/layout/Footer.tsx`** | Logo, tagline, Company/Explore links, copyright. |
| **`components/three/SceneCanvas.tsx`** | R3F `Canvas` via `next/dynamic` with `ssr: false`. Use for 3D scenes; wrap R3F children in `Suspense` if using loaders. |
| **`animations/variants.ts`** | Shared motion variants: `fadeIn`, `fadeInUp`, `fadeInDown`, `staggerContainer`, `staggerItem`. |
| **`lib/constants.ts`** | `SITE_NAME`, `SITE_DESCRIPTION`, `NAV_LINKS` for reuse. |
| **`utils/cn.ts`** | `cn(...)` for merging Tailwind classes (clsx + tailwind-merge). |

---

## Pages

- **Home** (`/`) – Hero, Services overview, Case studies preview, About preview, Testimonials, CTA.
- **Services** (`/services`), **Work** (`/work`), **About** (`/about`), **Insights** (`/insights`), **Careers** (`/careers`), **Contact** (`/contact`) – Placeholder content and metadata; use `Container` + `SectionWrapper` for layout.
- **Case study** (`/work/[slug]`) – Dynamic route; placeholder for single case study.

---

## Design system (Tailwind)

- **Colors:** `primary` / `primary-red` #C1121F, `black` #111111, `white` #FFFFFF, `gray-light` #F5F5F5.
- **Fonts:** `font-heading` → Space Grotesk, `font-body` → Inter (via `next/font/google` in layout).

---

## Adding 3D (React Three Fiber)

1. Use `SceneCanvas` from `@/components/three`.
2. Put 3D content inside it; use `Suspense` for any `useLoader`/async resources.
3. Prefer client-only usage; `SceneCanvas` already uses dynamic import with `ssr: false`.

Example:

```tsx
import { SceneCanvas } from "@/components/three";

<SceneCanvas className="h-[400px]">
  <mesh>...</mesh>
</SceneCanvas>
```

---

## Conventions

- **Reusable UI** in `components/ui`; **layout** in `components/layout`; **page sections** in `sections/<route>`.
- **Client components** only where needed (motion, R3F, hooks); keep pages as Server Components by default.
- **SEO:** Metadata per route; semantic HTML (`<main>`, `<section>`, `<nav>`, `<footer>`, headings).
- **A11y:** Focus states, `aria-label` where useful, semantic structure.
