import { TGroup } from "../type/group";
import { httpDel, httpGet, httpPost, httpPut } from "./_request";

export const groupsGet = async () => {
  return httpGet("/orggroups/");
};

export const groupGet = (id: string) => {
  return httpGet(`/orggroups/${id}`);
};

export const groupCreate = (group: Omit<TGroup, "id">) => {
  return httpPost("/orggroups", group);
};

export const groupUpdate = (group: TGroup) => {
  return httpPut(`orggroups/${group.id}`, group);
};

export const groupDelete = (id: string) => {
  return httpDel(`orggroups/${id}`);
};
