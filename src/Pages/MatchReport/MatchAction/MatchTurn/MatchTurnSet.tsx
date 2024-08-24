import { ColumnDef } from "@tanstack/react-table";
import { useContext, useMemo } from "react";
import { toast } from "react-toastify";
import { LI, UL } from "../../../../AbstractElements";
import { InputSelectConfirm } from "../../../../Component/InputSelect";
import { TanTable } from "../../../../Component/Tables/TanTable/TanTble";
import { N } from "../../../../name-conversion";
import { DMatchTurnTeam } from "../../../../type/enum";
import { TMartialArtTurnWithSet } from "../../../../type/martialArt";
import { TMatchTurn, TMatchTurnWithSet } from "../../../../type/matchTurn";
import { TurnSetContext, TurnSetProvider } from "./turnSetContext";
import { ITurnSetProvider } from "./type";

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
      const { matchTurnSetsUpdate } = useContext(TurnSetContext);
      const handleUpdateMatchTurn = (
        matchTurn: TMatchTurnWithSet | TMartialArtTurnWithSet
      ) => {
        console.log({ handleUpdateMatchTurn: matchTurn });
        const { id, sets } = matchTurn;
        const matchTurnSubmit = {
          id,
          sets,
        };
        matchTurnSetsUpdate(
          matchTurnSubmit as (typeof matchTurnSetsUpdate.arguments)[0]
        )
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

interface IMatchTurnSet {
  showTurn?: boolean;
}

const MatchTurnSet = ({ showTurn }: IMatchTurnSet) => {
  const { cols, matchTurnWithSets } = useContext(TurnSetContext);
  console.log({ matchTurnWithSets });

  const columns = useMemo(() => {
    if (!showTurn) {
      return [
        // ...displayColumns.slice(0, -1),
        ...cols,
        displayColumns[displayColumns.length - 1],
      ];
    }
    return [
      ...displayColumns.slice(0, -1),
      ...cols,
      displayColumns[displayColumns.length - 1],
    ];
    // return [...displayColumns.slice(0, -1), ...cols, displayColumns[-1]];
  }, [cols, showTurn]);

  return (
    <div className="table-responsive">
      <TanTable
        data={matchTurnWithSets}
        columns={columns}
        getRowId={_getRowId}
      />
    </div>
  );
};

const MatchTurnSetWrapper = (props: ITurnSetProvider & IMatchTurnSet) => {
  const { showTurn } = props;
  return (
    <TurnSetProvider {...props}>
      <MatchTurnSet showTurn={showTurn} />
    </TurnSetProvider>
  );
};

export { MatchTurnSetWrapper as MatchTurnSet };
