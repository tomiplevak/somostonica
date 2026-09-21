import { cva } from "class-variance-authority";

export const progressBarVariants = cva(
  "fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#f35b04] via-[#ff792e] to-[#ffaa75] z-[100] shadow-[0_0_14px_rgba(243,91,4,0.95),0_0_3px_#ffffff] pointer-events-none transition-[width] duration-100 ease-out"
);
