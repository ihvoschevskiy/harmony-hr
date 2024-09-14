import { FC } from "react";
import { DropdownMenuItem as RadixDropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { IconWrapperProps } from "@shared/hocs";

interface DropdownMenuItemProps {
  id: string | number;
  Icon?: FC<IconWrapperProps>;
  label: string;
  onItemClick: (item: string | number) => void;
}

const DropdownMenuItem: FC<DropdownMenuItemProps> = ({
  id,
  Icon,
  label,
  onItemClick,
}) => {
  return (
    <RadixDropdownMenuItem
      onClick={() => onItemClick(id)}
      className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
    >
      {Icon && <Icon size={16} />}
      <span>{label}</span>
    </RadixDropdownMenuItem>
  );
};

export default DropdownMenuItem;
