import { IconWrapperProps } from "@shared/hocs";
import { FC } from "react";

export type DropdownMenuItem = {
  id: string | number;
  Icon?: FC<IconWrapperProps>;
  label: string;
};
