import { cva } from "class-variance-authority";

export const manifestoVariants = {
  section: cva(
    "relative py-20 sm:py-32 px-4 sm:px-6 max-w-5xl mx-auto border-t border-white/5"
  ),
  eyebrow: cva(
    "text-xs font-mono tracking-[0.25em] text-[#f35b04] uppercase mb-6 sm:mb-8 block"
  ),
  statement: cva(
    "font-display text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] sm:leading-[1.08] max-w-4xl"
  ),
  grid: cva(
    "mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-slate-400 text-sm sm:text-lg leading-relaxed pt-8 sm:pt-12 border-t border-white/5"
  ),
};
