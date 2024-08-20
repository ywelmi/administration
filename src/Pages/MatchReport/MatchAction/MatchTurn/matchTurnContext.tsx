import { ColumnDef } from "@tanstack/react-table";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  knockoutMatchTurnCreate,
  knockoutMatchTurnDelete,
  knockoutMatchTurnSetGet,
  knockoutMatchTurnSetUpdate,
  knockoutMatchTurnUpdate,
  qualifyingMatchTurnCreate,
  qualifyingMatchTurnDelete,
  qualifyingMatchTurnSetGet,
  qualifyingMatchTurnSetUpdate,
  qualifyingMatchTurnsGet,
  qualifyingMatchTurnUpdate,
} from "../../../../Service/matchTurn";
import {
  TMatchTurn,
  TMatchTurnWithSet,
  TTurnSet,
} from "../../../../type/matchTurn";

import { toast } from "react-toastify";
import { DefaultColumn } from "../../../../Component/Tables/TanTable/Column";
import { N } from "./../../../../name-conversion";
// import { useMatchTurnContext } from "./matchTurnContext";

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
  matchTurnSetsUpdate:
    | typeof knockoutMatchTurnSetUpdate
    | typeof qualifyingMatchTurnSetUpdate;
  matchTurnSetsGet:
    | typeof knockoutMatchTurnSetGet
    | typeof qualifyingMatchTurnSetGet;
}

interface IMatchTurnContext extends IMatchTurnQuery {
  matchId: string;
  setMatchId: (id: string) => void;
  matchTurns: TMatchTurn[];
  updateMatchTurn: (m: TMatchTurn) => void;
  createMatchTurn: (m: TMatchTurn) => void;
  delMatchTurn: (id: string) => void;
  matchTurnWithSets: TMatchTurnWithSet[];
  insertNewSet: (rid: string) => void;
  cols: ColumnDef<TMatchTurnWithSet>[];
}

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
  matchTurnSetsGet: () =>
    Promise.resolve({} as ReturnType<typeof qualifyingMatchTurnSetGet>),
  updateMatchTurn: () => {},
  createMatchTurn: () => {},
  delMatchTurn: () => {},
  matchTurnSetsUpdate: () =>
    Promise.resolve({} as ReturnType<typeof qualifyingMatchTurnSetUpdate>),
  matchTurnWithSets: [],
  insertNewSet: () => {},
  cols: [],
});

export interface IMatchTurnProvider extends PropsWithChildren, IMatchTurnQuery {
  matchId: string;
}

const _fetchFulMatchTurnsWithSets = async (
  matchTurns: TMatchTurn[],
  matchTurnSetsGet: typeof knockoutMatchTurnSetGet
): Promise<TMatchTurnWithSet[]> => {
  return Promise.all(
    matchTurns.map((turn) =>
      matchTurnSetsGet(turn.id).then((res) => {
        const { status, data } = res;
        if (status === 200)
          return {
            ...turn,
            sets: data.map(({ team1_point, team2_point, note }) => ({
              team1_point,
              team2_point,
              note,
            })),
          } as TMatchTurnWithSet;

        console.log({ err: { status, data } });
        return Promise.reject();
      })
    )
  );
};

