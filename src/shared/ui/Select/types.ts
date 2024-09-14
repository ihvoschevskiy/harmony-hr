import { IconWrapperProps } from "@shared/hocs";
import { FC } from "react";

export type SelectOption = {
  value: string;
  label?: string;
  Icon?: FC<IconWrapperProps>;
};
