import { FC } from "react";
import StatisticBlock from "./StatisticBlock";

const TimeOffPage: FC = () => {
  return (
    <div className="px-[16px] md:pl-0 md:pr-[48px]">
      <div className="px-4 pt-9 pb-24 rounded-b-2xl bg-background-50">
        <StatisticBlock />
      </div>
    </div>
  );
};

export default TimeOffPage;
