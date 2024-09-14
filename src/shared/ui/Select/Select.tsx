import { FC } from "react";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Select as ShadcnSelect,
} from "@shared/shadcn/select";
import { SelectOption } from "./types";

interface SelectProps {
  value: string;
  options: SelectOption[];
  placeholder?: string;
  onChange: (value: string) => void;
}

const Select: FC<SelectProps> = ({ value, options, placeholder, onChange }) => {
  return (
    <ShadcnSelect value={value} onValueChange={onChange}>
      <SelectTrigger className="w-fit gap-2 p-2">
        <SelectValue placeholder={placeholder} />
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
