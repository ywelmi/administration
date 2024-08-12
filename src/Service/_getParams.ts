import { AxiosResponse } from "axios";
export interface IGetFilters {
  skip?: number;
  take?: number;
  columns?: string;
  sort: string;
  filter: string;
  // filter: string;
}

export interface IListResponse<T> extends AxiosResponse {
  data: Array<T>;
  sumData: {
    total: number;
  };
}

const baseGetParams: Partial<IGetFilters> = {
  skip: 0,
  take: 1000000,
  sort: "",
  // filter: "",
  filter: "",
  columns: "",
};

const getFilterByValue = (
  field: string,
  o: "=" | ">" | "<" = "=",
  v: string
) => {
  return `[{'f':'${field}','o':'${o}','v':'${v}'}]`;
};
const getMoreFilterByValue = (
  field: string,
  o: "=" | ">" | "<" = "=",
  v: string
) => {
  return `{'f':'${field}','o':'${o}','v':'${v}'}`;
};

export { baseGetParams, getFilterByValue, getMoreFilterByValue };
