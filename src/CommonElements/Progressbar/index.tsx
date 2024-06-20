import React from "react";
import { Progress } from "reactstrap";
import { CSSModule } from "reactstrap/types/lib/utils";

interface propsTypes {
  children?: React.ReactNode;
  value?: string | number;
  color?: string;
  className?: string;
  striped?: boolean;
  animated?: boolean;
  multi?: boolean;
  bar?: boolean;
  tag?: string;
  min?: string | number;
  max?: string | number;
  style?: CSSModule;
  barClassName?: string;
  barStyle?: React.CSSProperties;
  barAriaValueText?: string;
  barAriaLabelledBy?: string;
}

const Progressbar = (props: propsTypes) => {
  const { children , ...res } = props;
  return <Progress {...res}>{children}</Progress>;
};

export default Progressbar;