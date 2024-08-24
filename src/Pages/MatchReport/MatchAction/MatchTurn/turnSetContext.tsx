import { ColumnDef } from "@tanstack/react-table";
import { createContext, useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { DefaultColumn } from "../../../../Component/Tables/TanTable/Column";
import { N } from "../../../../name-conversion";
import {
  knockoutMatchTurnSetGet,
  qualifyingMatchTurnSetGet,
  qualifyingMatchTurnSetUpdate,
} from "../../../../Service/matchTurn";
import { ETable } from "../../../../type/enum";
import { TMartialArtTurnWithSet } from "../../../../type/martialArt";
import { TTurnSet } from "../../../../type/matchTurn";
import { ITurnSetContext, ITurnSetProvider } from "./type";

const TurnSetContext = createContext<ITurnSetContext>({
  matchTurnWithSets: [],
  insertRowSet: () => {},
  cols: [],
  matchTurnSetsGet: () =>
    Promise.resolve({} as ReturnType<typeof qualifyingMatchTurnSetGet>),
  matchTurnSetsUpdate: () =>
    Promise.resolve({} as ReturnType<typeof qualifyingMatchTurnSetUpdate>),
});

const TurnSetProvider = ({
  children,
  matchTurnSetsUpdate,
  matchTurnSetsGet,
  matchTurns,
  tableType,
}: ITurnSetProvider) => {
  // const { matchTurns } = useMatchTurnContext();
  const [data, setData] = useState<TMartialArtTurnWithSet[]>([]);
  const [cols, setCols] = useState<ColumnDef<TMartialArtTurnWithSet>[]>([]);

  useEffect(() => {
    setCols(() => {
      if (!data?.length) return [];
      const numSets = data[0].sets?.length;
      console.log({ numSets });
      if (!numSets) return [];
      const newCols: ColumnDef<TMartialArtTurnWithSet>[] = [];
      for (let numCol = 0; numCol < numSets; numCol++) {
        const team1col: ColumnDef<TMartialArtTurnWithSet> = {
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
        const team2col: ColumnDef<TMartialArtTurnWithSet> = {
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
        const noteCol: ColumnDef<TMartialArtTurnWithSet> = {
          accessorKey: `sets.${numCol}.note`,
          footer: (props) => props.column.id,
          header: N["note"],
          id: `sets.${numCol}.note`,
          cell: (props) => {
            const set = props.row.original.sets[numCol];
            return set?.editable ? <DefaultColumn {...props} /> : set.note;
          },
        };
        const columns = [team1col, team2col, noteCol];
        if (tableType === ETable.MARTIALART) {
          const team1_minus_point: ColumnDef<TMartialArtTurnWithSet> = {
            accessorKey: `sets.${numCol}.team1_minus_point`,
            footer: (props) => props.column.id,
            header: N["team1_minus_point"],
            id: `sets.${numCol}.team1_minus_point`,
            cell: (props) => {
              const set = props.row.original.sets[numCol];
              return set?.editable ? (
                <DefaultColumn {...props} />
              ) : (
                set.team1_minus_point
              );
            },
          };
          const team1_plus_point: ColumnDef<TMartialArtTurnWithSet> = {
            accessorKey: `sets.${numCol}.team1_plus_point`,
            footer: (props) => props.column.id,
            header: N["team1_plus_point"],
            id: `sets.${numCol}.team1_plus_point`,
            cell: (props) => {
              const set = props.row.original.sets[numCol];
              return set?.editable ? (
                <DefaultColumn {...props} />
              ) : (
                set.team1_plus_point
              );
            },
          };
          const team2_minus_point: ColumnDef<TMartialArtTurnWithSet> = {
            accessorKey: `sets.${numCol}.team2_minus_point`,
            footer: (props) => props.column.id,
            header: N["team2_minus_point"],
            id: `sets.${numCol}.team2_minus_point`,
            cell: (props) => {
              const set = props.row.original.sets[numCol];
              return set?.editable ? (
                <DefaultColumn {...props} />
              ) : (
                set.team2_minus_point
              );
            },
          };
          const team2_plus_point: ColumnDef<TMartialArtTurnWithSet> = {
            accessorKey: `sets.${numCol}.team2_plus_point`,
            footer: (props) => props.column.id,
            header: N["team2_plus_point"],
            id: `sets.${numCol}.team2_plus_point`,
            cell: (props) => {
              const set = props.row.original.sets[numCol];
              return set?.editable ? (
                <DefaultColumn {...props} />
              ) : (
                set.team2_plus_point
              );
            },
          };
          columns.push(
            team1_plus_point,
            team1_minus_point,
            team2_plus_point,
            team2_minus_point
          );
        }
        newCols.push({
          header: `Séc ${numCol + 1}`,
          footer: (props) => props.column.id,
          columns,
        });
      }
      return newCols;
    });
  }, [data, tableType]);

  const insertNewSet = useCallback(
    (rid: string) => {
      console.log("insertNewTempSet");
      setData((prev) => {
        const idx = prev.findIndex((r) => r.id === rid);
        if (idx === -1) return prev;

        let isInsertingNewSet = false;
        const newSet: TTurnSet = {
          team1_point: 0,
          team2_point: 0,
          note: "",
          editable: true,
        };
        if (tableType === ETable.MARTIALART)
          Object.assign(newSet, {
            team1_plus_point: 0,
            team1_minus_point: 0,
            team2_plus_point: 0,
            team2_minus_point: 0,
          });
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
          isInsertingNewSet = true;
          return { ...t, sets: [...sets, newSet] };
        });
        if (!isInsertingNewSet) return newData;
        return newData.map((d, i) => {
          if (i === idx) return d;
          const { sets } = d;
          newSet.editable = false;
          return { ...d, sets: [...sets, newSet] };
        });
      });
    },
    [tableType]
  );

  useEffect(() => {
    if (matchTurns)
      (async () => {
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
              if (tableType === ETable.MARTIALART)
                Object.assign(newSet, {
                  team1_plus_point: 0,
                  team1_minus_point: 0,
                  team2_plus_point: 0,
                  team2_minus_point: 0,
                });
              sets.push(newSet);
            }
          }
          return { ...t, sets };
        });
        console.log({ generalizeMatchTurnsWithSets: matchTurnsWithSets });
        setData(matchTurnsWithSets);
      })();
  }, [matchTurns, matchTurnSetsGet]);

  return (
    <TurnSetContext.Provider
      value={{
        cols,
        matchTurnWithSets: data,
        insertRowSet: insertNewSet,
        matchTurnSetsGet,
        matchTurnSetsUpdate,
      }}
    >
      {children}
    </TurnSetContext.Provider>
  );
};

const _fetchFulMatchTurnsWithSets = async (
  matchTurns: TMartialArtTurnWithSet[],
  matchTurnSetsGet: typeof knockoutMatchTurnSetGet
): Promise<TMartialArtTurnWithSet[]> => {
  return Promise.all(
    matchTurns.map((turn) =>
      matchTurnSetsGet(turn.id).then((res) => {
        const { status, data } = res;
        console.log({ matchTurnSetsGetData: data });
        if (status === 200)
          return {
            ...turn,
            sets: data,
            // sets: data.map(({ team1_point, team2_point, note }) => ({
            //   team1_point,
            //   team2_point,
            //   note,
            // })),
          } as TMartialArtTurnWithSet;

        console.log({ err: { status, data } });
        return Promise.reject();
      })
    )
  );
};

export { TurnSetContext, TurnSetProvider };
