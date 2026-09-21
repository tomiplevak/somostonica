"use client";

import type { FC } from "react";
import type { MorphingNavProps } from "./morphing-nav.types";
import { morphingNavVariants } from "./morphing-nav.variants";
import { useNavScroll } from "./use-nav-scroll";

const defaultItems = [
  { label: "Manifiesto", href: "#manifiesto" },
  { label: "Método", href: "#metodo" },
  { label: "Trabajos", href: "#casos" },
];

export const MorphingNav: FC<MorphingNavProps> = ({
  items = defaultItems,
  ctaLabel = "Hablemos",
  ctaHref = "#contacto",
}) => {
  const { isScrolled, activeSection } = useNavScroll(60);

  return (
    <header className={morphingNavVariants.wrapper()}>
      <nav
        aria-label="Navegación principal"
        className={morphingNavVariants.container({ scrolled: isScrolled })}
      >
        <a href="#" className={morphingNavVariants.logo({ scrolled: isScrolled })}>
          <span className="h-2 w-2 rounded-full bg-[#f35b04] shadow-[0_0_8px_#f35b04]" />
          <span className="font-display tracking-tight">
            {isScrolled ? "tónica" : "somos tónica"}
          </span>
        </a>

        <div className={morphingNavVariants.linksContainer({ scrolled: isScrolled })}>
          {items.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={`${morphingNavVariants.link()} ${
                  isActive ? "text-white font-semibold" : ""
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <a
          href={ctaHref}
          className={morphingNavVariants.ctaButton({ scrolled: isScrolled })}
        >
          <span>{ctaLabel}</span>
        </a>
      </nav>
    </header>
  );
};
