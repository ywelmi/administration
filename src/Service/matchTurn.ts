import { TMatchTurn } from "../type/matchTurn";
import { baseGetParams, IListResponse } from "./_getParams";
import { httpDel, httpPost, httpPut } from "./_request";

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

export const knockoutMatchTurnCreate = (
  matchTurn: Omit<TMatchTurn, "match_id">
) => {
  return httpPost<TMatchTurn>("tableknockoutmatchturns", matchTurn);
};

export const knockoutMatchTurnUpdate = (matchTurn: Omit<TMatchTurn, "id">) => {
  return httpPut<TMatchTurn>(
    "/tablequalifyings/create_table-qualifying-match",
    matchTurn
  );
};

export const knockoutMatchTurnDelete = (id: string) => {
  return httpDel<TMatchTurn>(
    `/tablequalifyings/create_table-qualifying-match/${id}`
  );
};

// Table qualifying
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
  return httpPost<TMatchTurn>(
    "/tablequalifyings/create_table-qualifying-match",
    matchTurn
  );
};

export const qualifyingMatchTurnUpdate = (
  matchTurn: Omit<TMatchTurn, "id">
) => {
  return httpPut<TMatchTurn>(
    "/tablequalifyings/create_table-qualifying-match",
    matchTurn
  );
};

export const qualifyingMatchTurnDelete = (id: string) => {
  return httpDel<TMatchTurn>(
    `/tablequalifyings/create_table-qualifying-match/${id}`
  );
};
