import React from "react";
import { Alert } from "reactstrap";

interface propsTypes {
  children?: React.ReactNode;
  attrBtn?: {[key:string]: string};
  closeBtn?: string;
  divCls?: string;
  color?: string;
  className?:string;
  isOpen?:boolean;
  toggle?:()=>void;
  fade?:boolean;
  target?:string;
}

const Alerts = (props: propsTypes) => {
  return (
    <Alert color="" {...props}>
      {props.children}
    </Alert>
  );
};

export default Alerts;