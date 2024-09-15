import { FC, ReactNode } from "react";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  Card as ShadcnCard,
} from "@shared/shadcn/card";
import { cn } from "@shared/utils";

interface CardProps {
  header?: string;
  description?: string;
  conetent: ReactNode;
  footer?: ReactNode;
  className?: string;
}

const Card: FC<CardProps> = ({
  header,
  description,
  conetent,
  footer,
  className,
}) => {
  return (
    <ShadcnCard className={cn("border-none p-6", className)}>
      {header && (
        <CardHeader className="p-0">
          {header}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className={cn("p-0", header && "pt-4")}>{conetent}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </ShadcnCard>
  );
};

export default Card;
