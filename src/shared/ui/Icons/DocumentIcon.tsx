import { IconWrapperProps, withIcon } from "@shared/hocs";
import { FC } from "react";

const Icon: FC<IconWrapperProps> = (props) => (
  <svg
    viewBox="0 0 34 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24 23.5V29.5C24 29.8978 23.842 30.2794 23.5607 30.5607C23.2794 30.842 22.8978 31 22.5 31H3C2.60218 31 2.22064 30.842 1.93934 30.5607C1.65804 30.2794 1.5 29.8978 1.5 29.5V5.5C1.5 5.10218 1.65804 4.72064 1.93934 4.43934C2.22064 4.15804 2.60218 4 3 4H13.5"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 25H7.5M13.5 19H7.5"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.0641 3.07016C20.8761 3.07185 18.7783 3.94267 17.2323 5.49104C15.6864 7.03941 14.8188 9.1385 14.8205 11.3265C14.8213 12.4099 15.0355 13.4826 15.4509 14.4832C15.8663 15.4838 16.4747 16.3928 17.2413 17.1583C18.008 17.9238 18.918 18.5308 19.9192 18.9446C20.9205 19.3585 21.9934 19.571 23.0769 19.5702C24.1603 19.5693 25.2329 19.3551 26.2335 18.9397C27.2341 18.5244 28.1431 17.916 28.9086 17.1493C29.6741 16.3826 30.2811 15.4727 30.6949 14.4714C31.1088 13.4702 31.3213 12.3972 31.3205 11.3138C31.3188 9.12576 30.448 7.02801 28.8996 5.48203C27.3512 3.93604 25.2521 3.06847 23.0641 3.07016ZM15.7728 4.03376C17.7053 2.09829 20.3275 1.00977 23.0625 1.00766C25.7976 1.00555 28.4214 2.09001 30.3569 4.02249C32.2924 5.95497 33.3809 8.57715 33.383 11.3122C33.384 12.6665 33.1183 14.0077 32.601 15.2592C32.0838 16.5108 31.325 17.6482 30.3682 18.6066C29.4113 19.5649 28.275 20.3254 27.0243 20.8446C25.7735 21.3639 24.4327 21.6316 23.0784 21.6327C21.7242 21.6337 20.383 21.368 19.1314 20.8507C17.8798 20.3335 16.7424 19.5747 15.7841 18.6178C14.8257 17.661 14.0652 16.5247 13.546 15.274C13.0268 14.0232 12.759 12.6824 12.758 11.3281C12.7559 8.59309 13.8403 5.96922 15.7728 4.03376ZM23.0665 6.16391C23.636 6.16347 24.0981 6.62482 24.0985 7.19437L24.1014 10.8922L26.8953 13.6818C27.2983 14.0842 27.2988 14.7371 26.8964 15.1402C26.494 15.5432 25.841 15.5437 25.438 15.1413L22.3418 12.0499C22.1483 11.8567 22.0394 11.5945 22.0392 11.321L22.036 7.19596C22.0356 6.62642 22.497 6.16435 23.0665 6.16391Z"
      fill="currentColor"
    />
  </svg>
);

const DocumentIcon = withIcon(Icon);

DocumentIcon.displayName = "DocumentIcon";
export default DocumentIcon;
