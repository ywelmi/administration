import { TAge, TMartialArt, TWeigh } from "../type/martialArt";
import { TTablequalifyingKnockout } from "../type/tablequalifyingKnockout";
import { httpGet } from "./_request";

export const martialArtsGet = async (sportId: string) => {
  return httpGet<TMartialArt[]>(`/sports/${sportId}/SportContents`);
};

export const weighGet = async () => {
  return httpGet<TWeigh[]>("/teammembers/ListWeightClass");
};

export const agesGet = async () => {
  return httpGet<TAge[]>("/teammembers/ListAgeClass");
};

export const getMartialArtTree = async (sportId: string, contentId: string) => {
  return httpGet<TTablequalifyingKnockout[]>(
    `/sports/${sportId}/SportContent/${contentId}/TableKnockoutMatchs`,
  );
};
