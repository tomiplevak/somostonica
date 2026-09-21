"use client";

import type { FC } from "react";
import { ArrowUpRight } from "lucide-react";
import type { ShowcaseProps } from "./showcase.types";
import { showcaseVariants } from "./showcase.variants";
import { defaultAldanaSlides } from "./use-showcase";

export const Showcase: FC<ShowcaseProps> = ({ slides = defaultAldanaSlides }) => {
  return (
    <section id="casos" className={showcaseVariants.section()}>
      {/* Header */}
      <div className={showcaseVariants.header()}>
        <div>
          <span className={showcaseVariants.eyebrow()}>Trabajo en Producción</span>
          <h2 className={showcaseVariants.title()}>Aldana Lichtenberger</h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Dirección editorial, curaduría de contenido y arquitectura visual de carruseles para una de las voces de referencia en psicología vincular y sexología clínica.
          </p>
        </div>

        <a
          href="https://instagram.com/aldanalichtenberger"
          target="_blank"
          rel="noreferrer noopener"
          className={showcaseVariants.authorTag()}
        >
          <span className="h-2 w-2 rounded-full bg-[#f35b04]" />
          <span className="text-xs font-mono text-slate-300">@aldanalichtenberger</span>
          <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
        </a>
      </div>

      {/* Grid of 4:5 Editorial Pieces */}
      <div className={showcaseVariants.slidesGrid()}>
        {slides.map((slide) => (
          <article key={slide.id} className={showcaseVariants.card()}>
            {/* Top row */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <span className="text-[10px] font-mono tracking-widest text-[#f35b04] uppercase">
                {slide.category}
              </span>
              <span className="text-[10px] font-mono text-slate-500">
                {slide.slideIndex}
              </span>
            </div>

            {/* Middle: Content */}
            <div className="my-auto py-6">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-4">
                {slide.hook}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                {slide.body}
              </p>
            </div>

            {/* Bottom: Signature & Format */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span>Formato 4:5 Editorial</span>
              <span className="text-slate-400">Tónica Studio</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

