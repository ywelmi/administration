import { TOrg } from "../type/org";
import { baseGetParams } from "./_getParams";
import { httpDel, httpGet, httpPost, httpPut } from "./_request";

// TODO: how to filter
export const orgsGet = async (
  params = baseGetParams,
) => {
  return httpPost("/orgs/padding_filter", params);
};

export const orgGet = (id: string) => {
  return httpGet(`/orgs/${id}`);
};

export const orgCreate = (org: Omit<TOrg, "id">) => {
  return httpPost("/orgs", org);
};

export const orgUpdate = (org: TOrg) => {
  return httpPut(`orgs/${org.id}`, org);
};

export const orgDelete = (id: string) => {
  return httpDel(`orgs/${id}`);
};
