import type { FC } from "react";
import type { BadgeProps } from "./badge.types";
import { badgeVariants } from "./badge.variants";

export const Badge: FC<BadgeProps> = ({
  className,
  variant,
  children,
  label,
  ...props
}) => {
  return (
    <span className={badgeVariants({ variant, className })} {...props}>
      {children ?? label}
    </span>
  );
};

