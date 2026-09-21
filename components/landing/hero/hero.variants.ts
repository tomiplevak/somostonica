import { cva } from "class-variance-authority";

export const heroVariants = {
  section: cva(
    "relative flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden px-6 py-24 text-center"
  ),
  backdropGlow: cva(
    "pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#f35b04]/15 blur-[120px]"
  ),
  title: cva(
    "mx-auto max-w-4xl text-balance text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl leading-[1.08]"
  ),
  description: cva(
    "mx-auto mt-6 max-w-2xl text-balance text-base sm:text-lg text-slate-400 font-normal leading-relaxed"
  ),
  actionsGroup: cva(
    "mt-10 flex flex-wrap items-center justify-center gap-4"
  ),
};

