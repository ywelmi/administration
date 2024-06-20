import React from "react";
import { Badge } from "reactstrap";

interface propsTypes {
  children?: React.ReactNode;
  className?: string;
  color?: string;
  pill?:boolean
  onClick?:()=>void
}

const Badges = (props: propsTypes) => {
  const { children } = props;
  return <Badge {...props} >{children}</Badge>;
};

export default Badges;