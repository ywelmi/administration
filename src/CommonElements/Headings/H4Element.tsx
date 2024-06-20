import { ReactNode } from "react";
import { CSSModule } from "reactstrap/types/lib/utils";

interface propsTypes {
    children?: ReactNode;
    className?: string;
    style?:{
      margin?:number | undefined | string;
      fontWeight?:number;
      fontSize?:number;
      padding?:string;
      backgroundColor?:string;
      color?:string;
      borderRadius?:number
    }|CSSModule
  
}

const H4 = (props:propsTypes) => {
  const { children = "" } = props;
  return <h4 {...props}>{children}</h4>;
};

export default H4;
