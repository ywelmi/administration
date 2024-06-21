import { httpPost } from "./_request";

export const getUsers = async () => {
  return httpPost("/users/padding_filter", {
    "skip": 0,
    "take": 20,
    "columns": "username,fullname",
    "sort": "",
    "filter": "",
  });
};
