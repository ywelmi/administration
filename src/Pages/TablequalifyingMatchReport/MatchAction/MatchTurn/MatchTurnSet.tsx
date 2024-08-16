import { ColumnDef } from "@tanstack/react-table";
import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { Button, Col } from "reactstrap";
import { Btn, LI, UL } from "../../../../AbstractElements";
import { confirmModal } from "../../../../Component/confirmModal";
import { TanTable } from "../../../../Component/Tables/TanTable/TanTble";
import { N } from "../../../../name-conversion";
import { qualifyingMatchTurnSetGet } from "../../../../Service/matchTurn";
import {
  TMatchTurn,
  TMatchTurnWithSet,
  TTurnSet,
} from "../../../../type/matchTurn";
import { useMatchTurnContext } from "./context";

const displayColumns: ColumnDef<TMatchTurn>[] = [
  {
    accessorKey: "indexs",
    footer: (props) => props.column.id,
    header: N["indexs"],
    // cell: ({ getValue }) => getValue() as string,
  },
  {
    accessorKey: "name",
    footer: (props) => props.column.id,
    header: N["name"],
  },
  {
    accessorKey: "set_count",
    footer: (props) => props.column.id,
    header: N["set_count"],
  },
  {
    accessorKey: "win_set_count",
    footer: (props) => props.column.id,
    header: N["win_set_count"],
  },
  {
    id: "actions",
    header: "#",
    cell: function Action({
      row: { index, original: matchTurn },
      column: { id },
      table,
    }) {
      const {
        matchTurnUpdate,
        updateMatchTurn,
        matchTurnCreate,
        createMatchTurn,
        matchTurnDel,
        delMatchTurn,
      } = useMatchTurnContext();
      const handleUpdateMatchTurn = (matchTurn: TMatchTurn) => {
        console.log({ handleUpdateMatchTurn: matchTurn });
        // if (matchTurn?.id.includes(PREF_TMP_ID)) {
        //   console.log({ insertMatchTurn: matchTurn });
        //   const matchNoId = omit(matchTurn, ["id"]);
        //   matchTurnCreate(matchNoId)
        //     .then((res) => {
        //       const { status, data } = res;
        //       if (status === 200) {
        //         toast.success(N["success"]);
        //         createMatchTurn(data);
        //         console.log({ createMatchTurn: data });
        //       }
        //     })
        //     .catch((err) => {
        //       toast.error(err?.data ? err.data : N["error"]);
        //       console.log({ err });
        //     });
        //   return;
        // } else {
        //   console.log({ updateMatchTurn: matchTurn });
        //   matchTurnUpdate(matchTurn)
        //     .then((res) => {
        //       const { status } = res;
        //       if (status === 200) {
        //         toast.success(N["success"]);
        //         updateMatchTurn(matchTurn);
        //         console.log({ updateMatchTurn: matchTurn });
        //         // return;
        //       }

        //       // return Promise.reject(status);
        //     })
        //     .catch((err) => {
        //       toast.error(N["error"]);
        //       console.log({ err });
        //     });
        // }
      };

      const handleConfirmDel = async () => {
        const { confirm } = await confirmModal();
        if (confirm) {
          console.log({ deleteMatchTurnId: matchTurn.id });
          const matchId = matchTurn.id;
          if (matchId.includes(PREF_TMP_ID)) {
            table.options.meta?.removeData(index);
          } else
            matchTurnDel(matchId)
              .then((res) => {
                const { status, data } = res;
                console.log({ matchTurnDel: data });
                if (status === 200) {
                  toast.success(N["success"]);
                  return;
                }
              })
              .catch((err) => {
                toast.error(N["error"]);
                console.log({ err });
              })
              .finally(() => delMatchTurn(matchId));
        }
        return;
      };

      return (
        <UL className="action simple-list flex-row" id={matchTurn.id}>
          <LI className="delete btn" onClick={handleConfirmDel}>
            <i className="icon-trash cursor-pointer" />
          </LI>
          <LI
            className="edit btn"
            onClick={() => handleUpdateMatchTurn(matchTurn)}
          >
            <i className="icon-signal cursor-pointer" />
            Lưu
          </LI>
        </UL>
      );
    },
  },
];

const _getRowId = (r: TMatchTurn) => r.id;
const PREF_TMP_ID = "matchTurn";

const _fetchFulMatchTurnsWithSets = async (
  matchTurns: TMatchTurn[]
): Promise<TMatchTurnWithSet[]> => {
  return Promise.all(
    matchTurns.map((turn) =>
      qualifyingMatchTurnSetGet(turn.id).then((res) => {
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

export const MatchTurnSet = () => {
  const { matchTurns, matchId } = useMatchTurnContext();

  const [data, setData] = useState<TMatchTurnWithSet[]>([]);

  const [cols, setCols] = useState<ColumnDef<TMatchTurnWithSet>[]>([]);
  // console.log({ MatchTurnFormMatchTurns: matchTurns });
  useEffect(() => {
    console.log({ MatchTurnSetChangematchTurns: matchTurns });
    (async () => {
      const matchTurnsWithSets = await _fetchFulMatchTurnsWithSets(
        matchTurns
      ).catch((err) => {
        toast.error(err?.data ? err.data : N["failed"]);
      });
      console.log({ matchTurnsWithSets });
      if (matchTurnsWithSets) setData(matchTurnsWithSets);
    })();
  }, [matchTurns]);

  const insertNewSet = useCallback(() => {
    console.log("insertNewTempSet");
    setData((prev) => {
      // return [...prev];

      return prev.map((d) => {
        let { sets } = d;
        if (!sets) {
          sets = [];
        }
        const newSet: TTurnSet = { team1_point: 0, team2_point: 0, note: "" };
        return { ...d, sets: [...sets, newSet] };
      });
    });

    setCols((prev) => {
      const numCol = prev.length;
      const newCol1: ColumnDef<TMatchTurnWithSet> = {
        accessorKey: `sets.${numCol}.team1_point`,
        footer: (props) => props.column.id,
        header: N["team1_point"],
      };
      const newCol2: ColumnDef<TMatchTurnWithSet> = {
        accessorKey: `sets.${numCol}.team2_point`,
        footer: (props) => props.column.id,
        header: N["team2_point"],
      };
      return [...prev, newCol1, newCol2];
    });
  }, []);

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
      <Button onClick={insertNewSet}>Thêm séc</Button>
      <TanTable
        data={data}
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
