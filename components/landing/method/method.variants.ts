import { cva } from "class-variance-authority";

export const methodVariants = {
  section: cva(
    "relative py-32 px-6 max-w-6xl mx-auto border-t border-white/5"
  ),
  header: cva(
    "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
  ),
  eyebrow: cva(
    "text-xs font-mono tracking-[0.25em] text-[#f35b04] uppercase mb-3 block"
  ),
  title: cva(
    "font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight"
  ),
  tabsNav: cva(
    "flex items-center gap-2 p-1.5 rounded-full bg-white/5 border border-white/10 w-fit"
  ),
  tabButton: cva(
    "px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-2",
    {
      variants: {
        active: {
          true: "bg-[#f35b04] text-white shadow-lg shadow-[#f35b04]/25",
          false: "text-slate-400 hover:text-white hover:bg-white/5",
        },
      },
      defaultVariants: {
        active: false,
      },
    }
  ),
  contentGrid: cva(
    "grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
  ),
  infoCard: cva(
    "lg:col-span-6 rounded-3xl bg-[#121417] border border-white/10 p-8 sm:p-10 flex flex-col justify-between"
  ),
  previewCard: cva(
    "lg:col-span-6 rounded-3xl bg-[#16181d] border border-white/10 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden"
  ),
};
