"use client";
import { Select, Tabs } from "@shared/ui";
import { FC, useState } from "react";
import { requestOptions, settingsOptions, tabOptions } from "./constants";

interface TopBarProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const TopBar: FC<TopBarProps> = ({ activeTab, setActiveTab }) => {
  const [requestSelect, setRequestSelect] = useState("request_a_change");
  const [settingsSelect, setSettingsSelect] = useState("settings");

  //TODO: Заменить имя на данные из запроса

  return (
    <div className="flex flex-col min-h-[182px] bg-accent-100 px-[16px] md:pl-0 md:pr-[48px] pt-10">
      <div className="flex flex-1 flex-wrap gap-4 items-center justify-between">
        <h2 className="text-3xl font-semibold">Alexandra Kuibyshevskaya</h2>
        <div className="flex gap-4">
          <Select
            value={requestSelect}
            onChange={setRequestSelect}
            options={requestOptions}
            className="border-accent-300 rounded-lg"
          />
          <Select
            value={settingsSelect}
            onChange={setSettingsSelect}
            options={settingsOptions}
            className="border-accent-300 rounded-lg"
          />
        </div>
      </div>
      <Tabs value={activeTab} options={tabOptions} onChange={setActiveTab} />
    </div>
  );
};

export default TopBar;
