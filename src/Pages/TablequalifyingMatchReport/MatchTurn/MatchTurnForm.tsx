import { ColumnDef } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { LI, UL } from "../../../AbstractElements";
import { confirmModal } from "../../../Component/confirmModal";
import { TanTable } from "../../../Component/Tables/TanTable/TanTble";
import { useMatchTurnContext } from "../../../features/matchTurn/context";
import { N } from "../../../name-conversion";
import { TMatchTurn } from "../../../type/matchTurn";
interface IMatchTurnForm {
  match_id: string;

  matchTurn?: TMatchTurn;
  onSubmit: (v: TMatchTurn) => void;
  onCancel?: () => void;
}
const displayColumns: ColumnDef<TMatchTurn>[] = [
  {
    accessorKey: "indexs",
    footer: (props) => props.column.id,
    header: N["indexs"],
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
      const { matchTurnUpdate, updateMatchTurn } = useMatchTurnContext();
      const handleUpdateMatchTurn = (matchTurn: TMatchTurn) => {
        console.log({ handleUpdateMatchTurn: matchTurn });
        matchTurnUpdate(matchTurn)
          .then((res) => {
            const { status } = res;
            if (status === 200) {
              toast.success(N["success"]);
              updateMatchTurn(matchTurn);
              return;
            }

            return Promise.reject(status);
          })
          .catch((err) => {
            toast.error(N["error"]);
            console.log({ err });
          });
      };

      // const {
      //   handleToggle: handleToggleUpdateModal,
      //   UserModal: UserUpdateModal,
      // } = useUserModal({
      //   onSubmit: handleUpdateMatchTurn,
      //   user: matchTurn,
      // });

      const handleConfirmDel = async () => {
        const { confirm } = await confirmModal();
        if (confirm) {
          userDelete(matchTurn.id)
            .then((res) => {
              const { status, data } = res;
              console.log({ status, data });
              if (status === 200) {
                toast.success(t("success"));
                deleteUser(matchTurn.id);
                return;
              }
            })
            .catch((err) => {
              toast.error(t("error"));
              console.log({ err });
            });
        }
        return;
      };

      return (
        <UL className="action simple-list flex-row" id={matchTurn.id}>
          {/* <LI className="edit btn" onClick={handleToggleUpdateModal}>
          <i className="icon-pencil-alt" />
          <UserUpdateModal />
        </LI> */}
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

export const MatchTurnForm = ({
  matchTurn: initMatchTurn,
  onSubmit,
  onCancel,
}: IMatchTurnForm) => {
  const setReport: Partial<TMatchTurn> = initMatchTurn
    ? initMatchTurn
    : {
        match_id: "",
        name: "",
        indexs: 0,
        set_count: 0,
        win_set_count: 0,
      };

  const { matchTurns } = useMatchTurnContext();

  const [data, setData] = useState<TMatchTurn[]>([]);
  useEffect(() => {
    setData(matchTurns);
  }, [matchTurns]);

  return (
    <div className="table-responsive">
      <TanTable
        data={data}
        columns={displayColumns}
        onSelectedRowsChange={onSelectedRowsChange}
        selectableRowSelected={selectableRowSelected}
        getRowId={(r) => r.id}
      />
    </div>
  );
};
