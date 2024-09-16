import { IconWrapperProps } from "@shared/hocs";
import { Divider } from "@shared/ui";
import { ClockIcon, PigIcon, PlusIcon } from "@shared/ui/Icons";
import { DATE_TIME_FORMATS, formatDate } from "@shared/utils";
import { Section } from "@widgets/Section";
import { FC } from "react";

type TimeOff = {
  Icon: FC<IconWrapperProps>;
  date: string;
  details?: string;
  description?: string;
};

const timeOffData: TimeOff[] = [
  {
    Icon: PlusIcon,
    date: "2020-01-27T00:00:00.000Z",
    details: "1 day of Sick",
  },
  {
    Icon: PigIcon,
    date: "2020-07-04T00:00:00.000Z",
    description: "Independence Day",
  },
];

const UpcommingBlock: FC = () => {
  return (
    <div className="mt-6">
      <Section
        size="md"
        withDivider
        title="Upcoming Time Off"
        Icon={ClockIcon}
      />
      {timeOffData.map(({ Icon, date, details, description }, index) => (
        <div key={index} className="mt-6">
          <div className="flex gap-3 items-center">
            <Icon size={30} className="text-accent-500" />
            <div className="text-black font-medium text-sm">
              <p>{formatDate(date, DATE_TIME_FORMATS["MMM. DD"])}</p>
              {details && (
                <div className="flex gap-1 items-center">
                  <Divider type="circle" className="bg-accent-500" />
                  {details}
                </div>
              )}
              {!details && description}
            </div>
          </div>
          <Divider className="bg-accent-300 mt-6" />
        </div>
      ))}
    </div>
  );
};

export default UpcommingBlock;
