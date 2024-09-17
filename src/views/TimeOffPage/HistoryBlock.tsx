"use client";

import { HistoryIcon } from "@shared/ui/Icons";
import { FC, useState } from "react";
import HistoryControls from "./HistoryControls";
import { Section, Table } from "@shared/ui";
import { HistoryTable, prepareTableData } from "./helpers";
import { tableData, tableHeader } from "@shared/mocks/history";
import { useMemoOnce } from "@shared/hooks/useMemoOnce";

const HisrotyBlock: FC = () => {
  const [typeSelectValue, onChangeTypeSelectValue] = useState("sick");
  const [limitSelectValue, onChangeLimitSelectValue] = useState("all");
  const [historySelectValue, onChangeHistorySelectValue] =
    useState("balance_history");

  const formatedData = useMemoOnce(() =>
    prepareTableData(tableData as unknown as HistoryTable),
  );

  return (
    <div className="mt-6">
      <Section
        size="md"
        title="History"
        withDivider={false}
        Icon={HistoryIcon}
      />
      <HistoryControls
        typeSelectValue={typeSelectValue}
        onChangeTypeSelectValue={onChangeTypeSelectValue}
        limitSelectValue={limitSelectValue}
        onChangeLimitSelectValue={onChangeLimitSelectValue}
        historySelectValue={historySelectValue}
        onChangeHistorySelectValue={onChangeHistorySelectValue}
        className="mt-4"
      />
      <Table header={tableHeader} data={formatedData} className="mt-4" />
    </div>
  );
};

export default HisrotyBlock;
