import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  qualifyingMatchTurnDelete,
  qualifyingMatchTurnsGet,
  qualifyingMatchTurnUpdate,
} from "../../Service/matchTurn";
import { TMatchTurn, TMatchTurnWithSet } from "../../type/matchTurn";

interface IMatchTurnQuery {
  addMatchTurn: (matchTurn: TMatchTurn) => Promise<void>;
  matchTurnsGet: () => ReturnType<typeof qualifyingMatchTurnsGet>;
  matchTurnUpdate: typeof qualifyingMatchTurnUpdate;
  matchTurnDel: typeof qualifyingMatchTurnDelete;
}

interface IMatchTurnContext extends IMatchTurnQuery {
  matchId: string;
  setMatchId: (id: string) => void;
  matchTurns: TMatchTurn[];
  matchTurnsWithSets: TMatchTurnWithSet[];
  fetchMatchTurn: (id: string) => void;
  updateMatchTurn: (m: TMatchTurn) => void;
  // setMatchTurnsWithSets: () => void;
}

const MatchTurnContext = createContext<IMatchTurnContext>({
  matchId: "",
  setMatchId: () => {},
  matchTurns: [],
  matchTurnsWithSets: [],
  fetchMatchTurn: () => {},
  updateMatchTurn: () => {},

  // set api for match turn
  addMatchTurn: () => Promise.resolve(),
  matchTurnsGet: () =>
    Promise.resolve({} as ReturnType<typeof qualifyingMatchTurnsGet>),
  matchTurnUpdate: () => Promise<void>,
  matchTurnDel: () => Promise<void>,
});

export interface IMatchTurnProvider
  extends PropsWithChildren,
    IMatchTurnQuery {}

const _combineMatchTurnsAndSets = (matchTurns: TMatchTurn[], sets: []) => {
  return [] as TMatchTurnWithSet[];
};

const MatchTurnProvider = ({
  children,
  addMatchTurn,
  matchTurnsGet: matchTurnsGet,
  matchTurnUpdate,
  matchTurnDel: matchTurnDel,
}: IMatchTurnProvider) => {
  const [matchId, setMatchId] = useState("");
  // const [matchTurnWithSets, setMatchTurnsWithSets] = useState<TMatchTurnWithSet[]>([]);
  const [matchTurns, setMatchTurns] = useState<TMatchTurn[]>([]);

  const fetchMatchTurn = () => {};

  useEffect(() => {
    matchTurnsGet()
      .then((res) => {
        console.log({ res });
        const {
          data: { data },
          status,
        } = res;
        if (status === 200) {
          console.log({ setMatchTurns: data });
          setMatchTurns(data);
        }
      })
      .then((err) => {
        console.log({ err });
      });
  }, [matchId, matchTurnsGet]);

  const updateMatchTurn = useCallback((matchTurn: TMatchTurn) => {
    setMatchTurns((prev) => {
      const idx = prev.findIndex((m) => m.id === matchTurn.id);
      if (idx !== -1) {
        return [...prev.splice(idx, 1), matchTurn];
      }
      return prev;
    });
  }, []);

  const matchTurnsWithSets = useMemo<TMatchTurnWithSet[]>(() => {
    return _combineMatchTurnsAndSets(matchTurns, []);
  }, [matchTurns]);

  return (
    <MatchTurnContext.Provider
      value={{
        addMatchTurn,
        matchTurnsGet,
        matchTurnUpdate,
        matchTurnDel,
        updateMatchTurn,
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
