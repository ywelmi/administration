import { TTeam } from "../type/team";
import { baseGetParams } from "./_getParams";
import { httpDel, httpGet, httpPost, httpPut } from "./_request";

// TODO: how to filter
export const teamsGet = async (
  params = baseGetParams,
) => {
  return httpPost("/teams/padding_filter", params);
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
