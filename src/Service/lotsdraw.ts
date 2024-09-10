import {
    ILotsDrawResultTemplate,
    TLotsDraw,
    TLotsDrawMatrix,
    TLotsDrawMember,
    TLotsDrawUpdateAthele,
} from "../type/lotsdraw";
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
export const getScheduleContent = async (content_id: string) => {
    return httpGet<[]>(`/sportcontents/${content_id}/get_team_sport_content_schedule`);
};
export const updateScheduleContent = async (content_id: string, data: string) => {
    return httpPut<any>(`/sportcontents/${content_id}/update_team_sport_content_schedule`, data);
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
    return httpPost<ILotsDrawResultTemplate>(`sportcontents/${content_id}/sport_ticket_members`, {
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

export const getPointConfig = async (content_id: string) => {
    return httpGet<any>(`/sports/${content_id}/point-config`);
};

export const getContentConfig = async (content_id: string) => {
    return httpGet<any>(`/sports/${content_id}/content-config`);
};

// Thực hiện Cập nhật điểm cho đơn vị theo môn thi bốc thăm
export const lotsdrawResultUpdate = (content_id: string, lotsdrawResult: any) => {
    return httpPut(`/sportcontents/${content_id}/update_sport_result`, lotsdrawResult);
};

// Thực hiện Cập nhật điểm cho đơn vị theo môn thi bốc thăm
export const lotsdrawUpdateAthele = (sport_id: string, content_id: string, lotsdrawResult: any) => {
    return httpPut(`sports/${sport_id}/content/${content_id}/update_ticket_member`, lotsdrawResult);
};
export const lotsdrawGroupGetAll = async (params = baseGetParams) => {
    return httpPost<any>(`/teamsportgroups/padding_filter`, params);
};
// lấy danh sách Cập nhật điểm cho đơn vị theo môn thi
export const lotsdrawScheduleGet = (sport_id: string, content_id: string) => {
    return httpGet<any>(`/sportcontents/${content_id}/get_matrix_ticket/`, {});
};
export const lotsdrawScheduleUpdate = (
    member_count: number,
    turn_count: number,
    sport_id: string,
    content_id: string
) => {
    return httpPost<any>(`/sportcontents/${content_id}/update_matrix_ticket`, {
        member_count,
        sport_id,
        content_id,
        turn_count,
    });
};
export const lotsdrawScheduleConfirm = (listTicket: any, content_id: string) => {
    return httpPut<any>(`/sportcontents/${content_id}/update_turn_member`, listTicket);
};
export const groupUpdate = (sport_id: string, lotsdraw: Partial<TLotsDraw>[]) => {
    return httpPut(`/sports/${sport_id}/TeamSports`, lotsdraw);
};
