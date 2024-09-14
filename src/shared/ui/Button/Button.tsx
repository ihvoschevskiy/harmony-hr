import { ButtonHTMLAttributes, forwardRef } from "react";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants, Button as ShadcnButton } from "@shared/shadcn/button";
import { cn } from "@shared/utils";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  withSign?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, withSign = false, ...props },
    ref,
  ) => {
    return (
      <ShadcnButton
        variant={variant}
        size={size}
        asChild={asChild}
        className={cn(
          withSign &&
            "relative after:absolute after:content-[''] after:top-0 after:right-0 after:w-2 after:h-2 after:rounded-full after:bg-sky-500",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export default Button;
