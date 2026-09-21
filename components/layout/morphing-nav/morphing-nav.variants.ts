import { cva } from "class-variance-authority";

export const morphingNavVariants = {
  wrapper: cva(
    "fixed top-4 left-0 right-0 z-40 flex justify-center px-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
  ),
  container: cva(
    "pointer-events-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
    {
      variants: {
        scrolled: {
          false:
            "w-full max-w-6xl h-16 px-6 bg-transparent border-b border-white/5",
          true:
            "w-auto max-w-xl h-13 px-4 rounded-full glass-dock shadow-2xl shadow-black/60 translate-y-1",
        },
      },
      defaultVariants: {
        scrolled: false,
      },
    }
  ),
  logo: cva("flex items-center gap-2.5 font-bold tracking-tight text-white transition-all duration-300", {
    variants: {
      scrolled: {
        false: "text-base sm:text-lg",
        true: "text-sm",
      },
    },
    defaultVariants: {
      scrolled: false,
    },
  }),
  linksContainer: cva("flex items-center transition-all duration-300", {
    variants: {
      scrolled: {
        false: "gap-8 text-sm",
        true: "gap-4 text-xs mx-3",
      },
    },
    defaultVariants: {
      scrolled: false,
    },
  }),
  link: cva(
    "text-slate-400 hover:text-white transition-colors duration-200 tracking-wide font-medium"
  ),
  ctaButton: cva(
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300",
    {
      variants: {
        scrolled: {
          false: "h-9 px-4 text-xs bg-[#f35b04] text-white hover:bg-[#ff701e]",
          true: "h-8 px-3 text-xs bg-[#f35b04] text-white hover:bg-[#ff701e]",
        },
      },
      defaultVariants: {
        scrolled: false,
      },
    }
  ),
};
