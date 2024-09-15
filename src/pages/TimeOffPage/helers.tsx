import { Button } from "@shared/ui";
import { DATE_TIME_FORMATS, formatDate } from "@shared/utils";
import { ReactNode } from "react";

export const getStatisticBlockControls = (
  date: string,
  addTimeBtnClickHandler: VoidFunction,
): ReactNode => (
  <div className="flex gap-5 items-center">
    <p className="text-sm font-medium s:hidden lg:block">
      Accrual Level Start Date{' '}
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
