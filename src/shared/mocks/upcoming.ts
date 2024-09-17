import { IconWrapperProps } from "@shared/hocs";
import { PigIcon, PlusIcon } from "@shared/ui/Icons";
import { FC } from "react";

type TimeOff = {
  Icon: FC<IconWrapperProps>;
  date: string;
  details?: string;
  description?: string;
};

export const timeOffData: TimeOff[] = [
  {
    Icon: PlusIcon,
    date: "2020-01-27T00:00:00.000Z",
    details: "1 day of Sick",
  },
  {
    Icon: PigIcon,
    date: "2020-07-04T00:00:00.000Z",
    description: "Independence Day",
  },
];
