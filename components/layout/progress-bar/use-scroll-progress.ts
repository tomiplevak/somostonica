"use client";

import { useEffect, useState } from "react";
import type { UseScrollProgressReturn } from "./progress-bar.types";

export const useScrollProgress = (): UseScrollProgressReturn => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) {
        setProgress(0);
        ticking = false;
        return;
      }

      const currentProgress = (window.scrollY / scrollHeight) * 100;
      setProgress(Math.min(100, Math.max(0, currentProgress)));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return { progress };
};
