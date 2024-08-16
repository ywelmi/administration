import { IMatchTurnProvider, MatchTurnProvider } from "./context";

interface IMatchTurnWrapper extends IMatchTurnProvider {}
const MatchTurnWrapper = ({ children, ...rest }: IMatchTurnWrapper) => {
  return <MatchTurnProvider {...rest}>{children}</MatchTurnProvider>;
};

export { MatchTurnWrapper };
