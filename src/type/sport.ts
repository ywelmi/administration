import { DUnit, DUnitType, EMatchTurnTeamEnum } from "./enum";

export interface TSport {
  id: string;
  competition_id: string;
  code: EMatchTurnTeamEnum;
  name: string;
  competition_name?: string;
  for_type: (typeof DUnit)[DUnitType];

  // thằng 1 thì nó sẽ là các môn bốc thăm, 2 là môn vòng bảng vòng loại(4 môn), 4 là môn võ chiến đấu tay không nha Huy
  // 1, 2 đều là bốc thăm, 3 là môn võ, 4 là môn có vòng bảng, 5 là chỉ đấu loại trực tiếp - tương đồng môn võ
  point_unit: number;
  sport_location?: string;
}
