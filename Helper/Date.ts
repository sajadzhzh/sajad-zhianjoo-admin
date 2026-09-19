import dayjs from "dayjs";
import jalaliday from "jalaliday";

dayjs.extend(jalaliday);

export function toJalaliDate(
  date: string
): string {
  return dayjs(date.replace("Z", ""))
    .calendar("jalali")
    .locale("fa")
    .format("YYYY/MM/DD HH:mm");
}
