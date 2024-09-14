import { FC, ReactNode } from "react";
import {
  DropdownMenu as ShadcnDropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@shared/shadcn/dropdown-menu";
import { DropdownMenuItem as MenuItem } from "./types";
import DropdownMenuItem from "./DropdownMenuItem";

interface DropdownMenuProps {
  trigger: ReactNode;
  items: MenuItem[];
  label?: string;
  defaultIsOpen?: boolean;
  className?: string;
  onItemClick: (id: string | number) => void;
}

const DropdownMenu: FC<DropdownMenuProps> = ({
  trigger,
  items,
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
        {items.map((item, index) => (
          <DropdownMenuItem key={index} {...item} onItemClick={onItemClick} />
        ))}
      </DropdownMenuContent>
    </ShadcnDropdownMenu>
  );
};

export default DropdownMenu;
