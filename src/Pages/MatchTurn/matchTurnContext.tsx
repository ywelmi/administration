import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  qualifyingMatchTurnCreate,
  qualifyingMatchTurnsGet,
} from "../../Service/matchTurn";
import { ETable } from "../../type/enum";
import { TMatchTurnResult } from "../../type/matchTurn";
import { TTablequalifyingMatch } from "../../type/tablequalifyingMatch";
import { IMatchTurnContext, IMatchTurnQuery } from "./type";

const MatchTurnContext = createContext<IMatchTurnContext>({
  match: {} as TTablequalifyingMatch,
  matchId: "",
  setMatchId: () => {},
  matchTurns: [],
  tableType: {} as ETable,

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
  match: TTablequalifyingMatch;
  matchId: string;
  tableType: ETable;
}

const MatchTurnProvider = ({
  children,
  matchId: initMatchId = "",
  match,
  matchTurnCreate: matchTurnCreate,
  matchTurnsGet,
  matchTurnUpdate,
  matchTurnDel,
  tableType,
}: IMatchTurnProvider) => {
  const [matchId, setMatchId] = useState(initMatchId);
  useEffect(() => {
    setMatchId(initMatchId);
  }, [initMatchId]);
  const [matchTurns, setMatchTurns] = useState<TMatchTurnResult[]>([]);

  const fetchMatchTurns = useCallback(async () => {
    return matchTurnsGet()
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
        return data;
      })
      .catch((err) => {
        console.log({ err });
      });
  }, [matchTurnsGet]);

  useEffect(() => {
    fetchMatchTurns();
  }, [fetchMatchTurns]);

  const updateMatchTurn = useCallback((matchTurn: TMatchTurnResult) => {
    setMatchTurns((prev) => {
      return [...prev.map((m) => (m.id === matchTurn.id ? matchTurn : m))];
    });
  }, []);

  const createMatchTurn = useCallback((matchTurn: TMatchTurnResult) => {
    console.log({ createMatchTurn: matchTurn });
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
        match,
        setMatchId,
        matchTurns,
        fetchMatchTurns,
        tableType,
      }}
    >
      {children}
    </MatchTurnContext.Provider>
  );
};

export interface IMatchTurnWrapper extends IMatchTurnProvider {}

const MatchTurnWrapper = ({ children, ...rest }: IMatchTurnWrapper) => {
  return <MatchTurnProvider {...rest}>{children}</MatchTurnProvider>;
};

export { MatchTurnContext, MatchTurnProvider, MatchTurnWrapper };
