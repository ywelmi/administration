export interface StockResultTableData {
    name: string;
    symbol: string;
    price: string;
    difference: JSX.Element;
    last: JSX.Element;
  }
  
  export interface CustomCellInterFaceProp {
    value: number;
  }
  
  export interface RowCreateCallBackData {
    name: string;
    email: string;
    experience: string;
    sex: string;
    contactNumber: string;
    salary: number;
  }