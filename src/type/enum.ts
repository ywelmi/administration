export const DGender = ["Nam", "Nữ"];
export const DRank = [
  "Binh nhì",
  "Hạ sĩ",
  "Binh nhất",
  "Trung sĩ",
  "Thượng sĩ",
  "Thiếu úy QNCN",
  "Trung úy QNCN",
  "Thượng úy QNCN",
  "Đại úy QNCN",
  "Thiếu tá QNCN",
  "Trung tá QNCN",
  "Thượng tá QNCN",
  "Thiếu uý",
  "Trung uý",
  "Thượng uý",
  "Đại uý",
  "Thiếu tá",
  "Trung tá",
  "Thượng tá",
  "Đại tá",
  "Thiếu tướng",
  "Trung tướng",
  "Thượng tướng",
  "Đại tướng",
];

export const DHour = [
  "Sáng",
  "Chiều",
];

export enum DSportType {
  LotDraw,
  TableQualifying,
  MartialArt,
  PlayOff,
}

export const DUnit = {
  LLTT: 1,
  DQTV: 2,
};

export type DUnitType = keyof typeof DUnit;
