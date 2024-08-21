import { IMatchTurnProvider, MatchTurnProvider } from "./matchTurnContext";

interface IMatchTurnWrapper extends IMatchTurnProvider {}
const MatchTurnWrapper = ({ children, ...rest }: IMatchTurnWrapper) => {
  return <MatchTurnProvider {...rest}>{children}</MatchTurnProvider>;
};

export { MatchTurnWrapper };
