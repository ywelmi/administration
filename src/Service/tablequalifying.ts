import { TTablequalifying } from "../type/tablequalifying";
import { TTableQualifyingMember } from "../type/tablequalifyingMatch";
import { TTeammember } from "../type/teammember";
import { baseGetParams, IListResponse } from "./_getParams";
import { httpDel, httpGet, httpPost, httpPut } from "./_request";

// Lấy danh sách bảng đấu của 1 môn thi
export const tablequalifyingsGet = async (
  params = baseGetParams,
) => {
  return httpPost<IListResponse<TTablequalifying>>(
    "/tablequalifyings/padding_filter",
    params,
  );
};

export const tablequalifyingGet = (id: string) => {
  return httpGet(`/tablequalifyings/${id}`);
};

export const tablequalifyingMembersGet = (id: string) => {
  return httpGet<TTableQualifyingMember[]>(
    `/tablequalifyings/${id}/TableQualifyingMembers`,
  );
};
export const tablequalifyingCreate = (
  tablequalifying: Omit<TTablequalifying, "id">,
) => {
  return httpPost("/tablequalifyings", tablequalifying);
};

export const tablequalifyingUpdate = (tablequalifying: TTablequalifying) => {
  return httpPut(`tablequalifyings/${tablequalifying.id}`, tablequalifying);
};

// Xóa bảng đấu theo id
export const tablequalifyingDelete = (id: string) => {
  return httpDel(`tablequalifyings/${id}`);
};
