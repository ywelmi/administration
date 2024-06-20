import { Button } from "reactstrap";
import { CSSModule } from "reactstrap/types/lib/utils";

interface StyleProp {
  width: number;
  fontSize: number;
  padding: number;
}

interface propsTypes {
  children?: React.ReactNode;
  color?: string;
  onClick?: (key:any) => void;
  className?: string;
  id?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  outline?:boolean | undefined;
  size?:string
  style?:CSSModule | StyleProp
  active?:boolean
  disabled?:boolean
  tag?: React.ElementType ;
  href?:string
  value?:string
  as?:string;
  name?: string
  cssModule?: CSSModule;
  target?: string;
  title?:string
  close?:boolean
  block?:boolean
}

const Btn = (props: propsTypes) => {
  const { children } = props;
  return (
    <Button color={props.color ? props.color : "transparent"} {...props}>
      {children}
    </Button>
  );
};

export default Btn;