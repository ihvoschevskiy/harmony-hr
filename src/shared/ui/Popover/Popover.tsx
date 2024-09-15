import { FC, PropsWithChildren, ReactNode } from "react";
import {
  PopoverContent,
  PopoverTrigger,
  Popover as ShadcnPopover,
} from "@shared/shadcn/popover";

interface PopoverProps extends PropsWithChildren {
  trigger: ReactNode;
  className?: string;
}

const Popover: FC<PopoverProps> = ({ trigger, children, className }) => {
  return (
    <ShadcnPopover>
      <PopoverTrigger asChild className={className}>
        {trigger}
      </PopoverTrigger>
      <PopoverContent className="w-80">{children}</PopoverContent>
    </ShadcnPopover>
  );
};

export default Popover;
