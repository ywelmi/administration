import { TLotsDraw } from "../type/lotsdraw";
import { TMartialArtMilitiaArmyGroupGet, TMartialArtMilitiaArmyGroupCreate } from "../type/martialArtMilitia";
import { TTablequalifyingKnockout } from "../type/tablequalifyingKnockout";
import { baseGetParams } from "./_getParams";
import { httpDel, httpGet, httpPost, httpPut } from "./_request";

// For army units

export const martialArtMilitiaArmyGroupCreate = async (group: TMartialArtMilitiaArmyGroupCreate) => {
    return httpPost<TMartialArtMilitiaArmyGroupCreate[]>(`/teamsportgroups`, group);
};

export const martialArtMilitiaArmyGroupGet = async (teamId: string) => {
    return httpGet<TMartialArtMilitiaArmyGroupGet[]>(`/teamsportgroups/${teamId}`);
};

// Cập nhật bốc thăm môn thi
export const martialArtMilitiaArmyGroupGetUpdate = (lotsdraw: Partial<TLotsDraw>[]) => {
    return httpPut(`/sports/6e929924-a5d7-4b4b-a261-cbe4e6b9a97b/TeamSports`, lotsdraw);
};

//lấy danh sách các nội dung của môn võ DQTV
export const martialArtMilitiaArmyGroupGetContent = async () => {
    return httpGet<any>(`/sports/6e929924-a5d7-4b4b-a261-cbe4e6b9a97b/SportContents`);
};

export const martialArtMilitiaArmyGroupGetAll = async (params = baseGetParams) => {
    return httpPost<any>(`/teamsportgroups/padding_filter`, params);
};

export const martialArtMilitiaArmyGroupDelete = async (teamId: string) => {
    return httpDel(`/teamsportgroups/${teamId}`);
};
