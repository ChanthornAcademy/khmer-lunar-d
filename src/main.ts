import { lunar } from "khmercal";
import { utils } from "./utils";
import { KhmercalType } from "./lunar";
const { formatKhmerDate } = utils;

export default function toKhDate(o, c, d) {
  const proto = c.prototype;
  proto.toKhDate = function (format?: string) {
    return formatKhmerDate(
      lunar(new Date(this.format())) as KhmercalType,
      this,
      format,
    );
  };
}
