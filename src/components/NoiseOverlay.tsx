/**
 * Subtle grain texture overlay using a small SVG (feTurbulence) as CSS background.
 * Very low opacity (~0.05) so it doesn't distract. Use on a relative parent with
 * this component absolutely positioned (e.g. absolute inset-0).
 * Lightweight: no image network request, no canvas; pure CSS + inline data URI.
 */
export function NoiseOverlay() {
  const noiseDataUri =
    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage: noiseDataUri,
        backgroundRepeat: "repeat",
      }}
      aria-hidden
    />
  );
}
