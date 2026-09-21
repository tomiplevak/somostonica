export interface ShowcaseSlide {
  id: string;
  topic: string;
  hook: string;
  body: string;
  category: string;
  slideIndex: string;
  accentColor: string;
}

export interface ShowcaseProps {
  slides?: ShowcaseSlide[];
}

export interface UseShowcaseReturn {
  activeSlideIndex: number;
  setActiveSlideIndex: (index: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  currentSlide: ShowcaseSlide;
}

