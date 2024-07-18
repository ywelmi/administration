import {
  ILotsDrawResultTemplate,
  TLotsDraw,
  TLotsDrawMember,
  TLotsDrawResult,
} from "../type/lotsdraw";
import { httpDel, httpGet, httpPost, httpPut } from "./_request";

// Lấy danh sách đội thi bốc thăm
export const lotsdrawsGet = async (
  sportId: string,
) => {
  return httpGet<TLotsDraw[]>(
    `/sports/${sportId}/TeamSports`,
  );
};

// Cập nhật bốc thăm môn thi
export const lotsdrawUpdate = (
  sportId: string,
  lotsdraw: Partial<TLotsDraw>[],
) => {
  return httpPut(`/sports/${sportId}/TeamSports`, lotsdraw);
};

// lấy danh sách Cập nhật điểm cho đơn vị theo môn thi
export const lotsdrawResultTableGet = (org_id: string, sport_id: string) => {
  return httpPost<ILotsDrawResultTemplate>(
    `orgs/${org_id}/SportTicketMembers`,
    {
      org_id,
      sport_id,
    },
  );
};

// Thực hiện Cập nhật điểm cho đơn vị theo môn thi bốc thăm
export const lotsdrawResultUpdate = (
  orgId: string,
  lotsdrawResult: Partial<TLotsDrawMember>[],
) => {
  return httpPut(`/orgs/${orgId}/SportTicketMembers`, lotsdrawResult);
};
