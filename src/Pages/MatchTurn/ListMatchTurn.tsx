import { ColumnDef } from "@tanstack/react-table";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { Btn, LI, UL } from "../../AbstractElements";
import { InputSelectConfirm } from "../../Component/InputSelect";
import { TanTable } from "../../Component/Tables/TanTable/TanTble";
import { HocModal, IHocModalRef } from "../../Component/Ui-Kits/Modal/HocModal";
import { confirmModal } from "../../Component/confirmModal";
import { N } from "../../name-conversion";
import { DMatchTurnTeam, ETable } from "../../type/enum";
import { TMatchTurnResult } from "../../type/matchTurn";
import { MatchTurnSetWrapper } from "../MatchTurnSet";
import {
  IMatchTurnDirectoryModalProps,
  MatchTurnDirectoryModal,
} from "./MatchTurnDirectory";
import { useMatchTurnContext } from "./hook";

const PREF_TMP_ID = "matchTurn";
// interface IListMatchTurn {
//   matchId: string;
// }

const displayColumns: ColumnDef<TMatchTurnResult>[] = [
  {
    accessorKey: "indexs",
    footer: (props) => props.column.id,
    header: N["indexs"],
    cell: ({ getValue }) => getValue() as string,
  },
  {
    accessorKey: "team1_set_win_count",
    footer: (props) => props.column.id,
    header: function Header() {
      const { match } = useMatchTurnContext();
      return (
        <p>
          {N["team1_set_win_count"]}
          <br />
          {match?.team1_name}
        </p>
      );
    },
    cell: ({ getValue }) => getValue() as string,
  },
  {
    accessorKey: "team2_set_win_count",
    footer: (props) => props.column.id,
    header: function Header() {
      const { match } = useMatchTurnContext();
      return (
        <p>
          {N["team2_set_win_count"]}
          <br />
          {match?.team2_name}
        </p>
      );
    },
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
      const { matchTurnDel, delMatchTurn } = useMatchTurnContext();

      // const handleUpdateMatchTurn = (matchTurn: TMatchTurnResult) => {
      //   console.log({ handleUpdateMatchTurn: matchTurn });
      //   if (matchTurn?.id.includes(PREF_TMP_ID)) {
      //     console.log({ insertMatchTurn: matchTurn, matchTurnCreate });
      //     const matchNoId = omit(matchTurn, ["id"]);
      //     matchTurnCreate(matchNoId)
      //       .then((res) => {
      //         const { status, data } = res;
      //         console.log({ status, data });
      //         if (status === 200) {
      //           toast.success(N["success"]);
      //           createMatchTurn(data);
      //           delMatchTurn(matchTurn.id);
      //           console.log({ createMatchTurn: data });
      //         }
      //       })
      //       .catch((err) => {
      //         toast.error(err?.data ? err.data : N["error"]);
      //         console.log({ err });
      //       });
      //     return;
      //   } else {
      //     console.log({ updateMatchTurn: matchTurn });
      //     matchTurnUpdate(matchTurn)
      //       .then((res) => {
      //         const { status } = res;
      //         if (status === 200) {
      //           toast.success(N["success"]);
      //           updateMatchTurn(matchTurn);
      //           console.log({ updateMatchTurn: matchTurn });
      //           // return;
      //         }
      //         // return Promise.reject(status);
      //       })
      //       .catch((err) => {
      //         toast.error(N["error"]);
      //         console.log({ err });
      //       });
      //   }
      // };

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

      const setModalRef = useRef<IHocModalRef>(null);

      return (
        <UL className="action simple-list flex-row" id={matchTurn.id}>
          <LI className="delete btn" onClick={handleConfirmDel}>
            <i className="icon-trash cursor-pointer" />
            Xóa
          </LI>
          <LI
            className="edit btn"
            onClick={() => setModalRef.current?.handleToggle()}
          >
            <i className="icon-signal cursor-pointer" />
            Nhập séc
            <HocModal title="Séc đấu" ref={setModalRef}>
              <MatchTurnSetWrapper
                tableType={ETable.QUALIFYING}
                matchTurns={
                  // { id: tablequalifyingKnockoutMatchReport.id } as TMatchTurn,
                  // matchTurns
                  [matchTurn]
                }
              />
            </HocModal>
          </LI>
        </UL>
      );
    },
  },
];

const ListMatchTurn = () => {
  const matchTurnDirectoryRef = useRef<IMatchTurnDirectoryModalProps>(null);
  const { matchTurns, fetchMatchTurns } = useMatchTurnContext();

  const [data, setData] = useState<TMatchTurnResult[]>(matchTurns || []);

  const openMatchTurnDirectoryModal = () => {
    matchTurnDirectoryRef.current?.open();
  };

  return (
    <>
      <TanTable
        data={data}
        columns={displayColumns}
        // onSelectedRowsChange={onSelectedRowsChange}
        // selectableRowSelected={selectableRowSelected}
        getRowId={(row) => row.id}
      />
      <Btn color="primary" type="button" onClick={openMatchTurnDirectoryModal}>
        Cập nhật trận
      </Btn>
      {/* <MatchTurnDirectoryPopover target="MatchTurnDirectoryPopover">
        <Button id="MatchTurnDirectoryPopover">Thêm trận</Button>
      </MatchTurnDirectoryPopover> */}
      <MatchTurnDirectoryModal
        onClose={() => fetchMatchTurns().then((d) => setData(d))}
        ref={matchTurnDirectoryRef}
      ></MatchTurnDirectoryModal>
    </>
  );
};

const useListMatchTurn = () => {};

export { ListMatchTurn, useListMatchTurn };
