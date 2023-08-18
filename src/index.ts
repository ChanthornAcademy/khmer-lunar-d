import { lunar } from "khmercal";
import { utils } from "./utils";
import { KhmercalType } from "../types/lunar";
import plugin, { formatRulesType } from "../types";
const { formatKhmerDate } = utils;

import { PluginFunc } from "dayjs";

const toKhDate: PluginFunc<plugin.toKhDate> = (o, c, d) => {
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
};

export default toKhDate;

// Path: src/index.ts