const MatchTurnProvider = ({
  children,
  matchId: initMatchId = "",
  matchTurnCreate: matchTurnCreate,
  matchTurnsGet,
  matchTurnUpdate,
  matchTurnDel,
  matchTurnSetsUpdate,
  matchTurnSetsGet,
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

  const [matchTurnWithSets, setMatchTurnWithSets] = useState<
    TMatchTurnWithSet[]
  >([]);
  const [cols, setCols] = useState<ColumnDef<TMatchTurnWithSet>[]>([]);

  useEffect(() => {
    setCols(() => {
      if (!matchTurnWithSets?.length) return [];
      const numSets = matchTurnWithSets[0].sets?.length;
      if (!numSets) return [];
      const newCols: ColumnDef<TMatchTurnWithSet>[] = [];
      for (let numCol = 0; numCol < numSets; numCol++) {
        const team1col: ColumnDef<TMatchTurnWithSet> = {
          accessorKey: `sets.${numCol}.team1_point`,
          footer: (props) => props.column.id,
          header: N["team1_point"],
          id: `sets.${numCol}.team1_point`,
          cell: (props) => {
            const set = props.row.original.sets[numCol];
            return set?.editable ? (
              <DefaultColumn {...props} />
            ) : (
              set.team1_point
            );
          },
        };
        const team2col: ColumnDef<TMatchTurnWithSet> = {
          accessorKey: `sets.${numCol}.team2_point`,
          footer: (props) => props.column.id,
          header: N["team2_point"],
          id: `sets.${numCol}.team2_point`,
          cell: (props) => {
            const set = props.row.original.sets[numCol];
            return set?.editable ? (
              <DefaultColumn {...props} />
            ) : (
              set.team2_point
            );
          },
        };
        const noteCol: ColumnDef<TMatchTurnWithSet> = {
          accessorKey: `sets.${numCol}.note`,
          footer: (props) => props.column.id,
          header: N["note"],
          id: `sets.${numCol}.note`,
          cell: (props) => {
            const set = props.row.original.sets[numCol];
            return set?.editable ? <DefaultColumn {...props} /> : set.note;
          },
        };
        newCols.push({
          header: `Séc ${numCol + 1}`,
          footer: (props) => props.column.id,
          columns: [team1col, team2col, noteCol],
        });
      }
      return newCols;
    });
  }, [matchTurnWithSets]);

  const insertNewSet = useCallback((rid: string) => {
    console.log("context insertNewTempSet");
    setMatchTurnWithSets((prev) => {
      const idx = prev.findIndex((r) => r.id === rid);
      if (idx === -1) return prev;

      let isInsertingNewSet = false;
      const newData = prev.map((t, i) => {
        if (i !== idx) return t;
        const { sets } = t;

        for (let setIdx = 0; setIdx < sets.length; setIdx++) {
          if (!sets[setIdx]?.editable) {
            sets[setIdx].editable = true;
            return { ...t, sets };
          }
        }
        // add new set
        const newSet: TTurnSet = {
          team1_point: 0,
          team2_point: 0,
          note: "",
          editable: true,
        };
        isInsertingNewSet = true;
        return { ...t, sets: [...sets, newSet] };
      });
      if (!isInsertingNewSet) return newData;
      return newData.map((d, i) => {
        if (i === idx) return d;
        const { sets } = d;
        const newSet: TTurnSet = {
          team1_point: 0,
          team2_point: 0,
          note: "",
          editable: false,
        };
        return { ...d, sets: [...sets, newSet] };
      });
    });
  }, []);

  useEffect(() => {
    console.log({ matchTurnWithSets });
  }, [matchTurnWithSets]);

  useEffect(() => {
    (async () => {
      console.log("before _fetchFulMatchTurnsWithSets");
      let matchTurnsWithSets = await _fetchFulMatchTurnsWithSets(
        matchTurns,
        matchTurnSetsGet
      ).catch((err) => {
        toast.error(err?.data ? err.data : N["failed"]);
      });
      if (!matchTurnsWithSets) return;
      console.log({ matchTurnsWithSets });
      let _maxNumSets = 0;
      matchTurnsWithSets.forEach((s) => {
        const len = s.sets?.length;
        if (len && len > _maxNumSets) _maxNumSets = len;
      });
      // setMaxNumSets(_maxNumSets);

      matchTurnsWithSets = matchTurnsWithSets.map((t) => {
        let { sets } = t;
        if (!sets) {
          sets = [];
        }
        sets = sets.map((s) => ({ ...s, editable: true })); // old sets
        if (sets.length < _maxNumSets) {
          // temp sets
          for (let i = sets.length; i < _maxNumSets; i++) {
            const newSet: TTurnSet = {
              team1_point: 0,
              team2_point: 0,
              note: "",
              editable: false,
            };
            sets.push(newSet);
          }
        }
        return { ...t, sets };
      });
      console.log({ generalizeMatchTurnsWithSets: matchTurnsWithSets });
      setMatchTurnWithSets(matchTurnsWithSets);
    })();
  }, [matchTurns]);

  return (
    <MatchTurnContext.Provider
      value={{
        cols,
        insertNewSet: insertNewSet,
        matchTurnCreate,
        matchTurnsGet,
        matchTurnUpdate,
        matchTurnWithSets,
        matchTurnDel,
        updateMatchTurn,
        createMatchTurn,
        delMatchTurn,
        matchId,
        setMatchId,
        matchTurns,
        matchTurnSetsUpdate,
        matchTurnSetsGet,
        // matchTurnsWithSets,
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
