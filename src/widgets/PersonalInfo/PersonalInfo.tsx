import { Avatar, Card } from "@shared/ui";
import { FC } from "react";
import {
  getCommonCardDetails,
  getContactsCardDetails,
  getHireCardDetails,
  getReportsCardDetails,
} from "./helpers";
import { cn } from "@shared/utils";
import { useUserStore } from "@shared/store/user/store";
import { commonInfo, contacts, reportsInfo } from "@shared/mocks/user";

interface PersonalInfoProps {
  className?: string;
}

const PersonalInfo: FC<PersonalInfoProps> = ({ className }) => {
  const user = useUserStore(({ user }) => user);
  return (
    <div
      className={cn(
        "flex flex-col items-center min-w-80 bg-accent-50",
        className,
      )}
    >
      <div className="flex w-full bg-accent-100 min-h-[182px] pl-12">
        <Avatar
          avatarUrl={user?.avatar || ""}
          name="Alexandra Kuibyshevskaya"
          className="w-[150px] h-[150px] z-10 mx-auto mt-auto"
        />
      </div>
      <div className="relative flex flex-col gap-4 text-sm max-w-56 pl-12 top-[-14px] box-content">
        <Card
          conetent={getContactsCardDetails(contacts)}
          className="rounded-2xl"
        />
        <Card
          header="Hire Date"
          conetent={getHireCardDetails({ date: "2020-09-03T00:00:00.000Z" })}
          className="rounded-2xl"
        />
        <Card
          conetent={getCommonCardDetails(commonInfo)}
          className="rounded-2xl"
        />
        <Card
          conetent={getReportsCardDetails(reportsInfo)}
          header="Direct reports"
          className="rounded-2xl"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
