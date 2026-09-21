import { cva } from "class-variance-authority";

export const manifestoVariants = {
  section: cva(
    "relative py-32 px-6 max-w-5xl mx-auto border-t border-white/5"
  ),
  eyebrow: cva(
    "text-xs font-mono tracking-[0.25em] text-[#f35b04] uppercase mb-8 block"
  ),
  statement: cva(
    "font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] max-w-4xl"
  ),
  grid: cva(
    "mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-400 text-base sm:text-lg leading-relaxed pt-12 border-t border-white/5"
  ),
};
