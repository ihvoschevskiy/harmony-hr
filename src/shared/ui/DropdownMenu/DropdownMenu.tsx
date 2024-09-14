import { FC, ReactNode } from "react";
import {
  DropdownMenu as ShadcnDropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@shared/shadcn/dropdown-menu";
import { Option } from "@shared/types/option";
import DropdownMenuItem from "./DropdownMenuItem";

interface DropdownMenuProps {
  trigger: ReactNode;
  options: Option[];
  label?: string;
  defaultIsOpen?: boolean;
  className?: string;
  onItemClick: (value: string) => void;
}

const DropdownMenu: FC<DropdownMenuProps> = ({
  trigger,
  options,
  label,
  defaultIsOpen = false,
  onItemClick,
}) => {
  return (
    <ShadcnDropdownMenu defaultOpen={defaultIsOpen}>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {label && (
          <>
            <DropdownMenuLabel>{label}</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}
        {options?.map((item, index) => (
          <DropdownMenuItem key={index} {...item} onItemClick={onItemClick} />
        ))}
      </DropdownMenuContent>
    </ShadcnDropdownMenu>
  );
};

export default DropdownMenu;
