import { TOrg } from "../type/org";
import { httpDel, httpGet, httpPost, httpPut } from "./_request";

// TODO: how to filter
export const orgsGet = async (
  filter: string = "[{'f':'name','o':'=','v':'LQ2'}]",
) => {
  return httpPost("/orgs/padding_filter", {
    "skip": 0,
    "take": 20,
    "sort": "",
    "filter": filter,
    "columns": "",
  });
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
