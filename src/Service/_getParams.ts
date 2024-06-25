export interface IGetParams {
  skip: number;
  take: number;
  columns: string[];
  sort: string;
  filter: unknown[];
}

const baseGetParams: IGetParams = {
  skip: 0,
  take: 20,
  sort: "",
  filter: [],
  columns: [],
};

export { baseGetParams };
