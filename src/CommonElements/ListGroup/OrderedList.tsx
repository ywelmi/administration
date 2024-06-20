import React from "react";

interface propsTypes {
  children?: React.ReactNode;
  className?: string;
}

const OL = (props: propsTypes) => {
  const { children  } = props;
  return <ol {...props}>{children}</ol>;
};

export default OL;