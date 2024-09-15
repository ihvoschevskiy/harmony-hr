import { InfographicDetails, InfographicType } from "./types";
import { DocumentIcon, MountainsIcon, PlusIcon } from "@shared/ui/Icons";

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
