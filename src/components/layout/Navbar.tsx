"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { BrandLogo } from "@/components/BrandLogo";
import { cn } from "@/utils/cn";

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/careers", label: "Careers" },
] as const;

const CTA_HREF = "/contact";
const CTA_LABEL = "Start a Project";

const mobileMenuBackdrop = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
  exit: { opacity: 0 },
};

const mobileMenuPanel = {
  closed: { opacity: 0, y: "-100%" },
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, damping: 28, stiffness: 180 },
  },
  exit: {
    opacity: 0,
    y: "-100%",
    transition: { duration: 0.25 },
  },
};

const mobileLinkItem = {
  closed: { opacity: 0, x: -16 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.04 * i, duration: 0.25 },
  }),
};

/**
 * Desktop nav link: group-hover expands underline from w-0 → w-full (see span below).
 */
function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = isActivePath(pathname, href);

  return (
    <li>
      <Link
        href={href}
        className={cn(
          "group relative inline-block py-2 text-[0.8125rem] font-medium tracking-[0.04em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-offset-2 rounded-sm",
          active ? "text-[#C1121F]" : "text-neutral-600 hover:text-neutral-950"
        )}
      >
        <span
          className={cn(
            "absolute left-0 -bottom-1 h-px bg-[#C1121F] transition-all duration-300",
            active ? "w-full" : "w-0 group-hover:w-full"
          )}
          aria-hidden
        />
        <span className="relative">{label}</span>
      </Link>
    </li>
  );
}

/**
 * CTA button: primary red, hover scale + shadow.
 */
function NavCtaButton() {
  return (
    <Link
      href={CTA_HREF}
      className="relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-[#C1121F] px-5 py-2.5 text-sm font-medium text-white shadow-[0_4px_16px_-2px_rgba(193,18,31,0.35)] before:pointer-events-none before:absolute before:inset-0 before:rounded-xl before:shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] before:content-[''] transition-[background-color,box-shadow] duration-200 hover:bg-[#9e0f1a] hover:shadow-[0_8px_28px_-6px_rgba(193,18,31,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-offset-2"
    >
      {CTA_LABEL}
    </Link>
  );
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      role="banner"
      className={cn(
        "sticky top-0 z-50 w-full border-b border-neutral-900/[0.05] bg-white/[0.72] shadow-[0_1px_0_rgba(255,255,255,0.7)_inset] backdrop-blur-2xl backdrop-saturate-150 supports-[backdrop-filter]:bg-white/[0.62]"
      )}
    >
      {/* Centered container: max-w-7xl, h-16, logo left | nav center | CTA right */}
      <div className="mx-auto max-w-7xl px-6">
        <nav
          className="relative flex h-[4.5rem] items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Left: Logo */}
          <div className="flex flex-shrink-0 items-center">
            <BrandLogo className="opacity-95 transition-opacity hover:opacity-100" />
          </div>

          {/* Center: Nav links */}
          <ul
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex md:items-center md:space-x-8"
            role="list"
          >
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </ul>

          {/* Right: CTA (desktop) + Hamburger (mobile) */}
          <div className="flex flex-shrink-0 items-center gap-2">
            <div className="hidden md:block">
              <NavCtaButton />
            </div>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-black transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] md:hidden"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">
                {mobileMenuOpen ? "Close menu" : "Open menu"}
              </span>
              <motion.svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
                initial={false}
                animate={mobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile: full-screen slide-down menu with Framer Motion */}
      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <>
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
              initial="closed"
              animate="open"
              exit="exit"
              variants={mobileMenuBackdrop}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial="closed"
              animate="open"
              exit="exit"
              variants={mobileMenuPanel}
              className="fixed inset-x-0 top-0 z-50 flex flex-col gap-8 overflow-y-auto bg-white px-6 pt-24 pb-12 shadow-xl md:hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-col gap-1" role="list">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    variants={mobileLinkItem}
                    initial="closed"
                    animate="open"
                    custom={i}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-lg py-3 px-4 text-lg font-medium transition-colors duration-200 hover:bg-gray-100 hover:text-[#C1121F]",
                        isActivePath(pathname, link.href)
                          ? "text-[#C1121F]"
                          : "text-gray-900"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                variants={mobileLinkItem}
                initial="closed"
                animate="open"
                custom={NAV_LINKS.length}
                className="pt-4"
              >
                <Link
                  href={CTA_HREF}
                  className="relative block w-full overflow-hidden rounded-xl bg-[#C1121F] py-4 text-center text-base font-medium text-white shadow-[0_4px_20px_-4px_rgba(193,18,31,0.35)] before:pointer-events-none before:absolute before:inset-0 before:shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] before:content-[''] transition-[background-color,box-shadow] duration-200 hover:bg-[#9e0f1a] hover:shadow-[0_12px_36px_-10px_rgba(193,18,31,0.4)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {CTA_LABEL}
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
