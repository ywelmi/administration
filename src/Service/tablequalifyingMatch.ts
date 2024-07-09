import { AxiosResponse } from "axios";
import {
  TTablequalifyingMatch,
  TTablequalifyingMatchReport,
} from "../type/tablequalifyingMatch";
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
  return httpGet<TTablequalifyingMatch[]>(
    `/tablequalifyings/${table_id}/TableQualifyingMatchs`,
  );
};

// Thêm lịch thi đấu - checked
export const tablequalifyingMatchCreate = (
  tablequalifyingMatch: Omit<TTablequalifyingMatch, "id">,
) => {
  return httpPost<TTablequalifyingMatch>(
    "/tablequalifyings/create_table-qualifying-match",
    tablequalifyingMatch,
  );
};

export const tablequalifyingMatchReportUpdate = (
  tablequalifyingMatchResult: TTablequalifyingMatchReport,
) => {
  return httpPut<TTablequalifyingMatch>(
    `tablequalifyingMatchs/${tablequalifyingMatchResult.id}`,
    tablequalifyingMatchResult,
  );
};

// export const tablequalifyingMatchDelete = (id: string) => {
//   return httpDel(`tablequalifyingMatchs/${id}`);
// };
