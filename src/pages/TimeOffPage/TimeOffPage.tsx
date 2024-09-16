import { FC } from "react";
import InfographicBlock from "./InfographicBlock";
import UpcommingBlock from "./UpcomingBlock";
import HisrotyBlock from "./HistoryBlock";

const TimeOffPage: FC = () => {
  return (
    <div className="px-[16px] md:pl-0 md:pr-[48px]">
      <div className="px-4 pt-9 pb-24 rounded-b-2xl bg-background-50">
        <InfographicBlock />
        <UpcommingBlock />
        <HisrotyBlock />
      </div>
    </div>
  );
};

export default TimeOffPage;
