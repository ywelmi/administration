import {
  TDetailedTurnSet,
  TMatchTurn,
  TMatchTurnWithSet,
} from "../type/matchTurn";
import { baseGetParams, IListResponse } from "./_getParams";
import { httpDel, httpGet, httpPost, httpPut } from "./_request";

// Table knockout
export const knockoutMatchTurnsGet = (params: typeof baseGetParams) => {
  return httpPost<IListResponse<TMatchTurn>>(
    `/tableknockoutmatchturns/padding_filter`,
    {
      ...baseGetParams,
      ...params,
    }
  );
};

export const knockoutMatchTurnCreate = (matchTurn: Omit<TMatchTurn, "id">) => {
  return httpPost<TMatchTurn>("tableknockoutmatchturns", matchTurn);
};

export const knockoutMatchTurnUpdate = (matchTurn: TMatchTurn) => {
  return httpPut<TMatchTurn>(
    `/tableknockoutmatchturns/${matchTurn.id}`,
    matchTurn
  );
};

export const knockoutMatchTurnDelete = (id: string) => {
  return httpDel<TMatchTurn>(`/tableknockoutmatchturns/${id}`);
};

export const knockoutMatchTurnSetsGet = (matchTurnId: string) => {
  return httpGet<IListResponse<TMatchTurn>>(
    `tableknockoutmatchturns/${matchTurnId}`
  );
};

// --with sets--
export const knockoutMatchTurnSetUpdate = (
  matchTurnWithSets: Pick<TMatchTurnWithSet, "id" | "sets">
) => {
  return httpPut<TMatchTurn>(
    `/tableknockoutmatchturns/${matchTurnWithSets.id}/update_result`,
    matchTurnWithSets
  );
};

export const knockoutMatchTurnSetGet = (matchTurnId: string) => {
  return httpGet<TDetailedTurnSet[]>(
    `/tableknockoutmatchturns/${matchTurnId}/match_turn_set`
  );
};

// ---------------Table qualifying---------------------
export const qualifyingMatchTurnsGet = (params: typeof baseGetParams) => {
  return httpPost<IListResponse<TMatchTurn>>(
    `/tablequalifyingmatchturns/padding_filter`,
    {
      ...baseGetParams,
      ...params,
    }
  );
};

export const qualifyingMatchTurnCreate = (
  matchTurn: Omit<TMatchTurn, "id">
) => {
  return httpPost<TMatchTurn>("tablequalifyingmatchturns", matchTurn);
};

export const qualifyingMatchTurnUpdate = (matchTurn: TMatchTurn) => {
  return httpPut<TMatchTurn>(
    `/tablequalifyingmatchturns/${matchTurn.id}`,
    matchTurn
  );
};

export const qualifyingMatchTurnDelete = (id: string) => {
  return httpDel<TMatchTurn>(`/tablequalifyingmatchturns/${id}`);
};

// --with sets--
export const qualifyingMatchTurnSetUpdate = (
  matchTurnWithSets: Pick<TMatchTurnWithSet, "id" | "sets">
) => {
  return httpPut<TMatchTurn>(
    `/tablequalifyingmatchturns/${matchTurnWithSets.id}/update_result`,
    matchTurnWithSets
  );
};

export const qualifyingMatchTurnSetGet = (matchTurnId: string) => {
  return httpGet<TDetailedTurnSet[]>(
    `/tablequalifyingmatchturns/${matchTurnId}/match_turn_set`
  );
};
