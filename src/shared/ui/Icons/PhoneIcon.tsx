import { withIcon, IconWrapperProps } from "@shared/hocs";
import { FC } from "react";

const Icon: FC<IconWrapperProps> = (props) => {
  return (
    <svg
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.2298 11.2567L11.4609 9.56793L11.4505 9.56313C11.2549 9.47944 11.0414 9.44586 10.8295 9.46541C10.6176 9.48497 10.4139 9.55705 10.2369 9.67513C10.2161 9.68888 10.196 9.70384 10.1769 9.71993L8.22969 11.3799C6.99608 10.7807 5.72246 9.51673 5.12326 8.29911L6.78567 6.32229C6.80167 6.30229 6.81687 6.28229 6.83127 6.26069C6.94682 6.08413 7.01692 5.88175 7.03534 5.67155C7.05377 5.46135 7.01994 5.24985 6.93687 5.05588V5.04628L5.24326 1.27105C5.13345 1.01765 4.94464 0.806573 4.705 0.669311C4.46537 0.532048 4.18777 0.475967 3.91365 0.509438C2.82961 0.652085 1.83457 1.18446 1.11436 2.00713C0.394161 2.8298 -0.00195276 3.8865 7.23898e-06 4.97988C7.23898e-06 11.3319 5.16806 16.5 11.5201 16.5C12.6135 16.502 13.6702 16.1058 14.4929 15.3856C15.3155 14.6654 15.8479 13.6704 15.9906 12.5864C16.0241 12.3123 15.9681 12.0348 15.831 11.7952C15.6939 11.5556 15.483 11.3667 15.2298 11.2567ZM11.5201 15.22C8.80519 15.217 6.2023 14.1372 4.28255 12.2174C2.3628 10.2977 1.28298 7.69481 1.28002 4.97988C1.27701 4.19867 1.55846 3.44306 2.07182 2.85419C2.58517 2.26531 3.29532 1.88342 4.06965 1.77985C4.06933 1.78304 4.06933 1.78626 4.06965 1.78945L5.74966 5.54949L4.09605 7.52871C4.07923 7.54799 4.06398 7.56859 4.05045 7.59031C3.93006 7.77504 3.85943 7.98775 3.84542 8.2078C3.8314 8.42786 3.87447 8.6478 3.97045 8.84632C4.69525 10.3287 6.18887 11.8111 7.68728 12.5352C7.88726 12.6302 8.10847 12.6718 8.32932 12.6558C8.55017 12.6398 8.7631 12.5668 8.94729 12.444C8.96788 12.4302 8.98765 12.4152 9.0065 12.3992L10.9513 10.7399L14.7114 12.424H14.7202C14.6178 13.1994 14.2365 13.911 13.6475 14.4256C13.0586 14.9402 12.3023 15.2226 11.5201 15.22Z"
        fill="currentColor"
      />
    </svg>
  );
};

const PhoneIcon = withIcon(Icon);
PhoneIcon.displayName = "PhoneIcon";

export default PhoneIcon;
