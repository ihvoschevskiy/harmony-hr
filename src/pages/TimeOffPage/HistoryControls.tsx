import { Option } from "@shared/types/option";
import { Select } from "@shared/ui";
import { cn } from "@shared/utils";
import { FC } from "react";

interface HistoryControlsProps {
  typeSelectValue: string;
  onChangeTypeSelectValue: (value: string) => void;
  limitSelectValue: string;
  onChangeLimitSelectValue: (value: string) => void;
  historySelectValue: string;
  onChangeHistorySelectValue: (value: string) => void;
  className?: string;
}

const typeOptions: Option[] = [
  {
    value: "sick",
    label: "Sick",
  },
];

const limitOptions: Option[] = [
  {
    value: "all",
    label: "All",
  },
];

const historyOptions: Option[] = [
  {
    value: "balance_history",
    label: "Balance History",
  },
];

const HistoryControls: FC<HistoryControlsProps> = ({
  typeSelectValue,
  limitSelectValue,
  historySelectValue,
  onChangeTypeSelectValue,
  onChangeLimitSelectValue,
  onChangeHistorySelectValue,
  className,
}) => {
  return (
    <div className={cn("flex gap-4 flex-wrap justify-between", className)}>
      <div className="flex gap-4 flex-wrap">
        <Select
          value={typeSelectValue}
          onChange={onChangeTypeSelectValue}
          options={typeOptions}
          isAllowClear
          className="min-w-64 border-accent-300 h-8 rounded-lg"
        />
        <Select
          value={limitSelectValue}
          onChange={onChangeLimitSelectValue}
          options={limitOptions}
          isAllowClear
          className="min-w-24 border-accent-300 h-8 rounded-lg"
        />
      </div>
      <Select
        value={historySelectValue}
        onChange={onChangeHistorySelectValue}
        options={historyOptions}
        className="min-w-44 border-accent-300 h-8 rounded-lg"
      />
    </div>
  );
};

export default HistoryControls;
