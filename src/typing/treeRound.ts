import { IRoundProps, ISeedProps } from "react-brackets";

export interface ICustomRoundProps extends IRoundProps {
  grade?: number;
}

export interface ICustomSeedProps extends ISeedProps {
  direct?: boolean;
}
