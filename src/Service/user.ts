import { TUser } from "../type/user";
import { baseGetParams } from "./_getParams";
import { httpDel, httpGet, httpPost, httpPut } from "./_request";

export const usersGet = async (params = baseGetParams) => {
  return httpPost("/users/padding_filter", {
    ...params,
    columns: ["username", "fullname", "id"],
  });
};

export const userGet = (id: string) => {
  return httpGet(`/users/${id}`);
};

export const userCreate = (user: Omit<TUser, "id">) => {
  return httpPost("/users", user);
};

export const userUpdate = (user: TUser) => {
  return httpPut(`users/${user.id}`, user);
};

export const userDelete = (id: string) => {
  return httpDel(`users/${id}`);
};
