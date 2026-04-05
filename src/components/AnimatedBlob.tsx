/**
 * Static ambient mesh (no Framer Motion). Avoids motion-related hydration issues in the hero.
 */
export function AnimatedBlob() {
  return (
    <div className="relative h-full min-h-[260px] w-full" aria-hidden>
      <div
        className="absolute inset-0 -z-[2] opacity-[0.92] blur-[90px] sm:blur-[110px] lg:blur-[130px]"
        style={{
          background:
            "radial-gradient(ellipse 85% 70% at 58% 48%, rgba(228, 210, 198, 0.95), transparent 72%)",
        }}
      />
      <div
        className="absolute -z-[1] h-[min(100%,420px)] w-[min(100%,420px)] max-h-[420px] max-w-[420px] rounded-full opacity-[0.62] blur-[72px] sm:h-[460px] sm:w-[460px] sm:max-h-none sm:max-w-none sm:blur-[88px] lg:h-[min(100%,520px)] lg:w-[min(100%,520px)] lg:opacity-[0.68] lg:blur-[100px]"
        style={{
          background:
            "radial-gradient(circle at 40% 38%, #f0e0d6, #e8cfc0 42%, #dcc9bc 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-48%, -52%)",
        }}
      />
      <div
        className="absolute -z-[1] h-[200px] w-[200px] rounded-full opacity-[0.4] blur-[64px] sm:h-[280px] sm:w-[280px] sm:blur-[80px] lg:h-[340px] lg:w-[340px] lg:blur-[96px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #fceee8, #edc8be 55%, transparent 70%)",
          top: "18%",
          right: "8%",
        }}
      />
    </div>
  );
}
