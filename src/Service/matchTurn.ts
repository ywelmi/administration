import {
  TDetailedTurnSet,
  TMatchTurn,
  TMatchTurnResult,
  TMatchTurnWithSet,
} from "../type/matchTurn";
import { baseGetParams, IListResponse } from "./_getParams";
import { httpDel, httpGet, httpPost, httpPut } from "./_request";

// Table knockout
export const knockoutMatchTurnsGet = (params: typeof baseGetParams) => {
  return httpPost<IListResponse<TMatchTurnResult>>(
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

export const knockoutMatchTurnUpdate = (matchTurn: TMatchTurnResult) => {
  return httpPut<TMatchTurnResult>(
    `/tableknockoutmatchturns/${matchTurn.id}`,
    matchTurn
  );
};

export const knockoutMatchTurnDelete = (id: string) => {
  return httpDel<TMatchTurnResult>(`/tableknockoutmatchturns/${id}`);
};

export const knockoutMatchTurnSetsGet = (matchTurnId: string) => {
  return httpGet<IListResponse<TMatchTurnResult>>(
    `tableknockoutmatchturns/${matchTurnId}`
  );
};

// --with sets--
export const knockoutMatchTurnSetUpdate = (
  matchTurnWithSets: Pick<TMatchTurnWithSet, "id" | "sets">
) => {
  return httpPut<TMatchTurnResult>(
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
  return httpPost<IListResponse<TMatchTurnResult>>(
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

export const qualifyingMatchTurnUpdate = (matchTurn: TMatchTurnResult) => {
  return httpPut<TMatchTurnResult>(
    `/tablequalifyingmatchturns/${matchTurn.id}`,
    matchTurn
  );
};

export const qualifyingMatchTurnDelete = (id: string) => {
  return httpDel<TMatchTurnResult>(`/tablequalifyingmatchturns/${id}`);
};

// --with sets--
export const qualifyingMatchTurnSetUpdate = (
  matchTurnWithSets: Pick<TMatchTurnWithSet, "id" | "sets">
) => {
  return httpPut<TMatchTurnResult>(
    `/tablequalifyingmatchturns/${matchTurnWithSets.id}/update_result`,
    matchTurnWithSets
  );
};

export const qualifyingMatchTurnSetGet = (matchTurnId: string) => {
  return httpGet<TDetailedTurnSet[]>(
    `/tablequalifyingmatchturns/${matchTurnId}/match_turn_set`
  );
};
