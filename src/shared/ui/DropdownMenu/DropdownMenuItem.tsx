import { FC } from "react";
import { DropdownMenuItem as ShadcnDropdownMenuItem } from "@shared/shadcn/dropdown-menu";
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
    <ShadcnDropdownMenuItem onClick={() => onItemClick(id)} className="gap-2">
      {Icon && <Icon size={16} />}
      <span>{label}</span>
    </ShadcnDropdownMenuItem>
  );
};

export default DropdownMenuItem;
