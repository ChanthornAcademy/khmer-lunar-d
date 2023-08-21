// add type to support dayjs
import { PluginFunc } from "dayjs";

declare const plugin: PluginFunc;
export = plugin;
declare namespace plugin {
  export interface toKhDate {
    toKhDate(format?: string): string;
  }
}

declare module "dayjs" {
  interface Dayjs extends plugin.toKhDate {}
}
