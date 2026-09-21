import type { FC } from "react";
import type { ManifestoProps } from "./manifesto.types";
import { manifestoVariants } from "./manifesto.variants";

export const Manifesto: FC<ManifestoProps> = ({
  eyebrow = "El Criterio Tónica",
  statement = "Casi todas las marcas tienen presencia en redes. Muy pocas tienen una voz que alguien elija escuchar.",
  subtextPrimary = "En un feed abarrotado de tendencias efímeras, plantillas prefabricadas y ruido algorítmico, el verdadero lujo no es publicar todos los días: es tener una perspectiva honesta y saber formularla con belleza.",
  subtextSecondary = "Acompañamos a profesionales y proyectos a destilar su conocimiento, encontrando un tono editorial propio y un sistema visual que no dependa de la moda de la semana para tener relevancia.",
}) => {
  return (
    <section id="manifiesto" className={manifestoVariants.section()}>
      <span className={manifestoVariants.eyebrow()}>{eyebrow}</span>

      <h2 className={manifestoVariants.statement()}>
        <span>{statement}</span>
      </h2>

      <div className={manifestoVariants.grid()}>
        <p>{subtextPrimary}</p>
        <p>{subtextSecondary}</p>
      </div>
    </section>
  );
};

