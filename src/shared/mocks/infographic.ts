import { DocumentIcon, MountainsIcon, PlusIcon } from "@shared/ui/Icons";
import {
  InfographicDetails,
  InfographicType,
} from "@widgets/InfographicCard/types";

type Infographic = {
  type: InfographicType;
  stats: number;
  scheduled: number;
};

export const InfographicData: Infographic[] = [
  {
    type: "sick",
    stats: 3,
    scheduled: 1,
  },
  {
    type: "holidays",
    stats: 10.3,
    scheduled: 0,
  },
  {
    type: "used",
    stats: 0,
    scheduled: 0,
  },
];

export const startDate = "2020-09-03T00:00:00.000Z";

export const cardDict: Record<InfographicType, InfographicDetails> = {
  sick: {
    header: "Sick",
    Icon: PlusIcon,
    details: "Days Available",
    description: "Sick Full-Time",
  },
  holidays: {
    header: "Annual Leave",
    Icon: MountainsIcon,
    details: "Days Available",
    description: "Holiday Full-Time",
  },
  used: {
    header: "Comp/in Lieu Time",
    Icon: DocumentIcon,
    details: "Human Used(YTD)",
    description: "Comp/in Lieu Time Flexible Policy",
  },
};
