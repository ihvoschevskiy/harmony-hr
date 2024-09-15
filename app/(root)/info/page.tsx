"use client";

import { PersonalInfo } from "@widgets/PersonalInfo";
import { TopBar } from "@widgets/TopBar";
import { FC, useState } from "react";

const TimeOffPage: FC = () => {
  const [activeTab, setActiveTab] = useState("time_off");

  return (
    <main className="flex">
      <PersonalInfo />
      <div className="flex-1 bg-accent-50">
        <TopBar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </main>
  );
};

export default TimeOffPage;
