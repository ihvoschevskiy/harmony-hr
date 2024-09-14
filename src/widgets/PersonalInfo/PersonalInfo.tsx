import { Avatar, Card } from "@shared/ui";
import { FC } from "react";
import {
  getCommonCardDetails,
  getContactsCardDetails,
  getHireCardDetails,
  getReportsCardDetails,
} from "./helpers";

//TODO: Заменить на данные с бэкенда
const data = {
  phone: "+71234567890",
  email: "avd.yana@videorollnet",
  instaLink: "https://instagram.com",
  facebookLink: "https://facebook.com",
  twitterLink: "https://twitter.com",
};

const data1 = {
  number: 5,
  time: "Full-Time",
  operations: "Operations",
  region: "Europe",
  location: "London, UK",
};

const data2 = [
  "Shane",
  "Nathan",
  "Mitchel",
  "Philip",
  "Sarah",
  "Alexandra",
  "Robert",
];

const PersonalInfo: FC = () => {
  return (
    <div className="flex flex-col items-center min-w-80 bg-accent-50">
      {/*TODO: заменить avatarUrl и name на данные с бэкенда*/}
      <div className="flex w-full bg-accent-100 min-h-[182px] pl-12">
        <Avatar
          avatarUrl="/images/avatar-lg.png"
          name="Alexandra Kuibyshevskaya"
          className="w-[150px] h-[150px] z-10 mx-auto mt-auto"
        />
      </div>
      <div className="relative flex flex-col gap-4 text-sm max-w-56 pl-12 top-[-14px] box-content">
        <Card conetent={getContactsCardDetails(data)} className="rounded-2xl" />
        <Card
          header="Hire Date"
          conetent={getHireCardDetails({ date: "2020-09-03T00:00:00.000Z" })}
          className="rounded-2xl"
        />
        <Card conetent={getCommonCardDetails(data1)} className="rounded-2xl" />
        <Card conetent={getReportsCardDetails(data2)} header="Direct reports" className="rounded-2xl" />
      </div>
    </div>
  );
};

export default PersonalInfo;
