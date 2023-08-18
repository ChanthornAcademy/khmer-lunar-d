import { lunar } from "khmercal";
import { utils } from "./utils";
import { KhmercalType } from "./types/lunar";
import { formatRulesType } from "./types/toKhDate";
const { formatKhmerDate } = utils;
import "./types/toKhDate";

export default function toKhDate(o, c, d) {
  const proto = c.prototype;
  proto.toKhDate = function (
    format?: formatRulesType | string | null | undefined,
  ) {
    return formatKhmerDate(
      lunar(new Date(this.format())) as KhmercalType,
      this,
      format,
    );
  };
}
