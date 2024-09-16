import { Separator } from "@shared/shadcn/separator";
import { cn } from "@shared/utils";
import { FC } from "react";

interface DividerProps {
  type?: "line" | "circle";
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const Divider: FC<DividerProps> = ({
  type = "line",
  orientation = "horizontal",
  className,
}) => {
  return (
    <Separator
      orientation={orientation}
      className={cn("h-[2px]", type === "circle" && "h-2 w-2 rounded-full", className)}
    />
  );
};

export default Divider;
