import { useEffect, type RefObject } from "react";

/**
 * If Framer scroll state never resolves (rare IO/hydration edge cases), force the node visible
 * so we never leave a block stuck at opacity 0.
 */
export function useRevealFallback<T extends HTMLElement>(ref: RefObject<T | null>, delayMs = 700) {
  useEffect(() => {
    const t = window.setTimeout(() => {
      const el = ref.current;
      if (!el) return;
      const o = window.getComputedStyle(el).opacity;
      if (o === "" || Number.parseFloat(o) < 0.15) {
        el.style.opacity = "1";
        el.style.transform = "none";
      }
    }, delayMs);
    return () => window.clearTimeout(t);
  }, [ref, delayMs]);
}
