import { Card } from "@shared/ui";
import { FC, useMemo } from "react";
import { InfographicType } from "./types";
import { cardDict } from "@shared/mocks/infographic";

interface InfographicCardProps {
  type: InfographicType;
  stats: number;
  scheduled: number;
}

const InfographicCard: FC<InfographicCardProps> = ({
  type,
  stats,
  scheduled,
}) => {
  const { header, Icon, description, details } = useMemo(
    () => cardDict[type],
    [type],
  );

  return (
    <div className="flex gap-2 flex-col items-center min-w-[264px]">
      <Card
        conetent={
          <div className="flex gap-1 flex-col items-center">
            <h3 className="text-xl font-semibold">{header}</h3>
            <div className="flex gap-2 items-center">
              <Icon size={30} className="text-accent-500" />
              <span className="text-3xl text-accent-500 font-semibold">
                {stats}
              </span>
            </div>
            <p className="text-sm font-semibold">{details}</p>
            {!!scheduled && (
              <p className="text-sm font-semibold text-accent-300">
                {scheduled} day scheduled
              </p>
            )}
          </div>
        }
        className="bg-accent-50 p-4 flex-1 w-full"
      />
      <p className="text-sm font-medium text-accent-300">{description}</p>
    </div>
  );
};

export default InfographicCard;
