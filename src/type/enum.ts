export type TDict = {
  k: string;
  v: string | number;
};

export enum ETable {
  KNOCKOUT = 0,
  QUALIFYING = 1,
}

export const DGender = ["Nữ", "Nam"];
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

export const DTime: TDict[] = [
  {
    v: "1",
    k: "Sáng",
  },
  {
    v: "2",
    k: "Chiều",
  },
  {
    v: "3",
    k: "Tối",
  },
];

export const DMatchTurnTeam = [
  "Đôi nam",
  "Đôi nữ",
  "Đồng đội nam",
  "Đồng đội nữ",
  "Đôi nam nữ",
];

export enum DSportType {
  LotDraw,
  TableQualifying,
  MartialArt,
  PlayOff,
}

//1. Trung tấm Huấn luyện quân sự quốc gia (TTHLQSQG4): Bóng chuyền, Chiến sĩ khỏe, Chạy vũ trang 3000m vượt chướng ngại vật, vượt vật cản, bơi vũ trang, ba môn TTQSPH và bơi vũ trang DQTV. 2. Trường Sĩ quan Đặc công/BCĐC: thi đấu môn võ chiến đấu DQTV. 3. Trường Sĩ quan chính trị/SQCT: Thi đấu quần vợt, cầu lông, bóng bàn. 4. Trường Sĩ quan lục quân 1/SQLQ1: Thi đấu võ chiến đấu tay không LLTTQĐ.
export const DSportLocation = [
  "Trung tấm Huấn luyện quân sự quốc gia (TTHLQSQG4)",
  "Trường Sĩ quan Đặc công/BCĐC",
  "Trường Sĩ quan chính trị/SQCT",
  "Trường Sĩ quan lục quân 1/SQLQ1",
];

export const DUnit = {
  LLTT: 1,
  DQTV: 2,
};

export type DUnitType = keyof typeof DUnit;
