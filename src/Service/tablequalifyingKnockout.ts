import {
  TTablequalifyingKnockout,
  TTablequalifyingKnockoutMatchReport,
} from "../type/tablequalifyingKnockout";
import { baseGetParams, IListResponse } from "./_getParams";
import { httpDel, httpGet, httpPost, httpPut } from "./_request";

//  gen hình cây những đội vào vòng trong
export const tablequalifyingKnockoutTreeCreate = async (
  data: {
    number_team: string;
    has_grade_3rd?: boolean;
    sport_id: string;
  },
) => {
  return httpPost<IListResponse<TTablequalifyingKnockout>>(
    "/tablequalifyingKnockouts/padding_filter",
    data,
  );
};

export const tablequalifyingKnockoutsGet = (sportId: string) => {
  return httpGet(`/sports/${sportId}/TableKnockoutMatchs`);
};

// export const tablequalifyingKnockoutCreate = (
//   tablequalifyingKnockout: Omit<TtablequalifyingKnockoutKnockout, "id">,
// ) => {
//   return httpPost("/tablequalifyingKnockouts", tablequalifyingKnockout);
// };

// Cập nhật  kết quả bảng đấu
export const tablequalifyingKnockoutUpdate = (
  tablequalifyingKnockout: TTablequalifyingKnockoutMatchReport,
) => {
  return httpPut(
    `tableknockoutmatchs/${tablequalifyingKnockout.id}`,
    tablequalifyingKnockout,
  );
};

// Xóa bảng đấu theo id
// export const tablequalifyingKnockoutDelete = (id: string) => {
//   return httpDel(`tablequalifyingKnockouts/${id}`);
// };
