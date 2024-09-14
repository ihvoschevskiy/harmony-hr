import { withIcon, IconWrapperProps } from "@shared/hocs";
import { FC } from "react";

const Icon: FC<IconWrapperProps> = (props) => {
  return (
    <svg
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 14.8333L8 17.5L11 14.8333M8 1.5V17.5V1.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ArrowIcon = withIcon(Icon);
ArrowIcon.displayName = "ArrowIcon";

export default ArrowIcon;
