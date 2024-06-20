import { InputType } from "reactstrap/types/lib/Input";

export interface FormGroupCommonProp {
  type: InputType;
  placeholder?: string;
  formClass?: string;
  rows?: number;
}

export interface SelectCommonProp {
  data: string[];
  size: number;
  selectClass?: string;
}
