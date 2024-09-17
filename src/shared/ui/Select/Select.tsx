import { FC } from "react";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Select as ShadcnSelect,
} from "@shared/shadcn/select";
import { cn } from "@shared/utils";
import { CrossIcon } from "../Icons";
import { Option } from "@shared/types/option";

interface SelectProps {
  value: string;
  options: Option[];
  placeholder?: string;
  className?: string;
  isAllowClear?: boolean;
  onChange: (value: string) => void;
}

const Select: FC<SelectProps> = ({
  value,
  options,
  placeholder,
  className,
  isAllowClear = false,
  onChange,
}) => {
  return (
    <ShadcnSelect value={value} onValueChange={onChange}>
      <SelectTrigger
        className={cn("w-max gap-2 p-2 [&_span]:flex-grow", className)}
      >
        <SelectValue placeholder={placeholder} className="flex-grow" />
        {isAllowClear && (
          <CrossIcon
            size={16}
            className="z-50"
            onClick={() => {
              onChange("");
            }}
          />
        )}
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map(({ value, label, Icon }, index) => (
            <SelectItem key={index} value={value}>
              <div className="flex gap-2 items-center">
                {Icon && <Icon size={16} />}
                {label}
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </ShadcnSelect>
  );
};

export default Select;
