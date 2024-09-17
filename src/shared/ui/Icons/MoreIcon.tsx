import { withIcon, IconWrapperProps } from "@shared/hocs";
import { FC } from "react";

const Icon: FC<IconWrapperProps> = (props) => {
  return (
    <svg
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.865571 3.99382C1.16575 3.68111 1.57302 3.50526 1.99781 3.50493C2.4226 3.5046 2.83014 3.67983 3.1308 3.99207L8.41044 9.47672L13.6816 3.98392C13.9835 3.68007 14.388 3.51175 14.8081 3.51522C15.2281 3.5187 15.6301 3.69368 15.9273 4.00249C16.2246 4.31129 16.3934 4.72921 16.3974 5.16624C16.4014 5.60326 16.2402 6.02442 15.9486 6.339L9.54578 13.0111C9.2456 13.3238 8.83834 13.4996 8.41354 13.5C7.98875 13.5003 7.58121 13.3251 7.28055 13.0128L0.867392 6.35065C0.566822 6.03832 0.397778 5.61457 0.397436 5.1726C0.397095 4.73063 0.565484 4.30662 0.865571 3.99382Z"
        fill="currentColor"
      />
    </svg>
  );
};

const MoreIcon = withIcon(Icon);
MoreIcon.displayName = "MoreIcon";

export default MoreIcon;
