import { cva } from "class-variance-authority";

export const showcaseVariants = {
  section: cva(
    "relative py-20 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/5"
  ),
  header: cva(
    "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-16"
  ),
  eyebrow: cva(
    "text-xs font-mono tracking-[0.25em] text-[#f35b04] uppercase mb-3 block"
  ),
  title: cva(
    "font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
  ),
  authorTag: cva(
    "flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit"
  ),
  slidesGrid: cva(
    "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
  ),
  card: cva(
    "relative w-full max-w-[360px] md:max-w-none mx-auto aspect-[4/5] rounded-3xl bg-[#121417] border border-white/10 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:scale-[1.01] shadow-xl shadow-black/50"
  ),
};
