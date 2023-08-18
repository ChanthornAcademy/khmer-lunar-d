import { constant } from "./constsant";
import dayjs from "dayjs";
import { KhmercalType } from "./types/lunar";

import { formatRulesType } from "./types/toKhDate";
// Khmer date format handler
const formatKhmerDate = (
  KhmerLunar: KhmercalType,
  date: dayjs.Dayjs,
  format?: formatRulesType | string | null | undefined,
): string | undefined => {
  if (format === null || format === undefined || format === "") {
    // Default date format
    const dayOfWeek = date.day();
    const beYear = KhmerLunar.years.BE;

    return constant.kh.postformat(
      `ថ្ងៃ${constant.kh.weekdays[dayOfWeek]} ${KhmerLunar.period[0]}${
        constant.kh.moonStatus[KhmerLunar.period[1]]
      } ខែ${constant.kh.lunarMonths[KhmerLunar.month.name]} ឆ្នាំ${
        constant.kh.animalYears[KhmerLunar.zodiac]
      } ${constant.kh.eraYear[KhmerLunar.sequence + 1]} ពុទ្ធសករាជ ${beYear}`,
    );
  } else if (typeof format === "string") {
    const formatRules: { [key: string]: () => any } = {
      W: () => {
        return constant.kh.weekdays[date.day()];
      },
      w: () => {
        return constant.kh.weekdaysShort[date.day()];
      },
      d: () => {
        return KhmerLunar.period[0];
      },
      D: () => {
        const moonDay = KhmerLunar.period[0];
        return ("" + moonDay).length === 1 ? `០${moonDay}` : moonDay;
      },
      N: () => {
        return constant.kh.moonStatus[KhmerLunar.period[1]];
      },
      n: () => {
        return constant.kh.moonStatusShort[KhmerLunar.period[1]];
      },
      o: () => {
        return constant.kh.moonDays[KhmerLunar.day];
      },
      m: () => {
        return constant.kh.lunarMonths[KhmerLunar.month.name];
      },
      M: () => {
        return constant.kh.months[date.month()];
      },
      a: () => {
        return constant.kh.animalYears[KhmerLunar.zodiac];
      },
      e: () => {
        return constant.kh.eraYear[KhmerLunar.sequence + 1];
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
    return constant.kh.postformat(
      format.replace(new RegExp(Object.keys(formatRules).join("|"), "g"), (m) =>
        formatRules[m](),
      ),
    );
  }
};
export const utils = {
  formatKhmerDate: formatKhmerDate,
};
