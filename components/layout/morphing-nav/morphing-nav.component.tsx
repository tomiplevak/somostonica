"use client";

import type { FC } from "react";
import { ArrowUpRight, Menu, MessageSquare, X } from "lucide-react";
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
  const { isScrolled, activeSection, isMenuOpen, toggleMenu, closeMenu } =
    useNavScroll(60);

  return (
    <>
      <header className={morphingNavVariants.wrapper()}>
        <nav
          aria-label="Navegación principal"
          className={morphingNavVariants.container({ scrolled: isScrolled })}
        >
          {/* Logo */}
          <a href="#" className={morphingNavVariants.logo({ scrolled: isScrolled })}>
            <span className="h-2 w-2 rounded-full bg-[#f35b04] shadow-[0_0_8px_#f35b04]" />
            <span className="font-display tracking-tight">
              {isScrolled ? "tónica" : "somos tónica"}
            </span>
          </a>

          {/* Desktop Navigation Links (Hidden on Mobile) */}
          <div className={morphingNavVariants.desktopLinks({ scrolled: isScrolled })}>
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

          {/* Actions: CTA Button + Mobile Menu Trigger */}
          <div className={morphingNavVariants.actions()}>
            <a
              href={ctaHref}
              className={morphingNavVariants.ctaButton({ scrolled: isScrolled })}
            >
              <span>{ctaLabel}</span>
            </a>

            <button
              type="button"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
              className={morphingNavVariants.menuButton()}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Full-Screen Mobile Drawer */}
      {isMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#090a0b]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 animate-fadeIn md:hidden"
        >
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#f35b04] shadow-[0_0_8px_#f35b04]" />
              <span className="font-display font-bold text-white text-base tracking-tight">
                somos tónica
              </span>
            </div>
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Cerrar navegación"
              className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center text-slate-300 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Staggered Navigation Links */}
          <nav className="flex flex-col gap-6 my-auto py-8">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#f35b04] uppercase">
              Índice Editorial
            </span>

            {items.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="font-display text-3xl font-bold text-white hover:text-[#f35b04] transition-colors flex items-baseline justify-between group"
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono text-slate-500 group-hover:text-[#f35b04]">
                  0{index + 1}
                </span>
              </a>
            ))}

            <a
              href="#contacto"
              onClick={closeMenu}
              className="font-display text-3xl font-bold text-white hover:text-[#f35b04] transition-colors flex items-baseline justify-between group"
            >
              <span>Contacto</span>
              <span className="text-xs font-mono text-slate-500 group-hover:text-[#f35b04]">
                04
              </span>
            </a>
          </nav>

          {/* Bottom Direct Actions */}
          <div className="border-t border-white/5 pt-6 flex flex-col gap-3">
            <a
              href="#contacto"
              onClick={closeMenu}
              className="w-full h-12 rounded-full bg-[#f35b04] text-white font-medium flex items-center justify-center gap-2 text-sm shadow-lg shadow-[#f35b04]/20"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Iniciar conversación</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <p className="text-[11px] text-center text-slate-500 font-mono mt-2">
              Tónica Studio · Voz & Dirección Editorial
            </p>
          </div>
        </div>
      )}
    </>
  );
};
