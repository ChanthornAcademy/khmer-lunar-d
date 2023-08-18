// add type to support dayjs
import { PluginFunc } from "dayjs";

declare const plugin: PluginFunc;
export = plugin;

export interface formatRulesType {
  W: string;
  w: string;
  d: string;
  D: string;
  N: string;
  n: string;
  o: string;
  m: string;
  M: string;
  a: string;
  e: string;
  b: string;
  c: string;
  j: string;
}

declare namespace plugin {
  export interface toKhDate {
    toKhDate(format?: formatRulesType): string;
  }
}

declare module "dayjs" {
  interface Dayjs extends plugin.toKhDate {}
}
