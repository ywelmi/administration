import { ColumnDef } from "@tanstack/react-table";
import omit from "lodash/omit";
import { useCallback, useMemo } from "react";
import { toast } from "react-toastify";
import { Button, Col } from "reactstrap";
import { Btn, LI, UL } from "../../../../../AbstractElements";
import { confirmModal } from "../../../../../Component/confirmModal";
import { InputSelectConfirm } from "../../../../../Component/InputSelect";
import { TanTable } from "../../../../../Component/Tables/TanTable/TanTble";
import { N } from "../../../../../name-conversion";
import { DMatchTurnTeam } from "../../../../../type/enum";
import { TMatchTurn, TMatchTurnWithSet } from "../../../../../type/matchTurn";
import { getUniqueId } from "../../../../../utils/id";
import { useMatchTurnContext } from "../matchTurnContext";
// import { TurnSetProvider, } from "./turnSetContext";

const PREF_TMP_ID = "matchTurn";

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
      const handleUpdateMatchTurnWithSets = (matchTurn: TMatchTurnWithSet) => {
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

      const { insertNewSet } = useMatchTurnContext();

      const {
        matchTurnUpdate,
        updateMatchTurn,
        matchTurnCreate,
        createMatchTurn,
        matchTurnDel,
        delMatchTurn,
      } = useMatchTurnContext();

      const handleUpdateMatchTurn = (matchTurn: TMatchTurnWithSet) => {
        console.log({ handleUpdateMatchTurn: matchTurn });
        if (matchTurn?.id.includes(PREF_TMP_ID)) {
          // new match turn
          console.log({ insertMatchTurn: matchTurn });
          const matchTurnToCreate = omit(matchTurn, ["id", "sets"]);
          matchTurnCreate(matchTurnToCreate)
            .then((res) => {
              const { status, data } = res;
              if (status === 200) {
                toast.success(N["success"]);
                createMatchTurn(data);
                handleUpdateMatchTurnWithSets({ ...matchTurn, ...data });
                console.log({ createMatchTurn: data });
              }
            })
            .catch((err) => {
              toast.error(err?.data ? err.data : N["error"]);
              console.log({ err });
            });
          return;
        } else {
          // update existed match turn
          console.log({ updateMatchTurn: matchTurn });
          const matchTurnToUpdate = omit(matchTurn, ["sets"]);
          matchTurnUpdate(matchTurnToUpdate)
            .then((res) => {
              const { status } = res;
              if (status === 200) {
                toast.success(N["success"]);
                updateMatchTurn(matchTurnToUpdate);
                handleUpdateMatchTurnWithSets(matchTurn);
                console.log({ updateMatchTurn: matchTurn });
              }
            })
            .catch((err) => {
              toast.error(N["error"]);
              console.log({ err });
            });
        }
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
          <LI className="edit btn" onClick={() => insertNewSet(matchTurn.id)}>
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
          <LI className="delete btn" onClick={handleConfirmDel}>
            <i className="icon-trash cursor-pointer" />
          </LI>
        </UL>
      );
    },
  },
];

const _getRowId = (r: TMatchTurn) => r.id;
// const PREF_TMP_ID = "matchTurn";

const MatchTurnWithSets = () => {
  const { cols, matchTurnWithSets } = useMatchTurnContext();

  const columns = useMemo(() => {
    return [
      ...displayColumns.slice(0, -1),
      ...cols,
      displayColumns[displayColumns.length - 1],
    ];
    // return [...displayColumns.slice(0, -1), ...cols, displayColumns[-1]];
  }, [cols]);

  const { matchId, createMatchTurn } = useMatchTurnContext();

  // const [data, setData] = useState<TMatchTurn[]>(matchTurns || []);

  // // console.log({ MatchTurnFormMatchTurns: matchTurns });
  // useEffect(() => {
  //   console.log({ changematchTurns: matchTurns });
  //   setData(matchTurns);
  // }, [matchTurns]);

  const insertNewTempMatchTurn = useCallback(() => {
    console.log("insertNewTempRow");
    const newRowId = getUniqueId(PREF_TMP_ID);
    const newMatchTurn: TMatchTurn = {
      id: newRowId,
      match_id: matchId,
      name: "",
      indexs: 0,
      set_count: 0,
      win_set_count: 0,
    };
    createMatchTurn(newMatchTurn);
  }, [matchId, createMatchTurn]);

  return (
    <div className="table-responsive">
      <Button onClick={insertNewTempMatchTurn}>Thêm mới</Button>
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

// const MatchTurnWithSetsWrapper = () => {
//   return (
//     <TurnSetProvider>
//       <MatchTurnWithSets />
//     </TurnSetProvider>
//   );
// };

export { MatchTurnWithSets as MatchTurnWithSetsWrapper };
