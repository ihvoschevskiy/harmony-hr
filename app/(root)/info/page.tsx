"use client";

import { TimeOffPage } from "@pages/TimeOffPage";
import { PersonalInfo } from "@widgets/PersonalInfo";
import { TopBar } from "@widgets/TopBar";
import { FC, useState } from "react";

const InfoPage: FC = () => {
  const [activeTab, setActiveTab] = useState("time_off");

  return (
    <main className="flex">
      <PersonalInfo className="s:hidden md:flex" />
      <div className="flex-1 bg-accent-50 pb-10">
        <TopBar activeTab={activeTab} setActiveTab={setActiveTab}/>
        {activeTab === "time_off" && <TimeOffPage />}
      </div>
    </main>
  );
};

export default InfoPage;
