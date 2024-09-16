import "dayjs/locale/en";
import dayjs, { Dayjs } from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

type DateType = string | number | Date | Dayjs | null | undefined;

export const DATE_TIME_FORMATS = {
  ["MMM. D,YYYY"]: "MMM. D,YYYY",
  ["DD/MM-YYYY"]: "DD/MM-YYYY",
  ["MMM. DD"]: "MMM. DD",
} as const;

type DateTimeFormats = keyof typeof DATE_TIME_FORMATS;

const toDayJs = (date: DateType): Dayjs => dayjs(date, { locale: "en" });

export const formatDate = (date: DateType, format: DateTimeFormats) =>
  toDayJs(date).format(format);

const getDateDiff = (startDate: DateType, endDate?: DateType) =>
  dayjs.duration(dayjs(endDate || Date.now()).diff(dayjs(startDate)));

export const formatDateDuration = (date: DateType) => {
  const resultArr = [];
  const diff = getDateDiff(date);
  if (diff.years()) resultArr.push(`${diff.years()}y`);
  if (diff.months()) resultArr.push(`${diff.months()}m`);
  if (diff.days()) resultArr.push(`${diff.days()}d`);

  return resultArr.join(" - ");
};
