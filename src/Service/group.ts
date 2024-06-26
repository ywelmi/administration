import { TGroup } from "../type/group";
import { baseGetParams } from "./_getParams";
import { httpDel, httpGet, httpPost, httpPut } from "./_request";

export const groupsGet = async (params = baseGetParams) => {
  return httpPost("/groups/padding_filter", {
    ...params,
    columns: ["groupname", "fullname", "id"],
  });
};

export const groupGet = (id: string) => {
  return httpGet(`/groups/${id}`);
};

export const groupCreate = (group: Omit<TGroup, "id">) => {
  return httpPost("/groups", group);
};

export const groupUpdate = (group: TGroup) => {
  return httpPut(`groups/${group.id}`, group);
};

export const groupDelete = (id: string) => {
  return httpDel(`groups/${id}`);
};
