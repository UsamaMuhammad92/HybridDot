import { Cpu, Palette, TrendingUp } from "lucide-react";
import { AnimatedBlob } from "@/components/AnimatedBlob";

/**
 * Hero art: layered mesh + visible structure + a clear focal panel (the right column
 * was only ultra-subtle blurs before, so it read as “empty”).
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[min(100%,520px)] select-none">
      <div
        className="relative min-h-[min(72vw,380px)] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#e8dfd6] via-[#efeae4] to-[#e0d6cc] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.18),0_0_0_1px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.65)] sm:min-h-[420px] lg:min-h-[min(52vh,520px)]"
        aria-hidden
      >
        {/* Brand-tint wash so the panel doesn’t match the page background 1:1 */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_100%_100%,rgba(193,18,31,0.09),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_0%_0%,rgba(255,255,255,0.65),transparent_50%)]" />

        <div className="absolute inset-0 opacity-[0.95]">
          <AnimatedBlob />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(255,255,255,0.45),transparent)]" />

        {/* Slightly stronger orbit lines */}
        <svg
          className="pointer-events-none absolute left-1/2 top-1/2 h-[108%] w-[108%] -translate-x-1/2 -translate-y-1/2 text-neutral-900/[0.14]"
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden
        >
          <circle cx="200" cy="200" r="158" stroke="currentColor" strokeWidth="0.85" />
          <circle cx="200" cy="200" r="118" stroke="currentColor" strokeWidth="0.65" />
          <path
            d="M 200 42 A 158 158 0 0 1 358 200"
            stroke="currentColor"
            strokeWidth="1.15"
            strokeLinecap="round"
            className="text-[#C1121F]/25"
          />
        </svg>

        {/* Focal content — reads as “filled” without needing a stock photo */}
        <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
          <div className="w-full max-w-[280px] rounded-2xl border border-white/70 bg-white/55 px-6 py-7 shadow-[0_24px_56px_-28px_rgba(0,0,0,0.14),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl sm:max-w-[300px] sm:px-7 sm:py-8">
            <p className="text-center font-heading text-[10px] font-semibold uppercase tracking-[0.28em] text-neutral-500">
              End-to-end
            </p>
            <div className="mt-5 flex items-center justify-center gap-7 text-[#C1121F]">
              <Palette className="h-7 w-7 shrink-0" strokeWidth={1.5} aria-hidden />
              <TrendingUp className="h-7 w-7 shrink-0" strokeWidth={1.5} aria-hidden />
              <Cpu className="h-7 w-7 shrink-0" strokeWidth={1.5} aria-hidden />
            </div>
            <p className="mt-5 text-center text-[11px] font-medium leading-snug tracking-wide text-neutral-700">
              Creative · Marketing · Technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
