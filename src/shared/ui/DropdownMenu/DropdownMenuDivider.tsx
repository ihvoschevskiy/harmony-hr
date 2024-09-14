import { Separator } from "@radix-ui/react-dropdown-menu";
import { cn } from "@shared/utils";
import { forwardRef } from "react";

const DropdownMenuDivider = forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...props }, ref) => (
  <Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));

DropdownMenuDivider.displayName = Separator.displayName;

export default DropdownMenuDivider;
