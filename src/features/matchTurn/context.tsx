import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IListResponse } from "../../Service/_getParams";
import { TMatchTurn, TMatchTurnWithSet } from "../../type/matchTurn";

interface IMatchTurnContext {
  matchId: string;
  setMatchId: (id: string) => void;
  matchTurns: TMatchTurn[];
  matchTurnsWithSets: TMatchTurnWithSet[];
  fetchMatchTurn: (id: string) => void;
  // setMatchTurnsWithSets: () => void;
}
const MatchTurnContext = createContext<IMatchTurnContext>({
  matchId: "",
  setMatchId: () => {},
  matchTurns: [],
  matchTurnsWithSets: [],
  fetchMatchTurn: () => {},
  // setMatchTurnsWithSets: () => {},
});

export interface IMatchTurnProvider extends PropsWithChildren {
  addMatchTurn: (matchTurn: TMatchTurn) => Promise<void>;
  getMatchTurns: () => Promise<IListResponse<TMatchTurn>>;
  updateMatchTurn: (matchTurn: TMatchTurn) => Promise<void>;
  delMatchTurn: (id: string) => Promise<void>;
}

const _combineMatchTurnsAndSets = (matchTurns: TMatchTurn[], sets: []) => {
  return [] as TMatchTurnWithSet[];
};

const MatchTurnProvider = ({
  children,
  addMatchTurn,
  getMatchTurns,
  updateMatchTurn,
}: IMatchTurnProvider) => {
  const [matchId, setMatchId] = useState("");
  // const [matchTurnWithSets, setMatchTurnsWithSets] = useState<TMatchTurnWithSet[]>([]);
  const [matchTurns, setMatchTurns] = useState<TMatchTurn[]>([]);

  const fetchMatchTurn = () => {};

  useEffect(() => {
    getMatchTurns()
      .then((res) => {
        const { data, status } = res;
        if (status === 200) {
          setMatchTurns(data);
        }
      })
      .then((err) => {
        console.log({ err });
      });
  }, [matchId, getMatchTurns]);

  const matchTurnsWithSets = useMemo<TMatchTurnWithSet[]>(() => {
    return _combineMatchTurnsAndSets(matchTurns, []);
  }, [matchTurns]);

  return (
    <MatchTurnContext.Provider
      value={{
        matchId,
        setMatchId,
        matchTurns,
        matchTurnsWithSets,
        fetchMatchTurn,
        // setMatchTurnsWithSets,
      }}
    >
      {children}
    </MatchTurnContext.Provider>
  );
};

const useMatchTurnContext = () => {
  return useContext({ ...MatchTurnContext });
};

export { MatchTurnProvider, useMatchTurnContext };
