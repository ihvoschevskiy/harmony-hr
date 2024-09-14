import { IconWrapperProps } from "@shared/hocs";
import { FC } from "react";

export type Option = {
  value: string;
  Icon?: FC<IconWrapperProps>;
  label?: string;
};
