import type { HTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { badgeVariants } from "./badge.variants";

export type BadgeCvaProps = VariantProps<typeof badgeVariants>;

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, BadgeCvaProps {
  children?: ReactNode;
  label?: string;
}

