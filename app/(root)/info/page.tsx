"use client";

import { Tabs } from "@shared/ui";
import { PersonalInfo } from "@widgets/PersonalInfo";
import { FC, useEffect, useState } from "react";
import { Option } from "@shared/types/option";

const options: Option[] = [
  {
    value: "personal",
    label: "Personal",
  },
  {
    value: "job",
    label: "Job",
  },
  {
    value: "time_off",
    label: "Time Off",
  },
  {
    value: "emergency",
    label: "Emergency",
  },
  {
    value: "documents",
    label: "Documents",
  },
  {
    value: "notes",
    label: "Notes",
  },
  {
    value: "benefits",
    label: "Benefits",
  },
  {
    value: "training",
    label: "Training",
  },
  {
    value: "assets",
    label: "Assets",
  },
];

const TimeOffPage: FC = () => {
  const [value, setValue] = useState("time_off");
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <main className="flex">
      <PersonalInfo />
      <div className="flex-1 bg-accent-50 pr-[72px]">
        <Tabs value={value} options={options} onChange={setValue} />
      </div>
    </main>
  );
};

export default TimeOffPage;
