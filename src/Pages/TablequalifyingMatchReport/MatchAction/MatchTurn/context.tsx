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
} from "../../../../Service/matchTurn";
import { TMatchTurn, TMatchTurnWithSet } from "../../../../type/matchTurn";

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

export interface IMatchTurnProvider extends PropsWithChildren, IMatchTurnQuery {
  matchId: string;
}

const _combineMatchTurnsAndSets = (matchTurns: TMatchTurn[], sets: []) => {
  return [] as TMatchTurnWithSet[];
};

const MatchTurnProvider = ({
  children,
  matchId: initMatchId = "",
  matchTurnCreate: matchTurnCreate,
  matchTurnsGet,
  matchTurnUpdate,
  matchTurnDel,
}: IMatchTurnProvider) => {
  const [matchId, setMatchId] = useState(initMatchId);
  useEffect(() => {
    setMatchId(initMatchId);
  }, [initMatchId]);
  // const [matchTurnWithSets, setMatchTurnsWithSets] = useState<TMatchTurnWithSet[]>([]);
  const [matchTurns, setMatchTurns] = useState<TMatchTurn[]>([]);

  useEffect(() => {
    matchTurnsGet()
      .then((res) => {
        // console.log({ res });
        const {
          data: { data },
          status,
        } = res;
        if (status === 200) {
          setMatchTurns(data);
          console.log({ setMatchTurns: data });
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  }, [matchId, matchTurnsGet]);

  const updateMatchTurn = useCallback((matchTurn: TMatchTurn) => {
    setMatchTurns((prev) => {
      return [...prev.map((m) => (m.id === matchTurn.id ? matchTurn : m))];
    });
  }, []);

  const createMatchTurn = useCallback((matchTurn: TMatchTurn) => {
    setMatchTurns((prev) => [...prev, matchTurn]);
  }, []);

  const delMatchTurn = useCallback((id: string) => {
    // console.log({ delMatchTurn: id });
    setMatchTurns((prev) => {
      // console.log({ prev });
      const newData = [...prev.filter((m) => m.id !== id)];
      // console.log({ newData });
      return newData;
    });
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
