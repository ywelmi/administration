import { ReactNode } from "react";

export interface propsTypes {
    children?: ReactNode;
    className?: string;
  }
  const H1 = (props: propsTypes) => {
    return <h1 {...props}>{props.children}</h1>;
  };
  
  export default H1;
  