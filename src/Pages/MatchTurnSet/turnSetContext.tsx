import { ColumnDef } from "@tanstack/react-table";
import { createContext, useCallback, useEffect, useState } from "react";
import { N } from "../../name-conversion";
import {
  qualifyingMatchTurnSetGet,
  qualifyingMatchTurnSetUpdate,
} from "../../Service/matchTurn";
import { ETable } from "../../type/enum";
import { TMartialArtSet, TMartialArtTurnWithSet } from "../../type/martialArt";
import { TTablequalifyingMatch } from "../../type/tablequalifyingMatch";
import { ITurnSetContext, ITurnSetProvider } from "./type";

const TurnSetContext = createContext<ITurnSetContext>({
  isEditing: false,
  sets: [],

  // setMatchTurn: () => {},
  setSets: () => {},
  matchTurn: {} as TMartialArtTurnWithSet,
  match: {} as TTablequalifyingMatch,
  insertNewSet: () => {},
  removeSet: () => {},
  cols: [],
  matchTurnSetsGet: () =>
    Promise.resolve({} as ReturnType<typeof qualifyingMatchTurnSetGet>),
  matchTurnSetsUpdate: () =>
    Promise.resolve({} as ReturnType<typeof qualifyingMatchTurnSetUpdate>),
  updateSet: () => {},
  startEdit: () => {},
  finishEdit: () => {},
});

const TurnSetProvider = ({
  children,
  matchTurnSetsUpdate,
  matchTurnSetsGet,
  matchTurn,
  tableType,
  match,
}: ITurnSetProvider) => {
  const [isEditing, setIsEditing] = useState(false);
  const [cols, setCols] = useState<ColumnDef<TMartialArtSet>[]>([]);
  const [sets, setSets] = useState<TMartialArtSet[]>([]);
  // const [matchTurn, setMatchTurn] = useState(initMatchTurn);
  // useEffect(() => {
  //   setMatchTurn(initMatchTurn);
  // }, [initMatchTurn]);
  console.log({ ITurnSetProviderTableType: tableType, matchTurnSetsUpdate });

  const startEdit = useCallback(() => {
    setIsEditing(true);
  }, []);

  const finishEdit = useCallback(() => {
    setIsEditing(false);
  }, []);

  useEffect(() => {
    setCols(() => {
      if (!sets?.length) return [];
      const numSets = sets?.length;
      if (!numSets) return [];
      // const newCols: ColumnDef<TMartialArtTurnWithSet>[] = [];

      const team1col: ColumnDef<TMartialArtSet> = {
        accessorKey: `team1_point`,
        footer: (props) => props.column.id,
        header: N["team1_point"],
        id: `team1_point`,
      };
      const team2col: ColumnDef<TMartialArtSet> = {
        accessorKey: `team2_point`,
        footer: (props) => props.column.id,
        header: N["team2_point"],
        id: `team2_point`,
      };
      const noteCol: ColumnDef<TMartialArtSet> = {
        accessorKey: `note`,
        footer: (props) => props.column.id,
        header: N["note"],
        id: `note`,
      };
      const columns = [team1col, team2col, noteCol];
      if (tableType === ETable.MARTIALART) {
        const team1_minus_point: ColumnDef<TMartialArtSet> = {
          accessorKey: `team1_minus_point`,
          footer: (props) => props.column.id,
          header: N["team1_minus_point"],
          id: `team1_minus_point`,
        };
        const team1_plus_point: ColumnDef<TMartialArtSet> = {
          accessorKey: `team1_plus_point`,
          footer: (props) => props.column.id,
          header: N["team1_plus_point"],
          id: `team1_plus_point`,
        };
        const team2_minus_point: ColumnDef<TMartialArtSet> = {
          accessorKey: `team2_minus_point`,
          footer: (props) => props.column.id,
          header: N["team2_minus_point"],
          id: `team2_minus_point`,
        };
        const team2_plus_point: ColumnDef<TMartialArtSet> = {
          accessorKey: `team2_plus_point`,
          footer: (props) => props.column.id,
          header: N["team2_plus_point"],
          id: `team2_plus_point`,
        };
        columns.push(
          team1_plus_point,
          team1_minus_point,
          team2_plus_point,
          team2_minus_point
        );
      }
      // newCols.push({
      //   header: `Séc ${numCol + 1}`,
      //   footer: (props) => props.column.id,
      //   columns,
      // });

      return columns;
    });
  }, [tableType, sets]);

  const insertNewSet = useCallback(() => {
    console.log("insertNewTempSet");
    setSets((prev) => {
      const newSet: TMartialArtSet = {
        team1_point: 0,
        team2_point: 0,
        note: "",
        editable: true,
      } as TMartialArtSet;
      if (tableType === ETable.MARTIALART)
        Object.assign(newSet, {
          team1_plus_point: 0,
          team1_minus_point: 0,
          team2_plus_point: 0,
          team2_minus_point: 0,
        });
      return [...prev, newSet];
    });
  }, [tableType]);

  useEffect(() => {
    console.log({ TurnSetProvider: matchTurn });
    if (matchTurn)
      (async () => {
        matchTurnSetsGet(matchTurn.id).then((res) => {
          const { data } = res;
          if (data?.length) {
            setSets(data as TMartialArtSet[]);
          }
        });
      })();
  }, [matchTurn, matchTurnSetsGet]);

  const removeSet = useCallback((index: number) => {
    setSets((prev) => {
      const newSets = [...prev];
      newSets.splice(index, 1);
      return newSets;
    });
  }, []);

  const updateSet = useCallback((idx: number, set: TMartialArtSet) => {
    setSets((prev) => {
      const newSets = [...prev];
      newSets[idx] = set;
      return newSets;
    });
  }, []);

  return (
    <TurnSetContext.Provider
      value={{
        setSets,
        cols,
        sets,
        isEditing,
        startEdit,
        finishEdit,
        insertNewSet,
        updateSet,
        removeSet,
        matchTurnSetsGet,
        matchTurnSetsUpdate,
        matchTurn,
        match,
        tableType,
      }}
    >
      {children}
    </TurnSetContext.Provider>
  );
};

export { TurnSetContext, TurnSetProvider };
