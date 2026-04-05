import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility for merging Tailwind CSS classes with clsx.
 * Use for conditional and composed classNames.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
