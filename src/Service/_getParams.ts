import { AxiosResponse } from "axios";
export interface IGetFilters {
  skip?: number;
  take?: number;
  columns?: string[];
  sort: string;
  filter: unknown[];
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
  take: 100,
  sort: "",
  // filter: "",
  filter: [],
  columns: [],
};

export { baseGetParams };
