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
  knockoutMatchTurnCreate,
  knockoutMatchTurnDelete,
  knockoutMatchTurnUpdate,
  qualifyingMatchTurnCreate,
  qualifyingMatchTurnDelete,
  qualifyingMatchTurnsGet,
  qualifyingMatchTurnUpdate,
} from "../../Service/matchTurn";
import { TMatchTurn, TMatchTurnWithSet } from "../../type/matchTurn";

interface IMatchTurnQuery {
  matchTurnCreate:
    | typeof qualifyingMatchTurnCreate
    | typeof knockoutMatchTurnCreate;
  matchTurnsGet: () => ReturnType<typeof qualifyingMatchTurnsGet>;
  matchTurnUpdate:
    | typeof qualifyingMatchTurnUpdate
    | typeof knockoutMatchTurnUpdate;
  matchTurnDel:
    | typeof qualifyingMatchTurnDelete
    | typeof knockoutMatchTurnDelete;
}

interface IMatchTurnContext extends IMatchTurnQuery {
  matchId: string;
  setMatchId: (id: string) => void;
  matchTurns: TMatchTurn[];
  matchTurnsWithSets: TMatchTurnWithSet[];

  updateMatchTurn: (m: TMatchTurn) => void;
  createMatchTurn: (m: TMatchTurn) => void;
  delMatchTurn: (id: string) => void;
  // setMatchTurnsWithSets: () => void;
}

const MatchTurnContext = createContext<IMatchTurnContext>({
  matchId: "",
  setMatchId: () => {},
  matchTurns: [],
  matchTurnsWithSets: [],
  updateMatchTurn: () => {},

  // set api for match turn
  matchTurnCreate: () => {},
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
  matchTurnCreate: matchTurnCreate,
  matchTurnsGet,
  matchTurnUpdate,
  matchTurnDel,
}: IMatchTurnProvider) => {
  const [matchId, setMatchId] = useState("");
  // const [matchTurnWithSets, setMatchTurnsWithSets] = useState<TMatchTurnWithSet[]>([]);
  const [matchTurns, setMatchTurns] = useState<TMatchTurn[]>([]);

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

  const createMatchTurn = useCallback((matchTurn: TMatchTurn) => {
    setMatchTurns((prev) => [...prev, matchTurn]);
  }, []);

  const delMatchTurn = useCallback((id: string) => {
    setMatchTurns((prev) => [...prev.filter((m) => m.id !== id)]);
  }, []);

  const matchTurnsWithSets = useMemo<TMatchTurnWithSet[]>(() => {
    return _combineMatchTurnsAndSets(matchTurns, []);
  }, [matchTurns]);

  return (
    <MatchTurnContext.Provider
      value={{
        matchTurnCreate,
        matchTurnsGet,
        matchTurnUpdate,
        matchTurnDel,
        updateMatchTurn,
        createMatchTurn,
        delMatchTurn,
        matchId,
        setMatchId,
        matchTurns,
        matchTurnsWithSets,
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
