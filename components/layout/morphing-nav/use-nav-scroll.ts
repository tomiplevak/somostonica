"use client";

import { useEffect, useState } from "react";
import type { UseNavScrollReturn } from "./morphing-nav.types";

export const useNavScroll = (threshold: number = 70): UseNavScrollReturn => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let ticking = false;

    const checkScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > threshold);

      const sections = ["manifiesto", "metodo", "casos", "contacto"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(checkScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    checkScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [threshold]);

  return { isScrolled, activeSection };
};
