"use client";

import { useState } from "react";
import type { MethodPillar, UseMethodReturn } from "./method.types";

export const defaultPillars: MethodPillar[] = [
  {
    id: "voz",
    number: "01",
    title: "La Voz & Cadencia",
    subtitle: "Estrategia discursiva y curaduría temática",
    description:
      "No empezamos diseñando colores: empezamos escuchando. Desciframos las obsesiones, el vocabulario íntimo y los temas clave de la marca para estructurar copys con métrica poética, ritmo y peso propio.",
    deliverables: [
      "Mapa de disparadores temáticos y banco de ideas",
      "Manual de voz, tono y cadencia tipográfica",
      "Estructuras de hook que invitan a la pausa",
    ],
    quote: "«El copy no se lee como un anuncio: se siente como una carta que necesitabas leer hoy.»",
  },
  {
    id: "forma",
    number: "02",
    title: "La Forma Editorial",
    subtitle: "Diseño tipográfico y sistemas 4:5",
    description:
      "Tratamos cada carrusel de Instagram como una pequeña publicación editorial independiente. Ratios 4:5 y 3:4 milimétricamente calibrados, contraste cromático absoluto y jerarquías que guían la mirada.",
    deliverables: [
      "Sistema de diseño en Figma con tokens de marca",
      "Plantillas modulares con autolayout nativo",
      "Tratamiento fotográfico analógico y composiciones tipográficas",
    ],
    quote: "«El diseño gráfico no decora el texto: construye la atmósfera donde la idea respira.»",
  },
  {
    id: "vinculo",
    number: "03",
    title: "El Vínculo",
    subtitle: "Comunidad reflexiva y permanencia",
    description:
      "Reemplazamos el engagement artificial de sorteos o trends por conversaciones genuinas en comentarios. Piezas que la gente guarda, reenvía a sus vínculos más cercanos y vuelve a consultar con el tiempo.",
    deliverables: [
      "Estrategia de interacción profunda en comentarios",
      "Análisis de piezas guardadas y compartidas de valor orgánico",
      "Posicionamiento como referente cultural y disciplinar",
    ],
    quote: "«Una marca no es lo que dice en su bio, sino la conversación que despierta en su comunidad.»",
  },
];

export const useMethod = (pillars: MethodPillar[] = defaultPillars): UseMethodReturn => {
  const [activePillarId, setActivePillarId] = useState(pillars[0]?.id ?? "voz");

  const activePillar = pillars.find((p) => p.id === activePillarId) ?? pillars[0];

  return {
    activePillarId,
    setActivePillarId,
    activePillar,
  };
};
