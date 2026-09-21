import type { FC } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { HeroProps } from "./hero.types";
import { heroVariants } from "./hero.variants";

export const Hero: FC<HeroProps> = ({
  agencyName = "Somos Tónica",
  tagline = "Agencia de Marketing & Comunicación",
  headline = "Marcas con identidad, voz y pulso propio.",
  description = "Estrategia de comunicación, marketing digital, diseño de marca y narrativas que conectan. Diseñamos experiencias con propósito para marcas que buscan destacar.",
}) => {
  return (
    <section className={heroVariants.section()}>
      <div className={heroVariants.backdropGlow()} />

      <div className="flex flex-col items-center">
        <Badge variant="default" className="mb-6">
          <Sparkles className="h-3.5 w-3.5 text-[#f35b04]" />
          <span>{tagline}</span>
        </Badge>

        <h1 className={heroVariants.title()}>
          <span className="text-white">{agencyName}</span>
          <br />
          <span className="bg-gradient-to-r from-[#f35b04] via-[#ff884d] to-[#ffb088] bg-clip-text text-transparent">
            {headline}
          </span>
        </h1>

        <p className={heroVariants.description()}>{description}</p>

        <div className={heroVariants.actionsGroup()}>
          <Button variant="primary" size="lg">
            <span>Iniciar conversación</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="secondary" size="lg">
            <span>Conocer proyectos</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

