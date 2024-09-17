import { Divider, Section } from "@shared/ui";
import { ClockIcon } from "@shared/ui/Icons";
import { DATE_TIME_FORMATS, formatDate } from "@shared/utils";
import { timeOffData } from "@shared/mocks/upcoming";
import { FC } from "react";

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
