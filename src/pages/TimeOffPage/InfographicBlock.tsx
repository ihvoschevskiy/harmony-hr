import { DocumentIcon } from "@shared/ui/Icons";
import { Section } from "@widgets/Section";
import { FC } from "react";
import { getStatisticBlockControls } from "./helers";
import { InfographicCard } from "@widgets/InfographicCard";
import { InfographicType } from "@widgets/InfographicCard/types";

//TODO: заменить данные

type Infographic = {
  type: InfographicType;
  stats: number;
  scheduled: number;
};

const statsData: Infographic[] = [
  {
    type: "sick",
    stats: 3,
    scheduled: 1,
  },
  {
    type: "holidays",
    stats: 10.3,
    scheduled: 0,
  },
  {
    type: "used",
    stats: 0,
    scheduled: 0,
  },
];

const InfographicBlock: FC = () => {
  return (
    <div>
      <Section
        size="lg"
        withDivider
        title="Time Off"
        Icon={DocumentIcon}
        suffix={getStatisticBlockControls("2020-09-03T00:00:00.000Z", () => { })}
      />
      <div className="flex flex-wrap gap-12 justify-center mt-6">
        {statsData.map((item, index) => (
          <InfographicCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default InfographicBlock;
