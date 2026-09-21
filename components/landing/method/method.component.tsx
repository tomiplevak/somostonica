"use client";

import type { FC } from "react";
import { CheckCircle2 } from "lucide-react";
import type { MethodProps } from "./method.types";
import { methodVariants } from "./method.variants";
import { defaultPillars, useMethod } from "./use-method";

export const Method: FC<MethodProps> = ({ pillars = defaultPillars }) => {
  const { activePillarId, setActivePillarId, activePillar } = useMethod(pillars);

  return (
    <section id="metodo" className={methodVariants.section()}>
      {/* Header with Title and Interactive Switcher */}
      <div className={methodVariants.header()}>
        <div>
          <span className={methodVariants.eyebrow()}>Método de Trabajo</span>
          <h2 className={methodVariants.title()}>Cómo ideamos cada universo</h2>
        </div>

        {/* Pillar Switcher Tabs */}
        <div className={methodVariants.tabsNav()}>
          {pillars.map((pillar) => (
            <button
              key={pillar.id}
              type="button"
              onClick={() => setActivePillarId(pillar.id)}
              className={methodVariants.tabButton({
                active: activePillarId === pillar.id,
              })}
            >
              <span className="font-mono">{pillar.number}</span>
              <span>{pillar.title.split("&")[0].trim()}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 2-Column Presentation of the Active Pillar */}
      <div className={methodVariants.contentGrid()}>
        {/* Left Column: Description & Deliverables */}
        <div className={methodVariants.infoCard()}>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#f35b04]">
                {activePillar.number}
              </span>
              <span className="h-px flex-1 bg-white/10" />
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
                Pilar Fundamental
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              {activePillar.title}
            </h3>
            <p className="text-xs uppercase tracking-widest text-[#f35b04] font-mono mb-6">
              {activePillar.subtitle}
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              {activePillar.description}
            </p>
          </div>

          <div className="border-t border-white/5 pt-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
              Resultados y entregables
            </h4>
            <ul className="space-y-3">
              {activePillar.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-[#f35b04] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Editorial Atmosphere Preview */}
        <div className={methodVariants.previewCard()}>
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              Atmósfera del proceso
            </span>
            <span className="h-2 w-2 rounded-full bg-[#f35b04] shadow-[0_0_8px_#f35b04]" />
          </div>

          <div className="my-auto py-10">
            <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl text-white font-medium italic leading-relaxed">
              {activePillar.quote}
            </blockquote>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-500 font-mono">
            <span>Fase activa: {activePillar.number}/03</span>
            <span className="text-[#f35b04]">Somos Tónica Studio</span>
          </div>
        </div>
      </div>
    </section>
  );
};

