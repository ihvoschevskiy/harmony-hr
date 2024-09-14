import { withIcon, IconWrapperProps } from "@shared/hocs";
import { FC } from "react";

const Icon: FC<IconWrapperProps> = (props) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 0C11.3138 0 14 2.32004 14 6.29724C14 7.87619 13.0545 9.82038 11.9141 11.5916L11.7225 11.8849C11.6578 11.9821 11.5929 12.0787 11.528 12.1746L11.3311 12.4599L11.2322 12.6008L11.0342 12.8788L10.8355 13.1506L10.6379 13.4168L10.4416 13.6759L10.2475 13.9278L10.0562 14.1714L9.86882 14.4068L9.68565 14.6328L9.42129 14.9543L9.17141 15.2519L8.93847 15.5244L8.86541 15.6092C8.38753 16.1408 7.58529 16.1196 7.13494 15.6092L6.90835 15.346L6.66412 15.0564L6.49224 14.8499L6.31471 14.6331L6.03835 14.2904L5.84882 14.0508L5.65612 13.8032L5.46094 13.5477L5.26365 13.2852L5.06529 13.0161L4.86694 12.741C4.80106 12.6482 4.73518 12.5546 4.66929 12.4602L4.47235 12.1752L4.27788 11.8852L4.08624 11.5919C2.94553 9.82038 2 7.87619 2 6.29724C2 2.32004 4.68624 0 8 0ZM8 1.32573C5.30988 1.32573 3.41176 3.20894 3.41176 6.29724C3.41176 7.40589 4.028 8.8864 5.03882 10.522L5.21635 10.8037L5.40094 11.0884L5.59294 11.3758L5.69141 11.5203L5.89365 11.8106L6.10259 12.1033L6.31788 12.3976L6.53918 12.6932L6.76647 12.9902L6.88224 13.1394L7.118 13.4376L7.33153 13.7025L7.44165 13.8367C7.50761 13.9167 7.59222 13.9815 7.68897 14.0261C7.78572 14.0706 7.89206 14.0938 7.99982 14.0938C8.10759 14.0938 8.21392 14.0706 8.31068 14.0261C8.40743 13.9815 8.49203 13.9167 8.558 13.8367L8.75847 13.5914L8.99706 13.2918L9.23035 12.9935L9.458 12.6962L9.68 12.3999L9.89529 12.1053C9.96635 12.0074 10.0361 11.9097 10.1046 11.8123L10.3072 11.5216C10.4733 11.2799 10.6319 11.0408 10.7829 10.8044L10.9601 10.5227C11.9724 8.88574 12.5882 7.40522 12.5882 6.29724C12.5882 3.20894 10.6901 1.32573 8 1.32573ZM8 2.9829C8.74885 2.9829 9.46702 3.26225 9.99654 3.7595C10.5261 4.25675 10.8235 4.93116 10.8235 5.63437C10.8235 6.33759 10.5261 7.012 9.99654 7.50924C9.46702 8.00649 8.74885 8.28584 8 8.28584C7.25115 8.28584 6.53298 8.00649 6.00346 7.50924C5.47395 7.012 5.17647 6.33759 5.17647 5.63437C5.17647 4.93116 5.47395 4.25675 6.00346 3.7595C6.53298 3.26225 7.25115 2.9829 8 2.9829ZM8 4.30864C7.62558 4.30864 7.26649 4.44831 7.00173 4.69694C6.73697 4.94556 6.58824 5.28277 6.58824 5.63437C6.58824 5.98598 6.73697 6.32318 7.00173 6.57181C7.26649 6.82043 7.62558 6.96011 8 6.96011C8.37442 6.96011 8.73351 6.82043 8.99827 6.57181C9.26303 6.32318 9.41177 5.98598 9.41177 5.63437C9.41177 5.28277 9.26303 4.94556 8.99827 4.69694C8.73351 4.44831 8.37442 4.30864 8 4.30864Z"
        fill="currentColor"
      />
    </svg>
  );
};

const LocationIcon = withIcon(Icon);
LocationIcon.displayName = "LocationIcon";

export default LocationIcon;
