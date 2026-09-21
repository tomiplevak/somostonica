import type { FC } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { HeroProps } from "./hero.types";
import { heroVariants } from "./hero.variants";

export const Hero: FC<HeroProps> = ({
  badgeLabel = "Estudio de Comunicación & Diseño Editorial",
  headline = "Marcas con pulso propio. Comunicación que se lee de verdad.",
  subheadline = "Dejamos atrás el ruido algorítmico y las plantillas vacías. En Tónica ideamos la voz, el diseño editorial y la estrategia para marcas que buscan perdurar en la mente de las personas.",
  ctaPrimaryLabel = "Iniciar conversación",
  ctaSecondaryLabel = "Explorar casos",
}) => {
  return (
    <section className={heroVariants.section()}>
      <div className={heroVariants.glowBackdrop()} />

      <div className={heroVariants.grid()}>
        {/* Left Column: Typography & Intent */}
        <div className={heroVariants.leftCol()}>
          <div className={heroVariants.eyebrow()}>
            <Badge variant="default" className="text-xs px-3.5 py-1">
              <Sparkles className="h-3 w-3 text-[#f35b04]" />
              <span>{badgeLabel}</span>
            </Badge>
          </div>

          <h1 className={heroVariants.headline()}>
            <span>Marcas con pulso propio.</span>
            <br />
            <span className="bg-gradient-to-r from-[#f35b04] via-[#ff7c33] to-[#ffd1ba] bg-clip-text text-transparent">
              Comunicación que se lee de verdad.
            </span>
          </h1>

          <p className={heroVariants.subheadline()}>{subheadline}</p>

          <div className={heroVariants.actions()}>
            <a href="#contacto" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2">
                <span>{ctaPrimaryLabel}</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="#casos" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                <span>{ctaSecondaryLabel}</span>
              </Button>
            </a>
          </div>
        </div>

        {/* Right Column: Floating 4:5 Editorial Card */}
        <div className={heroVariants.rightCol()}>
          <div className={heroVariants.cardPreview()}>
            {/* Top info */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#f35b04]" />
                <span className="text-[11px] font-medium tracking-wider uppercase text-slate-400">
                  @aldanalichtenberger
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-500">01/07</span>
            </div>

            {/* Middle: Editorial Quote */}
            <div className="my-auto py-4">
              <span className="text-xs font-mono tracking-widest text-[#f35b04] uppercase block mb-3">
                Inteligencia Vincular
              </span>
              <p className="font-display text-2xl sm:text-3xl font-bold leading-tight text-white tracking-tight">
                «Cuando dos personas conviven, no se suman dos espacios. Nace un tercero.»
              </p>
            </div>

            {/* Bottom meta */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
              <span>Dirección editorial</span>
              <span className="text-slate-300 font-medium">Tónica Studio</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
