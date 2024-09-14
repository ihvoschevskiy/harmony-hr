import { FC, ReactNode, } from "react";
import {
  DropdownMenu as RadixDropdownMenu,
  Trigger,
  DropdownMenuContent,
  DropdownMenuLabel,
} from "@radix-ui/react-dropdown-menu";
import DropdownMenuDivider from "./DropdownMenuDivider";
import { DropdownMenuItem as MenuItem } from "./types";
import DropdownMenuItem from "./DropdownMenuItem";
import { cn } from "@shared/utils";

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
  onItemClick
}) => {
  return (
    <RadixDropdownMenu defaultOpen={defaultIsOpen}>
      <Trigger asChild className="cursor-pointer">
        {trigger}
      </Trigger>
      <DropdownMenuContent
        className={cn(
          "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover mt-1 p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        )}
      >
        {label && (
          <>
            <DropdownMenuLabel
              className={cn("px-2 py-1.5 text-sm font-semibold pl-8")}
            >
              {label}
            </DropdownMenuLabel>
            <DropdownMenuDivider />
          </>
        )}
        {items.map((item, index) => (
          <DropdownMenuItem key={index} {...item} onItemClick={onItemClick} />
        ))}
      </DropdownMenuContent>
    </RadixDropdownMenu>
  );
};

export default DropdownMenu;
