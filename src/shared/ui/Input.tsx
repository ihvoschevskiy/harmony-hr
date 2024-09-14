import { cn } from "@shared/utils";
import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefixIcon?: ReactNode;
  placeholder?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, prefixIcon, className, type, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex flex-1 items-center gap-6 border rounded-xl border-black px-4 py-2 h-9",
          className,
        )}
      >
        {prefixIcon && prefixIcon}
        <input
          type={type}
          placeholder={placeholder}
          className="flex h-10 w-full  bg-background  text-lg ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
