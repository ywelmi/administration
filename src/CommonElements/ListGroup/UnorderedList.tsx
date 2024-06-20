import { Fragment } from "react";
import { ListGroup } from "reactstrap";
export interface propsTypes {
  children?: React.ReactNode;
  className?: string;
  role?:string
  style?: Object;
  id?: string;
}

const UL = (props: propsTypes) => {
  return (
    <Fragment>
      <ListGroup {...props}>{props.children}</ListGroup>
    </Fragment>
  );
};

export default UL;
