import {
  TTablequalifyingMatch,
  TTablequalifyingMatchReport,
  TTableQualifyingMember,
} from "../type/tablequalifyingMatch";
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
  return httpGet<TTablequalifyingMatch[]>(
    `/tablequalifyings/${table_id}/TableQualifyingMatchs`
  );
};

// Thêm lịch thi đấu - checked
export const tablequalifyingMatchCreate = (
  tablequalifyingMatch: Omit<TTablequalifyingMatch, "id">
) => {
  return httpPost<TTablequalifyingMatch>(
    "/tablequalifyings/create_table-qualifying-match",
    tablequalifyingMatch
  );
};

export const tablequalifyingMatchReportUpdate = (
  tablequalifyingMatchResult: TTablequalifyingMatchReport
) => {
  return httpPut<TTablequalifyingMatch>(
    `tablequalifyingMatchs/${tablequalifyingMatchResult.id}/update_result`
  );
};

export const tablequalifyingMatchMembersGet = (tableId: string) => {
  return httpGet<TTableQualifyingMember[]>(
    `tablequalifyings/${tableId}/TableQualifyingMembers`
  );
};

export const tablequalifyingMatchDelete = (id: string) => {
  return httpDel(`tablequalifyingmatchs/${id}`);
};

export const tablequalifyingMatchUpdate = (
  tablequalifyingMatchResult: TTablequalifyingMatch
) => {
  return httpPut<TTablequalifyingMatch>(
    `tablequalifyingmatchs/${tablequalifyingMatchResult.id}`,
    tablequalifyingMatchResult
  );
};
