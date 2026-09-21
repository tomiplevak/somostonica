"use client";

import { useEffect, useState } from "react";
import type { UseScrollProgressReturn } from "./progress-bar.types";

export const useScrollProgress = (): UseScrollProgressReturn => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      const docHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        document.documentElement.offsetHeight,
        document.body.offsetHeight
      );

      const winHeight =
        window.innerHeight || document.documentElement.clientHeight || 0;

      const scrollableHeight = docHeight - winHeight;

      if (scrollableHeight <= 0) {
        setProgress(0);
        ticking = false;
        return;
      }

      const currentProgress = (scrollTop / scrollableHeight) * 100;
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
    window.addEventListener("resize", onScroll, { passive: true });

    // Initial calculation
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return { progress };
};
