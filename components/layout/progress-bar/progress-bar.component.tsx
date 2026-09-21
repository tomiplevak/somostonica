"use client";

import type { FC } from "react";
import type { ProgressBarProps } from "./progress-bar.types";
import { progressBarVariants } from "./progress-bar.variants";
import { useScrollProgress } from "./use-scroll-progress";

export const ProgressBar: FC<ProgressBarProps> = ({ className }) => {
  const { progress } = useScrollProgress();

  return (
    <div
      aria-hidden="true"
      className={progressBarVariants({ className })}
      style={{
        transform: `scaleX(${progress / 100})`,
      }}
    />
  );
};

