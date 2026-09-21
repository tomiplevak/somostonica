import { cva } from "class-variance-authority";

export const heroVariants = {
  section: cva(
    "relative min-h-[92vh] w-full flex flex-col justify-center overflow-hidden px-6 pt-32 pb-20 max-w-6xl mx-auto"
  ),
  grid: cva(
    "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
  ),
  leftCol: cva(
    "lg:col-span-7 flex flex-col items-start text-left z-10"
  ),
  rightCol: cva(
    "lg:col-span-5 flex justify-center lg:justify-end z-10 perspective-1000"
  ),
  eyebrow: cva(
    "inline-flex items-center gap-2 mb-6"
  ),
  headline: cva(
    "font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.04]"
  ),
  subheadline: cva(
    "mt-6 text-base sm:text-lg text-slate-400 max-w-xl font-normal leading-relaxed"
  ),
  actions: cva(
    "mt-8 flex flex-wrap items-center gap-4"
  ),
  cardPreview: cva(
    "relative w-full max-w-[320px] aspect-[4/5] rounded-3xl bg-[#121417] border border-white/10 p-7 shadow-2xl shadow-black/80 flex flex-col justify-between transition-transform duration-500 hover:rotate-0 rotate-1 lg:rotate-2 hover:scale-[1.02]"
  ),
  glowBackdrop: cva(
    "pointer-events-none absolute top-1/4 -left-20 w-[480px] h-[480px] bg-[#f35b04]/10 rounded-full blur-[140px] -z-10"
  ),
};
