import { lunar } from "khmercal";
import { utils } from "./utils";
import { KhmercalType } from "../types/lunar";
import plugin, { formatRulesType } from "../types";
const { formatKhmerDate } = utils;
import { constant } from "./constsant";

import { PluginFunc } from "dayjs";

const toKhDate: PluginFunc<plugin.toKhDate> = (o, c, d) => {
  const proto = c.prototype;
  proto.toKhDate = function (format?: formatRulesType) {
    const date = constant.kh.preparse(this.format());
    return formatKhmerDate(lunar(date) as KhmercalType, this, format);
  };
};

export default toKhDate;

// Path: src/index.ts
