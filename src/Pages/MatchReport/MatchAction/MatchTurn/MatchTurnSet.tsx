import { ColumnDef } from "@tanstack/react-table";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { toast } from "react-toastify";
import { Col } from "reactstrap";
import { Btn, LI, UL } from "../../../../AbstractElements";
import { InputSelectConfirm } from "../../../../Component/InputSelect";
import { DefaultColumn } from "../../../../Component/Tables/TanTable/Column";
import { TanTable } from "../../../../Component/Tables/TanTable/TanTble";
import { N } from "../../../../name-conversion";
import { knockoutMatchTurnSetGet } from "../../../../Service/matchTurn";
import { DMatchTurnTeam } from "../../../../type/enum";
import {
  TMatchTurn,
  TMatchTurnWithSet,
  TTurnSet,
} from "../../../../type/matchTurn";
import { useMatchTurnContext } from "./matchTurnContext";

interface ITurnSetContext {
  matchTurnWithSets: TMatchTurnWithSet[];
  insertRowSet: (rid: string) => void;
  cols: ColumnDef<TMatchTurnWithSet>[];
}

const TurnSetContext = createContext<ITurnSetContext>({
  matchTurnWithSets: [],
  insertRowSet: () => {},
  cols: [],
});

const TurnSetProvider = ({ children }: PropsWithChildren) => {
  const { matchTurns, matchTurnSetsGet } = useMatchTurnContext();
  const [data, setData] = useState<TMatchTurnWithSet[]>([]);
  const [cols, setCols] = useState<ColumnDef<TMatchTurnWithSet>[]>([]);

  useEffect(() => {
    setCols(() => {
      if (!data?.length) return [];
      const numSets = data[0].sets?.length;
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
  }, [data]);

  const insertNewSet = useCallback((rid: string) => {
    console.log("form insertNewTempSet");
    setData((prev) => {
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
    console.log({ data });
  }, [data]);

  useEffect(() => {
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
            sets.push(newSet);
          }
        }
        return { ...t, sets };
      });
      console.log({ generalizeMatchTurnsWithSets: matchTurnsWithSets });
      setData(matchTurnsWithSets);
    })();
  }, [matchTurns]);

  return (
    <TurnSetContext.Provider
      value={{ cols, matchTurnWithSets: data, insertRowSet: insertNewSet }}
    >
      {children}
    </TurnSetContext.Provider>
  );
};

const displayColumns: ColumnDef<TMatchTurnWithSet>[] = [
  {
    header: "Trận",
    columns: [
      {
        accessorKey: "indexs",
        footer: (props) => props.column.id,
        header: "Trận số",
        cell: ({ getValue }) => getValue() as string,
      },
      {
        accessorKey: "name",
        footer: (props) => props.column.id,
        header: N["name"],
        cell: ({ getValue, row: { index }, column: { id }, table }) => {
          // return getValue() as string
          return (
            <InputSelectConfirm
              name="name"
              data={DMatchTurnTeam.map((t) => ({ k: t, v: t }))}
              k={"k"}
              v={"v"}
              placeHolder={getValue() as string}
              handleChange={(e) => {
                table.options.meta?.updateData(index, id, e.target.value);
              }}
            ></InputSelectConfirm>
          );
        },
      },
      {
        accessorKey: "set_count",
        footer: (props) => props.column.id,
        header: N["set_count"],
        cell: ({ getValue }) => getValue() as string,
      },
      {
        accessorKey: "win_set_count",
        footer: (props) => props.column.id,
        header: N["win_set_count"],
        cell: ({ getValue }) => getValue() as string,
      },
    ],
  },
  {
    id: "actions",
    header: "#",
    cell: function Action({
      row: { index, original: matchTurn },
      column: { id },
      table,
    }) {
      const { matchTurnSetsUpdate } = useMatchTurnContext();
      const handleUpdateMatchTurn = (matchTurn: TMatchTurnWithSet) => {
        console.log({ handleUpdateMatchTurn: matchTurn });
        const { id, sets } = matchTurn;
        const matchTurnSubmit = {
          id,
          sets: sets.map(({ team1_point, team2_point, note }) => ({
            team1_point,
            team2_point,
            note,
          })),
        };
        matchTurnSetsUpdate(matchTurnSubmit)
          .then((res) => {
            const { status, data } = res;
            if (status === 200) {
              toast.success(N["success"]);
              console.log({ qualifyingMatchTurnSetUpdate: data });
            }
          })
          .catch((err) => {
            toast.error(err?.data ? err.data : N["failed"]);
          });
      };

      // const handleConfirmDel = async () => {
      //   const { confirm } = await confirmModal();
      //   if (confirm) {
      //     console.log({ deleteMatchTurnId: matchTurn.id });
      //     const matchId = matchTurn.id;
      //     if (matchId.includes(PREF_TMP_ID)) {
      //       table.options.meta?.removeData(index);
      //     } else
      //       matchTurnDel(matchId)
      //         .then((res) => {
      //           const { status, data } = res;
      //           console.log({ matchTurnDel: data });
      //           if (status === 200) {
      //             toast.success(N["success"]);
      //             return;
      //           }
      //         })
      //         .catch((err) => {
      //           toast.error(N["error"]);
      //           console.log({ err });
      //         })
      //         .finally(() => delMatchTurn(matchId));
      //   }
      //   return;
      // };

      const { insertRowSet } = useContext(TurnSetContext);
      return (
        <UL className="action simple-list flex-row" id={matchTurn.id}>
          <LI className="edit btn" onClick={() => insertRowSet(matchTurn.id)}>
            <i className="icon-pencil cursor-pointer" />
            Thêm séc
          </LI>
          <LI
            className="edit btn"
            onClick={() => handleUpdateMatchTurn(matchTurn)}
          >
            <i className="icon-signal cursor-pointer" />
            Lưu
          </LI>
          {/* <LI className="delete btn" onClick={handleConfirmDel}>
            <i className="icon-trash cursor-pointer" />
          </LI> */}
        </UL>
      );
    },
  },
];

const _getRowId = (r: TMatchTurn) => r.id;
// const PREF_TMP_ID = "matchTurn";

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

const MatchTurnSet = () => {
  const { cols, matchTurnWithSets } = useContext(TurnSetContext);

  const columns = useMemo(() => {
    return [
      ...displayColumns.slice(0, -1),
      ...cols,
      displayColumns[displayColumns.length - 1],
    ];
    // return [...displayColumns.slice(0, -1), ...cols, displayColumns[-1]];
  }, [cols]);

  return (
    <div className="table-responsive">
      {/* <Button onClick={insertNewSet}>Thêm séc</Button> */}
      <TanTable
        data={matchTurnWithSets}
        columns={columns}
        // onSelectedRowsChange={onSelectedRowsChange}
        // selectableRowSelected={selectableRowSelected}
        getRowId={_getRowId}
      />
      <Col xs="12" className="gap-2" style={{ display: "flex" }}>
        <Btn color="primary" type="button">
          Xác nhận
        </Btn>
      </Col>
    </div>
  );
};

const MatchTurnSetWrapper = () => {
  console.log("MatchTurnSetWrapper");
  return (
    <TurnSetProvider>
      <MatchTurnSet />
    </TurnSetProvider>
  );
};

export { MatchTurnSetWrapper as MatchTurnSet };
