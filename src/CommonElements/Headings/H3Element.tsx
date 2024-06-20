import { ReactNode } from "react";

export interface propsTypes {
    children?: ReactNode;
    className?: string;
  }
  
  const H3 = (props: propsTypes) => {
    const { children = "" } = props;
    return <h3 {...props}>{children}</h3>;
  };
  
  export default H3;