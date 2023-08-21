let symbolMap = {
    1: "១",
    2: "២",
    3: "៣",
    4: "៤",
    5: "៥",
    6: "៦",
    7: "៧",
    8: "៨",
    9: "៩",
    0: "០",
  },
  numberMap = {
    "១": 1,
    "២": 2,
    "៣": 3,
    "៤": 4,
    "៥": 5,
    "៦": 6,
    "៧": 7,
    "៨": 8,
    "៩": 9,
    "០": 0,
  };

const lunarMonths: { [key: string]: string } = {
  MĬKÔSĔR: "មិគសិរ",
  BŎSS: "បុស្ស",
  MÉAKH: "មាឃ",
  PHÂLKŬN: "ផល្គុន",
  CHÉTR: "ចេត្រ",
  VĬSAKH: "ពិសាខ",
  CHÉSTH: "ជេស្ឋ",
  ASATH: "អាសាឍ",
  BÂTHÂMSATH: "បឋមាសាឍ",
  TŬTĔYÉASATH: "ទុតិយាសាឍ",
  SRAPÔNÂ: "ស្រាពណ៍",
  PHÔTRÔBÂT: "ភទ្របទ",
  ÂSSŎCH: "អស្សុជ",
  KÂTDĔK: "កក្ដិក",
};

const lunarMonthsShort: { [key: string]: string } = {
  MĬKÔSĔR: "មិគសិរ",
  BŎSS: "បុស្ស",
  MÉAKH: "មាឃ",
  PHÂLKŬN: "ផល្គុន",
  CHÉTR: "ចេត្រ",
  VĬSAKH: "ពិសាខ",
  CHÉSTH: "ជេស្ឋ",
  ASATH: "អាសាឍ",
  BÂTHÂMSATH: "បឋមាសាឍ",
  TŬTĔYÉASATH: "ទុតិយាសាឍ",
  SRAPÔNÂ: "ស្រាពណ៍",
  PHÔTRÔBÂT: "ភទ្របទ",
  ÂSSŎCH: "អស្សុជ",
  KÂTDĔK: "កក្ដិក",
};
const animalYears: { [key: string]: string } = {
  JUTE: "ជូត",
  CHLOV: "ឆ្លូវ",
  KARL: "ខាល",
  THOS: "ថោះ",
  RORNG: "រោង",
  MASAGN: "ម្សាញ់",
  MOMEE: "មមីរ",
  MOMAY: "មមែ",
  VOKE: "វក",
  ROKA: "រកា",
  JOR: "ច",
  KAOR: "កុរ",
};

const moonStatus: { [key: string]: string } = {
  K: "កើត",
  R: "រោច",
};
const moonStatusShort: { [key: string]: string } = {
  K: "ក",
  R: "រ",
};

export const constant = {
  months:
    "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split(
      "_",
    ),
  monthsShort:
    "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split(
      "_",
    ),
  moonDays: "᧡_᧢_᧣_᧤_᧥_᧦_᧧_᧨_᧩_᧪_᧫_᧬_᧭_᧮_᧯_᧱_᧲_᧳_᧴_᧵_᧶_᧷_᧸_᧹_᧺_᧻_᧼_᧽_᧾_᧿".split(
    "_",
  ),
  moonStatus: moonStatus,
  moonStatusShort: moonStatusShort,
  weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
  weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
  weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
  lunarMonths: lunarMonths,
  lunarMonthsShort: lunarMonthsShort,
  animalYears: animalYears,
  eraYear:
    "សំរឹទ្ធិស័ក_ឯកស័ក_ទោស័ក_ត្រីស័ក_ចត្វាស័ក_បញ្ចស័ក_ឆស័ក_សប្តស័ក_អដ្ឋស័ក_នព្វស័ក".split(
      "_",
    ),
  preparse: function (number: any) {
    return number.toString().replace(/[០១២៣៤៥៦៧៨៩]/g, (m) => numberMap[m]);
  },
  postformat: function (number: any) {
    return number.toString().replace(/\d/g, (m) => symbolMap[m]);
  },
};
