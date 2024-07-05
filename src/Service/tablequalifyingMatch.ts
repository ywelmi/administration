import { TTablequalifyingMatch } from "../type/tablequalifyingMatch";
import { baseGetParams, IListResponse } from "./_getParams";
import { httpDel, httpGet, httpPost, httpPut } from "./_request";

// export const tablequalifyingMatchsGet = async (
//   params = baseGetParams,
// ) => {
//   return httpPost<IListResponse<TTablequalifyingMatch>>(
//     "tablequalifyingMatchs/${tablequalifyingMatch.id}",
//     params,
//   );
// };

// lấy toàn lịch thi đấu của một bảng đấu  theo id bảng đấu
export const tablequalifyingMatchsGet = (table_id: string) => {
  return httpGet<IListResponse<TTablequalifyingMatch>>(
    `/tablequalifyings/${table_id}/TableQualifyingMatchs`,
  );
};

// Thêm lịch thi đấu - checked
export const tablequalifyingMatchCreate = (
  tablequalifyingMatch: Omit<TTablequalifyingMatch, "id">,
) => {
  return httpPost(
    "/tablequalifyings/create_table-qualifying-match",
    tablequalifyingMatch,
  );
};

// export const tablequalifyingMatchUpdate = (tablequalifyingMatch: TTablequalifyingMatch) => {
//   return httpPut(`tablequalifyingMatchs/${tablequalifyingMatch.id}`, tablequalifyingMatch);
// };
//
// export const tablequalifyingMatchDelete = (id: string) => {
//   return httpDel(`tablequalifyingMatchs/${id}`);
// };
