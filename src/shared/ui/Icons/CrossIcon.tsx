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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.20937 3.70905C3.4881 3.42989 3.94036 3.42954 4.21952 3.70827L8.00308 7.48598L11.7808 3.70243C12.0595 3.42326 12.5118 3.42292 12.7909 3.70165C13.0701 3.98038 13.0705 4.43264 12.7917 4.7118L9.01401 8.49536L12.7976 12.2731C13.0767 12.5518 13.0771 13.0041 12.7984 13.2832C12.5196 13.5624 12.0674 13.5627 11.7882 13.284L8.00464 9.50629L4.22693 13.2898C3.9482 13.569 3.49593 13.5694 3.21677 13.2906C2.93761 13.0119 2.93726 12.5596 3.21599 12.2805L6.99371 8.49692L3.21015 4.7192C2.93099 4.44047 2.93064 3.98821 3.20937 3.70905Z"
        fill="currentColor"
        fillOpacity="0.6"
      />
    </svg>
  );
};

const CropssIcon = withIcon(Icon);
CropssIcon.displayName = "CropssIcon";

export default CropssIcon;
