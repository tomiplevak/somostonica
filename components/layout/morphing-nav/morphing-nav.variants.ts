import { cva } from "class-variance-authority";

export const morphingNavVariants = {
  wrapper: cva(
    "fixed left-0 right-0 z-40 flex justify-center pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
    {
      variants: {
        scrolled: {
          false: "top-0 px-4 sm:px-6",
          true: "top-5 sm:top-6 px-3 sm:px-4",
        },
      },
      defaultVariants: {
        scrolled: false,
      },
    }
  ),
  container: cva(
    "pointer-events-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
    {
      variants: {
        scrolled: {
          false:
            "w-full max-w-6xl h-16 bg-[#090a0b]/80 backdrop-blur-md border-b border-white/5 px-3 sm:px-6",
          true:
            "w-auto max-w-xl h-12 sm:h-13 px-3.5 sm:px-4 rounded-full glass-dock shadow-2xl shadow-black/80 gap-2.5 sm:gap-3",
        },
      },
      defaultVariants: {
        scrolled: false,
      },
    }
  ),
  logo: cva("flex items-center gap-2 font-bold tracking-tight text-white transition-all duration-300 shrink-0", {
    variants: {
      scrolled: {
        false: "text-sm sm:text-base",
        true: "text-xs sm:text-sm",
      },
    },
    defaultVariants: {
      scrolled: false,
    },
  }),
  desktopLinks: cva("hidden md:flex items-center transition-all duration-300", {
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
  actions: cva("flex items-center gap-2 shrink-0"),
  ctaButton: cva(
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 tracking-wide whitespace-nowrap",
    {
      variants: {
        scrolled: {
          false: "h-8 sm:h-9 px-3.5 sm:px-4 text-xs bg-[#f35b04] text-white hover:bg-[#ff701e]",
          true: "h-7 sm:h-8 px-2.5 sm:px-3 text-[11px] sm:text-xs bg-[#f35b04] text-white hover:bg-[#ff701e]",
        },
      },
      defaultVariants: {
        scrolled: false,
      },
    }
  ),
  menuButton: cva(
    "flex md:hidden items-center justify-center h-8 w-8 rounded-full border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none"
  ),
};
