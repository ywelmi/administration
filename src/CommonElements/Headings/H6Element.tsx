import { ReactNode } from "react";
import { CSSModule } from "reactstrap/types/lib/utils";

export interface propsTypes {
    children?: ReactNode;
    className?: string;
    style?:{
      width?:string
      paddingTop?:number
    } | CSSModule
  }
  
  const H6 = (props: propsTypes) => {
    return <h6 {...props}>{props.children}</h6>;
  };
  
  export default H6;
  