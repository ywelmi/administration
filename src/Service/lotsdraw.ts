import { ILotsDrawResultTemplate, TLotsDraw, TLotsDrawMember, TLotsDrawUpdateAthele } from "../type/lotsdraw";
import { baseGetParams } from "./_getParams";
import { httpDel, httpGet, httpPost, httpPut } from "./_request";

// Lấy danh sách đội thi bốc thăm
export const lotsdrawsGet = async (sportId: string, content_id: string) => {
    return httpGet<TLotsDraw[]>(`/sports/${sportId}/TeamSports?contentId=${content_id}`);
};
// Lấy danh sách đội thi không có content_id
export const lotsdrawsGetNotContentId = async (sportId: string) => {
    return httpGet<TLotsDraw[]>(`/sports/${sportId}/TeamSports`);
};

// Lấy danh sách các nội dung thi của 1 môn
export const getContentSport = async (sportId: string) => {
    return httpGet<[]>(`/sports/${sportId}/SportContents`);
};
// Lấy danh sách các vận động viên tham gia một nội dung thi
export const getNumberAthele = async (contentId: string) => {
    return httpGet<number>(`/sports/content/${contentId}/count-member`);
};

// Cập nhật bốc thăm môn thi
export const lotsdrawUpdate = (sportId: string, content_id: string, lotsdraw: any) => {
    return httpPut(`/sports/${sportId}/TeamSports`, lotsdraw);
};

// lấy danh sách Cập nhật điểm cho đơn vị theo môn thi
export const lotsdrawResultTableGet = (org_id: string, sport_id: string, content_id: string) => {
    return httpPost<ILotsDrawResultTemplate>(`orgs/${org_id}/SportTicketMembers`, {
        org_id,
        sport_id,
        content_id,
    });
};
// lấy danh sách VĐV đã map với thăm
export const getMapTicketAthele = async (sportId: string, team_id: string, content_id: string) => {
    return httpGet<TLotsDrawUpdateAthele[]>(
        `/sports/${sportId}/ticket_member?teamId=${team_id}&contentId=${content_id}`
    );
};

// Thực hiện Cập nhật điểm cho đơn vị theo môn thi bốc thăm
export const lotsdrawResultUpdate = (orgId: string, lotsdrawResult: Partial<TLotsDrawMember>[]) => {
    return httpPut(`/orgs/${orgId}/SportTicketMembers`, lotsdrawResult);
};

// Thực hiện Cập nhật điểm cho đơn vị theo môn thi bốc thăm
export const lotsdrawUpdateAthele = (sport_id: string, content_id: string, lotsdrawResult: any) => {
    return httpPut(`sports/${sport_id}/content/${content_id}/update_ticket_member`, lotsdrawResult);
};
export const lotsdrawGroupGetAll = async (params = baseGetParams) => {
    return httpPost<any>(`/teamsportgroups/padding_filter`, params);
};
// lấy danh sách Cập nhật điểm cho đơn vị theo môn thi
export const lotsdrawScheduleGet = (member_count: number, sport_id: string, content_id: string) => {
    return httpPost<any>(`/sports/${sport_id}/matrix_ticket`, {
        member_count,
        sport_id,
        content_id,
    });
};
