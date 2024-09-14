import { List } from "@shared/ui";
import {
  ClockIcon,
  FacebookIcon,
  HashIcon,
  InstaIcon,
  LocationIcon,
  TwitterIcon,
  UsersIcon,
  WorldIcon,
} from "@shared/ui/Icons";
import {
  DATE_TIME_FORMATS,
  formatDate,
  formatDateDuration,
} from "@shared/utils";
import { MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

type PersonalData = {
  phone: string;
  email: string;
  instaLink: string;
  facebookLink: string;
  twitterLink: string;
};

export const getContactsCardDetails = ({
  phone,
  email,
  instaLink,
  facebookLink,
  twitterLink,
}: PersonalData): ReactNode => (
  <div className="flex flex-col gap-4">
    <div className="flex gap-2 items-center">
      <PhoneIcon size={16} className="text-accent-500" />
      <Link href={`tel:${phone}`}>{phone}</Link>
    </div>
    <div className="flex gap-2 items-center">
      <MailIcon size={16} className="text-accent-500" />
      <Link href={`mailto:${email}`}>{email}</Link>
    </div>
    <div className="flex gap-4 items-center">
      <Link href={instaLink}>
        <InstaIcon size={16} className="text-accent-500" />
      </Link>
      <Link href={facebookLink}>
        <FacebookIcon size={16} className="text-accent-500" />
      </Link>
      <Link href={twitterLink}>
        <TwitterIcon size={16} className="text-accent-500" />
      </Link>
    </div>
  </div>
);

type HireData = {
  date: string;
};

export const getHireCardDetails = ({ date }: HireData): ReactNode => (
  <div className="flex flex-col gap-2">
    <p>{formatDate(date, DATE_TIME_FORMATS["MMM. D,YYYY"])}</p>
    <p>{formatDateDuration(date)}</p>
  </div>
);

type CommonData = {
  number: number;
  time: string;
  operations: string;
  region: string;
  location: string;
};

export const getCommonCardDetails = ({
  number,
  time,
  operations,
  region,
  location,
}: CommonData): ReactNode => (
  <div className="flex flex-col gap-2">
    <div className="flex gap-2 items-center">
      <HashIcon size={16} className="text-accent-500" />
      <p>{number}</p>
    </div>
    <div className="flex gap-2 items-center">
      <ClockIcon size={16} className="text-accent-500" />
      <p>{time}</p>
    </div>
    <div className="flex gap-2 items-center">
      <UsersIcon size={16} className="text-accent-500" />
      <p>{operations}</p>
    </div>
    <div className="flex gap-2 items-center">
      <WorldIcon size={16} className="text-accent-500" />
      <p>{region}</p>
    </div>
    <div className="flex gap-2 items-center">
      <LocationIcon size={16} className="text-accent-500" />
      <p>{location}</p>
    </div>
  </div>
);

export const getReportsCardDetails = (reports: string[]): ReactNode => (
  <div className="flex flex-col gap-2">
    <List items={reports} />
  </div>
);
