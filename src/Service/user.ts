import { TUser } from "../type/user";
import { httpDel, httpGet, httpPost, httpPut } from "./_request";

export const usersGet = async () => {
  return httpPost("/users/padding_filter", {
    "skip": 0,
    "take": 20,
    "columns": "username,fullname,id",
    "sort": "",
    "filter": "",
  });
};

export const userGet = (id: string) => {
  return httpGet(`/users/${id}`);
};

export const userCreate = (user: TUser) => {
  return httpPost("/users", user);
};

export const userUpdate = (user: TUser) => {
  return httpPut(`users/${user.id}`, user);
};

export const userDelete = (id: string) => {
  return httpDel(`users/${id}`);
};
