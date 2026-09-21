import type { FC } from "react";
import type { ButtonProps } from "./button.types";
import { buttonVariants } from "./button.variants";

export const Button: FC<ButtonProps> = ({
  className,
  variant,
  size,
  label,
  children,
  isLoading = false,
  disabled = false,
  ...props
}) => {
  return (
    <button
      type="button"
      className={buttonVariants({ variant, size, className })}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="inline-flex items-center gap-2">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          <span>Cargando...</span>
        </span>
      ) : (
        children ?? label
      )}
    </button>
  );
};

