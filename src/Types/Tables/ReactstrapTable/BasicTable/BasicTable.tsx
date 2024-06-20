import { ReactNode } from "react";

interface HeadDataProp {
    id: number;
    head: string;
  }
  
  export interface CommonTableProp {
    tableClass?: string;
    strip?: boolean;
    caption?: string;
    size?: string;
    hover?: boolean;
    headClass?: string;
    headRowClass?: string;
    headData: HeadDataProp[];
    children: ReactNode;
  }

  interface DetailsTableProp {
    text?: string;
    code?: string;
  }
  
  interface DataTableProp {
    title: string;
    tdClassName?: string;
    tableColData?: JSX.Element;
    details: DetailsTableProp[];
  }
  
  export interface CommonTableComponentProp {
    title: string;
    tableClass?: string;
    tdClassName?: string;
    tableColData?: JSX.Element;
    data: DataTableProp[];
  }