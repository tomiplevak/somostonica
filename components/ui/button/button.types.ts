import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { buttonVariants } from "./button.variants";

export type ButtonCvaProps = VariantProps<typeof buttonVariants>;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonCvaProps {
  children?: ReactNode;
  label?: string;
  isLoading?: boolean;
}

