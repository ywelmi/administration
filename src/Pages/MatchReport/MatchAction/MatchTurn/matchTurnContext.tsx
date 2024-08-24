import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  qualifyingMatchTurnCreate,
  qualifyingMatchTurnsGet,
} from "../../../../Service/matchTurn";
import { TMatchTurn } from "../../../../type/matchTurn";
import { IMatchTurnContext, IMatchTurnQuery } from "./type";

const MatchTurnContext = createContext<IMatchTurnContext>({
  matchId: "",
  setMatchId: () => {},
  matchTurns: [],

  matchTurnCreate: () =>
    Promise.resolve({} as ReturnType<typeof qualifyingMatchTurnCreate>),
  matchTurnsGet: () =>
    Promise.resolve({} as ReturnType<typeof qualifyingMatchTurnsGet>),
  matchTurnUpdate: () =>
    Promise.resolve({} as ReturnType<typeof qualifyingMatchTurnCreate>),
  matchTurnDel: () =>
    Promise.resolve({} as ReturnType<typeof qualifyingMatchTurnCreate>),
  updateMatchTurn: () => {},
  createMatchTurn: () => {},
  delMatchTurn: () => {},
});

export interface IMatchTurnProvider extends PropsWithChildren, IMatchTurnQuery {
  matchId: string;
}

// const _combineMatchTurnsAndSets = (matchTurns: TMatchTurn[], sets: []) => {
//   return [] as TMatchTurnWithSet[];
// };

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

  // const matchTurnsWithSets = useMemo<TMatchTurnWithSet[]>(() => {
  //   return _combineMatchTurnsAndSets(matchTurns, []);
  // }, [matchTurns]);

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
