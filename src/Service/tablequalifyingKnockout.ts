import {
  IKnockoutCreate,
  IKnockoutRoundPair,
  TTablequalifyingKnockout,
  TTablequalifyingKnockoutMatchReport,
} from "../type/tablequalifyingKnockout";
import { IListResponse } from "./_getParams";
import { httpGet, httpPost, httpPut } from "./_request";

//  gen hình cây những đội vào vòng trong
export const tablequalifyingKnockoutTreeCreate = async (data: {
  number_team: string;
  has_grade_3rd?: boolean;
  sport_id: string;
}) => {
  return httpPost<IListResponse<TTablequalifyingKnockout>>(
    "/tablequalifyingKnockouts/padding_filter",
    data
  );
};

export const tablequalifyingKnockoutsGet = (sportId: string) => {
  return httpGet<TTablequalifyingKnockout[]>(
    `/sports/${sportId}/TableKnockoutMatchs`
  );
};

export const tablequalifyingKnockoutGen = (config: IKnockoutCreate) => {
  return httpPost(`tableknockoutmatchs`, config);
};

// Cập nhật cặp đấu ở vòng loại trực tiếp
export const tablequalifyingKnockoutPairUpdate = (
  pair: Pick<TTablequalifyingKnockout, "id" | "team1_id" | "team2_id">
) => {
  return httpPost(`/tableknockoutmatchs/${pair.id}/updateTeam`, pair);
};

// Cập nhật  kết quả bảng đấu
export const tablequalifyingKnockoutUpdate = (
  tablequalifyingKnockout: TTablequalifyingKnockoutMatchReport
) => {
  return httpPut(
    `tableknockoutmatchs/${tablequalifyingKnockout.id}`,
    tablequalifyingKnockout
  );
};

export const tablequalifyingKnockoutResultUpdate = (matchId: string) => {
  return httpPut(`tableknockoutmatchs/${matchId}/update_result`);
};

// Cập nhật thông tin cặp đấu
export const tablequalifyingKnockoutPairInfoUpdate = (
  knockoutPair: IKnockoutRoundPair
) => {
  return httpPost(
    `tableknockoutmatchs/${knockoutPair.id}/UpdateLocationTime`,
    knockoutPair
  );
};

// Xóa bảng đấu theo id
// export const tablequalifyingKnockoutDelete = (id: string) => {
//   return httpDel(`tablequalifyingKnockouts/${id}`);
// };
