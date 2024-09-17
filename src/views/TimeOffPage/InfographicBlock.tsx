import { DocumentIcon } from "@shared/ui/Icons";
import { FC } from "react";
import { getStatisticBlockControls } from "./helpers";
import { InfographicCard } from "@widgets/InfographicCard";
import { InfographicData, startDate } from "@shared/mocks/infographic";
import { Section } from "@shared/ui";

const InfographicBlock: FC = () => {
  return (
    <div>
      <Section
        size="lg"
        withDivider
        title="Time Off"
        Icon={DocumentIcon}
        suffix={getStatisticBlockControls(startDate, () => { })}
      />
      <div className="flex flex-wrap gap-12 justify-center mt-6">
        {InfographicData.map((item, index) => (
          <InfographicCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default InfographicBlock;
