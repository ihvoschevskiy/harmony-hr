import { FC } from "react";
import { DropdownMenuItem as ShadcnDropdownMenuItem } from "@shared/shadcn/dropdown-menu";
import { IconWrapperProps } from "@shared/hocs";

interface DropdownMenuItemProps {
  value: string;
  Icon?: FC<IconWrapperProps>;
  label?: string;
  onItemClick: (item: string) => void;
}

const DropdownMenuItem: FC<DropdownMenuItemProps> = ({
  value,
  Icon,
  label,
  onItemClick,
}) => {
  return (
    <ShadcnDropdownMenuItem
      onClick={() => onItemClick(value)}
      className="gap-2"
    >
      {Icon && <Icon size={16} />}
      <span>{label}</span>
    </ShadcnDropdownMenuItem>
  );
};

export default DropdownMenuItem;
