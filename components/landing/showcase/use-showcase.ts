"use client";

import { useState } from "react";
import type { ShowcaseSlide, UseShowcaseReturn } from "./showcase.types";

export const defaultAldanaSlides: ShowcaseSlide[] = [
  {
    id: "aldana-01",
    topic: "El Tercer Espacio",
    hook: "«Cuando dos personas conviven, no se suman dos espacios. Nace un tercero.»",
    body: "Un hábitat compartido que respira, se alimenta de lo que ponemos en la mesa común y puede ser tanto un refugio como una fuente de tensión silenciosa.",
    category: "Inteligencia Vincular",
    slideIndex: "01/07",
    accentColor: "#f35b04",
  },
  {
    id: "aldana-02",
    topic: "La Métrica de Pareja",
    hook: "«Algo de lo propio se rompe para que lo compartido pueda existir.»",
    body: "Compartir el espacio no es anular la individualidad: es la madurez de entender que algo se transforma para que un nuevo clima íntimo sea posible.",
    category: "Psicología Clínica",
    slideIndex: "04/07",
    accentColor: "#eefd6c",
  },
  {
    id: "aldana-03",
    topic: "Microerrores Cotidianos",
    hook: "«Lo que en soledad no lastima, se vuelve fricción si choca con el ritmo del otro.»",
    body: "Manías, ansiedad y cansancio acumulado. Diseñamos la reflexión sobre cómo cuidar el hábitat común sin descuidar el propio descanso.",
    category: "Vínculos Sanos",
    slideIndex: "05/07",
    accentColor: "#8ac6e4",
  },
];

export const useShowcase = (slides: ShowcaseSlide[] = defaultAldanaSlides): UseShowcaseReturn => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const nextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return {
    activeSlideIndex,
    setActiveSlideIndex,
    nextSlide,
    prevSlide,
    currentSlide: slides[activeSlideIndex] ?? slides[0],
  };
};
