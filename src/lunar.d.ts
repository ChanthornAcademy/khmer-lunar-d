export interface KhmercalType {
  day: number;
  period: Array<number | string>;
  sequence: number;
  zodiac: string;
  years: Years;
  length: number;
  monthLength: number;
  month: Month;
  months: string[];
}

export interface Month {
  name: string;
  index: number;
}

export interface Years {
  JE: number;
  CE: number;
  BE: number;
}
