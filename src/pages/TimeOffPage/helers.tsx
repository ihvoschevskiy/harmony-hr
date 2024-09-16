import { Button } from "@shared/ui";
import { DATE_TIME_FORMATS, formatDate, formatNumber } from "@shared/utils";
import { ReactNode } from "react";

export const getStatisticBlockControls = (
  date: string,
  addTimeBtnClickHandler: VoidFunction,
): ReactNode => (
  <div className="flex gap-5 items-center">
    <p className="text-sm font-medium s:hidden lg:block">
      Accrual Level Start Date{" "}
      <span className="text-accent-400">
        {formatDate(date, DATE_TIME_FORMATS["DD/MM-YYYY"])}
      </span>
    </p>
    <Button
      variant="outline"
      onClick={addTimeBtnClickHandler}
      className="border-black"
    >
      Add Time Off Policy
    </Button>
  </div>
);

export type HistoryTableRow = {
  date: string;
  description: string;
  used_days: number | string;
  earned_days: number | string;
  balance: number | string;
};
export type HistoryTable = Array<HistoryTableRow>;

export const prepareTableData = (data: HistoryTable): HistoryTable =>
  data.map(({ date, description, used_days, earned_days, balance }) => ({
    date: formatDate(date, DATE_TIME_FORMATS["DD/MM/YYYY"]),
    description: description,
    used_days: used_days ? used_days : "",
    earned_days: earned_days ? formatNumber(earned_days) : "",
    balance: balance ? formatNumber(balance) : "",
  }));
