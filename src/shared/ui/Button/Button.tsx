import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants, Button as ShadcnButton } from "@shared/shadcn/button";
import { cn } from "@shared/utils";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  withSign?: boolean;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      prefixIcon,
      suffixIcon,
      asChild = false,
      withSign = false,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <ShadcnButton
        variant={variant}
        size={size}
        asChild={asChild}
        className={cn(
          withSign &&
          "relative after:absolute after:content-[''] after:top-0 after:right-0 after:w-2 after:h-2 after:rounded-full after:bg-red-500",
          className,
        )}
        ref={ref}
        {...props}
      >
        <div className="flex items-center gap-2">
          {prefixIcon && prefixIcon}
          {children}
          {suffixIcon && suffixIcon}
        </div>
      </ShadcnButton>
    );
  },
);

Button.displayName = "Button";

export default Button;
