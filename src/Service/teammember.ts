import { TTeammember } from "../type/teammember";
import { baseGetParams } from "./_getParams";
import { httpDel, httpGet, httpPost, httpPut } from "./_request";

export const teammembersGet = async (params = baseGetParams) => {
  return httpPost("/teammembers/padding_filter", {
    ...params,
  });
};

export const teammemberGet = (id: string) => {
  return httpGet(`/teammembers/${id}`);
};

export const teammemberCreate = (teammember: Omit<TTeammember, "id">) => {
  return httpPost("/teammembers", teammember);
};

export const teammemberUpdate = (teammember: TTeammember) => {
  return httpPut(`teammembers/${teammember.id}`, teammember);
};

export const teammemberDelete = (id: string) => {
  return httpDel(`teammembers/${id}`);
};
