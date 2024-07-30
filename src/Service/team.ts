import { TTeam } from "../type/team";
import { baseGetParams, getFilterByValue, IListResponse } from "./_getParams";
import { httpDel, httpGet, httpPost, httpPut } from "./_request";

// TODO: how to filter
export const teamsGet = async (
  params = baseGetParams,
) => {
  return httpPost<IListResponse<TTeam>>("/teams/padding_filter", params);
};

// TODO: how to filter
export const teamsBySportGet = async (
  sportId: string,
) => {
  const filter = getFilterByValue("sport_id", "=", sportId);
  return httpPost<IListResponse<TTeam>>("/teams/padding_filter", {
    ...baseGetParams,
    filter,
  });
};

export const teamsNoTableGet = (sportId: string) => {
  return httpGet<TTeam[]>(`/sports/${sportId}/GetListTeamNoTable`);
};

export const teamsHaveTableGet = (sportId: string) => {
  return httpGet<TTeam[]>(`/sports/${sportId}/GetListTeamHasTable`);
};

export const teamGet = (id: string) => {
  return httpGet(`/teams/${id}`);
};

export const teamCreate = (team: Omit<TTeam, "id">) => {
  return httpPost("/teams", team);
};

export const teamUpdate = (team: TTeam) => {
  return httpPut(`teams/${team.id}`, team);
};

export const teamDelete = (id: string) => {
  return httpDel(`teams/${id}`);
};
