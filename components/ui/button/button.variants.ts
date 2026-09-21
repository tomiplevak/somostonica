import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-[#f35b04] text-white hover:bg-[#ff6912] shadow-lg shadow-[#f35b04]/20 focus-visible:ring-[#f35b04]",
        secondary:
          "bg-[#1c1f23] text-slate-100 border border-white/10 hover:bg-[#252a30] hover:border-white/20 focus-visible:ring-slate-400",
        outline:
          "border border-white/20 text-white hover:bg-white/5 focus-visible:ring-white/50",
        ghost:
          "text-slate-300 hover:text-white hover:bg-white/5 focus-visible:ring-slate-400",
      },
      size: {
        sm: "h-9 px-4 text-xs tracking-wide",
        md: "h-11 px-6 text-sm tracking-wide",
        lg: "h-13 px-8 text-base tracking-wide font-semibold",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

