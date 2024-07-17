import { TLotsDraw } from "../type/lotsdraw";
import { IListResponse } from "./_getParams";
import { httpDel, httpGet, httpPost, httpPut } from "./_request";

// Lấy danh sách đội thi bốc thăm
export const lotsdrawsGet = async (
  sportId: string,
) => {
  return httpGet<TLotsDraw[]>(
    `/sports/${sportId}/TeamSports`,
  );
};

// export const lotsdrawGet = (id: string) => {
//   return httpGet(`/lotsdraws/${id}`);
// };
//
// export const lotsdrawCreate = (
//   lotsdraw: Omit<TLotsDraw, "id">,
// ) => {
//   return httpPost("/lotsdraws", lotsdraw);
// };
//
export const lotsdrawUpdate = (
  sportId: string,
  lotsdraw: Partial<TLotsDraw>[],
) => {
  return httpPut(`/sports/${sportId}/TeamSports`, lotsdraw);
};
//
// // Xóa bảng đấu theo id
// export const lotsdrawDelete = (id: string) => {
//   return httpDel(`lotsdraws/${id}`);
// };
