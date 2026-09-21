import { cva } from "class-variance-authority";

export const contactVariants = {
  section: cva(
    "relative py-24 sm:py-36 px-4 sm:px-6 max-w-4xl mx-auto text-center border-t border-white/5"
  ),
  eyebrow: cva(
    "text-xs font-mono tracking-[0.25em] text-[#f35b04] uppercase mb-4 inline-block"
  ),
  headline: cva(
    "font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-4 sm:mb-6"
  ),
  description: cva(
    "text-slate-400 text-sm sm:text-lg max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10"
  ),
  actions: cva(
    "flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
  ),
  glow: cva(
    "pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-[#f35b04]/10 rounded-full blur-[100px] sm:blur-[140px] -z-10"
  ),
};
