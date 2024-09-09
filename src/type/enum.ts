export type TDict = {
  k: string;
  v: string | number;
};

export enum ETable {
  KNOCKOUT = 0,
  QUALIFYING = 1,
  MARTIALART = 2,
}

export const DGender = ["Nữ", "Nam"];
export const DRank = [
  { name: "Không có", code: "Không có" },
  { name: "Binh nhì", code: "B2" },
  { name: "Binh nhất", code: "B1" },
  { name: "Hạ sĩ", code: "H1" },
  { name: "Trung sĩ", code: "H2" },
  { name: "Thượng sĩ", code: "H3" },
  { name: "Thiếu úy", code: "1/" },
  { name: "Thiếu úy CN", code: "1/ CN" },
  { name: "Trung úy", code: "2/" },
  { name: "Trung úy CN", code: "2/ CN" },
  { name: "Thượng úy", code: "3/" },
  { name: "Thượng úy CN", code: "3/ CN" },
  { name: "Đại úy", code: "4/" },
  { name: "Đại úy CN", code: "4/ CN" },
  { name: "Thiếu tá", code: "1//" },
  { name: "Thiếu tá CN", code: "1// CN" },
  { name: "Trung tá", code: "2//" },
  { name: "Trung tá CN", code: "2// CN" },
  { name: "Thượng tá", code: "3//" },
  { name: "Thượng tá CN", code: "3// CN" },
  { name: "Đại tá", code: "4//" },
  { name: "Thiếu tướng", code: "Thiếu tướng" },
  { name: "Trung tướng", code: "Trung tướng" },
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

export enum EMatchTurnTeamEnum {
  BongBan = "bongban",
  DanQuanBoiVuTrang = "danquan_boivutrang",
  VuotVatCan = "vuotvatcan",
  BoiVuTrang = "boivutrang",
  CauLong = "caulong",
  BongChuyenNam = "bongchuyennam",
  QuanVot = "quanvot",
  ChayVuTrang3000m = "chayvutrang3000m",
  DanQuanBaMonQuanSu = "danquan_bamonquansu",
  VoChienDauTayKhong = "vochiendautaykhong",
  DanQuanVoChienDau = "danquan_vochiendau",
  ChienSyKhoe = "chiensykhoe",
}

export const getMatchTurnTeam = (team: EMatchTurnTeamEnum) => {
  switch (team) {
    case EMatchTurnTeamEnum.BongBan:
      return ["(A-X)", "(B-Y)", "(Đôi)", "(A-Y)", "(B-X)"];
    case EMatchTurnTeamEnum.QuanVot:
      return ["(A - X)", "(B - Y)", "(CA - ZX)", "(B - Z)", "(C - Y)"];
    case EMatchTurnTeamEnum.DanQuanBoiVuTrang:
    case EMatchTurnTeamEnum.VuotVatCan:
    case EMatchTurnTeamEnum.BoiVuTrang:
    case EMatchTurnTeamEnum.CauLong:
    case EMatchTurnTeamEnum.BongChuyenNam:
    case EMatchTurnTeamEnum.ChayVuTrang3000m:
    case EMatchTurnTeamEnum.DanQuanBaMonQuanSu:
    case EMatchTurnTeamEnum.VoChienDauTayKhong:
    case EMatchTurnTeamEnum.DanQuanVoChienDau:
    case EMatchTurnTeamEnum.ChienSyKhoe:
  }
  return DMatchTurnTeam;
};

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
