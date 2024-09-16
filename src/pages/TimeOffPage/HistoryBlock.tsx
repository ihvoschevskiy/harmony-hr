"use client";

import { HistoryIcon } from "@shared/ui/Icons";
import { Section } from "@widgets/Section";
import { FC, useMemo, useState } from "react";
import HistoryControls from "./HistoryControls";
import { Table } from "@shared/ui";
import { tableData, tableHeader } from "./constants";
import { HistoryTable, prepareTableData } from "./helers";

const HisrotyBlock: FC = () => {
  const [typeSelectValue, onChangeTypeSelectValue] = useState("sick");
  const [limitSelectValue, onChangeLimitSelectValue] = useState("all");
  const [historySelectValue, onChangeHistorySelectValue] =
    useState("balance_history");

  const formatedData = useMemo(
    () => prepareTableData(tableData as unknown as HistoryTable),
    [],
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
      <Table header={tableHeader} data={formatedData} className="mt-4"/>
    </div>
  );
};

export default HisrotyBlock;
