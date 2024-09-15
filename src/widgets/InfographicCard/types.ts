import { IconWrapperProps } from "@shared/hocs";
import { FC } from "react";

export type InfographicType = "sick" | "holidays" | "used";

export type InfographicDetails = {
  header: string;
  Icon: FC<IconWrapperProps>;
  description: string;
  details: string;
};
