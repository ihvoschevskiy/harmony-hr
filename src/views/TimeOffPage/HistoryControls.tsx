import { Select } from "@shared/ui";
import { cn } from "@shared/utils";
import { FC } from "react";
import { historyOptions, limitOptions, typeOptions } from "./constants";

interface HistoryControlsProps {
  typeSelectValue: string;
  onChangeTypeSelectValue: (value: string) => void;
  limitSelectValue: string;
  onChangeLimitSelectValue: (value: string) => void;
  historySelectValue: string;
  onChangeHistorySelectValue: (value: string) => void;
  className?: string;
}

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
