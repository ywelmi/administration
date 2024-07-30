import { TMartialArt, TWeight } from "../type/martialArt";
import { baseGetParams, IListResponse } from "./_getParams";
import { httpDel, httpGet, httpPost, httpPut } from "./_request";

export const martialArtsGet = async (sportId: string) => {
  return httpGet<TMartialArt[]>(`/sports/${sportId}/SportContents`);
};

export const weighGet = async () => {
  return httpGet<TWeight[]>("/teammembers/ListWeightClass");
};

export const agesGet = async () => {
  return httpGet<TWeight[]>("/teammembers/ListAgeClass");
};

// export const martialArtGet = (id: string) => {
//   return httpGet(`/martialArts/${id}`);
// };
//
// export const martialArtCreate = (martialArt: Omit<TMartialArt, "id">) => {
//   return httpPost("/martialArts", martialArt);
// };
//
// export const martialArtUpdate = (martialArt: TMartialArt) => {
//   return httpPut(`martialArts/${martialArt.id}`, martialArt);
// };
//
// export const martialArtDelete = (id: string) => {
//   return httpDel(`martialArts/${id}`);
// };
