import { ColumnDef } from "@tanstack/react-table";
import omit from "lodash/omit";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Col } from "reactstrap";
import { Btn, LI, UL } from "../../../../AbstractElements";
import { confirmModal } from "../../../../Component/confirmModal";
import { TanTable } from "../../../../Component/Tables/TanTable/TanTble";
import { N } from "../../../../name-conversion";
import { TMatchTurn } from "../../../../type/matchTurn";
import { getUniqueId } from "../../../../utils/id";
import { useMatchTurnContext } from "./context";

interface IMatchTurnForm {
  onCancel?: () => void;
}
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
        if (matchTurn?.id.includes(PREF_TMP_ID)) {
          console.log({ insertMatchTurn: matchTurn });
          const matchNoId = omit(matchTurn, ["id"]);
          matchTurnCreate(matchNoId)
            .then((res) => {
              const { status, data } = res;
              if (status === 200) {
                toast.success(N["success"]);
                createMatchTurn(data);
                console.log({ createMatchTurn: data });
              }
            })
            .catch((err) => {
              toast.error(err?.data ? err.data : N["error"]);
              console.log({ err });
            });
          return;
        } else {
          console.log({ updateMatchTurn: matchTurn });
          matchTurnUpdate(matchTurn)
            .then((res) => {
              const { status } = res;
              if (status === 200) {
                toast.success(N["success"]);
                updateMatchTurn(matchTurn);
                console.log({ updateMatchTurn: matchTurn });
                // return;
              }

              // return Promise.reject(status);
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

export const MatchTurnForm = ({
  // matchTurn,
  // onSubmit,
  onCancel,
}: IMatchTurnForm) => {
  const { matchTurns, matchId } = useMatchTurnContext();

  const [data, setData] = useState<TMatchTurn[]>(matchTurns || []);

  // console.log({ MatchTurnFormMatchTurns: matchTurns });
  useEffect(() => {
    console.log({ changematchTurns: matchTurns });
    setData(matchTurns);
  }, [matchTurns]);

  const insertNewTempRow = useCallback(() => {
    console.log("insertNewTempRow");
    setData((prev) => {
      console.log({ prev });
      const newRowId = getUniqueId(PREF_TMP_ID);
      const newRow: TMatchTurn = {
        id: newRowId,
        match_id: matchId,
        name: "",
        indexs: 0,
        set_count: 0,
        win_set_count: 0,
      };
      console.log({ newRow });
      return [...prev, newRow];
    });
  }, [matchId]);

  return (
    <div className="table-responsive">
      <Button onClick={insertNewTempRow}>Thêm mới</Button>
      <TanTable
        data={data}
        columns={displayColumns}
        // onSelectedRowsChange={onSelectedRowsChange}
        // selectableRowSelected={selectableRowSelected}
        getRowId={_getRowId}
      />
      <Col xs="12" className="gap-2" style={{ display: "flex" }}>
        <Btn color="primary" type="button">
          Xác nhận
        </Btn>
        {onCancel ? (
          <Btn color="primary" type="button" onClick={onCancel}>
            Đóng
          </Btn>
        ) : null}
      </Col>
    </div>
  );
};
