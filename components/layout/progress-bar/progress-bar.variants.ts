import { cva } from "class-variance-authority";

export const progressBarVariants = cva(
  "fixed top-0 left-0 right-0 z-50 h-[3px] bg-gradient-to-r from-[#f35b04] via-[#ff792e] to-[#ffaa75] origin-left transition-transform duration-75 ease-out shadow-[0_0_12px_rgba(243,91,4,0.7)]"
);
