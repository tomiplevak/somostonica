import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-wide transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-[#f35b04]/10 text-[#f35b04] border border-[#f35b04]/20",
        surface:
          "bg-white/5 text-slate-300 border border-white/10",
        electric:
          "bg-[#3d5afe]/10 text-[#3d5afe] border border-[#3d5afe]/25",
        outline:
          "border border-slate-700 text-slate-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

