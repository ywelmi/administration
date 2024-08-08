import {
  TAge,
  TMartialArt,
  TMartialArtArmyGroup,
  TWeigh,
} from "../type/martialArt";
import { TTablequalifyingKnockout } from "../type/tablequalifyingKnockout";
import { baseGetParams } from "./_getParams";
import { httpDel, httpGet, httpPost } from "./_request";

export const martialArtsGet = async (sportId: string) => {
  return httpGet<TMartialArt[]>(`/sports/${sportId}/SportContents`);
};

export const weighGet = async () => {
  return httpGet<TWeigh[]>("/teammembers/ListWeightClass");
};

export const agesGet = async () => {
  return httpGet<TAge[]>("/teammembers/ListAgeClass");
};

export const generateMartialArtContentTree = async (
  sportId: string,
  contentId: string,
) => {
  return httpGet<TTablequalifyingKnockout[]>(
    `/sports/content/${contentId}/tree-plan?sportId=${sportId}`,
  );
};

export const getMartialArtContentTree = async (
  sportId: string,
  contentId: string,
) => {
  return httpGet<TTablequalifyingKnockout[]>(
    `/sports/${sportId}/SportContent/${contentId}/TableKnockoutMatchs`,
  );
};

export const genMartialArtTreeForContents = async (sportId: string) => {
  return httpGet<TTablequalifyingKnockout[]>(
    `/sports/${sportId}/tree-plan?sportId=${sportId}`,
  );
};

// For army units

export const martialArtArmyGroupCreate = async (
  group: TMartialArtArmyGroup,
) => {
  return httpPost<TMartialArtArmyGroup[]>(`/teamsportgroups`, group);
};

export const martialArtArmyGroupGet = async (teamId: string) => {
  return httpGet<TMartialArtArmyGroup[]>(`/teamsportgroups/${teamId}`);
};

export const martialArtArmyGroupGetAll = async (
  params = baseGetParams,
) => {
  return httpPost<TMartialArtArmyGroup[]>(
    `/teamsportgroups/padding_filter`,
    params,
  );
};

export const martialArtArmyGroupDelete = async (teamId: string) => {
  return httpDel(`/teamsportgroups/${teamId}`);
};
