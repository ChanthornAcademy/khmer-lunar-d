import { constant } from "./constsant";
import dayjs from "dayjs";
import { KhmercalType } from "../types/lunar";

// Khmer date format handler
const formatKhmerDate = (
  KhmerLunar: KhmercalType,
  date: dayjs.Dayjs,
  format?: string | string | null | undefined,
): string | undefined => {
  if (format === null || format === undefined || format === "") {
    // Default date format
    const dayOfWeek = date.day();
    const beYear = KhmerLunar.years.BE;

    return constant.postformat(
      `ថ្ងៃ${constant.weekdays[dayOfWeek]} ${KhmerLunar.period[0]}${
        constant.moonStatus[KhmerLunar.period[1]]
      } ខែ${constant.lunarMonths[KhmerLunar.month.name]} ឆ្នាំ${
        constant.animalYears[KhmerLunar.zodiac]
      } ${constant.eraYear[KhmerLunar.sequence + 1]} ពុទ្ធសករាជ ${beYear}`,
    );
  } else if (typeof format === "string") {
    const formatRules: { [key: string]: () => any } = {
      W: () => {
        return constant.weekdays[date.day()];
      },
      w: () => {
        return constant.weekdaysShort[date.day()];
      },
      d: () => {
        return KhmerLunar.period[0];
      },
      D: () => {
        const moonDay = KhmerLunar.period[0];
        return ("" + moonDay).length === 1 ? `០${moonDay}` : moonDay;
      },
      N: () => {
        return constant.moonStatus[KhmerLunar.period[1]];
      },
      n: () => {
        return constant.moonStatusShort[KhmerLunar.period[1]];
      },
      o: () => {
        return constant.moonDays[KhmerLunar.day];
      },
      m: () => {
        return constant.lunarMonths[KhmerLunar.month.name];
      },
      M: () => {
        return constant.months[date.month()];
      },
      a: () => {
        return constant.animalYears[KhmerLunar.zodiac];
      },
      e: () => {
        return constant.eraYear[KhmerLunar.sequence + 1];
      },
      b: () => {
        return KhmerLunar.years.BE;
      },
      c: () => {
        return date.year();
      },
      j: () => {
        return KhmerLunar.years.JE;
      },
    };
    return constant.postformat(
      format.replace(new RegExp(Object.keys(formatRules).join("|"), "g"), (m) =>
        formatRules[m](),
      ),
    );
  }
};
export const utils = {
  formatKhmerDate: formatKhmerDate,
};
