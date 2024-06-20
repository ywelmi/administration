import { ChangeEvent, ReactNode } from "react";

export interface AddRowsTable {
    column1: number;
    column2: number;
    column3: number;
    column4: number;
    column5: number;
  }

  export interface CustomExpandableComponentProp {
    data: {
      id: number;
      name: string;
      position: string;
      office: string;
      age: number;
      startDate: string;
      salary: string;
      action: string;
    };
  }
  
  export interface DeleteRowData {
    name: string;
    id:number,
    job: string;
    companyName: string;
    invoiceNumber: string;
    credit: JSX.Element;
    date: string;
    priority: ReactNode;
    budget: string;
    action: string;
  }
  
  export interface DeleteRowDataProp {
    name: JSX.Element;
    position: string;
    office: string;
    age: number;
    startDate: string;  
    salary: string;
  }

  export interface DeleteRowDataProp {
    name: JSX.Element;
    position: string;
    office: string;
    age: number;
    startDate: string;  
    salary: string;
  }
  
  export interface TableSearchBarPropsType {
    handleMinAgeChange: (eve: ChangeEvent<HTMLInputElement>) => void;
    handleMaxAgeChange: (eve: ChangeEvent<HTMLInputElement>) => void;
  }