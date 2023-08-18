// add type to support dayjs
import { PluginFunc } from "dayjs";

declare const plugin: PluginFunc;
export = plugin;

export interface formatRulesType {
  W: () => any;
  w: () => any;
  d: () => any;
  D: () => any;
  N: () => any;
  n: () => any;
  o: () => any;
  m: () => any;
  M: () => any;
  a: () => any;
  e: () => any;
  b: () => any;
  c: () => any;
  j: () => any;
}

declare module "dayjs" {
  interface Dayjs {
    toKhDate(
      format?: formatRulesType | string | null | undefined,
    ): string | undefined;
  }
}
