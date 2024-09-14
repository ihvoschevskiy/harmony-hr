import { withIcon, IconWrapperProps } from "@shared/hocs";
import { FC } from "react";

const Icon: FC<IconWrapperProps> = (props) => {
  return (
    <svg
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.26005 11.3633C4.36387 12.032 3.33607 12.5231 2.23726 12.8077C2.11619 12.8495 2.01159 12.9258 1.93767 13.0262C1.86374 13.1266 1.82409 13.2462 1.82409 13.3687C1.82409 13.4913 1.86374 13.6109 1.93767 13.7113C2.01159 13.8117 2.11619 13.888 2.23726 13.9298C10.9168 17.32 16.4356 12.0795 15.5952 6.26599L17 3.4965H15.3695C13.3375 1.12096 7.94418 1.24033 8.83471 6.3018C8.83471 6.3018 5.9499 6.79123 2.26235 3.34132C2.17705 3.26117 2.0694 3.20596 1.95215 3.18224C1.8349 3.15852 1.71297 3.16727 1.60078 3.20746C1.4886 3.24766 1.39087 3.31761 1.31917 3.40904C1.24747 3.50046 1.2048 3.60952 1.19622 3.72332C0.806306 5.24874 1.00144 6.85653 1.74647 8.25718C2.4915 9.65784 3.73748 10.7593 5.26005 11.3633Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const TwitterIcon = withIcon(Icon);
TwitterIcon.displayName = "TwitterIcon";

export default TwitterIcon;
