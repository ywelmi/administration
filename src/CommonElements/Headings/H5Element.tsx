import { ReactNode } from "react";

export interface propsTypes {
    children?: ReactNode;
    className?: string;
  }
  const H5 = (props: propsTypes) => {
    return <h5 {...props}>{props.children}</h5>;
  };
  export default H5;
  