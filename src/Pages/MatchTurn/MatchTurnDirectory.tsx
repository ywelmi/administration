import { ColumnDef } from "@tanstack/react-table";
import omit from "lodash/omit";
import {
  forwardRef,
  PropsWithChildren,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { toast } from "react-toastify";
import { Button, Col } from "reactstrap";
import { Btn, LI, UL } from "../../AbstractElements";
import { confirmModal } from "../../Component/confirmModal";
import { InputSelectConfirm } from "../../Component/InputSelect";
import {
  ITanTableRef,
  TanTable,
} from "../../Component/Tables/TanTable/TanTble";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { N } from "../../name-conversion";
import { useSportStore } from "../../store/sport";
import { getMatchTurnTeam } from "../../type/enum";
import { TMatchTurn, TMatchTurnResult } from "../../type/matchTurn";
import { getUniqueId } from "../../utils/id";
import { useMatchTurnContext } from "./hook";

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
    cell: function Cell({ getValue, row: { index }, column: { id }, table }) {
      const { sports } = useSportStore();
      const selectedSportId = localStorage.getItem("selectedSportId") as string;
      const selectedSport = sports.find((s) => s.id == selectedSportId);
      if (!selectedSport) return <></>;
      return (
        <InputSelectConfirm
          name="name"
          data={getMatchTurnTeam(selectedSport.code).map((t) => ({
            k: t,
            v: t,
          }))}
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
          console.log({ insertMatchTurn: matchTurn, matchTurnCreate });
          const matchNoId = omit(matchTurn, ["id"]);
          matchTurnCreate(matchNoId)
            .then((res) => {
              const { status, data } = res;
              console.log({ status, data });
              if (status === 200) {
                toast.success(N["success"]);
                createMatchTurn(data as TMatchTurnResult);
                table.options.meta?.updateData(index, id, data);
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
                  delMatchTurn(matchTurn.id);
                  return;
                }
              })
              .catch((err) => {
                toast.error(N["error"]);
                console.log({ err });
              })
              .finally(() => table.options.meta?.removeData(index));
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

export const MatchTurnDirectoryForm = ({
  // matchTurn,
  // onSubmit,
  onCancel,
}: IMatchTurnForm) => {
  const { matchTurns, matchId } = useMatchTurnContext();

  const [data, setData] = useState<TMatchTurn[]>([]);
  // const [data, setData] = useState<TMatchTurn[]>(matchTurns || []);

  // console.log({ MatchTurnFormMatchTurns: matchTurns });
  useEffect(() => {
    console.log({ MatchTurnDirectoryFormChangematchTurns: matchTurns });
    setData(matchTurns);
  }, [matchTurns]);

  const insertNewTempRow = useCallback(() => {
    console.log("insertNewTempRow");
    setData(() => {
      const prev = tableRef.current?.getData();
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
      if (!prev) return [newRow];
      return [...prev, newRow];
    });
  }, [matchId]);

  const tableRef = useRef<ITanTableRef<TMatchTurn>>(null);

  return (
    <div className="table-responsive">
      <Button onClick={insertNewTempRow}>Thêm mới</Button>
      <TanTable
        ref={tableRef}
        data={data}
        columns={displayColumns}
        // onSelectedRowsChange={onSelectedRowsChange}
        // selectableRowSelected={selectableRowSelected}
        getRowId={_getRowId}
      />
      <Col xs="12" className="gap-2" style={{ display: "flex" }}>
        {/* <Btn color="primary" type="button">
          Xác nhận
        </Btn> */}
        {onCancel ? (
          <Btn color="primary" type="button" onClick={onCancel}>
            Đóng
          </Btn>
        ) : null}
      </Col>
    </div>
  );
};

export interface IMatchTurnDirectoryModal
  extends IMatchTurnForm,
    PropsWithChildren {
  onClose?: () => void;
}

export interface IMatchTurnDirectoryModalProps {
  open: () => void;
  close: () => void;
  toggle: () => void;
}

const MatchTurnDirectoryModal = forwardRef<
  IMatchTurnDirectoryModalProps,
  IMatchTurnDirectoryModal
>(({ onClose }: IMatchTurnDirectoryModal, ref) => {
  const [opened, setOpened] = useState(false);

  const handleToggle = useCallback(() => {
    setOpened((s) => {
      s && onClose && onClose();
      return !s;
    });
    // onClose?.();
  }, [onClose]);

  useImperativeHandle<
    IMatchTurnDirectoryModalProps,
    IMatchTurnDirectoryModalProps
  >(
    ref,
    () => ({
      toggle: handleToggle,
      close: () => setOpened(false),
      open: () => setOpened(true),
    }),
    [handleToggle]
  );

  return (
    <CommonModal
      backdrop="static"
      modalBodyClassName="social-profile text-start"
      isOpen={opened}
      toggle={handleToggle}
      title="Trận đấu nhỏ"
    >
      <MatchTurnDirectoryForm
        // onSubmit={handleSubmit}
        onCancel={handleToggle}
      />
    </CommonModal>
  );
});

export { MatchTurnDirectoryModal };
