import { TSport } from "../type/sport";
import { baseGetParams } from "./_getParams";
import { httpDel, httpGet, httpPost, httpPut } from "./_request";

// TODO: how to filter

export const sportsGet = async (
  params = baseGetParams,
) => {
  return httpPost("/sports/padding_filter", params);
};

export const sportGet = (id: string) => {
  return httpGet(`/sports/${id}`);
};

export const sportCreate = (sport: Omit<TSport, "id">) => {
  return httpPost("/sports", sport);
};

export const sportUpdate = (sport: TSport) => {
  return httpPut(`sports/${sport.id}`, sport);
};

export const sportDelete = (id: string) => {
  return httpDel(`sports/${id}`);
};
