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
    <ShadcnCard className={className}>
      {header && (
        <CardHeader className="pb-4">
          {header}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className={cn(!header && "pt-6")}>{conetent}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </ShadcnCard>
  );
};

export default Card;
