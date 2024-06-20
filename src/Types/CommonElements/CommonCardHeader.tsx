export interface CardHeaderDropDownProps {
  firstItem: string | undefined;
  secondItem: string | undefined;
  thirdItem: string | undefined;
  mainTitle?: string;
  headerClass?: string;
  svgIconId?: string;
}

export interface CardHeaderCommonType {
  title: string;
  borderClass?:boolean,
  subTitle?: string;
  headClass?: string;
  firstItem?: string | undefined;
  secondItem?: string | undefined;
  thirdItem?: string | undefined;
  mainTitle?: string;
  headerClass?: string;
}

interface SpanType {
  text?: string;
  code?: string;
  mark?: string;
}

export interface CommonCardHeaderProp {
  title: string;
  span?: SpanType[];
  headClass?: string;
  icon?: JSX.Element;
  tagClass?: string;
}
