import { TCompetition } from "../type/competition";
import { baseGetParams } from "./_getParams";
import { httpDel, httpGet, httpPost, httpPut } from "./_request";

// TODO: how to filter
export const competitionsGet = async () => {
  return httpGet("/competitions");
};

export const competitionGet = (id: string) => {
  return httpGet(`/competitions/${id}`);
};

export const competitionCreate = (competition: Omit<TCompetition, "id">) => {
  return httpPost("/competitions", competition);
};

export const competitionUpdate = (competition: TCompetition) => {
  return httpPut(`competitions/${competition.id}`, competition);
};

export const competitionDelete = (id: string) => {
  return httpDel(`competitions/${id}`);
};
