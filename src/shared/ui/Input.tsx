"use client";

import { cn } from "@shared/utils";
import { ChangeEvent, FC, forwardRef, ReactNode, useCallback } from "react";

export interface InputProps {
  id?: string;
  value: string;
  placeholder?: string;
  prefixIcon?: ReactNode;
  error?: string | null;
  className?: string;
  type?: "text" | "email" | "password";
  onChange: (v: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const RawInput: FC<InputProps> = ({
  placeholder,
  prefixIcon,
  className,
  type = "text",
  error,
  onChange,
  ...props
}) => {
  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange],
  );
  return (
    <div
      className={cn(
        "relative flex flex-1 items-center gap-6 border rounded-xl border-black px-4 py-2 h-9",
        className,
      )}
    >
      {prefixIcon && prefixIcon}
      <input
        type={type}
        placeholder={placeholder}
        className="flex h-10 w-full  bg-background  text-lg ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        onChange={onChangeHandler}
        {...props}
      />
      {error && (
        <div className="absolute bottom-[-24px] left-0 px-1 text-red-500">
          <p className="text-sm">{error}</p>
        </div>
      )}
    </div>
  );
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) =>
  RawInput(props, ref),
);

Input.displayName = "Input";

export default Input;
