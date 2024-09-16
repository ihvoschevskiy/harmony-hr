import { IconWrapperProps } from "@shared/hocs";
import { Divider } from "@shared/ui";
import { cn } from "@shared/utils";
import { FC, ReactNode } from "react";

interface SectionProps {
  title: string;
  Icon?: FC<IconWrapperProps>;
  size?: "lg" | "md";
  suffix?: ReactNode;
  withDivider?: boolean;
  className?: string;
}

const Section: FC<SectionProps> = ({
  title,
  Icon,
  size = "md",
  withDivider = true,
  suffix,
  className,
}) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex justify-between items-center">
        <div
          className={cn("flex items-center", size === "lg" ? "gap-3" : "gap-2")}
        >
          {Icon && <Icon size={16} className="text-accent-500" />}
          <h3
            className={cn(
              size === "lg" ? "text-xl" : "text-sm",
              "font-medium text-accent-450 whitespace-nowrap",
            )}
          >
            {title}
          </h3>
        </div>
        {suffix && suffix}
      </div>
      {withDivider && <Divider className="bg-accent-300 mt-3" />}
    </div>
  );
};

export default Section;
